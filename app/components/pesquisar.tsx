"use client"

import { Search } from "lucide-react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { FormEvent, useCallback, useRef } from "react"
import { QuantityResults } from "./results-quantity"

export const Pesquisar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete("q")
      }

      return params.toString()
    },
    [searchParams]
  )

  const getSearchTerm = useCallback(() => {
    return searchParams.get("q") || ""
  }, [searchParams])

  const searchTerm = getSearchTerm()

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (inputRef.current) {
        const newQueryString = createQueryString("q", inputRef.current.value)
        router.push(`${pathname}?${newQueryString}`)
      }
    },
    [inputRef, createQueryString]
  )

  return (
    <form className='flex gap-2 w-full mb-4' onSubmit={e => handleSearch(e)}>
      <div className='bg-[#171D1F] text-white flex gap-4 items-center px-4 rounded-md flex-1 focus-within:ring hover:ring'>
        <Search size={18} />
        <input
          className='bg-transparent py-2 flex-1 outline-none border-none'
          type='text'
          placeholder='Digite o que você procura'
          ref={inputRef}
          defaultValue={searchTerm}
        />
      </div>

      <button
        className='bg-[#81FE88] text-black font-semibold py-3 px-4 rounded-lg'
        type='submit'
      >
        Buscar
      </button>
    </form>
  )
}
