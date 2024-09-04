import React from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import clsx from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEditor } from "novel";

export default function EmojiPicker({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const { editor } = useEditor();

  const handleAddEmoji = (e: any) => {
    editor?.chain().insertContent(e.native).run();
    setOpen(false);
  };

  return (
    <>
      <div
        id="emoji_modal"
        className={`emoji_modal relaive ${clsx(open && "active")}`}
      >
        <Picker
          data={data}
          onEmojiSelect={handleAddEmoji}
          emojiSize={20}
          perLine={8}
          skin={6}
        />
        <div className="absolute">
          <p>Test</p>
        </div>
      </div>
    </>
  );
}
