"use client";

import React, { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";
import SidebarAvatar from "./SidebarAvatar";
import RoomNavigations from "./RoomNavigations";
import MenuNavigations from "./MenuNavigations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar--top">
          {/* Room btns */}
          <RoomNavigations />
          {/* Utils btns */}
          <MenuNavigations />
        </div>
        <div className="sidebar--bot">
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="sidebar--bot__btn">
                  <PlusIcon className="h-5 w-5 icon" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-black" side="right" sideOffset={10}>
                <p className="text-xs text-white">Create new</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SidebarAvatar /> */}
        </div>
      </div>
    </>
  );
}
