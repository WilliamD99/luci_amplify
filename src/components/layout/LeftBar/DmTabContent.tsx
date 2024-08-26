"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TabsContent } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import SearchContent from "./SearchContent";
import Link from "next/link";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { useQuery } from "@tanstack/react-query";
import { FriendListType, getCurrentUserData, getFriendList } from "@/utils/amplify-utils.client";
import { Schema } from "../../../../amplify/data/resource";

export default function DmTabContent() {
  const { data: userData, isLoading: isLoadingCurrentUser} = useQuery<Schema["User"]["type"] | null>({
    queryKey: ["current-user"],
    queryFn: () => getCurrentUserData(),
  })
  
  const { data, isLoading } = useQuery<FriendListType[] | false>({
    queryKey: ["friendlist", userData?.id],
    queryFn: () => getFriendList(),
    enabled: userData?.id ? true : false,
  });

  const [list, setList] = useState<FriendListType[]>([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

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
        {
          // Show loading skeleton
          (isLoading || isLoadingCurrentUser) && (
            <div className="px-4 pt-3">
              <div className="animate-pulse flex flex-row items-center space-x-2 w-full">
                <div className="h-5 w-5 rounded-md overflow-hidden bg-gray-300" />
                <div className="flex flex-col w-full">
                  <div className="h-4 w-full bg-gray-300 rounded-md" />
                </div>
              </div>
            </div>
          )
        }
        {list.length === 0 && !isLoading && !isLoadingCurrentUser ? (
          <div className="px-4 pt-3">
            <p className="text-sm opacity-85">Your friend list is empty</p>
          </div>
        ) : (
          <>
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
            <div className="dms_friendlist">
              <Link
                href={`/dms/${userData?.id}`}
                className="py-2 px-4 w-full flex flex-row justify-between items-start dms_friendlist--item"
              >
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="h-5 w-5 rounded-md overflow-hidden">
                    {userData?.avatar ? (
                      <StorageImage alt="user avatar" path={userData.avatar} />
                    ) : (
                      <AvatarFallback>CN</AvatarFallback>
                    )}                  
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-start">{userData?.username ?? userData?.email} (you)</p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )}
      </TabsContent>
    </>
  );
}
