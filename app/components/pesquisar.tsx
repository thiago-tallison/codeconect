import { Search } from "lucide-react"

const Pesquisar = () => {
  return (
    <form className='flex gap-2 w-full mb-4' action='/'>
      <div className='bg-[#171D1F] text-white flex gap-4 items-center px-4 rounded-md flex-1 focus-within:ring hover:ring'>
        <Search size={18} />
        <input
          name='q'
          className='bg-transparent py-2 flex-1 outline-none border-none'
          placeholder='Digite o que você procura'
        />
      </div>

      <button
        className='bg-[#81FE88] text-black font-semibold py-3 px-4 rounded-lg'
        type='button'
      >
        Buscar
      </button>
    </form>
  )
}

export default Pesquisar
