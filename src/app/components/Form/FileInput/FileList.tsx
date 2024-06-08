'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/app/utils/format-bytes'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '../../Button'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-violet-300 bg-violet-50 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-xs text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-violet-200">
                <div
                  className="h-full rounded-full bg-violet-700"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>
          <Button type="button" variant="icon" className="hover:bg-violet-100">
            <Trash2 className="h-4 w-4 text-zinc-500" />
          </Button>
        </div>
      ))}
    </div>
  )
}
