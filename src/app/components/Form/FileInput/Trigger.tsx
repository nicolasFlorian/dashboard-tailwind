'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-dashed border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:bg-opacity-50 hover:text-violet-500"
    >
      <div className="border-6 rounded-full border-zinc-50 bg-slate-100 p-2 transition-all group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 transition-all group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG, or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
