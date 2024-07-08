"use client"

import { AlertCircle, File, LogOut, UserCircle } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import Link from "next/link"

const Aside = () => {
  const pathname = usePathname()

  const links = [
    {
      label: "Feed",
      href: "/feed",
      icon: File,
    },
    {
      label: "Perfil",
      href: "/perfil",
      icon: UserCircle,
    },
    {
      label: "Sobre nós",
      href: "/sobre-nos",
      icon: AlertCircle,
    },
    {
      label: "Sair",
      href: "/sair",
      icon: LogOut,
    },
  ]

  return (
    <div className='md:bg-[#171D1F] rounded-lg flex justify-between md:h-full md:min-h-screen md:w-[177px] md:py-10 md:mb-14 md:block'>
      <Link href='/'>
        <Image
          className='md:mx-auto md:mb-20 cursor-pointer'
          alt='Logo da code connect'
          src='/logo.svg'
          width={128}
          height={40}
        />
      </Link>

      <nav>
        <ol className='flex flex-col items-center gap-10'>
          <li>
            <a
              href='#'
              className='bg-transparent font-semibold text-[#81FE88] border border-[#81FE88] rounded-md py-3 px-4'
            >
              Publicar
            </a>
          </li>

          {links.map(link => {
            const isActive = pathname === link.href
            const textColor = isActive ? "text-white" : "text-[#888888]"
            const classes = classNames(
              "bg-transparent font-semibold rounded-md",
              "flex flex-col items-center gap-1",
              textColor
            )
            const iconsClasses = classNames(textColor)

            return (
              <li
                className='hidden md:block'
                aria-current={isActive ? "page" : undefined}
                key={Math.random().toString(32).substring(2)}
              >
                <a className={classes} href={link.href}>
                  <link.icon className={iconsClasses} width={32} />
                  {link.label}
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
export default Aside
