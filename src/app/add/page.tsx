import React from "react";
import { createPost } from "@/actions/actions";

export default function AddPage() {
  return (
    <>
      <div>
        <form action={createPost} className="flex flex-col items-center gap-4">
          <input type="text" name="title" id="title" placeholder="Title" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
