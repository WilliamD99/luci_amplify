import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ChatRenderer from "./ChatRenderer";
import EditorMain from "./EditorMain";
import { UserDataContext } from "@/app/dms/[id]/client";
import { convertDateTimezone } from "@/utils/utils";

export interface ChatContentType {
  date: string;
  content: {
    content: string;
    createdAt: string;
    id: string;
    identifier: string;
    receiver: string;
    relationshipId: string;
    updatedAt?: string;
    files?: string;
  }[];
}

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { messages }: any = useContext(UserDataContext);

  const [chatContent, setChatContent] = useState<ChatContentType[]>(messages);
  const [files, setFiles] = useState<{ path: string; index: number }[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Because the editor object only available to components nested inside the EditorContent
    // So I decided to trigger the onClick event of the submit btn
    // sendBtnRef.current?.click();
  };

  const appendChat = (e: any, date: string) => {
    let temp = [...chatContent];
    // When users dont have any chat history
    if (temp.length === 0) {
      console.log("No chat history");
      temp.push({
        date: convertDateTimezone(),
        content: [e],
      });
      setChatContent(temp);
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current?.scrollHeight,
        behavior: "smooth",
      });
      setFiles([]);
      return;
    }

    let index = temp.findIndex((ele) => ele.date === date);

    if (index !== -1) {
      console.log("Chat history exists, but different date");
      temp[index].content.push(e);
    } else {
      console.log("Chat history exists, but same date");
      temp.push({
        date: convertDateTimezone(),
        content: [e],
      });
    }
    setChatContent(temp);

    scrollAreaRef.current?.scrollTo({
      top: scrollAreaRef.current?.scrollHeight,
      behavior: "smooth",
    });
    setFiles([]);
    return;
  };

  return (
    <>
      <form
        // onSubmit={handleSubmit}
        ref={formRef}
        className="h-full w-full relative chat-form"
      >
        <ChatRenderer
          content={chatContent}
          cb={appendChat}
          ref={scrollAreaRef}
        />
        <div className="chat_layout--input relative">
          <EditorMain
            btnRef={sendBtnRef}
            cb={appendChat}
            files={files}
            setFiles={setFiles}
          />
        </div>
      </form>
    </>
  );
}
