"use client";

import React, { useEffect, useState } from "react";
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
  JSONContent,
} from "novel";
import { defaultEditorContent } from "./defaultContent";
import { defaultExtensions } from "./extension";

const extensions = [...defaultExtensions];

export default function WYSIWYG() {
  const [initialContent, setInitialContent] = useState<
    undefined | JSONContent
  >();

  useEffect(() => {
    const content = window.localStorage.getItem("novel-content");
    if (content) setInitialContent(JSON.parse(content));
    else setInitialContent(defaultEditorContent);
  }, []);

  return (
    <>
      <EditorRoot>
        <EditorContent
          className="h-full editor"
          initialContent={initialContent}
          extensions={extensions}
          onUpdate={({ editor }) => {
            const json = editor.getJSON();
            setInitialContent(json);
          }}
        ></EditorContent>
      </EditorRoot>
    </>
  );
}
