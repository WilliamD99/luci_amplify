import React, { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Schema } from "../../../../amplify/data/resource";

import { StorageImage } from "@aws-amplify/ui-react-storage";
import {
  PlusIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Divider } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";

export default function SidebarAvatar({
  userData,
}: {
  userData: Schema["User"]["type"];
}) {
  const [open, setOpen] = useState<boolean>(false);

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <>
      <Popover>
        <PopoverTrigger id="user-popover__trigger" asChild>
          <Button className="bg-transparent">
            <Avatar className="sidebar--bot__avatar">
              {userData.avatar ? (
                <StorageImage
                  alt="user avatar"
                  path={userData.avatar}
                  fallbackSrc="https://github.com/shadcn.png"
                />
              ) : (
                <AvatarFallback>CN</AvatarFallback>
              )}
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          id="user-popover"
          className="mb-2 ml-2 p-0"
          side="right"
        >
          <div className="grid gap-2 py-4">
            <div className="pb-2">
              <p className="font-medium leading-none px-4">User Settings</p>
            </div>
            <span className="h-[1px] border-t-[1px] border-gray-600" />
            <div className="grid">
              <Link href="/profile" className="grid px-4 py-1 text-sm">
                Profile
              </Link>
              <Link href="#" className="grid px-4 py-1 text-sm">
                Preferences
              </Link>
            </div>
            <span className="h-[1px] border-t-[1px] border-gray-600" />
            <div className="grid relative">
              <span
                onClick={handleSignout}
                className="grid px-4 py-1 text-sm w-full cursor-pointer signout"
              >
                Sign out
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
