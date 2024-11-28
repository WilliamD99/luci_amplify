import { ScrollArea } from "@/components/ui/scroll-area";
import { databaseClient } from "@/utils/amplify-utils.client";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

  // Subscription to receive messages
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
  const { sender, receiver }: any = useContext(UserDataContext);
  const [content, setContent] = useState<ChatContentType>(contentItem);
  const handleUpdateMessage = (e: {
    chatId: string;
    count: number;
    content: string;
    identifier: string;
    receiver: string;
    type: string;
  }) => {
    let chatId = e.chatId;
    let count = e.count;
    let emoteContent = e.content;

    setContent((prev: ChatContentType) => {
      const chatContent = [...prev.content]; // Create a copy of the content array
      const messageIndex = chatContent.findIndex(
        (message: any) => message.id === chatId
      );
      if (messageIndex !== -1) {
        const selectedMessage = { ...chatContent[messageIndex] }; // Create a copy of the message
        const emoteList = selectedMessage.emotes;
        console.log(emoteList);
        // find the index of the emote
        const emoteIndex = emoteList.findIndex(
          (emote: any) => emote.content === emoteContent
        );

        if (emoteIndex !== -1) {
          // if the emote exists, update the count
          emoteList[emoteIndex].count = count;

          let type = e.type;
          if (type === "remove") {
            // if the type is remove, remove the user from the list
            emoteList[emoteIndex].users = emoteList[emoteIndex].users.filter(
              (user: any) => user.userId !== sender.id
            );
          } else {
            // if the type is add, add the user to the list
            emoteList[emoteIndex].users.push({
              chatEmoteId: `${chatId}${emoteContent}`,
              createdAt: new Date().toISOString(),
              id: `${chatId}${emoteContent}${Math.random()}`,
              userId: sender.id, // Replace with actual user ID
            });
          }
        } else {
          // if the emote does not exist, add it to the list
          emoteList.push({
            id: `${chatId}${emoteContent}`,
            content: emoteContent,
            count: count,
            users: Array.from({ length: count }).map(() => ({
              chatEmoteId: `${chatId}${emoteContent}`,
              createdAt: new Date().toISOString(),
              id: `${chatId}${emoteContent}${Math.random()}`,
              userId: "someUserId", // Replace with actual user ID
            })),
            createdAt: new Date().toISOString(),
            messageId: chatId,
          });
        }

        chatContent[messageIndex] = selectedMessage;
      }

      return { ...prev, content: chatContent };
    });
  };

  // Subscription to receive emotes
  useEffect(() => {
    const sub = databaseClient.subscriptions
      .receiveEmote({
        identifier: receiver.id,
        receiver: sender.id,
      })
      .subscribe({
        next: (e: any) => {
          console.log(e);
          handleUpdateMessage(e);
        },
        error: (e) => console.log(e),
      });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    setContent(contentItem);
  }, [contentItem]);

  return (
    <div ref={eleRef} className="h-full w-full">
      <div className="flex justify-center items-center chatbox--group">
        <span className="line"></span>
        <button className="group-btn px-4 py-1 rounded-3xl">
          <p className="text-sm">{formatDateString(contentItem.date)}</p>
        </button>
        <span className="line"></span>
      </div>
      {content.content.map((item) => (
        <ChatItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(forwardRef(ChatRenderer));
