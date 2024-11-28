import React, { useContext, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar } from "@/components/ui/avatar";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import Link from "next/link";
import Markdown from "react-markdown";
import FileRenderer from "./FileRenderer";
import ChatItemUtils from "./ChatItemUtils";

import { convertToUserTimezone } from "@/utils/utils";
import { UserDataContext } from "@/app/dms/[id]/client";
import { ChatItemContent } from "./Form";
import EmoteList from "./EmoteList";

export default function ChatItem({ item }: { item: ChatItemContent }) {
  const { sender, receiver }: any = useContext(UserDataContext);
  const [emoteList, setEmoteList] = useState(item.emotes);
  // console.log(item);
  return (
    <>
      <div
        id={item.id}
        className="flex flex-row items-start py-4 px-6 space-x-3 chatbox--item"
      >
        <HoverCard>
          <HoverCardTrigger>
            {/* <Link href="#"> */}
            <Avatar className="avatar">
              {item.identifier === sender.id ? (
                <StorageImage
                  path={sender.avatar ?? "/user_placeholder.jpg"}
                  alt="avatar"
                  fallbackSrc="/user_placeholder.jpg"
                />
              ) : (
                <StorageImage
                  path={receiver.avatar ?? "/user_placeholder.jpg"}
                  alt="avatar"
                  fallbackSrc="/user_placeholder.jpg"
                />
              )}
            </Avatar>
            {/* </Link> */}
          </HoverCardTrigger>
          <HoverCardContent side="right">
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>

        <div className="space-y-1 content">
          <div className="col-span-4 flex flex-row items-center *: space-x-2">
            <Link href="#" className="font-bold name">
              {item.identifier === sender.id
                ? "You"
                : receiver.username ?? receiver.email}
            </Link>
            <p className="text-sm time">
              {convertToUserTimezone(item.createdAt)}
            </p>
          </div>

          <Markdown>{item.content}</Markdown>
          {item.files && item.files?.length > 0 && (
            <FileRenderer files={item.files} />
          )}

          {/* <EmoteList /> */}
          <EmoteList emotes={emoteList} />
        </div>

        <ChatItemUtils
          userId={sender.id}
          receiverId={receiver.id}
          messageId={item.id}
          addEmote={setEmoteList}
        />
      </div>
    </>
  );
}
