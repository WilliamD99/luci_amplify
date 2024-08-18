import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../amplify/data/resource";
import { cache } from "react";
import { getCurrentUser } from "aws-amplify/auth";

export type Nullable<T> = T | null;

export const databaseClient = generateClient<Schema>({
  authMode: "userPool",
});

export type getNotificationsType = {
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly idSource: string;
  readonly table: string;
  readonly status: string;
  readonly belongsTo: {
    readonly id: string;
    readonly email: string;
    readonly username: Nullable<string>;
  };
};
export const getNotifications = cache(
  async (limit: number = 10): Promise<getNotificationsType[] | false> => {
    let { data, errors } = await databaseClient.models.NotificationCenter.list({
      selectionSet: [
        "id",
        "type",
        "createdAt",
        "idSource",
        "table",
        "status",
        "belongsTo.email",
        "belongsTo.username",
        "belongsTo.id",
      ],
      limit: limit,
      filter: {
        status: {
          eq: "unread",
        },
      },
    });

    if (errors) return false;

    return data;
  }
);

export const getFriendList = cache(async () => {
  let userData = await getCurrentUser();

  if (!userData)
    return {
      message: "Unauthenticated",
    };
  let userId = userData.userId;
  let friendList1: any = [],
    friendList2: any = [];
  try {
    let { data: friendlist1Data } =
      await databaseClient.models.UserRelationships.listUserRelationshipsByUser1_id(
        {
          user1_id: userId,
        },
        {
          filter: {
            status: {
              eq: "accepted",
            },
          },
          selectionSet: [
            "createdAt",
            "user2.id",
            "user2.email",
            "user2.avatar",
            "user2.username",
          ],
        }
      );
    friendList1 = friendlist1Data.map((item) => {
      return {
        createdAt: item.createdAt,
        id: item.user2.id,
        username: item.user2.username,
        email: item.user2.email,
        avatar: item.user2.avatar,
      };
    });
  } catch (e) {
    console.log(e);
  }
  try {
    let { data: friendList2Data } =
      await databaseClient.models.UserRelationships.listUserRelationshipsByUser2_id(
        {
          user2_id: userId,
        },
        {
          filter: {
            status: {
              eq: "accepted",
            },
          },
          selectionSet: [
            "createdAt",
            "user1.id",
            "user1.email",
            "user1.avatar",
            "user1.username",
          ],
        }
      );
    friendList2 = friendList2Data.map((item) => {
      return {
        createdAt: item.createdAt,
        id: item.user1.id,
        username: item.user1.username,
        email: item.user1.email,
        avatar: item.user1.avatar,
      };
    });
  } catch (e) {
    console.log(e);
  }
  return [...friendList1, ...friendList2];
});

export const getMsgByRelationship = async (
  id: string,
  nextToken?: string,
  limit: number = 10
) => {
  try {
    const { data } =
      await databaseClient.models.ChatMessage.listChatMessageByRelationshipIdAndCreatedAt(
        {
          relationshipId: id,
        },
        {
          nextToken: nextToken,
          limit: limit,
        }
      );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getCurrentUserData = cache(
  async (): Promise<Schema["User"]["type"] | null> => {
    try {
      let userData = await getCurrentUser();

      let userDataDetails = await databaseClient.models.User.get({
        id: userData.userId,
      });

      return userDataDetails.data;
    } catch (e) {
      return null;
    }
  }
);
