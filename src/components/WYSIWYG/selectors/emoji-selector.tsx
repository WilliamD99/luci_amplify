import { Button } from "@/components/ui/button";
import React, { ReactEventHandler, useRef, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

import dynamic from "next/dynamic";
// import EmojiPicker from "../components/EmojiPicker";
const EmojiPicker = dynamic(() => import("../components/EmojiPicker"), {
  ssr: false,
});

export default function EmojiSelector() {
  const [open, setOpen] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target;
    if (target == btnRef.current) {
      setOpen(!open);
    }
  };

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size="sm"
        className="p-2 rounded-md ml-2 relative"
        variant="ghost"
        type="button"
        onClick={toggleModal}
        ref={btnRef}
      >
        <FaceSmileIcon className="h-3 w-3 pointer-events-none" />
        <EmojiPicker open={open} setOpen={setOpen} />
        {open && (
          <div
            onClick={onClickOverlay}
            className="overlay h-screen cursor-default w-screen fixed top-0 bottom-0 z-50"
          ></div>
        )}
      </Button>
    </>
  );
}
