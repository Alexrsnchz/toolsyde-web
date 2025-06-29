import Sidebar from '@components/navigation/sidebar/Sidebar.tsx'
import { Outlet } from 'react-router'
import Footer from '@components/navigation/Footer.tsx'

export default function NavigationLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 px-6 py-3 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
