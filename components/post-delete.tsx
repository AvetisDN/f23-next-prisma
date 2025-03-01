"use client";

import { FormEvent } from "react";
import { deletePost } from "@/actions/posts";

interface PostDeleteProps {
  id: string;
}

const PostDelete = ({ id }: PostDeleteProps) => {
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this post?")) {
          deletePost(id);
        }
      }}
    >
      <button type={"submit"}>Delete</button>
    </form>
  );
};

export default PostDelete;
