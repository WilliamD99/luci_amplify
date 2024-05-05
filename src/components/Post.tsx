"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Schema } from "../../amplify/data/resource";

export default function Post({
  post,
  onDelete,
  userId,
}: {
  post: Pick<Schema["Post"]["type"], "title" | "id" | "owner">;
  onDelete: (id: string) => void;
  userId: string | boolean;
}) {
  const router = useRouter();

  const onDetail = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <>
      <div>
        <button onClick={onDetail}>
          <div className="flex gap-2">
            <div>Title:</div>
            <div>{post.title}</div>
          </div>
        </button>
        <input type="hidden" name="id" id="id" value={post.id} />
        {userId === post.owner ? (
          <button className="ml-10" onClick={() => onDelete(post.id)}>
            X
          </button>
        ) : null}
      </div>
    </>
  );
}
