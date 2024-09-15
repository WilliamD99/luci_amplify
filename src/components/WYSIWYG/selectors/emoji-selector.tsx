import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

import dynamic from "next/dynamic";
import { useEditor } from "novel";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
// import EmojiPicker from "../components/EmojiPicker";
const EmojiPicker = dynamic(() => import("../components/EmojiPicker"), {
  ssr: false,
});

export default function EmojiSelector() {
  const [open, setOpen] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { editor } = useEditor();

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target;
    if (target == btnRef.current) {
      setOpen(!open);
    }
  };

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(false);
  };

  const handleEmojiPicker = (e: string) => {
    editor?.chain().insertContent(e).run();
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            className="p-2 rounded-md ml-2 relative"
            variant="ghost"
            type="button"
            onClick={toggleModal}
            ref={btnRef}
          >
            <FaceSmileIcon className="h-3 w-3 pointer-events-none" />
          </Button>
        </PopoverTrigger>
        <EmojiPicker setOpen={setOpen} cb={handleEmojiPicker} />
      </Popover>

      {open && (
        <div
          onClick={onClickOverlay}
          className="overlay h-screen cursor-default w-screen fixed top-0 bottom-0 z-50"
        ></div>
      )}
    </>
  );
}
