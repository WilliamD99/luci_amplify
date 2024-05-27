import React, { useEffect } from "react";
import { useParams } from "next/navigation";

import Link from "next/link";

import {
  HomeIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { databaseClient } from "@/utils/amplify-utils.client";
import Notification from "@/components/Notification";

export default function MenuNavigations({ id }: { id?: string }) {
  useEffect(() => {
    // const sub = databaseClient.models.UserRelationships.onCreate({
    //   filter: {
    //     or: [
    //       {
    //         user1_id: {
    //           eq: id,
    //         },
    //       },
    //       {
    //         user2_id: {
    //           eq: id,
    //         },
    //       },
    //     ],
    //   },
    // }).subscribe({
    //   next: (data) => console.log(data),
    //   error: (data) => console.log(data),
    // });
    // const sub = databaseClient.models.Room.observeQuery().subscribe({
    //   next: (data) => console.log(data),
    //   error: (data) => console.log(data),
    // });
    // return () => sub.unsubscribe();
  }, []);

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
        {id && <Notification userId={id} />}
      </div>
    </>
  );
}
