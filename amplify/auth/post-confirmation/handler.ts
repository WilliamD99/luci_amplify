import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/CognitoUserToDynamo";
import { createUser } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint:
          "https://mzipclztrrbyfnrkvi4m53lxla.appsync-api.us-east-2.amazonaws.com/graphql", //env.AMPLIFY_DATA_GRAPHQL_ENDPOINT
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {},
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "userPool",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const timestamp = new Date().toISOString();

  await client.graphql({
    query: createUser,
    variables: {
      input: {
        email: event.request.userAttributes.email,
        id: event.request.userAttributes.sub,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    },
  });
  return event;
};
