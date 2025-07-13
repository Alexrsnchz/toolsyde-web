import { PlusIcon, ToolsOffIcon } from '@icons/Icons'

export default function NoToolsMessage({ category }: { category: string }) {
  return (
    <div className="flex items-center justify-center max-w-3xl mx-auto h-full">
      <article className="border-2 border-dashed border-gray-300/60 bg-gray-100/40 rounded-md w-full">
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
          <div className="p-4 rounded-md bg-gray-200 mb-4">
            <ToolsOffIcon className="h-8 w-8 text-gray-600" />
          </div>

          <h3 className="font-semibold text-lg mb-2">
            No {category} yet
          </h3>

          <p className="text-sm text-gray-600 mb-4 max-w-sm">
            {`We're working on adding ${category} tools to help with your development workflow.`}
          </p>

          <button className="flex items-center gap-2 text-sm px-4 py-2 border border-gray-400 rounded-md hover:cursor-pointer font-semibold">
            <PlusIcon className="size-4" />
            Request Tool
          </button>

          <span className="mt-4 text-gray-600 text-xs">
            Coming soon in future updates!
          </span>
        </div>
      </article>
    </div>
  )
}
