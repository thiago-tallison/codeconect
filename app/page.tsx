import { logger } from "@/logger"
import { Post } from "./components/post"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import db from "../prisma/db"
import { Suspense } from "react"
import Loading from "./loading"
import { QuantityResults } from "./components/results-quantity"

type AuthorType = {
  id: number
  name: string
  username: string
  avatar: string
}

export type PostType = {
  id: number
  cover: string
  title: string
  slug: string
  body: string
  markdown: string
  author: AuthorType
  createdAt?: Date
  updatedAt?: Date
}

type ResponseType = {
  data: PostType[]
  first?: number
  prev?: number
  next?: number
  last?: number
  pages?: number
  items?: number
}

const getAllPosts = async (
  page = 1,
  searchTerm = ""
): Promise<ResponseType> => {
  try {
    const total = await db.post.count({
      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    })

    const perPage = 6
    const totalPages = Math.ceil(total / perPage)
    const next = totalPages - page > 0 ? page + 1 : undefined
    const prev = page > 1 ? page - 1 : undefined

    const posts = await db.post.findMany({
      include: {
        author: true,
      },
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    })

    return {
      data: posts,
      next,
      prev,
      items: total,
    }
  } catch (error) {
    logger.error("Falha oa obter posts!", { error })
    return {
      data: [],
    }
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const currentPage = Number(searchParams?.page || 1)
  const searchTerm = searchParams?.q
  const {
    data: posts,
    prev,
    next,
    items,
  } = await getAllPosts(currentPage, searchTerm)
  console.log("🚀 ~ posts:", posts)

  const getLink = (params: Object): Object => {
    return { pathname: "/", query: { ...searchParams, ...params } }
  }

  return (
    <div>
      <QuantityResults quantity={items || 0} searchTerm={searchTerm} />

      <Suspense fallback={<Loading />}>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14'>
          {posts && posts.map(post => <Post key={post.id} {...post} />)}
        </ul>
      </Suspense>

      <div className='flex gap-4 items-center justify-center mt-14'>
        {prev && (
          <Link
            className='text-[#BFFFC3] flex items-center'
            href={getLink({ page: prev })}
          >
            <ChevronLeft size={16} />
            Página anterior
          </Link>
        )}

        {next && (
          <Link
            className='text-[#BFFFC3] flex items-center'
            href={getLink({ page: next })}
          >
            Próxima página
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
