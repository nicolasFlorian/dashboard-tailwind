'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesChange } = useFileInput()

  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)
    onFilesChange(files, multiple)
  }
  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFilesChange}
      multiple={multiple}
    />
  )
}
