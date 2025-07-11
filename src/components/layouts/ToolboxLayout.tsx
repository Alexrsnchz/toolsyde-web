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

      <section className="h-[calc(100vh-79.5px)] py-12">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </section>
    </>
  )
}
