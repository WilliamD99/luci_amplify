import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyStorage",
  access: (allow) => ({
    "avatar/{entity_id}/*": [
      allow.authenticated.to(["read", "write"]),
      allow.guest.to(["read", "write"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
