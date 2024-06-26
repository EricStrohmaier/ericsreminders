"use client"
import { FC } from "react"

import {
  CalendarIcon,
  CheckIcon,
  FlagIcon,
  InboxIcon,
  ListIcon,
} from "lucide-react"
import { ListNavItem } from "./ListNavItem"
import { NavItem } from "./NavItem"

const NavList: FC = () => {
  return (
    <div className="my-10 flex min-h-[50vh] w-full flex-col justify-between">
      <div className="flex flex-col items-center justify-center space-y-5">
        {/* Adjust this grid to be 1 column on small screens and 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:w-[90%]">
          <NavItem
            href="/today"
            title="Today"
            Icon={CalendarIcon}
            style="bg-blue-600"
            number="0"
          />
          <NavItem
            href="/blog"
            title="Blog"
            Icon={CalendarIcon}
            style="bg-red-500"
            number="2"
          />
          <NavItem
            href="/all"
            title="All"
            Icon={InboxIcon}
            style="bg-gray-600"
            number="65"
          />
          <NavItem
            href="/flagged"
            title="Flagged"
            Icon={FlagIcon}
            style="bg-yellow-500"
            number="0"
          />
          <NavItem
            href="/completed"
            title="Completed"
            Icon={CheckIcon}
            style="bg-gray-600"
            number="0"
          />
        </div>
        <div className="md:w-[90%]">
          <h3 className="text-sm font-semibold">My Lists</h3>
          <nav className="mt-4 flex flex-col  items-center justify-center space-y-1 md:block">
            <ListNavItem
              href="/reminders"
              title="Reminders"
              Icon={ListIcon}
              number={5}
              iconBgColor="blue-600"
            />
            <ListNavItem
              href="/ideas"
              title="Ideas"
              Icon={ListIcon}
              number={10}
              iconBgColor="red-500"
            />
            <ListNavItem
              href="/recipe-ideas"
              title="Recipe Ideas"
              Icon={ListIcon}
              number={7}
              iconBgColor="green-600"
            />
            <ListNavItem
              href="/programming-ideas"
              title="Programming Ideas"
              Icon={ListIcon}
              number={12}
              iconBgColor="yellow-500"
            />
            <ListNavItem
              href="/bucket-list"
              title="Bucket List"
              Icon={ListIcon}
              number={3}
              iconBgColor="blue-600"
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavList
