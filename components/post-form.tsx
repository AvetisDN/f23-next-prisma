"use client";

import Link from "next/link";
import { useActionState } from "react";

interface FormErrors {
  title?: string[];
  content?: string[];
}

interface FormState {
  errors: FormErrors;
}

interface PostFormProps {
  formAction: any;
  initialData: {
    title: string;
    content: string;
  };
}

function PostForm({ formAction, initialData }: PostFormProps) {
  const [formState, action] = useActionState<FormState>(formAction, {
    errors: {},
  });
  return (
    <div className={`bg-stone-900 min-h-screen p-6 text-lime-100/80`}>
      <main className={`max-w-5xl mx-auto flex flex-col gap-6`}>
        <header className={`flex gap-4 justify-center`}>
          <h1 className={`text-5xl font-extrabold text-lime-300 text-center`}>
            {initialData.title ? "Update Post" : "Create Post"}
          </h1>
        </header>
        <form action={action} className={`flex flex-col gap-6`}>
          <div className={`flex flex-col gap-3`}>
            <input
              type="text"
              name="title"
              placeholder={`Title`}
              defaultValue={initialData.title}
              className={`w-full rounded-4xl border-2 border-stone-700 py-4 px-6 text-lg font-medium`}
            />
              {formState.errors.title && (
                  <div className={`text-red-400`}>
                      {formState.errors.title?.join(', ')}
                  </div>
              )}
          </div>
            <div className={`flex flex-col gap-3`}>
            <textarea
              placeholder={`Content`}
              name="content"
              defaultValue={initialData.content}
              rows={4}
              className={`w-full rounded-4xl resize-none border-2 border-stone-700 py-4 px-6 text-lg font-medium`}
            ></textarea>
              {formState.errors.content && (
                  <div className={`text-red-400`}>
                      {formState.errors.content?.join(', ')}
                  </div>
              )}
          </div>
          <div className={`flex gap-6`}>
            <button className={`grow py-5 px-6 text-xl font-semibold bg-lime-400 rounded-full text-stone-950 disabled:pointer-events-none disabled:opacity-20 cursor-pointer flex items-center justify-center`}>
              Save Post
            </button>
            <Link href="/" className={`grow py-5 px-6 text-xl font-semibold bg-red-500 rounded-full text-stone-50 disabled:pointer-events-none disabled:opacity-20 cursor-pointer flex items-center justify-center`}>Cancel</Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PostForm;
