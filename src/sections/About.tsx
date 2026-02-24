import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.about-headline', {
        x: -60,
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

      gsap.from('.about-body', {
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

      gsap.from('.about-circle', {
        x: 60,
        scale: 0.85,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.about-badge', {
        y: 20,
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.6)',
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
      className="relative min-h-screen flex items-center bg-cream py-20 z-20"
    >
      {/* Wavy line decoration */}
      <svg
        className="absolute top-0 left-0 w-full h-16 text-terracotta"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 Q360,64 720,32 T1440,32 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="about-headline headline-xl text-terracotta text-[clamp(48px,8vw,120px)] leading-[0.92]">
              DESDE
            </h2>
            <h2 className="about-headline headline-xl text-terracotta text-[clamp(48px,8vw,120px)] leading-[0.92]">
              1987
            </h2>

            <p className="about-body mt-8 text-warm-brown text-lg md:text-xl leading-relaxed max-w-lg">
              Empezamos con una hornada pequeña y un sueño grande: hacer pan que sepa a casa.
              Hoy seguimos amasando con las mismas recetas de familia en el corazón de Brooklyn.
            </p>
          </div>

          {/* Right content */}
          <div className="relative flex flex-col items-center">
            {/* Portrait Circle */}
            <div
              className="about-circle w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden will-change-transform"
              style={{ border: '10px solid var(--terracotta)' }}
            >
              <img
                src="/images/testimonial-3.jpg"
                alt="El Charro Bakery storefront"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <span className="about-badge mt-6 px-5 py-2 rounded-full text-sm font-semibold text-cream bg-olive">
              SIN CONSERVADORES
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
