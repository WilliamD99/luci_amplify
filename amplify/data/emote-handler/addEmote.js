import { util } from "@aws-appsync/utils";

// This function will handle add a new emote, or increase the count of the emote
// of a chat message
export function request(ctx) {
  let id = util.autoId();
  let arg = ctx.args;

  // Check if the emote with the userId and messageId already exists

  return {
    version: "2018-05-29",
    operation: "UpdateItem",
    key: {
      id: {
        S: arg.id,
      },
    },
    update: {
      expression: `SET #content = :content, #messageId = :messageId, #createdAt =:createdAt, #updatedAt = :updatedAt`,
      expressionNames: {
        "#content": "content",
        "#messageId": "messageId",
        "#createdAt": "createdAt",
        "#updatedAt": "updatedAt",
      },
      expressionValues: {
        ":content": { S: arg.content },
        ":messageId": { S: arg.messageId },
        ":createdAt": { S: arg.date },
        ":updatedAt": { S: arg.date },
      },
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
