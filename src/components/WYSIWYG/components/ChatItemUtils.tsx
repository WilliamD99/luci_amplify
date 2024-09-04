import React, { useState } from "react";
import {
  FaceSmileIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowUturnRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { handleReaction } from "@/utils/amplify-utils.client";

export default function ChatItemUtils({
  userId,
  messageId,
}: {
  userId: string;
  messageId: string;
}) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);

  return (
    <>
      <div className="chatbox--item__utils rounded-md grid grid-cols-4 overflow-hidden">
        <button
          type="button"
          className="chatbox--item__utils--btn py-2 px-3"
          onClick={() => handleReaction(userId, messageId, "test")}
        >
          <FaceSmileIcon className="icon h-4 w-4 text-white" />
        </button>
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
