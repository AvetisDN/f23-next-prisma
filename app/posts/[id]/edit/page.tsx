import { updatePost } from "@/actions/posts";
import PostForm from "@/components/post-form";
import { fetchPost } from "@/db/queries/posts";


interface PostEditProps {
  id: string;
}

const PostEdit = async ({ params }: { params: Promise<PostEditProps> }) => {
  const { id } = await params;

  const post = await fetchPost(id);

  const updateAction = updatePost.bind(null, id);

  return (
    <main className={`max-w-5xl mx-auto flex flex-col gap-6`}>
      <PostForm
        formAction={updateAction}
        initialData={{ title: post?.title ?? "", content: post?.content ?? "" }}
      />
    </main>
  );
};

export default PostEdit;
