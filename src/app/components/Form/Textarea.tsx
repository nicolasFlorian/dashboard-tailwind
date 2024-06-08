import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-all focus:outline focus:outline-zinc-400"
      {...props}
    ></textarea>
  )
}
