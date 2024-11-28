"use client";

import { Avatar } from "@/components/ui/avatar";
import WYSIWYG from "@/components/WYSIWYG";
import Image from "next/image";
import React from "react";

export default function Client() {
  return (
    <>
      <div className="chat_layout relative h-full">
        <div className="chat_layout--header flex items-center px-4 row-span-1">
          <button className="flex flex-row p-1 items-center space-x-2 rounded-md">
            <Avatar>
              <Image fill src="/astro.webp" alt="chat bot logo" />
            </Avatar>
            <p>AI Assistant</p>
            <span>
              {/* <ChevronDownIcon className="w-3 h-3 text-white" /> */}
            </span>
          </button>
        </div>
        <WYSIWYG />
      </div>
    </>
  );
}
