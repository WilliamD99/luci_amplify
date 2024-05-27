import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { databaseClient } from "../../../utils/amplify-utils.client";
import { getInitials } from "@/utils/utils";

export default function RoomNavigations({ rooms }: { rooms: any }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // const [roomState, setRoomState] = useState(rooms);

  const handleClick = (e: string) => {
    router.push(e);
    // const current = new URLSearchParams(Array.from(searchParams.entries()));

    // if (current.get("profile")) {
    //   current.delete("profile");
    // } else {
    //   current.set("profile", "edit");
    // }

    // const search = current.toString();
    // const query = search ? `?${search}` : "";

    // router.push(`${pathname}${query}`);
  };
  return (
    <>
      <div className="sidebar--top__navs">
        {rooms.map((room: any) => (
          <button
            key={room.room?.id}
            className="btn"
            onClick={() => router.push(`/room/${room.room?.id}`)}
          >
            <Avatar className="sidebar--top__avatar">
              <AvatarFallback className="text-black">
                {getInitials(room.room?.name)}
              </AvatarFallback>
            </Avatar>
          </button>
        ))}
      </div>
    </>
  );
}
