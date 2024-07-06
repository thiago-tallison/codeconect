import { logger } from "@/logger";
import { Post } from "./components/post";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AuthorType = {
  id: number;
  name: string;
  username: string;
  avatar: string;
};

export type PostType = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: AuthorType;
};

type ResponseType = {
  data: PostType[];
  first?: number;
  prev?: number;
  next?: number;
  last?: number;
  pages?: number;
  items?: number;
};

const getAllPosts = async (page = 1, perPage = 6): Promise<ResponseType> => {
  const response = await fetch(
    `http://localhost:3333/posts?_page=${page}&_per_page=${perPage}`
  );

  if (response.ok) {
    logger.info("posts obtidos com sucesso");
    return response.json();
  } else {
    logger.error("Erro ao buscar posts.");
    return {
      data: [],
    };
  }
};

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <div>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </ul>

      <div className='flex gap-4 items-center justify-center mt-14'>
        {prev && (
          <Link className='text-[#BFFFC3] flex items-center' href={`/?page=${prev}`}>
            <ChevronLeft size={16} />
            Página anterior
          </Link>
        )}

        {next && (
          <Link className='text-[#BFFFC3] flex items-center' href={`/?page=${next}`}>
            Próxima página
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
