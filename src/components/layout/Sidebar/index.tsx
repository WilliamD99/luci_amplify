import React from "react";
import SideBarClient from "./SidebarClient";
import { isAuthenticated } from "@/utils/amplify-utils";
import { getRoomList, getUserById } from "@/utils/fetching-server";

export default async function SideBar({}) {
  let loginData = null,
    userData = null,
    rooms = null;
  loginData = await isAuthenticated();

  if (typeof loginData === "object") {
    userData = await getUserById(loginData.id);
    rooms = await getRoomList();
  } else {
    return <></>;
  }

  return (
    <>
      <SideBarClient userData={userData} rooms={rooms} />
    </>
  );
}
