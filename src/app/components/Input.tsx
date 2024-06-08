import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends ComponentProps<'div'> {}

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'group flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-zinc-400 transition-all',
        'focus-within:text-zinc-500 focus-within:outline',
        'dark:border-zinc-500 dark:bg-zinc-700 dark:text-zinc-500',
        props.className,
      )}
      {...props}
    ></div>
  )
}

interface InputPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

interface InterfaceControlProps extends ComponentProps<'input'> {}

export function Control(props: InterfaceControlProps) {
  return (
    <input
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-sm text-zinc-900 outline-none placeholder:text-zinc-400',
        'dark:text-zinc-100 dark:placeholder-zinc-500',
      )}
      {...props}
    />
  )
}
