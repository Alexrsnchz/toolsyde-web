import Sidebar from '@components/navigation/sidebar/Sidebar.tsx'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-scroll h-screen">
        <Outlet />
      </main>
    </div>
  )
}
