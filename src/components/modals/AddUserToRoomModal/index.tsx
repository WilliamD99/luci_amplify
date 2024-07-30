"use client";

import React, { ChangeEvent, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Schema } from "../../../../amplify/data/resource";
import { Button } from "@/components/ui/button";
import {
  StarIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { databaseClient } from "@/utils/amplify-utils.client";
import { debounce } from "@/utils/utils";

export default function AddUserToRoomModal({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Schema["Room"]["type"];
}) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent id="md_add-user-room" className="modal sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="space-y-3">
              <span>{data.name}</span>
              <div className="flex flex-row space-x-3">
                <Button className="bg-transparent btn py-1 px-3">
                  <StarIcon className="h-3 w-3" />
                </Button>
              </div>
            </DialogTitle>
            <div className="py-3">
              <Separator className="divider" />
            </div>
            <DialogDescription className="space-y-2">
              <div className="flex flex-row space-x-3">
                <div className="relative w-full">
                  <span
                    onClick={() => searchInputRef.current?.focus()}
                    className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2"
                  >
                    <MagnifyingGlassIcon className="w-4 h-4" />
                  </span>
                  <Input
                    className="search input pl-10"
                    type="text"
                    placeholder="Find members"
                    ref={searchInputRef}
                  />
                </div>
              </div>
              <ScrollArea className="h-[200px] pt-3 w-full list">
                <AddUserActionModal>
                  <Button className="content w-full py-6 px-2 space-x-4 flex flex-row items-center justify-start bg-transparent">
                    <div className="bg-transparent add py-1 px-1 rounded-full">
                      <UserCircleIcon className="h-6 w-6  " />
                    </div>
                    <span>Add people</span>
                  </Button>
                </AddUserActionModal>
                <Button className="content w-full py-6 px-2 space-x-4 flex flex-row items-center justify-start bg-transparent">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>TE</AvatarFallback>
                  </Avatar>
                  <span>Will Doan</span>
                </Button>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

const AddUserActionModal = ({ children }: { children: React.ReactNode }) => {
  const handleSearch = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let { data } = await databaseClient.models.UserRelationships.list({
      selectionSet: ["id"],
    });
    console.log(data);
  }, 500);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent id="md_add-user-room__modal" className="sm:max-w-md">
        <DialogHeader className="space-y-2">
          <DialogTitle>
            <span>Add people to this room</span>
          </DialogTitle>
          <DialogDescription className="pt-5 space-y-4">
            <div>
              <Input
                placeholder="ex. JohnDoe@gmail.com, or John Doe"
                className="input bg-transparent text-white"
                type="text"
                onChange={handleSearch}
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <Button>Test</Button>
              <Button className="cta">Test</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogOverlay />
    </Dialog>
  );
};
