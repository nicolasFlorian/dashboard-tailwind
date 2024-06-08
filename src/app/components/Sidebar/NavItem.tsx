import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded-md px-3 py-2 transition-all hover:bg-violet-50"
    >
      <Icon className="h-4 w-4 text-zinc-500" />
      <span className="text-sm font-medium text-zinc-700 transition-all group-hover:text-violet-700">
        {title}
      </span>
      <ChevronDown className="ml-auto h-4 w-4 text-zinc-400 transition-all group-hover:text-violet-300" />
    </a>
  )
}
