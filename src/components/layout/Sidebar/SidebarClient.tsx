"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import {
  PlusIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import SidebarAvatar from "./SidebarAvatar";
// import RoomNavigations from "./RoomNavigations";
import MenuNavigations from "./MenuNavigations";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import CreateRoomModal from "@/components/modals/CreateRoomModal";
import AddFriendModal from "@/components/modals/AddFriendModal";

import { useQuery } from "@tanstack/react-query";
import { getCurrentUserData } from "@/utils/amplify-utils.client";
import { Schema } from "../../../../amplify/data/resource";

// Might have to fetch user data on client side
// Because loading user data server side wont work when user go from login page -> app
export default function SideBarClient() {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useQuery<Schema["User"]["type"] | null>({
    queryKey: ["Current User"],
    queryFn: () => getCurrentUserData(),
  });

  const handleOpenChange = (e: boolean) => {
    setOpen(e);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar--top">
          {/* Room btns */}
          {/* <RoomNavigations rooms={rooms} /> */}
          {/* Utils btns */}
          <MenuNavigations id={data?.id} />
        </div>
        <div className="sidebar--bot">
          <Popover open={open} onOpenChange={handleOpenChange}>
            <PopoverTrigger id="create-popover__trigger" asChild>
              <Button className={`relative w-full ${open && "active"}`}>
                <div className="icon-wrapper">
                  <PlusIcon className="h-full w-full" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              id="create-popover"
              className="mb-2 ml-2 p-0"
              side="right"
            >
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <p className="font-medium leading-none px-4">Create</p>
                </div>
                <div className="grid">
                  <button className="grid px-4 py-2 grid-cols-4 items-center gap-4">
                    <div className="flex justify-start items-center">
                      <div className="flex justify-center items-center cta chat">
                        <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-white text-center" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 col-span-3">
                      <p className="text-xs text-left font-semibold">Message</p>
                      <p className="text-xs text-left">
                        Start a conversation in a DM
                      </p>
                    </div>
                  </button>
                  <CreateRoomModal>
                    <button className="grid px-4 py-2 grid-cols-4 items-center gap-4">
                      <div className="flex justify-start items-center">
                        <div className="flex justify-center items-center cta room">
                          <ChatBubbleLeftRightIcon className="h-4 w-4 text-white text-center" />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1 col-span-3">
                        <p className="text-xs text-left font-semibold">
                          Chat Room
                        </p>
                        <p className="text-xs text-left">Create a chat room</p>
                      </div>
                    </button>
                  </CreateRoomModal>
                  <AddFriendModal>
                    <button className="grid px-4 py-2 grid-cols-4 items-center gap-4">
                      <div className="flex justify-start items-center">
                        <div className="flex justify-center items-center cta user">
                          <UserPlusIcon className="h-4 w-4 text-white text-center" />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1 col-span-3">
                        <p className="text-xs text-left font-semibold">
                          Friend
                        </p>
                        <p className="text-xs text-left">
                          Add a friend by email
                        </p>
                      </div>
                    </button>
                  </AddFriendModal>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <SidebarAvatar userData={data} />
        </div>
      </div>
    </>
  );
}
