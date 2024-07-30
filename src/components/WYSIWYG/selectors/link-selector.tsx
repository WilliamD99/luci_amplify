import { useEditor } from "novel";
import { LinkIcon } from "@heroicons/react/24/solid";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export const LinkSelector = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { editor } = useEditor();

  // Dialog state
  const [open, setOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [inputLink, setInputLink] = useState<string>("#");

  const handleSubmit = () => {
    const isValidLink = isValidUrl(inputLink);
    if (!isValidLink) return;
    const link = {
      type: "text",
      text: inputText,
      marks: [
        {
          type: "link",
          attrs: {
            href: inputLink,
          },
        },
      ],
    };

    editor
      ?.chain()
      .setLink({ href: inputLink })
      .insertContent(inputText)
      .unsetMark("link")
      .insertContent(" ")
      .focus()
      .run();
    setOpen(false);
  };

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  });
  if (!editor) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          size="sm"
          className="p-2 rounded-md ml-2"
          variant="ghost"
          type="button"
        >
          <LinkIcon className="h-3 w-3" />
        </Button>
        <DialogContent id="link_modal">
          <DialogHeader>
            <DialogTitle className="mb-2">
              <p>Add Link</p>
            </DialogTitle>
            <div className="space-y-1 mb-1">
              <Label htmlFor="text">Text</Label>
              <Input
                id="text"
                type="text"
                placeholder="e.g: Google"
                className="link_modal--input"
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                type="url"
                placeholder="www.google.com"
                className="link_modal--input"
                onChange={(e) => setInputLink(e.target.value)}
              />
            </div>
          </DialogHeader>
          <div className="flex flex-row justify-end items-center mt-2 space-x-3">
            <Button
              className="cta cta_cancel"
              variant="ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className={`cta cta_add ${
                !(Boolean(inputText) || inputText !== "") && "disabled"
              } `}
              variant="ghost"
              disabled={!(Boolean(inputText) || inputText !== "")}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
