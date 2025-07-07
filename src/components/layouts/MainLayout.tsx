import Sidebar from '@components/navigation/sidebar/Sidebar.tsx'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
