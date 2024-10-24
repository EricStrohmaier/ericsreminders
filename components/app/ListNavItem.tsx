import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"
import { IconType } from "react-icons" // Assuming you're using react-icons

interface ListNavItemProps {
  href: string
  title: string
  Icon: any
  number?: string | number
  iconClassName?: string
  targetBlank?: boolean
}

export const ListNavItem: FC<ListNavItemProps> = ({
  href,
  title,
  Icon,
  number,
  iconClassName,
  targetBlank,
}) => {
  // Style for the icon with dynamic background color, hidden on small screens
  const router = usePathname()

  const path = router?.split("/")[1]
  const isActive = `/${path}` === href

  const activeStyle = `${isActive ? `bg-[var(--secondary)]` : ""}`
  const iconStyle = `w-8 h-8 p-1 ${iconClassName}`

  return (
    <Link href={href} target={targetBlank ? "_blank" : ""}>
      <div
        className={`${activeStyle} my-2 flex justify-between rounded-[15px]`}
      >
        <div className="flex items-center">
          <Icon className={iconStyle} />
          <span className="ml-2 hidden sm:block">{title}</span>
        </div>
        {number !== undefined && (
          <span className="hidden items-center justify-center font-bold sm:flex">
            {number}
          </span>
        )}
      </div>
    </Link>
  )
}
