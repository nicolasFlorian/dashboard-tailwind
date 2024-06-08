import { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {}

export function Root(props: InputRootProps) {
  return (
    <div
      className="group flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-zinc-400 transition-all focus-within:text-zinc-500 focus-within:outline"
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
      className="flex-1 border-0 bg-transparent p-0 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
      {...props}
    />
  )
}
