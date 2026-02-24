import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Highlight() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.highlight-image', {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.highlight-headline', {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.highlight-price', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.highlight-desc', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.highlight-cta', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-terracotta py-20 z-40"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className="highlight-image card-rounded overflow-hidden will-change-transform"
            style={{
              boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
            }}
          >
            <img
              src="/images/birthday-cake.jpg"
              alt="Pastel de tres leches"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="text-center md:text-left">
            <h2 className="highlight-headline headline-xl text-cream text-[clamp(36px,6vw,90px)] leading-[0.92]">
              NUESTRO
            </h2>
            <h2 className="highlight-headline headline-xl text-cream text-[clamp(36px,6vw,90px)] leading-[0.92]">
              FAVORITO
            </h2>

            <p className="highlight-price mt-8 text-olive font-display font-bold text-[clamp(36px,5vw,72px)]">
              $35.00
            </p>

            <p className="highlight-desc mt-4 text-cream/90 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Pastel de tres leches con fresas frescas, crema batida y el toque justo de vainilla.
              Perfecto para celebraciones especiales.
            </p>

            <button className="highlight-cta mt-8 btn-primary inline-flex items-center gap-2">
              <Plus size={18} />
              Agregar al pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
