import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../amplify/data/resource";
import { cache } from "react";

export const databaseClient = generateClient<Schema>({
  authMode: "userPool",
});

export const getNotifications = cache(async (limit: number = 10) => {
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
    limit: 10,
    filter: {
      status: {
        eq: "unread",
      },
    },
  });
  if (errors)
    return {
      message: errors[0].message,
    };

  return {
    data: data,
  };
});
