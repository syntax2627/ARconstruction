import React from 'react';
import { Star, MapPin } from 'lucide-react';

const reviews = [
  {
    name: 'Ramesh Reddy', role: 'Villa Owner',
    location: 'KPHB Colony, Kukatpally',
    rating: 5,
    text: 'Akhil built our 4BHK villa in KPHB Phase 3. The transparency was remarkable — I could track every rupee against the BOQ. Zero cost escalations. Finished 2 weeks ahead of schedule.',
    project: '4BHK Villa · 3,800 sq ft',
  },
  {
    name: 'Srinivas Rao', role: 'NRI Client (USA)',
    location: 'Pragathi Nagar, Hyderabad',
    rating: 5,
    text: 'Being in the US, I was anxious about building remotely. Akhil sent daily WhatsApp videos throughout. The teak carpentry and elevation glasswork far exceeded my expectations.',
    project: 'G+3 Apartment Block · 9,000 sq ft',
  },
  {
    name: 'Priyanka & Madhav', role: 'Homeowners',
    location: 'Bachupally, Hyderabad',
    rating: 5,
    text: 'We interviewed 5 contractors before choosing AN Constructions. The itemised BOQ gave us total confidence. Their interior false ceiling and PU polish looked better than the 3D renders!',
    project: 'Duplex Villa + Full Interiors',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{
      background: 'var(--black-2)',
      borderTop: '1px solid var(--border)',
      padding: 'var(--section-pad) 0',
    }}>
      <div className="container">

        {/* Header */}
        <div className="section-intro section-intro--centered" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="label">Client Voices</span>
          <h2 className="display-lg" style={{ color: '#f0ede6' }}>
            What Homeowners <em className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Say</em>
          </h2>
        </div>

        {/* Reviews — 3 col desktop, 1 col mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--border)' }} className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
              position: 'relative', transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: 'absolute', top: '1.25rem', right: '1.5rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '5rem', lineHeight: 1,
                color: 'rgba(201,168,76,0.06)', fontWeight: 700,
                pointerEvents: 'none', userSelect: 'none',
              }}>"</div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={12} style={{ fill: '#c9a84c', color: '#c9a84c' }} />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                fontWeight: 300, lineHeight: 1.75,
                color: 'rgba(240,237,230,0.72)',
                fontStyle: 'italic', flex: 1,
              }}>"{r.text}"</p>

              {/* Author */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem', fontWeight: 700, color: '#f0ede6',
                    }}>{r.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(240,237,230,0.35)', marginTop: '0.12rem' }}>{r.role}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.66rem', color: '#c9a84c', marginTop: '0.18rem' }}>
                      <MapPin size={9} /> {r.location}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.62rem', color: 'rgba(240,237,230,0.28)', textAlign: 'right', lineHeight: 1.5, maxWidth: '100px' }}>
                    {r.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '1rem', marginTop: '2rem',
          padding: '0.9rem 1.75rem',
          border: '1px solid var(--border)',
          maxWidth: '460px', margin: '2rem auto 0',
        }}>
          <div style={{
            width: 30, height: 30, background: '#4285F4', borderRadius: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'serif', fontWeight: 700, fontSize: '0.9rem', color: 'white', flexShrink: 0,
          }}>G</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '0.15rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} style={{ fill: '#c9a84c', color: '#c9a84c' }} />
              ))}
              <span style={{ marginLeft: '0.4rem', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#f0ede6' }}>4.9 / 5.0</span>
            </div>
            <span style={{ fontSize: '0.68rem', color: 'rgba(240,237,230,0.38)' }}>
              80+ Google Reviews · Kukatpally, Hyderabad
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
          .reviews-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .reviews-grid > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
