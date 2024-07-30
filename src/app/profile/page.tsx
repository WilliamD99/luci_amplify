import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import React from "react";
import ProfileClient from "./ProfileClient";

export default async function Profile() {
  const userData = await isAuthenticated();
  if (!userData) return;

  let userId = userData.id;

  let { data, errors } = await cookieBasedClient.models.User.get(
    {
      id: userId,
    },
    {
      selectionSet: [
        "id",
        "avatar",
        "createdAt",
        "email",
        "username",
        "title",
        "fullname",
      ],
    }
  );

  if (!data) return;

  return (
    <>
      <div id="profile" className="h-full w-full relative">
        <p className="font-semibold text-lg">Edit your profile</p>
        <ProfileClient userData={data} />
      </div>
    </>
  );
}
