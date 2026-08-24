import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Phone } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const bg = hero.querySelector('.hero-bg');
    const handleMove = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      if (bg) bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const stats = [
    { n: '150', suffix: '+', label: 'Projects Delivered' },
    { n: '10', suffix: ' Yrs', label: 'Industry Excellence' },
    { n: '4.9', suffix: '★', label: 'Client Rating' },
    { n: '100', suffix: '%', label: 'On-Time Handover' },
  ];

  return (
    <section ref={heroRef} id="home" style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      background: '#080808',
    }}>
      {/* Parallax Background */}
      <div className="hero-bg" style={{
        position: 'absolute', inset: '-6% -6%',
        transition: 'transform 0.1s ease-out',
        zIndex: 0,
      }}>
        <img src="/images/hero_construction.jpg" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      </div>

      {/* Gradient Overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          linear-gradient(to top, #080808 0%, rgba(8,8,8,0.75) 45%, rgba(8,8,8,0.2) 100%),
          linear-gradient(to right, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.3) 70%, transparent 100%)
        `,
      }} />

      {/* Gold vertical line accent — hidden on mobile */}
      <div className="desktop-only" style={{
        position: 'absolute', top: 0, right: '22%', width: '1px', height: '100%', zIndex: 2,
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.25) 40%, transparent)',
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative', zIndex: 3,
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        paddingTop: 'clamp(7rem, 12vw, 10rem)',
      }}>
        <div style={{ maxWidth: '820px' }}>

          {/* Badge */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge">
              <span className="badge-dot" />
              Now Accepting Projects · Kukatpally, Hyderabad
            </span>
          </div>

          {/* Headline */}
          <h1 className="display-xl" style={{ color: '#f0ede6', marginBottom: '1rem' }}>
            Built to Last
            <br />
            <em className="text-gold-gradient" style={{ fontStyle: 'italic', fontWeight: 300 }}>
              Generations.
            </em>
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(240,237,230,0.6)',
            maxWidth: '480px',
            marginBottom: '2rem',
          }}>
            Led by <strong style={{ color: '#f0ede6', fontWeight: 500 }}>Akhil</strong>, AN Constructions delivers turnkey luxury villas, commercial hubs & interiors across Hyderabad with unmatched precision.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}>
            <button onClick={onOpenQuote} className="btn btn-gold" style={{ fontSize: '0.78rem' }}>
              Book Site Inspection <ArrowRight size={14} />
            </button>
            <a href="#calculator" className="btn btn-ghost" style={{ fontSize: '0.78rem' }}>
              Estimate Cost
            </a>
            <a href="tel:+919876543210" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8rem', fontWeight: 500,
              color: 'rgba(240,237,230,0.5)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,237,230,0.5)'}
            >
              <Phone size={13} /> +91 98765 43210
            </a>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(240,237,230,0.08)',
            borderLeft: '1px solid rgba(240,237,230,0.08)',
          }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-block" style={{
                borderLeft: 'none', borderTop: 'none',
                borderRight: '1px solid rgba(240,237,230,0.08)',
                borderBottom: 'none',
              }}>
                <span className="stat-number">
                  {s.n}<span>{s.suffix}</span>
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="desktop-only" style={{
        position: 'absolute', bottom: '1.75rem', right: '1.75rem', zIndex: 3,
        flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'rgba(240,237,230,0.3)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
        }}>Scroll</span>
        <ArrowDown size={13} style={{ color: 'rgba(201,168,76,0.45)', animation: 'bounce 2s infinite' }} />
      </div>

      {/* Mobile stat grid override */}
      <style>{`
        @media (max-width: 640px) {
          #home .stat-block {
            padding: 0.9rem !important;
          }
          #home [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #home [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] > div:nth-child(1),
          #home [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] > div:nth-child(2) {
            border-bottom: 1px solid rgba(240,237,230,0.08) !important;
          }
        }
      `}</style>
    </section>
  );
}
