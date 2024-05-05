import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import React from "react";

export default async function Profile() {
  const userId = await isAuthenticated();
  console.log(userId);
  console.log(userId, "test");

  if (!userId) return;

  const { data: userData } = await cookieBasedClient.models.Post.list();

  console.log(userData);

  return (
    <>
      <div>Profile</div>
    </>
  );
}
