import ToolCard from '@components/toolbox/ToolCard.tsx'
import { toolsData } from '@data/toolsData.ts'

export default function Toolbox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {toolsData.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  )
}
