import React from "react";

import { HomeIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import Notification from "@/components/Notification";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MenuNavigations({ id }: { id?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentTabOption = searchParams.get("tab");

  // This will append query params to the url
  // in order to switch to different tab in the panel
  const handleMenuNavigate = (e: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("tab", e);
    router.push(pathname + "?" + updatedSearchParams.toString());
  };

  return (
    <>
      <div className="sidebar--top__menus">
        <button
          onClick={() => handleMenuNavigate("home")}
          className={`menu text-white ${
            currentTabOption === "home" && "active"
          }`}
          disabled={currentTabOption === "home"}
        >
          <div className="menu_icon w-full h-full flex justify-center p-2">
            <HomeIcon className="h-5 w-5 icon" />
          </div>
          <span className="menu_text">Home</span>
        </button>
        <button
          onClick={() => handleMenuNavigate("dms")}
          className={`menu text-white ${
            currentTabOption === "dms" && "active"
          }`}
          disabled={currentTabOption === "dms"}
        >
          <div className="menu_icon w-full h-full flex justify-center p-2">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 icon" />
          </div>
          <span className="menu_text">DMs</span>
        </button>
        <Notification />
      </div>
    </>
  );
}
