import React, { useState } from "react";
import {
  FaceSmileIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowUturnRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { databaseClient, handleReaction } from "@/utils/amplify-utils.client";
import EmojiPicker from "./EmojiPicker";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";

interface EmoteUserProps {
  chatEmoteId: string;
  createdAt: string;
  updatedAt?: string;
  id: string;
  userId: string;
}

export default function ChatItemUtils({
  userId,
  receiverId,
  messageId,
  emotes,
  addEmote,
}: {
  userId: string;
  receiverId: string;
  messageId: string;
  emotes: {
    content: string;
    createdAt: string;
    updatedAt?: string;
    id: string;
    messageId: string;
    users: EmoteUserProps[];
  }[];
  addEmote: (e: any) => void;
}) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);

  // If the selected emote's user list is empty, then create a new emote and add the user to it
  // If the selected emote's user list is not empty, then just need to add the user to its
  const handleEmote = async (e: string) => {
    setEmojiPickerOpen(false);
    addEmote((prev: any[]) => {
      // Find the selected emote (if it exists)
      let selectedEmote = prev?.find((emote) => emote.content === e);
      let id = `${messageId}${e}`;

      // If the selected emote does not exist, then create a new emote
      if (!selectedEmote) {
        let date = new Date().toISOString();
        databaseClient.mutations
          .addEmote({
            userId,
            messageId,
            content: e,
            date,
            id,
          })
          .catch((e) => console.error(e));

        databaseClient.mutations
          .addEmoteRelationship({
            chatEmoteId: id,
            userId,
            date,
          })
          .catch((e) => console.error(e));
        // Due to having some trouble with async function, I will just add the user to the chat emote here
        return [
          ...prev,
          {
            id,
            content: e,
            users: [
              {
                chatEmoteId: id,
                userId,
              },
            ],
          },
        ];
      } else {
        let userList = selectedEmote.users;
        // Find current user from the userList
        let currentUser = userList.find(
          (user: EmoteUserProps) => user.userId === userId
        );
        if (!currentUser) {
          // Add the current user to the ChatEmote
          // by adding a relationship between the user and the ChatEmote
          databaseClient.mutations
            .addEmoteRelationship({
              chatEmoteId: id,
              userId,
              date: new Date().toISOString(),
            })
            .catch((e) => console.error(e));
          // Add the current user to the userList
          userList = [
            ...userList,
            {
              chatEmoteId: id,
              userId,
            },
          ];
          // Update the ChatEmote's user list
          selectedEmote.users = userList;
        } else {
          // Remove the current user from the ChatEmote
          // by removing the relationship between the user and the ChatEmote
          databaseClient.models.UserEmote.delete({
            chatEmoteId: id,
            userId,
          }).catch((e) => console.error(e));
          // Filter out currentUser from the userList
          userList = userList.filter(
            (user: EmoteUserProps) => user.userId !== userId
          );
          // Update the ChatEmote's user list
          selectedEmote.users = userList;
        }
        // Check if user list is empty, then remove the ChatEmote
        if (selectedEmote.users.length === 0) {
          databaseClient.mutations
            .removeEmote({
              id,
            })
            .catch((e) => console.error(e));
          return [...prev.filter((emote) => emote.content !== e)];
        } else {
          const updatedEmotesUserList = prev.map((emote) =>
            emote.content === e ? selectedEmote : emote
          );
          return updatedEmotesUserList;
        }
      }
    });
  };

  return (
    <>
      <div className="chatbox--item__utils rounded-md grid grid-cols-4 overflow-hidden">
        <Popover open={emojiPickerOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="chatbox--item__utils--btn py-2 px-3"
              onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
            >
              <FaceSmileIcon className="icon h-4 w-4 text-white" />
            </button>
          </PopoverTrigger>
          <EmojiPicker setOpen={setEmojiPickerOpen} cb={handleEmote} />
        </Popover>

        <button className="chatbox--item__utils--btn py-2 px-3">
          <ChatBubbleLeftEllipsisIcon className="icon h-4 w-4 text-white" />
        </button>
        <button className="chatbox--item__utils--btn py-2 px-3">
          <ArrowUturnRightIcon className="icon h-4 w-4 text-white" />
        </button>
        <button className="chatbox--item__utils--btn py-2 px-3">
          <BookmarkIcon className="icon h-4 w-4 text-white" />
        </button>
      </div>
    </>
  );
}
