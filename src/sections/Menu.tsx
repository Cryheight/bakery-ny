import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  {
    id: 1,
    title: 'Conchas',
    subtitle: 'Vainilla · Chocolate · Rosa',
    image: '/images/pan-mexicano.jpg',
  },
  {
    id: 2,
    title: 'Pasteles',
    subtitle: 'Tres leches · Mousse · Frutas',
    image: '/images/tres-leches.jpg',
  },
  {
    id: 3,
    title: 'Donuts',
    subtitle: 'Chocolate · Sprinkles · Glaseado',
    image: '/images/donut.jpg',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-20 bg-cream">
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.menu-headline', {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.menu-card', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.menu-cta', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-terracotta py-20 z-30"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-8 w-full relative">
        {/* Headline */}
        <h2 className="menu-headline headline-xl text-cream text-[clamp(48px,7vw,100px)] mb-12">
          EL MENÚ
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card card-rounded overflow-hidden will-change-transform group cursor-pointer"
              style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.22)' }}
            >
              <div className="relative h-[280px] md:h-[320px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-display font-bold text-cream text-xl">{item.title}</h3>
                  <p className="text-cream/80 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="menu-cta mt-12 text-center">
          <button className="btn-primary inline-flex items-center gap-2">
            Ver todo el menú
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
