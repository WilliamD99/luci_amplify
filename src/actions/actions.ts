"use server";

import { cookieBasedClient } from "@/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Schema } from "../../amplify/data/resource";

export async function createPost(formData: FormData) {
  const { data, errors } = await cookieBasedClient.models.Post.create({
    title: formData.get("title")?.toString() || "",
  });
  console.log(data, errors);
  redirect("/");
}

export async function deletePost(id: string) {
  const { data, errors } = await cookieBasedClient.models.Post.delete({
    id,
  });
  console.log(data, "data");
  console.log(errors, "errors");
  revalidatePath("/");
}

export async function addComment(
  content: string,
  // post: Schema["Post"]["type"],
  paramsId: string
) {
  if (content.trim().length === 0) return;
  console.log(content);
  const { data, errors } = await cookieBasedClient.models.Comment.create({
    content,
    postId: paramsId,
  });

  console.log(data, "data");
  console.log(errors, "error");

  revalidatePath(`/posts/${paramsId}`);
}
