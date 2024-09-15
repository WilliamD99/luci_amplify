import { ScrollArea } from "@/components/ui/scroll-area";
import { databaseClient } from "@/utils/amplify-utils.client";
import React, { forwardRef, useContext, useEffect, useRef } from "react";

import { UserDataContext } from "@/app/dms/[id]/client";
import { convertDateTimezone, formatDateString } from "@/utils/utils";
import { ChatContentType } from "./Form";
import { Button } from "@/components/ui/button";
import ChatItem from "./ChatItem";

function ChatRenderer(
  {
    content,
    cb,
  }: {
    content: ChatContentType[];
    cb: (e: any, date: string) => void;
  },
  ref: any
) {
  const { sender, receiver }: any = useContext(UserDataContext);

  const handleReceivingMsg = (e: {
    content: string;
    identifer: string;
    receiver: string;
    createdAt?: string;
    files?: string;
  }) => {
    if (cb) {
      const currentDate = new Date();
      const formattedISODate = currentDate.toISOString();

      let temp = { ...e };
      temp["createdAt"] = formattedISODate;
      cb(temp, convertDateTimezone());
    }
  };

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current?.scrollHeight,
      behavior: "smooth",
    });
    const sub = databaseClient.subscriptions
      .receive({
        identifier: receiver.id,
        receiver: sender.id,
      })
      .subscribe({
        next: (e: any) => {
          handleReceivingMsg(e);
        },
        error: (e) => console.log(e),
      });

    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <ScrollArea className="chat_layout--content relative" ref={ref}>
        <div className="chatbox">
          {content.length === 0 && sender.id !== receiver.id && (
            <div className="flex py-5 px-6 h-full">
              <p className="text-gray-400">No messages yet.</p>
            </div>
          )}
          {/* If the sender is the same as the receiver, then display this message */}
          {sender.id === receiver.id && (
            <div className="flex flex-col space-y-2 px-6 py-4 h-full">
              <p className="text-gray-400">
                This is your space. Draft messages, list your to-dos, or keep
                files and links handy. You can talk to yourself here, but please
                bear in mind you'll have to supply both sides of the
                conversation.
              </p>
              <div className="flex flex-row space-x-4">
                <Button className="border-[1px] btn">Edit Profile</Button>
              </div>
            </div>
          )}
          {content.map((contentItem, index) => (
            <ChatItemByDate key={contentItem.date} contentItem={contentItem} />
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

let ChatItemByDate = ({ contentItem }: { contentItem: ChatContentType }) => {
  const eleRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={eleRef} className="h-full w-full">
      <div className="flex justify-center items-center chatbox--group">
        <span className="line"></span>
        <button className="group-btn px-4 py-1 rounded-3xl">
          <p className="text-sm">{formatDateString(contentItem.date)}</p>
        </button>
        <span className="line"></span>
      </div>
      {contentItem.content.map((item) => (
        <ChatItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(forwardRef(ChatRenderer));
