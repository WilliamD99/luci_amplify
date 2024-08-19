"use client";

import React, { createContext } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import WYSIWYG from "@/components/WYSIWYG";
import { StorageImage } from "@aws-amplify/ui-react-storage";

interface PageClientProps {
  receiver: any;
  sender: any;
  relationshipId: string;
  messages: {
    date: string;
    content: {
      id: string;
      content: string;
      identifier: string;
      receiver: string;
      relationshipId: string;
      createdAt: string;
      updatedAt: string;
    }[];
  }[];
}

export const UserDataContext = createContext({});

export default function PageClient({
  receiver,
  sender,
  relationshipId,
  messages,
}: PageClientProps) {
  const displayName =
    receiver.username && receiver.username !== ""
      ? receiver.username
      : receiver.email;
  console.log(messages);
  return (
    <>
      <UserDataContext.Provider
        value={{
          receiver,
          sender,
          relationshipId,
          messages,
        }}
      >
        <div className="chat_layout relative h-full">
          <div className="chat_layout--header flex items-center px-4 row-span-1">
            <button className="flex flex-row p-1 items-center space-x-2 rounded-md">
              <Avatar>
                <StorageImage
                  path={receiver.avatar ?? "/user_placeholder.jpg"}
                  fallbackSrc="/user_placeholder.jpg"
                  alt="avatar"
                />
              </Avatar>
              <p>{displayName}</p>
              <span>
                <ChevronDownIcon className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>
          <WYSIWYG />
        </div>
      </UserDataContext.Provider>
    </>
  );
}
