import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import CursorHalo from './components/CursorHalo'
import AmbientPlayer from './components/AmbientPlayer'
import CommandPalette from './components/CommandPalette'
import PageTransition from './components/PageTransition'

function Shell() {
  const [cmd, setCmd] = useState(false)
  const location = useLocation()
  return (
    <div className="grain min-h-svh bg-bg text-ink">
      <CursorHalo />
      <Header onCommand={() => setCmd(true)} />
      <CommandPalette open={cmd} onOpenChange={setCmd} />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
      <AmbientPlayer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
