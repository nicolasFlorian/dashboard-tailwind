export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used Space
        </span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space.{' '}
          <a href="" className="underline">
            Need more?
          </a>
        </p>
      </div>
      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-full w-4/5 rounded-full bg-violet-600"></div>
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-400 transition-all hover:text-violet-600"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-600 transition-all hover:text-violet-800"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
