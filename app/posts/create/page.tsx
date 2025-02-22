import React from 'react';
import PostForm from "@/components/post-form";
import {createPost} from "@/actions/posts";

function PostCreate() {
    return (
        <div>
            <PostForm formAction={createPost} initialData={{title:'', content:''}} />
        </div>
    );
}

export default PostCreate;