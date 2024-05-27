import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/

const schema = a.schema({
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
    })
    .secondaryIndexes((index) => [index("email"), index("username")])
    .authorization((a) => [
      a.authenticated().to(["read"]),
      a.ownerDefinedIn("id"),
    ]),
  UserRelationships: a
    .model({
      user1_id: a.id().required(),
      user2_id: a.id().required(),
      status: a.string().default("pending"), // pending || accepted || rejected
    })
    .secondaryIndexes((index) => [index("user1_id"), index("user2_id")])
    .authorization((allow) => [allow.owner(), allow.authenticated()]),
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
  Message: a.customType({
    content: a.string().required(),
    channelName: a.string().required(),
  }),
  // Message publish mutation
  publish: a
    .mutation()
    .arguments({
      channelName: a.string().required(),
      content: a.string().required(),
    })
    .returns(a.ref("Message"))
    .handler(a.handler.custom({ entry: "./publish.js" }))
    .authorization((allow) => [allow.authenticated()]),

  // Subscribe to incoming messages
  receive: a
    .subscription()
    // subscribes to the 'publish' mutation
    .for(a.ref("publish"))
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
});
// .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
