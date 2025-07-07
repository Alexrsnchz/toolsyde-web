import ToolCard from '@components/tools/ToolCard'
import { Tool } from '@customTypes/types'
import { toolsData } from '@data/toolsData'
import { useState } from 'react'

function Toolbox() {
  const [tools, _setTools] = useState<Tool[]>(toolsData)

  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-lg font-bold mb-4">Tools</h2>
      <div className="grid grid-cols-2 gap-6">
        {tools.map((tool) => (
          <ToolCard {...tool} />
        ))}
      </div>
    </div>
  )
}

export default Toolbox
