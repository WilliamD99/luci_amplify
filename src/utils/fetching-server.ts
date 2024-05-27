import { cache } from "react";
import { cookieBasedClient } from "./amplify-utils";

// Room
export const getRoomList = cache(async () => {
  let data = await cookieBasedClient.models.UserRoom.list({
    selectionSet: ["room.name", "room.id", "room.users.createdAt"],
  });
  console.log(data);
  return data.data;
});

export const getRoom = cache(async (id: string) => {
  let data = await cookieBasedClient.models.Room.get(
    {
      id,
    },
    {
      selectionSet: [
        "id",
        "name",
        "createdAt",
        "users.id",
        "users.user.avatar",
        "users.user.email",
      ],
    }
  );
  return data.data;
});

// User
export const getUserById = cache(async (userId: string) => {
  let data = await cookieBasedClient.models.User.get(
    {
      id: userId,
    },
    {
      selectionSet: [
        "id",
        "email",
        "fullname",
        "avatar",
        "createdAt",
        "title",
        "updatedAt",
      ],
    }
  );
  return data.data;
});
