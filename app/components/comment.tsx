"use client"

import { useState } from "react"
import Avatar from "./avatar"
import Responses from "./responses"

export type CommentType = {
  author: {
    name: string
    imageLink: string
  }
  text: string
  responses: Omit<CommentType, "responses">[]
}

export const CommentText = ({ text }: { text: string }) => {
  return (
    <span className='text-justify flex-1 font-normal text-[#171D1F]'>
      {text}
    </span>
  )
}

export const AnswerCommentButton = () => {
  return (
    <button className='font-semibold text-[#171D1F] text-[15px] bg-none border-none mt-2'>
      Responder
    </button>
  )
}

export const ShowMoreCommentsButton = () => {
  return (
    <button className='text-[#171D1F] flex items-center gap-1 text-[12.5px] mt-2'>
      <hr className='w-8 border-[#171D1F]' />
      Ver respostas
    </button>
  )
}

export const ShowLessCommentsButton = () => {
  return (
    <button className='font-semibold text-[#171D1F] text-[15px] bg-none border-none mt-2'>
      Responder
    </button>
  )
}

export const Comment = ({ author, responses, text }: CommentType) => {
  const [answersCount, setAnswersCount] = useState(1)

  return (
    <li className='py-4'>
      <div className='flex gap-3 items-center'>
        <Avatar name={author.name} imageLink={author.imageLink} />
        <CommentText text={text} />
      </div>

      <AnswerCommentButton />

      <Responses answersCount={answersCount} responses={responses} />
    </li>
  )
}
