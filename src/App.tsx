import { Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { DocsPage } from './pages/DocsPage'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HomePage />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="*" element={<div className="not-found page-width"><span>404</span><h1>Page not found.</h1></div>} />
      </Route>
    </Routes>
  )
}
