import React from "react";
import PageClient from "./client";
import { isAuthenticated } from "@/utils/amplify-utils";
import {
  getMsgByRelationship,
  getRelationship,
  getUserById,
} from "@/utils/fetching-server";
import { groupMsgByDate } from "@/utils/utils";

export default async function PageServer({
  params,
}: {
  params: { id: string };
}) {
  // Yourself
  const senderData = await isAuthenticated();
  if (!senderData) return <></>;

  // The one you're trying to send msg
  const receiverId = params.id;
  const receiverData = await getUserById(receiverId);

  console.log(senderData.id, receiverData?.id);

  if (senderData.id === receiverData?.id) {
    return <p>Cannot send msg to yourself</p>;
  }

  if (!receiverData) return <></>;
  // Get the relationship (act as a group)
  let relationship = await getRelationship(senderData.id, receiverId);
  if (!relationship) return <p>No relationship</p>;

  // Group MSG by Day
  let msg = groupMsgByDate(relationship.messages);

  return (
    <>
      <div className="w-full">
        <PageClient
          sender={senderData}
          receiver={receiverData}
          relationshipId={relationship.id}
          messages={msg}
        />
      </div>
    </>
  );
}
