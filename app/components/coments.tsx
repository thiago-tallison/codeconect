import { Comment } from "./comment"

export const CommentsSection = () => {
  return (
    <section className='bg-[#888888] mt-10 p-8'>
      <h4 className='text-[#171D1F] text-[22px] font-semibold mb-6'>
        Comentários
      </h4>
      <ul className='divide-y divide-[#3E3E3F] '>
        <Comment
          author={{
            name: "thiago",
            imageLink: "https://github.com/thiago-tallison.png",
          }}
          responses={[
            {
              author: {
                name: "fulano123",
                imageLink: "https://github.com/thiago-tallison.png",
              },
              text: "Um texto muito maneiro",
            },
          ]}
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </ul>
    </section>
  )
}
