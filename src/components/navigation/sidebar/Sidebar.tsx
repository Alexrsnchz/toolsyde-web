import {
  BookIcon,
  CheckListIcon,
  FrameIcon,
  LayoutIcon,
  ToolsydeIcon,
} from '@icons/Icons.tsx'

export default function Sidebar() {
  return (
    <aside className="p-3 border border-gray-300 bg-gray-100">
      <nav>
        <div className="p-2 rounded-md bg-gray-300">
          <ToolsydeIcon className="h-6 w-6 text-gray-700" />
        </div>

        <hr className="my-5 border-t border-gray-700" />

        <div className="flex flex-col items-center gap-3 w-full">
          <div className="relative p-2 rounded-md group hover:bg-gray-200 transition-color duration-200 ease-in-out">
            <LayoutIcon className="w-5 h-5 text-gray-700 group-hover:text-neutral-950" />
          </div>
          <div className="relative p-2 rounded-md group hover:bg-gray-200 transition-color duration-200 ease-in-out">
            <CheckListIcon className="w-5 h-5 text-gray-700 group-hover:text-neutral-950" />
          </div>
          <div className="relative p-2 rounded-md group hover:bg-gray-200 transition-color duration-200 ease-in-out">
            <FrameIcon className="w-5 h-5 text-gray-700 group-hover:text-neutral-950" />
          </div>
          <div className="relative p-2 rounded-md group hover:bg-gray-200 transition-color duration-200 ease-in-out">
            <BookIcon className="w-5 h-5 text-gray-700 group-hover:text-neutral-950" />
          </div>
        </div>

        <hr className="my-5 border-t border-gray-700" />
      </nav>
    </aside>
  )
}
