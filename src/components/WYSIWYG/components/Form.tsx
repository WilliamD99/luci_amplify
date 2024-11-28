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
  content: ChatItemContent[];
}

export interface ChatItemContent {
  content: string;
  createdAt: string;
  id: string;
  identifier: string;
  receiver: string;
  relationshipId: string;
  updatedAt?: string;
  files?: string;
  emotes: {
    content: string;
    createdAt: string;
    updatedAt?: string;
    id: string;
    messageId: string;
    users: {
      chatEmoteId: string;
      createdAt?: string;
      updatedAt?: string;
      id: string;
      userId: string;
    }[];
    count?: number;
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
    setChatContent((prevChatContent) => {
      // Create a copy of the previous chat content
      let temp = [...prevChatContent];

      // Find the index of the entry with the given date
      const dateIndex = temp.findIndex((entry) => entry.date === date);

      if (dateIndex !== -1) {
        // If the date exists, push the new "e" to the content array
        temp[dateIndex].content.push(e);
      } else {
        // If the date doesn't exist, create a new entry
        temp.push({
          date: convertDateTimezone(),
          content: [e],
        });
      }

      // Scroll to the bottom of the chat area
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current?.scrollHeight,
        behavior: "smooth",
      });

      // Clear the files array
      setFiles([]);
      return temp;
    });
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
