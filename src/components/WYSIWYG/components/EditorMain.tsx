import React, { createContext, useContext, useEffect, useState } from "react";
import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  JSONContent,
} from "novel";
import { handleCommandNavigation } from "novel/extensions";
// import { handleImagePaste } from "novel/plugins";
// import { uploadFn } from "../extension/image-upload";
import { defaultExtensions } from "../extension/extension";
import { slashCommand, suggestionItems } from "../extension/slash-command";
import SendBtn from "./SendBtn";
import { LinkSelector } from "../selectors/link-selector";
import { TextButtons } from "../selectors/text-buttons";
import FileUploadBtn from "../selectors/FileUpload";
import FileItem from "./FileItem";
import EmojiSelector from "../selectors/emoji-selector";

const extensions = [...defaultExtensions, slashCommand];

export interface FileContextProp {
  files?: { path: string; index: number }[];
  addFilesToChat?: Function;
}
export const filesContext = createContext<FileContextProp>({});

function EditorMain({
  btnRef,
  cb,
  files,
  setFiles,
}: {
  btnRef: React.RefObject<HTMLButtonElement>;
  cb?: (e: any, date: string) => void;
  files: { path: string; index: number }[];
  setFiles: Function;
}) {
  // const [files, setFiles] = useState<{ path: string; index: number }[]>([]);
  const [initialContent, setInitialContent] = useState<
    undefined | JSONContent
  >();

  const addFilesToChat = (e: string) => {
    let filesLength = files.length;

    setFiles((prev: { path: string; index: number }[]) => [
      ...prev,
      {
        path: e,
        index: filesLength + 1,
      },
    ]);
  };

  const removeFileState = (e: { path: string; index: number }) =>
    setFiles((prev: { path: string; index: number }[]) => [
      ...prev.filter((item) => item.index !== e.index),
    ]);

  return (
    <>
      <filesContext.Provider value={{ files, addFilesToChat }}>
        <EditorContent
          className="h-full relative editor"
          initialContent={initialContent}
          extensions={extensions}
          onUpdate={({ editor }) => {
            const json = editor.getJSON();
            setInitialContent(json);
          }}
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => {
                if (event.key === "Enter" && !event.ctrlKey) {
                  // Trigger the form submittion by hitting Enter
                  event.preventDefault();
                  btnRef.current?.click();
                  return true;
                }
                if (event.key === "Enter" && event.ctrlKey) {
                  // Allow the default behavior (new line)
                  return false;
                }
                return handleCommandNavigation(event);
              },
            },
            // handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
          }}
        >
          <EditorCommand className="z-50 editor_cmd h-auto max-h-[350px] overflow-y-auto rounded-md mb-2 px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  key={item.title}
                  className={`editor_cmd--item flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm cursor-pointer`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <div className="absolute top-0 editor_utils w-full flex flex-row pl-2 py-1">
            <TextButtons />
            <LinkSelector />
            <FileUploadBtn />
            <EmojiSelector />
          </div>
          <div className="editor_btm absolute bottom-2 flex flex-row space-x-2 pl-4 py-1">
            {files.map((item) => (
              <FileItem item={item} cb={removeFileState} key={item.path} />
            ))}
          </div>
          <SendBtn btnRef={btnRef} cb={cb} />
        </EditorContent>
      </filesContext.Provider>
    </>
  );
}

export default React.memo(EditorMain);
