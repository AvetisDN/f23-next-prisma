import {Post} from "@prisma/client";
import {db} from "@/db";
import {notFound} from "next/navigation";

export async function fetchPosts(): Promise<Post[]> {
    return db.post.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            }
        ]
    });
}

export async function fetchPost(id: string): Promise<Post> {
    const post = await db.post.findFirst({
        where: {
            id
        }
    });

    if(!post) {
        notFound();
    }
    return post;
}