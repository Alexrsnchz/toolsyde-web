import ToolsGrid from '@components/toolbox/ToolsGrid'
import { toolsData } from '@data/toolsData.ts'

export default function Toolbox() {
  return <ToolsGrid tools={toolsData} />
}
