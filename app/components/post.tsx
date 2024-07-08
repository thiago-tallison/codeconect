import Image from "next/image"
import Profile from "./profile"
import { PostType } from "../page"
import Link from "next/link"

const Post = (props: PostType) => {
  const { author, body, cover, markdown, slug, title } = props

  return (
    <li className='rounded-xl bg-[#171D1F]'>
      <div className='bg-[#888888] p-6 rounded-t-xl'>
        <Image
          className='object-contain'
          src={cover}
          width={600}
          height={200}
          alt='Post image'
        />
      </div>

      <div className='text-[#BCBCBC] space-y-2 p-4'>
        <h5 className=' text-lg font-semibold'>{title}</h5>
        <p className='text-[15px] leading-[22.5px] text-justify'>{body}</p>
        <Link
          className='text-[#81FE88] underline text-lg'
          href={`/posts/${slug}`}
        >
          Ver detalhes
        </Link>
      </div>

      <Profile name={author.username} image={author.avatar} />
    </li>
  )
}

export default Post
