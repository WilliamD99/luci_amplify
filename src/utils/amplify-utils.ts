import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "../../amplify_outputs.json";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";

import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/data";
import { Schema } from "../../amplify/data/resource";

// Called from server only
export const cookieBasedClient = generateServerClientUsingCookies<Schema>({
  config,
  cookies,
  authMode: "userPool",
});

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const isAuthenticated = async () =>
  await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(contextSpec) {
      try {
        const user = await getCurrentUser(contextSpec);
        return { id: user.userId, email: user.signInDetails?.loginId };
      } catch (e) {
        return false;
      }
    },
  });
