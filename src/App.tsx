import { Navigate, Route, Routes } from 'react-router'
import MainLayout from '@components/layouts/MainLayout.tsx'
import Toolbox from '@pages/Toolbox.tsx'
import ToolDetail from '@pages/ToolDetail'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/toolbox" replace />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/toolbox/:category/:slug" element={<ToolDetail />} />
      </Route>
    </Routes>
  )
}

export default App
