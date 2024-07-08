import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        className='text-center'
        src={"/erro_404.png"}
        width={665}
        height={367}
        alt="Imagem de um robô triste dentro de uma poça d'água em uma floresta"
      />
      <h2 className='font-medium text-[37px] leading-[44.4px] text-center text-[#81FE88] mt-14 mb-4'>
        OPS! Página não encontrada.
      </h2>
      <p className='text-[26px] leading-[39px] text-white text-center'>
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>

      <Link className='text-[#BFFFC3] flex items-center mt-10' href={`/`}>
        <ChevronLeft size={16} />
        Voltar ao feed
      </Link>
    </div>
  )
}
