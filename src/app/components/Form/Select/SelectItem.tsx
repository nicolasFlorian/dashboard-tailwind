'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none transition-all data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-900"
      {...props}
    >
      <Select.ItemText>{text}</Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-600 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
