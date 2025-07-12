import ToolCard from '@components/toolbox/ToolCard'
import { getToolCategory } from '@data/categoriesData'
import { toolsData } from '@data/toolsData'
import { useParams } from 'react-router'

export default function ToolboxCategory() {
  const { category } = useParams()

  const categoryTools = toolsData.filter((tool) => {
    const toolCategory = getToolCategory(tool.category)

    if (!toolCategory) {
      return false
    }

    return toolCategory.slug === category
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categoryTools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  )
}
