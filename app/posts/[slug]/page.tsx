import { Post } from "@/app/components/post";
import { PostType } from "@/app/page";
import { remark } from "remark";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";
import html from "remark-html";
import rehypeStringify from "rehype-stringify";
import styles from "./styles.module.css";
import { LinkHomePage } from "@/app/components/link-home-page";
import { CommentsSection } from "@/app/components/coments";

const getPost = async (slug: string): Promise<PostType> => {
    const response = await fetch(`http://localhost:3333/posts?slug=${slug}`);
    if (response.ok) {
        const data = await response.json();
        const post = data[0];

        const markdownContent = await remark().use(html).process(post.markdown);

        const highlightedResult = await rehype()
            .use(rehypeHighlight)
            .use(rehypeStringify)
            .process(markdownContent.toString());

        const contentHTML = highlightedResult.toString();
        return { ...post, markdown: contentHTML };
    }

    return {} as PostType;
};

export const PostDetails: React.FC<{ params: { slug: string } }> = async ({
    params,
}) => {
    const { slug } = params;
    const post = await getPost(slug);

    return (
        <div>
            {post && <Post {...post} />}

            <div className="mt-4">
                <h4 className="text-[#888888] font-semibold text-[22px] leading-[33px] mb-3" >Código:</h4>
                <div
                    className={styles.codigo}
                    dangerouslySetInnerHTML={{ __html: post.markdown }}
                ></div>
            </div>


            <CommentsSection />

            <LinkHomePage />
        </div>
    );
};

export default PostDetails;
