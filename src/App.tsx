import { Navigate, Route, Routes } from 'react-router'
import MainLayout from '@components/layouts/MainLayout.tsx'
import Toolbox from '@pages/Toolbox.tsx'
import ToolboxLayout from '@components/layouts/ToolboxLayout.tsx'
import ToolboxCategory from '@pages/ToolboxCategory.tsx'
import ToolDetail from '@pages/ToolDetail'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/toolbox" replace />} />

        <Route path="toolbox" element={<ToolboxLayout />}>
          <Route index element={<Toolbox />} />

          <Route path=":category">
            <Route index element={<ToolboxCategory />} />

            <Route path=":slug" element={<ToolDetail />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
