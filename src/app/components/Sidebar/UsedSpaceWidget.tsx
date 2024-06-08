export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:border dark:border-violet-700 dark:bg-violet-950">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
          Used Space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-zinc-300">
          Your team has used 80% of your available space.{' '}
          <a href="" className="underline">
            Need more?
          </a>
        </p>
      </div>
      <div className="h-2 rounded-full bg-zinc-200">
        <div className="h-full w-4/5 rounded-full bg-violet-600 dark:bg-violet-500"></div>
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-400 transition-all hover:text-violet-600 dark:text-violet-200 dark:hover:text-violet-400"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-600 transition-all hover:text-violet-800 dark:text-violet-300 dark:hover:text-violet-400"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
