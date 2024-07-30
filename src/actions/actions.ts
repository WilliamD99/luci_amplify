"use server";

import { cookieBasedClient } from "@/utils/amplify-utils";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { Schema } from "../../amplify/data/resource";

import type { ModelNames } from "@/utils/type.amplify";

// Use this function to add a notification
// The client is subscribed to this table --> whenever this table changes
// --> a notification will be sent to the appropriate user
export const addNotification = async (
  table: ModelNames,
  from: string,
  source: string,
  target: string,
  type: string
) => {
  let { data, errors } =
    await cookieBasedClient.models.NotificationCenter.create({
      table: table,
      from,
      idSource: source,
      target,
      type,
      status: "unread",
    });
  return;
};
