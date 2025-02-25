'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder?: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-sm shadow-sm transition-all focus:outline focus:outline-zinc-400 data-[placeholder]:text-zinc-500 dark:border-zinc-500 dark:bg-zinc-700 dark:text-zinc-100">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black dark:text-zinc-100"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 text-zinc-500 dark:text-zinc-300" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-300 bg-white text-sm dark:border-zinc-500 dark:bg-zinc-700 dark:text-zinc-100"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
