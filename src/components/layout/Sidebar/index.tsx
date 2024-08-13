import React from "react";
import SideBarClient from "./SidebarClient";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { getRoomList, getUserById } from "@/utils/fetching-server";

export default async function SideBar({}) {
  let loginData = null,
    userData = null,
    rooms = null;
  loginData = await isAuthenticated();
  console.log(loginData, "this is me");
  // if (!userId) return <></>;
  if (typeof loginData === "object") {
    userData = await getUserById(loginData.id);
    rooms = await getRoomList();
  }
  return (
    <>
      <SideBarClient userData={userData} rooms={rooms} />
    </>
  );
}
