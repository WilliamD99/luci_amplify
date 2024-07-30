"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TabsContent } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import SearchContent from "./SearchContent";
import Link from "next/link";
import { FriendListType } from ".";
import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function DmTabContent({
  friendList,
}: {
  friendList: FriendListType[] | { message: string };
}) {
  const initialState: FriendListType[] = Array.isArray(friendList)
    ? friendList
    : [];

  const [list, setList] = useState<FriendListType[]>(initialState);

  return (
    <>
      <TabsContent
        value="dms"
        className="dms_content relative flex flex-col space-y-2 w-full"
      >
        <div className="px-2 pb-2 space-y-2">
          <p className="font-bold">Friend List</p>
          <SearchContent />
        </div>
        <span className="block divider h-[1px] w-full border-t-[1px]" />
        {/* List */}
        {list.map((item) => (
          <div key={item.id} className="dms_friendlist">
            <Link
              href={`/dms/${item.id}`}
              className="py-2 px-4 w-full flex flex-row justify-between items-start dms_friendlist--item"
            >
              <div className="flex flex-row items-center space-x-2">
                <Avatar className="h-5 w-5 rounded-md overflow-hidden">
                  {item.avatar ? (
                    <StorageImage
                      alt={`${item.email} avatar`}
                      path={item.avatar}
                      fallbackSrc="https://github.com/shadcn.png"
                    />
                  ) : (
                    <AvatarFallback>NA</AvatarFallback>
                  )}
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-start">
                    {item.username !== "" && item.username
                      ? item.username
                      : item.email}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </TabsContent>
    </>
  );
}
