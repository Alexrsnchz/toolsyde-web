import { Outlet, useParams } from 'react-router'
import Header from '@components/navigation/header/Header.tsx'
import { utilsData } from '@data/utilsData.ts'

export default function ToolboxLayout() {
  const { category } = useParams()

  const path = category ? `/toolbox/${category}` : '/toolbox'
  const categoryData = utilsData.find((item) => item.link === path)

  const headerText = categoryData?.text ?? 'Toolbox'

  if (!categoryData) return headerText

  return (
    <>
      <Header icon={categoryData.icon} text={headerText} />

      <section className="md:h-[calc(100vh-79.5px)] py-6 md:py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <Outlet />
      </section>
    </>
  )
}
