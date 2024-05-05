import React from "react";
import { useParams } from "next/navigation";

import Link from "next/link";

import {
  HomeIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function MenuNavigations() {
  return (
    <>
      <div className="sidebar--top__menus">
        <Link href="#" className="menu">
          <div className="menu_icon w-full h-full flex justify-center p-2">
            <HomeIcon className="h-5 w-5 icon" />
          </div>
          <span className="menu_text">Home</span>
        </Link>
        <Link href="#" className="menu">
          <div className="menu_icon w-full h-full flex justify-center p-2">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 icon" />
          </div>
          <span className="menu_text">DMs</span>
        </Link>
        <Link href="#" className="menu">
          <div className="menu_icon w-full h-full flex justify-center p-2">
            <BellIcon className="h-5 w-5 icon" />
          </div>
          <span className="menu_text">Activity</span>
        </Link>
      </div>
    </>
  );
}
