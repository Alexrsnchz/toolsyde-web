import { ToolCardProps } from '@customTypes/toolsTypes'
import ToolCard from './ToolCard'

export default function ToolsGrid({ tools }: { tools: ToolCardProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool, index) => (
        <div
          key={index}
          style={{
            opacity: 0,
            animation: `fadeIn 0.2s ease-in-out forwards`,
            animationDelay: `${index * 100}ms`,
          }}
        >
          <ToolCard {...tool} />
        </div>
      ))}
    </div>
  )
}
