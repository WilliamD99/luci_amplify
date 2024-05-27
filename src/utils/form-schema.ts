"use client";

import { z } from "zod";

export const formEditProfileSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string().optional(),
  fullname: z.string().optional(),
  title: z.string().optional(),
});

export const formCreateRoomSchema = z.object({
  name: z.string({
    required_error: "Room name is required",
    invalid_type_error: "Invalid name for room",
  }),
  members: z.array(z.string()),
});

export const formAddFriendSchema = z.object({
  email: z
    .string({
      required_error: "Please provide an email",
    })
    .email(),
});
