import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyStorage",
  access: (allow) => ({
    "avatar/{entity_id}/*": [
      allow.authenticated.to(["read", "write"]),
      allow.guest.to(["read", "write"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "files/{entity_id}/*": [
      allow.authenticated.to(["read", "write"]),
      allow.guest.to(["read", "write"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "room/{entity_id}/*": [
      allow.authenticated.to(["read", "write"]),
      allow.guest.to(["read", "write"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "test/*": [allow.guest.to(["read", "write"])],
  }),
});
