"use server";

import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { Schema } from "../../amplify/data/resource";
import { addNotification } from "./actions";

export async function updateUserProfile(formData: FormData) {
  let userData = await isAuthenticated();
  if (!userData) return false;

  let userId = userData.id;

  let rawFormData = {
    fullname: formData.get("fullname")?.toString(),
    username: formData.get("username")?.toString(),
    title: formData.get("title")?.toString(),
  };

  try {
    let { data, errors } = await cookieBasedClient.models.User.update({
      id: userId,
      ...rawFormData,
    });
    if (errors) {
      return false;
    }
    return data?.id;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

export async function updateUserAvatar(userId: string, path: string) {
  if (!userId || !path) return;
  let { errors, data } = await cookieBasedClient.models.User.update({
    id: userId,
    avatar: path,
  });
  if (errors) {
    return errors;
  } else return true;
}

export async function addFriendAction(
  formData: FormData
): Promise<{ message: string } | Schema["UserRelationships"]["type"] | null> {
  let currentUserData = await isAuthenticated();
  if (!currentUserData)
    return {
      message: "Unauthenticated request",
    };

  let userId = currentUserData.id;
  let userEmail = currentUserData.email;

  let user2_email = formData.get("email")?.toString();
  if (!user2_email) {
    return {
      message: "Please provide email",
    };
  }

  // Check if its yours email
  if (userEmail === user2_email) {
    return {
      message: "Can't send request to your self",
    };
  }

  // Check if user is exist
  let { data: targetFriendData } =
    await cookieBasedClient.models.User.listUserByEmail(
      {
        email: user2_email,
      },
      {
        limit: 1,
        selectionSet: ["id", "email"],
      }
    );
  if (targetFriendData.length === 0) {
    return {
      message: "No user found",
    };
  }

  // Check if relationship exist
  let { data: isDuplicate, errors: isDuplicateError } =
    await cookieBasedClient.models.UserRelationships.list({
      filter: {
        and: [
          {
            or: [
              {
                user1_id: {
                  eq: userId,
                },
              },
              {
                user2_id: {
                  eq: userId,
                },
              },
            ],
          },
          {
            or: [
              {
                user1_id: {
                  eq: targetFriendData[0].id,
                },
              },
              {
                user2_id: {
                  eq: targetFriendData[0].id,
                },
              },
            ],
          },
        ],
      },
    });

  if (isDuplicate.length > 0) {
    return {
      message: "You're already friend with this user",
    };
  }

  let {
    data: relationshipData,
    errors: relationshipError,
    extensions,
  } = await cookieBasedClient.models.UserRelationships.create({
    user1_id: userId,
    user2_id: targetFriendData[0].id,
  });
  console.log(relationshipError);
  if (!relationshipData) {
    return {
      message: "Something went wrong",
    };
  }
  await addNotification(
    "NotificationCenter",
    userId,
    relationshipData.id,
    targetFriendData[0].id,
    "Friend Request"
  );
  // return relationshipData;
  return null;
}

// Change the status of the UserRelationships record (accepted or rejected)
// If given the notification sourceId, will also change the status of it to "read"
export async function confirmFriendRequestAction(
  id: string,
  status: boolean,
  sourceId?: string
): Promise<{ message: string } | Schema["UserRelationships"]["type"] | null> {
  let { data, errors } =
    await cookieBasedClient.models.UserRelationships.update({
      id,
      status: status ? "accepted" : "rejected",
    });

  if (errors) {
    if (errors?.length > 0) {
      return {
        message: errors[0].message,
      };
    }
  }
  if (sourceId) {
    await cookieBasedClient.models.NotificationCenter.update({
      id: sourceId,
      status: "read",
    });
  }
  if (!data)
    return {
      message: "Something went wrong, please contact support.",
    };

  return null;
}
