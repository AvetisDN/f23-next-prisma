import { fetchPosts } from "@/db/queries/posts";
import Link from "next/link";
import PostDelete from "@/components/post-delete";

const trimText = (text: string, words: number) => {
  let trim = text.split(" ").slice(0, words).join(" ");
  if (trim[trim.length - 1] === ",") {
    trim = trim.slice(0, trim.length - 1);
  }
  return trim;
};

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className={`max-w-5xl mx-auto flex flex-col gap-6`}>
      <header className={`flex gap-4 justify-center`}>
        <h1 className={`text-5xl font-extrabold text-lime-300 text-center`}>
          NexsmaJS
        </h1>
        <Link href="/posts/create" className={`hover:underline font-medium`}>
          Create post
        </Link>
      </header>
      <section className={`grid gap-5 grid-cols-1 lg:grid-cols-2`}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={`flex flex-col gap-3 p-5 bg-stone-800 rounded`}
          >
            <Link
              href={`/posts/${post.id}`}
              className={`text-2xl font-bold text-orange-400 hover:underline`}
            >
              {post.title}
            </Link>
            <div className={`font-light`}>
              <div className={`max-h-[8.5ch]  overflow-hidden`} dangerouslySetInnerHTML={{__html: trimText(post.content, 24) + '...'}}>
              </div>
            </div>
            <div className={`flex justify-between items-center gap-4 text-sm`}>
              <div className={`opacity-50`}>
                {`Posted at ${post.updatedAt.toLocaleDateString()} - ${post.updatedAt.toLocaleTimeString()}`}
              </div>
              <div className="flex gap-4">
                <Link href={`/posts/${post.id}/edit`}>Edit</Link>
                <PostDelete id={post.id} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
