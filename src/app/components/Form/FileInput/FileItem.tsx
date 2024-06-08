import { formatBytes } from '@/app/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '../../Button'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-300 p-4 dark:border-zinc-700',
    cloudIcon:
      'rounded-full border-4 p-2 border-violet-100 bg-violet-200 text-violet-600 dark:border-violet-700 dark:bg-violet-600 dark:text-violet-300',
    trashIcon: 'text-zinc-600 hover:bg-zinc-100',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container:
          'border-violet-300 bg-violet-50 dark:border-violet-500 dark:bg-violet-950',
      },
      error: {
        container:
          'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900 dark:bg-opacity-20',
        cloudIcon:
          'border-red-100 bg-red-200 text-red-600 dark:border-red-700 dark:bg-red-600 dark:text-red-300',
        trashIcon:
          'text-red-600 hover:bg-red-100 dark:hover:bg-zinc-950 transition-all',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
  state?: 'progress' | 'complete' | 'error'
}

export function FileItem({ name, size, state = 'progress' }: FileItemProps) {
  const progress: string = state === 'complete' ? '100%' : '50%'
  const { container, cloudIcon, trashIcon } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={cloudIcon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700 dark:text-red-500">
              Upload failed, please try again.
            </span>
            <span className="text-xs text-red-600 dark:text-red-500">
              {name}
            </span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-300">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-violet-200">
              <div
                className="h-full rounded-full bg-violet-700"
                style={{ width: progress }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {progress}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white dark:text-violet-950" />
      ) : (
        <Button type="button" variant="icon" className={trashIcon()}>
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
