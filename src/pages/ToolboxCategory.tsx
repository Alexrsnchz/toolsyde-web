import { useParams } from 'react-router'

export default function ToolboxCategory() {
  const { category } = useParams()

  return (
    <h1>We're in {category}</h1>
  )
}