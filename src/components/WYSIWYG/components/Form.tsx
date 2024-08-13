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

  const appendChat = useCallback(
    (e: any, date: string) => {
      let temp = [...chatContent];
      // When users dont have any chat history
      if (temp.length === 0) {
        temp.push({
          date: new Date().toDateString(),
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
        temp[index].content.push(e);
      } else {
        let today = new Date();

        temp.push({
          date: today.toDateString(),
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
    },
    [files, chatContent]
  );

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
