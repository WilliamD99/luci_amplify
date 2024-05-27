import { getRoom } from "@/utils/fetching-server";
import React from "react";
import RoomClient from "./RoomClient";

export default async function RoomPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let id = params.id;
  let room = await getRoom(id);
  console.log(room);

  return (
    <>
      <RoomClient data={room} />
    </>
  );
}
