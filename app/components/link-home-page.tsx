import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const LinkHomePage = () => {
  return (
    <Link
      href='/'
      className='text-[#BFFFC3] underline flex items-center justify-center mt-4'
    >
      <ChevronLeft size={16} />
      Página inicial
    </Link>
  )
}
