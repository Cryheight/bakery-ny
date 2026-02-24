import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'
import Highlight from './sections/Highlight'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Sections */}
      <Hero />
      <About />
      <Menu />
      <Highlight />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
