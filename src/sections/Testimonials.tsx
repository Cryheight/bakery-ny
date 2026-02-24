import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, MapPin, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    image: '/images/testimonial-1.jpg',
    quote: 'El mejor pastel de chocolate con decoración de rosas. ¡Perfecto para cualquier celebración!',
    author: 'María G.',
    rating: 5,
  },
  {
    id: 2,
    image: '/images/testimonial-2.jpg',
    quote: 'Los donuts de chocolate con sprinkles son increíbles. Siempre frescos y deliciosos.',
    author: 'Luis R.',
    rating: 5,
  },
  {
    id: 3,
    image: '/images/testimonial-3.jpg',
    quote: 'El Charro Bakery es un tesoro de Brooklyn. Auténtico pan mexicano hecho con amor.',
    author: 'Ana P.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headlineRef.current,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1,
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: '8vh', rotation: -1.5, opacity: 0 },
          {
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1,
            }
          }
        );
      });

      // Contact block animation
      gsap.fromTo(contactRef.current,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1,
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-cream py-20 z-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="headline-xl text-terracotta text-[clamp(40px,6vw,90px)] mb-16 will-change-transform"
        >
          DULCES<br />OPINIONES
        </h2>

        {/* Testimonial Cards */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => { cardsRef.current[index] = el; }}
              className={`flex flex-col md:flex-row gap-6 items-start will-change-transform ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ marginLeft: index === 0 ? '0' : index === 1 ? '8vw' : '2vw' }}
            >
              {/* Image */}
              <div 
                className="w-full md:w-[400px] h-[300px] card-rounded overflow-hidden flex-shrink-0"
                style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}
              >
                <img 
                  src={testimonial.image}
                  alt={`Testimonial by ${testimonial.author}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#C84A32" stroke="#C84A32" />
                  ))}
                </div>
                <p className="text-warm-brown text-xl md:text-2xl leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-terracotta font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Block */}
        <div 
          ref={contactRef}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 will-change-transform"
        >
          {/* Team photo circle */}
          <div 
            className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: '4px solid var(--terracotta)' }}
          >
            <img 
              src="/images/croissant.jpg"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:+17184521401"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-olive text-cream font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              Llámanos
            </a>
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-terracotta text-terracotta font-semibold hover:bg-terracotta hover:text-cream transition-colors"
            >
              <MessageCircle size={18} />
              Escríbenos
            </a>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-terracotta text-terracotta font-semibold hover:bg-terracotta hover:text-cream transition-colors"
            >
              <MapPin size={18} />
              Visítanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
