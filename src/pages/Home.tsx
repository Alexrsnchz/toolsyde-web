import ToolCard from '@components/tools/ToolCard'
import { Tool } from '@customTypes/types'
import { toolsData } from '@data/toolsData'
import { useState } from 'react'

function Home() {
  const [tools, setTools] = useState<Tool[]>(toolsData)

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Tools</h2>
      <div className="grid grid-cols-2 gap-6">
        {tools.map((tool) => (
          <ToolCard {...tool} />
        ))}
      </div>
    </>
  )
}

export default Home
