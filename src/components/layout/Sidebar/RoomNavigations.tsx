import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RoomNavigations() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    router.push("/profile");
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
        <button className="btn" onClick={handleClick}>
          <Avatar className="sidebar--top__avatar">
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </button>
        <button className="btn" onClick={() => router.push("/signin")}>
          <Avatar className="sidebar--top__avatar">
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </>
  );
}
