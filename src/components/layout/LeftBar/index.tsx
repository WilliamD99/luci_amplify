import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import DmTabContent from "./DmTabContent";
import { getFriendListServer } from "@/utils/fetching-server";

export interface FriendListType {
  id: string;
  username: string | null;
  email: string;
  avatar: string | null;
  createdAt: string;
}

export default async function LeftBar() {
  let friendList = await getFriendListServer();
  console.log(friendList, "friendlist");
  return (
    <div className="leftbar">
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      {friendList && <DmTabContent friendList={friendList} />}
    </div>
  );
}
