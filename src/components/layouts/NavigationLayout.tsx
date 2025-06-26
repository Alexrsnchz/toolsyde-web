import Sidebar from '@components/navigation/sidebar/Sidebar.tsx';
import { Outlet } from 'react-router'
import Footer from '@components/navigation/Footer.tsx'

export default function NavigationLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>

  )
}