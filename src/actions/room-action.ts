"use server";

import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { formCreateRoomSchema } from "@/utils/form-schema";

export const createRoomAction = async (formData: FormData) => {
  let userId = await isAuthenticated();
  if (!userId)
    return {
      error: "Unauthenticated",
    };

  // Validate form fields here
  // let validateFormFields = formCreateRoomSchema.safeParse({
  //   name: formData.get("name"),
  // });
  // if (!validateFormFields.success) {
  //   return {
  //     error: validateFormFields.error.flatten().fieldErrors,
  //   };
  // }

  let name = formData.get("name")?.toString();
  try {
    if (!name) return false;

    // Add a room record
    let { data, errors } = await cookieBasedClient.models.Room.create({
      name,
    });

    // Add a UserRoom record
    let { errors: userRoomErrors } =
      await cookieBasedClient.models.UserRoom.create({
        userId,
        roomId: data?.id ?? "",
      });

    console.log(errors, userRoomErrors);
  } catch (e) {
    console.log(e);
  }
  return {
    message: "Done",
  };
};
