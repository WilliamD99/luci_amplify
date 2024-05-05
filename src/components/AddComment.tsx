"use client";

import React, { useState } from "react";
import { Schema } from "../../amplify/data/resource";

export default function AddComment({
  addComment,
  post,
  paramsId,
}: {
  addComment: (content: string, paramsId: string) => void;
  post: any; // Schema["Post"]["type"];
  paramsId: string;
}) {
  const [comment, setComment] = useState("");

  const add = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(comment);
    await addComment(comment, paramsId);
    setComment("");
  };

  return (
    <>
      <form onSubmit={add}>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Add comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="ml-10">
          Submit
        </button>
      </form>
    </>
  );
}
