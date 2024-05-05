import React from "react";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import AddComment from "@/components/AddComment";
import { addComment } from "@/actions/actions";
import { Schema } from "../../../../amplify/data/resource";

export default async function Post({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  const isSignedIn = await isAuthenticated();
  const { data: post } = await cookieBasedClient.models.Post.get(
    {
      id: params.id,
    },
    {
      selectionSet: ["id", "title"],
    }
  );

  const { data: comments } = await cookieBasedClient.models.Comment.list({
    selectionSet: ["content", "postId", "id"],
    // filter: {
    //   postId: {
    //     eq: params.id,
    //   },
    // },
  });

  console.log(comments);

  return (
    <>
      <div>Post</div>
      <p>{post?.title}</p>

      <p className="font-bold">Comments</p>

      {isSignedIn ? (
        <AddComment addComment={addComment} paramsId={params.id} post={post} />
      ) : null}

      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
            <form
              action={async (formData) => {
                "use server";
                revalidatePath(`/posts/${params.id}`);
              }}
            >
              <input type="hidden" name="id" id="id" value={comment.id} />
              {isSignedIn ? (
                <button type="submit" className="ml-10">
                  X
                </button>
              ) : null}
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
