import { Route, Routes } from 'react-router'
import NavigationLayout from '@components/layouts/NavigationLayout.tsx'
import Home from '@pages/Home.tsx'

function App() {
  return (
    <Routes>
      <Route element={<NavigationLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
