import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Menu, X, Mail, Info } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  // State to handle the side menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ===== Entrance Animation =====
      gsap.from('.hero-headline', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
      })

      gsap.from('.hero-circle', {
        scale: 0.85,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      })

      gsap.from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
      })

      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
      })

      gsap.from('.hero-star', {
        rotation: 90,
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        delay: 0.7,
        ease: 'back.out(1.8)',
      })

      // ===== Simple Scroll Fade (NO PIN) =====
      gsap.to(heroRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-terracotta z-10"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <span className="font-display font-bold text-xl text-cream">El Charro</span>
        <div className="flex items-center">
          {/* Menu Button - Now pushed to the right */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full border-2 border-cream/30 text-cream hover:bg-cream/10 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- NEW SIDEBAR DRAWER --- */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Sidebar Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-[300px] bg-cream shadow-2xl transform transition-transform duration-500 ease-out p-8 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-terracotta hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
          </div>

          <div className="mt-12 space-y-10">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 text-terracotta mb-4">
                <Info size={20} />
                <h3 className="font-display font-bold text-2xl">About Us</h3>
              </div>
              <p className="text-terracotta/80 leading-relaxed">
                Authentic Mexican flavors delivered straight from our family to yours since 1987. We believe in tradition, community, and the perfect pan dulce.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <div className="flex items-center gap-2 text-terracotta mb-4">
                <Mail size={20} />
                <h3 className="font-display font-bold text-2xl">Contact</h3>
              </div>
              <ul className="space-y-3 text-terracotta/80">
                <li>📍 123 Brooklyn Ave, NY</li>
                <li>📞 (555) 123-4567</li>
                <li>📧 hola@elcharro.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* --- END SIDEBAR DRAWER --- */}

      {/* Starburst icon */}
      <div className="hero-star absolute right-[6vw] top-[12vh] text-cream will-change-transform">
        <Star size={44} fill="currentColor" strokeWidth={0} />
      </div>

      <div className="text-center px-6 w-full">
        <h1 className="hero-headline headline-xl text-cream text-[clamp(48px,10vw,140px)] leading-[0.92]">
          HECHO
        </h1>
        <h1 className="hero-headline headline-xl text-cream text-[clamp(48px,10vw,140px)] leading-[0.92]">
          CON
        </h1>
        <h1 className="hero-headline headline-xl text-cream text-[clamp(48px,10vw,140px)] leading-[0.92]">
          AMOR
        </h1>

        <div
          className="hero-circle mx-auto mt-8 w-[60vw] h-[60vw] max-w-[380px] max-h-[380px] rounded-full overflow-hidden will-change-transform"
          style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}
        >
          <img
            src="/images/pan-dulce.jpg"
            alt="Mexican sweet breads"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="hero-sub mt-8 text-lg md:text-xl text-cream/90 max-w-md mx-auto">
          Panadería familiar en el corazón de Brooklyn. Auténtico sabor mexicano desde 1987.
        </p>

        <div className="hero-cta mt-6 flex gap-4 justify-center">
  <a href="#menu" className="btn-primary inline-block cursor-pointer">
    View menu
  </a>
  <a href="#footer" className="btn-outline inline-block text-cream border-cream cursor-pointer">
    Place an order
  </a>
</div>
      </div>
    </section>
  )
}
