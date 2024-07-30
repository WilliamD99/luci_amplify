import { cache } from "react";
import { cookieBasedClient, isAuthenticated } from "./amplify-utils";
import { FriendListType } from "@/components/layout/LeftBar";

// Room
export const getRoomList = cache(async () => {
  // let data = await cookieBasedClient.models.UserRoom.list({
  //   selectionSet: ["room.name", "room.id", "room.users.createdAt"],
  // });
  // console.log(data);
  // return data.data;
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
        "username",
      ],
    }
  );
  return data.data;
});

export const getRelationship = async (id1: string, id2: string) => {
  try {
    const { data } = await cookieBasedClient.models.UserRelationships.list({
      filter: {
        or: [
          {
            user1_id: {
              eq: id1,
            },
            user2_id: {
              eq: id2,
            },
          },
          {
            user1_id: {
              eq: id2,
            },
            user2_id: {
              eq: id1,
            },
          },
        ],
      },
      selectionSet: ["id", "messages.*"],
      authMode: "userPool",
    });
    console.log(data);
    if (data.length === 0) return false;

    return data[0];
  } catch (e) {
    return false;
  }
};

export const getMsgByRelationship = async (id: string) => {
  try {
    const { data, nextToken } =
      await cookieBasedClient.models.ChatMessage.listChatMessageByRelationshipIdAndCreatedAt(
        {
          relationshipId: id,
        },
        {
          limit: 1,
          // nextToken:
          //   "eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjQyQXdNZGVRZ3FPZ2dmRnJJa0ROWWpwbnBTUjlUMGF4bldaMVEvS1lORHFBQWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJPVmR1Tm5neGNUZHVibkpCVWpKSVMyaE5hMVJsZGxsSmFrZFpVSE5wYlhST1owdzRaMDh2VEhFMU1uaHhlSFZFUzNoSllXWk5iRkpTZW5WTmRqWXpWMUU5UFFBQkFBZGhkM010YTIxekFFdGhjbTQ2WVhkek9tdHRjenAxY3kxbFlYTjBMVEk2T0RFeE9EY3pOalF5TXprd09tdGxlUzlrWmpneVpXWmtZeTFpTW1JMUxUUTVZakV0T1dRMU1pMDNaREZrTldOalkyVTBNV01BdUFFQ0FRQjRCUU40TWdxdUtWUmRWWHZvMU93ZVE1VnEyajRlMkJ3ZlFlb0pHT2VOWnlNQmI4N1VwbFBPUnc0VXpjdHFKZ3BiVmdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFREdCdFhmTllZeU0xa0IzcTdBSUJFSUE3bk1SVnkvZHE1b1A0YVB2elJSaUpxVTNHOWJtMDE5eEQ2ZTY4VzU2Q1E5ZVdVdEhrSjNidFVJQktMKys0UTBuQVJOTmFKY1ZET1gvUlNUb0NBQUFRQUd3eXhvTld1R2txVEZseHlZZldBWEFPM0dDN09adXdkeGJyYTJtRUhFQU5DUEFqRFhYdnVrMDJLbGtiSzJvWWR2Ly8vLzhBQUFBQkFBQUFBQUFBQUFBQUFBQUJBQUFETnAzSEFsSnZpL3pxbEpDN200V0VlZ0Z1RWdJTGpaeUFzYVVUS080ODFYdDU3SXl5Unp2c1BEN2Y5akxZL2RQVDVIaDd3a1NZbmlZNDM4em9lRWFiWWM4ZVFnTWgwRGtMbmVIK1N5NElGQXpDcFRxNjh6OCt0dUtkcml2dkNqdTdURjU2NlozajBxTVBVVzJ6WElqRVJ4OUFNOU9TYWdYWS9PZVhKVFg1dVZ5dUxsTGpQWHVUcUcvTjU0U0tYT2FiTWUySExsYmpYc3NHSllHV2JBWU5VZnpZMXlyYzZRSWtBbWNCTEpwNFZrTm5iSWxwZTUyZG5nUTdoSWU2VjJiNllKcTZtdVloa0JDU0lURXozVWx5Qklnb0FPUnJHRVhmRTJlbmZxL1lvR201Q3lhSGRlcVBQOFlwWWFKVmJoRmRTMjkyZWE0a2xUYzNsa2RNcFZKUUNFYUgwWW9SMGU1N0hCblMrMmp0WVhjTEN1c1hWK0QrVU1ENFhiL2JKamR1ZXg2eU5tOEhZbitGdGY4dE5aWWprVEFrS2wzTlBPWEZRZzJSajJINm40UkN3ZnorK0ZsQWVadjQxS2xUNVRiVkJWWWpFQk5LSW9PSG5Bek5pYVhET3NFY2hDYXlUamFmM1NJWHdOSjYrbTdLSzlFWGdlSW1nL0I2akpDMnZrV1FaYmRGTDNPdHpwb1JxSGltdjZPeE5VSXJhK2puTkZnSi8wN3JsR2ZPOUtObGk1ZkpSQ2Y2akxlN3ZXb1lLdGpFMGpCUTR0ZUFTclBhWlRVb2ZuWGdseVZrbUlPTnBtalBXZk1sK2o5ajdVWktXSEozbWVzdkdIZE5CQktWOFM5aFVvM1NvWFZ5VkhwWHkyNlNQWUw1dGNRejdiczVwd3QwT3RHMklUa0FDaXJpczN1T0JKZ0s2Q1NOZ0pnNCs1SUhvSDJwdVU5eG5NWkpWRWM5WUVvNVNlRmEwVGxUdzFFUGs4Smk4QlJrYWhXeHczMHp6OGg2dXhxVmFVaHhkMmlWb1Q3N1JBdzczc0NkM2xqaWE1dlk0d0tIWmxueW1iUnI3dmQrM2NKQkF4NEptdnJQdU84NVprWkVxOEVxd212YWc0WEU0OG5tSUp0T2RCMkZiNFJocEJrRjh1ZWdkV3lYVzMwOXQ4TXBSMTBWOUZJRko4QU02Mkp2Q2tjaFQ0WFlrVWpPME84Zk9lZ3NVYXVvYngwbDJ2WG5YdFBPbmo2aFZaZEhaTlR4eURLZHgrbStrRkt2bTIrdmpFNHZjTlhmRTlyb3dsM3ZOUFFDdzNSd0tLdWw1eEM4UUZJKzIxcTdVclFIWDFiTUFnUUd1QktzV3hDbkI1QWltOFhrNkh5aTVBRk4xZEFtc0J1cmtQNG9IT0VTRWhlT0YrV2VFb3dxWmZCUDMyWmVpdHpZRlJGSzJscm5obTFEa1ZRVDZNZEV6VUdEUHZKbjdpQkkrVU1MbGoyNEZBQUxIWjc4VkVNQVp6QmxBakJCTFlpbWVEdzZUeEV0N0JqQWlhaUZFSk85RjlIV3p4TzlTUVFwWnY1U0hwZHZmQ2d5ZzhUUFBScjFPeGMwZ1A0Q01RRDRsRTVHRXJubjBmdFY1WEtENWsxM1doOExsOFc0am5QSEVwRGdubDJhQ2lGRHBIYm4vOGNabWZWRStMYjh1clk9In0=",
        }
      );
    return { data, nextToken };
  } catch (e) {
    return false;
  }
};

export const getFriendListServer = async () => {
  let userData = await isAuthenticated();
  if (!userData) {
    return {
      message: "Unauthenticated",
    };
  }
  let userId = userData.id;

  let friendList1: FriendListType[] = [],
    friendList2: FriendListType[] = [];

  try {
    let { data: friendlist1Data, errors } =
      await cookieBasedClient.models.UserRelationships.listUserRelationshipsByUser1_id(
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
    console.log(errors);
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
      await cookieBasedClient.models.UserRelationships.listUserRelationshipsByUser2_id(
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
};
