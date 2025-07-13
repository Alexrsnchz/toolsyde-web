import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import ToolsGrid from '@components/toolbox/ToolsGrid'
import NoToolsMessage from '@components/toolbox/NoToolsMessage'
import { getToolCategory } from '@data/categoriesData'
import { toolsData } from '@data/toolsData'

export default function ToolboxCategory() {
  const { category } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!category) {
      navigate('/toolbox')
    }
  }, [category, navigate])

  if (!category) return null

  const categoryTools = toolsData.filter((tool) => {
    const toolCategory = getToolCategory(tool.category)

    if (!toolCategory) {
      return false
    }

    return toolCategory.slug === category
  })

  return categoryTools.length > 0 ? (
    <ToolsGrid tools={categoryTools} />
  ) : (
    <NoToolsMessage category={category} />
  )
}
