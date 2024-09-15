import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    NotificationCenter: a
      .model({
        target: a.string().required(), // Whose this notification for
        from: a.id().required(), // id of the one created
        belongsTo: a.belongsTo("User", "from"), // this serve as a join table between this and User
        type: a.string().required(),
        idSource: a.id().required(), // Map to specific id in a table
        table: a.string().required(), // Map to specific table
        status: a.string().default("unread").required(), // read or unread
      })
      .secondaryIndexes((index) => [index("target")])
      .authorization((a) => [
        a.ownerDefinedIn("target"),
        a.authenticated().to(["create"]),
      ]),
    User: a
      .model({
        email: a.string().required(),
        username: a.string(),
        fullname: a.string(),
        title: a.string(),
        avatar: a.string(),
        createdAt: a.string(),
        updatedAt: a.string(),
        rooms: a.hasMany("UserRoom", "userId"),
        notifications: a.hasMany("NotificationCenter", "from"),
        relationship1: a.hasMany("UserRelationships", "user1_id"),
        relationship2: a.hasMany("UserRelationships", "user2_id"),
        emotes: a.hasMany("UserEmote", "userId"),
      })
      .secondaryIndexes((index) => [index("email"), index("username")])
      .authorization((a) => [
        a.authenticated().to(["read"]),
        a.ownerDefinedIn("id"),
      ]),
    UserRelationships: a
      .model({
        user1_id: a.id().required(),
        user1: a.belongsTo("User", "user1_id"),
        user2_id: a.id().required(),
        user2: a.belongsTo("User", "user2_id"),
        status: a.string().default("pending"), // pending || accepted || rejected
        messages: a.hasMany("ChatMessage", "relationshipId"),
      })
      .secondaryIndexes((index) => [index("user1_id"), index("user2_id")])
      .authorization((allow) => [allow.authenticated()]),
    Room: a
      .model({
        name: a.string().required(),
        users: a.hasMany("UserRoom", "roomId"),
        description: a.string(),
        background: a.string(),
      })
      .authorization((a) => [a.owner(), a.authenticated()]),

    UserRoom: a
      .model({
        userId: a.id().required(),
        roomId: a.id().required(),
        user: a.belongsTo("User", "userId"),
        room: a.belongsTo("Room", "roomId"),
      })
      .authorization((a) => [a.authenticated()]),
    ChatMessage: a
      .model({
        createdAt: a.string().required(),
        updatedAt: a.string(),
        content: a.string().required(),
        identifier: a.string().required(),
        receiver: a.string().required(),
        relationshipId: a.id().required(),
        relationshipSource: a.belongsTo("UserRelationships", "relationshipId"),
        files: a.string(),
        emotes: a.hasMany("ChatEmote", "messageId"),
      })
      .authorization((a) => [
        a.ownerDefinedIn("identifier"),
        a.ownerDefinedIn("receiver"),
      ])
      .secondaryIndexes((index) => [
        index("relationshipId")
          .name("ChatMessageByDate")
          .sortKeys(["createdAt"]),
        index("identifier").name("ChatMessageBySender"),
      ]),
    ChatEmote: a
      .model({
        content: a.string().required(),
        messageId: a.id().required(),
        message: a.belongsTo("ChatMessage", "messageId"),
        users: a.hasMany("UserEmote", "chatEmoteId"),
      })
      .authorization((a) => [a.authenticated()])
      .secondaryIndexes((index) => [index("content")]),
    UserEmote: a
      .model({
        userId: a.id().required(), // id of the user
        chatEmoteId: a.id().required(), // id of the emote
        user: a.belongsTo("User", "userId"),
        chatEmote: a.belongsTo("ChatEmote", "chatEmoteId"),
      })
      .authorization((a) => [a.authenticated()])
      .identifier(["userId", "chatEmoteId"]),
    Message: a.customType({
      content: a.string().required(),
      identifier: a.string().required(),
      receiver: a.string().required(),
      files: a.string(),
    }),
    // Message publish mutation
    publish: a
      .mutation()
      .arguments({
        content: a.string().required(),
        identifier: a.string().required(), // id of the sender
        receiver: a.string().required(),
        files: a.string(),
        // from: a.string(), // id of the sender,
        // type: a.string(), // single or multiple
      })
      .returns(a.ref("Message"))
      .handler(a.handler.custom({ entry: "./publish.js" }))
      .authorization((allow) => [allow.authenticated()]),

    // Subscribe to incoming messages
    receive: a
      .subscription()
      // subscribes to the 'publish' mutation
      .for(a.ref("publish"))
      .arguments({
        identifier: a.string(), // id of the receiver
        receiver: a.string(),
        // from: a.string(), // id of the sender,
        // type: a.string(), // single or multiple
      })
      // subscription handler to set custom filters
      .handler(a.handler.custom({ entry: "./receive.js" }))
      // authorization rules as to who can subscribe to the data
      .authorization((allow) => [allow.authenticated()]),
    // A data model to manage channels
    Channel: a
      .model({
        name: a.string(),
      })
      .authorization((allow) => [allow.authenticated()]),
    // Custom type
    addEmote: a
      .mutation()
      .arguments({
        userId: a.string().required(),
        messageId: a.string().required(),
        content: a.string().required(),
        date: a.string().required(),
        id: a.string().required(),
      })
      .returns(a.ref("ChatEmote"))
      .authorization((allow) => [allow.authenticated()])
      .handler(
        a.handler.custom({
          dataSource: a.ref("ChatEmote"),
          entry: "./emote-handler/addEmote.js",
        })
      ),
    removeEmote: a
      .mutation()
      .arguments({
        id: a.string().required(),
      })
      .returns(a.ref("ChatEmote"))
      .authorization((allow) => [allow.authenticated()])
      .handler(
        a.handler.custom({
          dataSource: a.ref("ChatEmote"),
          entry: "./emote-handler/removeEmote.js",
        })
      ),
    // Custom query
    addEmoteRelationship: a
      .mutation()
      .arguments({
        userId: a.string().required(),
        chatEmoteId: a.string().required(),
        date: a.string().required(),
      })
      .returns(a.ref("UserEmote"))
      .authorization((allow) => [allow.authenticated()])
      .handler(
        a.handler.custom({
          dataSource: a.ref("UserEmote"),
          entry: "./emote-handler/addEmoteRelationship.js",
        })
      ),
    removeEmoteRelationship: a
      .mutation()
      .arguments({
        id: a.string().required(),
      })
      .returns(a.ref("UserEmote"))
      .authorization((allow) => [allow.authenticated()])
      .handler(
        a.handler.custom({
          dataSource: a.ref("UserEmote"),
          entry: "./emote-handler/removeEmoteRelationship.js",
        })
      ),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
