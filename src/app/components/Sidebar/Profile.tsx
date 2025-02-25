import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/nicolasFlorian.png"
        className="h-8 w-8 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Nicolas Floriano
        </span>
        <span className="dark:textzinc300 truncate text-xs text-zinc-500 dark:text-zinc-300">
          nicolasfloriano@gmail.com
        </span>
      </div>
      <Button type="button" variant="icon" className="ml-auto">
        <LogOut className="h-4 w-4 text-zinc-500 dark:text-zinc-100" />
      </Button>
    </div>
  )
}
