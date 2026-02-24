import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo(infoRef.current,
        { y: '5vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          }
        }
      );

      gsap.fromTo(ctaRef.current,
        { y: '4vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 1,
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={sectionRef}
      className="relative bg-terracotta py-20 z-50"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-4xl mx-auto px-8 text-center relative">
        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="headline-xl text-cream text-[clamp(48px,8vw,120px)] mb-12 will-change-transform"
        >
          TE ESPERAMOS
        </h2>

        {/* Hours & Address */}
        <div 
          ref={infoRef}
          className="mb-12 will-change-transform"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-cream/90">
              <p className="font-semibold text-lg mb-1">Horario</p>
              <p>Lun–Sáb: 7:00 – 20:00</p>
              <p>Domingo: 8:00 – 14:00</p>
            </div>
            <div className="w-px h-16 bg-cream/30 hidden md:block" />
            <div className="text-cream/90">
              <p className="font-semibold text-lg mb-1">Dirección</p>
              <p>1429 Myrtle Ave</p>
              <p>Brooklyn, NY 11237</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className="flex flex-wrap justify-center gap-4 mb-16 will-change-transform"
        >
          <a 
            href="tel:+17184521401"
            className="btn-primary flex items-center gap-2"
          >
            Hacer pedido
          </a>
          <a 
            href="https://maps.google.com/?q=1429+Myrtle+Ave+Brooklyn+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <MapPin size={18} />
            Ver mapa
          </a>
        </div>

        {/* Legal */}
        <div className="border-t border-cream/20 pt-8">
          <p className="text-cream/60 text-sm">
            © 2026 El Charro Bakery. Hecho con amor.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream transition-colors flex items-center gap-1 text-sm"
            >
              Instagram
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
