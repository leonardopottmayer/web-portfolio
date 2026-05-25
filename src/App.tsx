import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default App
