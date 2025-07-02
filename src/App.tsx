import { Route, Routes } from 'react-router'
import NavigationLayout from '@components/layouts/NavigationLayout.tsx'
import Home from '@pages/Home.tsx'
import ToolDetail from '@pages/ToolDetail'

function App() {
  return (
    <Routes>
      <Route element={<NavigationLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:slug" element={<ToolDetail />} />
      </Route>
    </Routes>
  )
}

export default App
