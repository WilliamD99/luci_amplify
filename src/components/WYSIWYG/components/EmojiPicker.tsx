import React from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { PopoverContent } from "@/components/ui/popover";

export default function EmojiPicker({
  setOpen,
  cb,
}: {
  setOpen: Function;
  cb?: Function;
}) {
  const handleAddEmoji = (e: any) => {
    if (cb) {
      cb(e.native);
    }
    setOpen(false);
  };

  return (
    <>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Picker
          data={data}
          onEmojiSelect={handleAddEmoji}
          emojiSize={20}
          perLine={8}
          skin={6}
        />
      </PopoverContent>
    </>
  );
}
