import { getRoom } from "@/utils/fetching-server";
import React from "react";
import RoomClient from "./RoomClient";
import { isAuthenticated } from "@/utils/amplify-utils";

export default async function RoomPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let userData = await isAuthenticated();

  if (!userData) return;
  // let id = params.id;
  // let room = await getRoom(id);
  // console.log(room);
  console.log(userData, "test");
  return (
    <>
      <RoomClient user={userData} />
    </>
  );
}
