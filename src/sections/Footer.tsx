import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ExternalLink, Instagram, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // 1. Logic and Hooks must come BEFORE the return statement
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

  // 2. The return statement provides the structure
  return (
    <footer 
      id="footer" 
      ref={sectionRef} 
      className="bg-terracotta text-cream py-20 px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-end">
        
        {/* Left Side: Headline */}
        <div>
          <h2 
            ref={headlineRef} 
            className="headline-xl text-[clamp(40px,8vw,90px)] leading-[0.9] uppercase"
          >
            Visit us in <br /> Brooklyn
          </h2>
          
          <div ref={infoRef} className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 flex-shrink-0" size={24} />
              <p className="text-xl">
                123 Brooklyn Ave, <br />
                New York, NY 11201
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:opacity-70 transition-opacity"><Instagram size={28} /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Facebook size={28} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact/CTA */}
        <div ref={ctaRef} className="flex flex-col items-start md:items-end gap-8">
          <div className="text-left md:text-right">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-2 opacity-60">Hours</h3>
            <p className="text-lg">Mon–Fri: 7am — 8pm</p>
            <p className="text-lg">Sat–Sun: 8am — 9pm</p>
          </div>

          <a 
            href="mailto:hola@elcharro.com" 
            className="group flex items-center gap-3 bg-cream text-terracotta px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all"
          >
            Contact Us
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <p className="text-sm opacity-40 mt-12">
            © {new Date().getFullYear()} El Charro Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
