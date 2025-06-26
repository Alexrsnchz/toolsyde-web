import { Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import NavigationLayout from './components/layouts/NavigationLayout.tsx'

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
