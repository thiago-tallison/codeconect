import Avatar from "./avatar"
import { CommentText, CommentType } from "./comment"

export type ResponseType = Omit<CommentType, "responses">

const Response = ({ author, text }: ResponseType) => {
  return (
    <div className='py-4 ml-10'>
      <div className='flex gap-3 items-center'>
        <Avatar name={author.name} imageLink={author.imageLink} />
        <CommentText text={text} />
      </div>
    </div>
  )
}

export default Response
