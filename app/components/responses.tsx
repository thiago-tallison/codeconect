"use client"

import { useState } from "react"
import { ShowLessCommentsButton, ShowMoreCommentsButton } from "./comment"
import Response, { ResponseType } from "./response"

export type ResponsesType = {
  answersCount?: number
  responses: ResponseType[]
}

const Responses = ({ responses }: ResponsesType) => {
  const [answersCount, setAnswersCount] = useState(0)

  if (responses.length === 0) return null
  return (
    <div>
      {answersCount === 0 && <ShowMoreCommentsButton />}
      {responses.slice(0, answersCount + 1).map((response, index) => {
        return (
          <Response key={index} author={response.author} text={response.text} />
        )
      })}

      {answersCount > 0 && <ShowLessCommentsButton />}
    </div>
  )
}

export default Responses
