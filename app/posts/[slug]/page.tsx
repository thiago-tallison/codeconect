import { Post } from "@/app/components/post"
import { PostType } from "@/app/page"
import { remark } from "remark"
import { rehype } from "rehype"
import rehypeHighlight from "rehype-highlight"
import html from "remark-html"
import rehypeStringify from "rehype-stringify"
import styles from "./styles.module.css"
import { LinkHomePage } from "@/app/components/link-home-page"
import { CommentsSection } from "@/app/components/coments"
import db from "@/prisma/db"
import { logger } from "@/logger"
import { redirect } from "next/navigation"

const getPost = async (slug: string) => {
  try {
    const post = await db.post.findUnique({
      where: { slug },
      include: { author: true },
    })

    if (!post) throw new Error(`Post com slug ${slug} não encontrado`)
    const markdownContent = await remark().use(html).process(post.markdown)

    const highlightedResult = await rehype()
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(markdownContent.toString())

    const contentHTML = highlightedResult.toString()

    return { ...post, markdown: contentHTML }
  } catch (error) {
    logger.error("Falha ao obter post com slug:", {
      slug,
      error,
    })

    redirect("/not-found")
  }
}

export const PostDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = await getPost(slug)

  return (
    <div>
      {post && <Post {...post} />}

      <div className='mt-4'>
        <h4 className='text-[#888888] font-semibold text-[22px] leading-[33px] mb-3'>
          Código:
        </h4>
        <div
          className={styles.codigo}
          dangerouslySetInnerHTML={{ __html: post.markdown }}
        ></div>
      </div>

      <CommentsSection />

      <LinkHomePage />
    </div>
  )
}

export default PostDetails
