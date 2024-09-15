import { util } from "@aws-appsync/utils";

export function request(ctx) {
  let args = ctx.args;
  let id = util.autoId();

  return {
    version: "2018-05-29",
    operation: "UpdateItem",
    key: {
      id: {
        S: id,
      },
    },
    update: {
      expression: `SET #userId = :userId, #chatEmoteId = :chatEmoteId, #createdAt = :createdAt, #updatedAt = :updatedAt`,
      expressionNames: {
        "#userId": "userId",
        "#chatEmoteId": "chatEmoteId",
        "#createdAt": "createdAt",
        "#updatedAt": "updatedAt",
      },
      expressionValues: {
        ":userId": {
          S: args.userId,
        },
        ":chatEmoteId": {
          S: args.chatEmoteId,
        },
        ":createdAt": {
          S: args.date,
        },
        ":updatedAt": {
          S: args.date,
        },
      },
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
