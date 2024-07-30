import React, { ChangeEvent, useContext, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";
import { useEditor } from "novel";
import { uploadFnWrapper } from "../extension/image-upload";
import { UserDataContext } from "@/app/dms/[id]/client";

export default function FileUploadBtn() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { editor } = useEditor();
  const { sender }: any = useContext(UserDataContext);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    let filesList = e.target.files;
    if (filesList) {
      let files = Array.from(filesList);

      if (editor?.view) {
        let pos = editor?.view.state.selection.from;
        uploadFnWrapper(files, editor?.view, pos, sender.id);
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => inputRef.current?.click()}
        size="sm"
        className="p-2 rounded-md ml-2"
        variant="ghost"
        type="button"
      >
        <PaperClipIcon className="h-3 w-3" />
      </Button>
      <Input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleUpload}
        className="hidden"
      />
    </>
  );
}
