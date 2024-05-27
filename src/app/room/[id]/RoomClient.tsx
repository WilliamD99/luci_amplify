"use client";

import React, { useEffect } from "react";
import { Schema } from "../../../../amplify/data/resource";
import WYSIWYG from "@/components/WYSIWYG/index";
import { databaseClient } from "../../../utils/amplify-utils.client";
import { Button } from "@/components/ui/button";
import { PhoneIcon, UserIcon } from "@heroicons/react/24/solid";
import AddUserToRoomModal from "@/components/modals/AddUserToRoomModal";
// import { StorageImage } from "@aws-amplify/ui-react-storage";

export default function RoomClient({ data }: { data: Schema["Room"]["type"] }) {
  const handleTest = () => {
    console.log("test");
    databaseClient.mutations.publish({
      channelName: "test",
      content: "hello work;",
    });
  };

  // useEffect(() => {
  //   const sub = databaseClient.subscriptions.receive().subscribe({
  //     next: (e) => console.log(e),
  //     error: (e) => console.log(e),
  //   });
  //   console.log(sub);
  //   return () => sub.unsubscribe();
  // }, []);

  return (
    <>
      <div id="room" className="grid grid-rows-8">
        <div
          id="room__header"
          className="px-4 flex flex-row justify-between items-center row-span-1"
        >
          <p className="capitalize font-semibold text-2xl" onClick={handleTest}>
            {data.name}
          </p>
          <div className="flex flex-row space-x-4">
            <AddUserToRoomModal data={data}>
              <Button className="bg-transparent btn py-1 px-3">
                <UserIcon className="h-3 w-3" />
              </Button>
            </AddUserToRoomModal>
            <Button className="bg-transparent btn py-1 px-3">
              <PhoneIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div id="room__content" className="row-span-6"></div>

        <div id="room__text-editor" className="row-span-2 overflow-hidden">
          <WYSIWYG />
        </div>
      </div>
    </>
  );
}
