import React from 'react';
import { ArrowRight, Home, Store, Building2, Compass, Paintbrush, Hammer } from 'lucide-react';

const services = [
  {
    num: '01', icon: Home,
    title: 'Turnkey Luxury Villas',
    desc: 'End-to-end construction of 3–5 BHK houses with bespoke elevations, premium finishes, and milestone-based handover.',
    tags: ['Custom Elevation', '50-Yr Warranty', 'Vastu Compliant'],
  },
  {
    num: '02', icon: Store,
    title: 'Commercial Contracting',
    desc: 'Heavy-load commercial floors, curtain-wall glass facades, and corporate fit-outs across Hitech City, Gachibowli, and Kukatpally.',
    tags: ['Glass Facades', 'GHMC Permits', 'High Load RCC'],
  },
  {
    num: '03', icon: Building2,
    title: 'Multi-Story Apartments',
    desc: 'G+3 to G+5 residential projects with earthquake-resistant RCC frames, stilt parking, lift shafts, and full amenity integration.',
    tags: ['G+5 Structures', 'Schindler Lifts', 'EQ Resistant'],
  },
  {
    num: '04', icon: Compass,
    title: 'Architecture & 3D Elevation',
    desc: 'Photorealistic 3D elevations, 2D floor plans, structural drawings, and fast-track GHMC permit documentation.',
    tags: ['3D Renders', 'Structural BOQ', 'GHMC Approval'],
  },
  {
    num: '05', icon: Paintbrush,
    title: 'Luxury Interiors',
    desc: 'Teak carpentry, Italian marble, Grohe fixtures, and custom cove lighting — interior execution that reflects your lifestyle.',
    tags: ['Italian Marble', 'Custom Joinery', 'Jaquar/Grohe'],
  },
  {
    num: '06', icon: Hammer,
    title: 'Renovation & Floor Additions',
    desc: 'Floor additions (G+1 → G+2), structural reinforcement, exterior re-cladding, and modern elevation redesigns.',
    tags: ['Load Analysis', 'Re-cladding', 'Addition Floors'],
  },
];

export default function ServicesSection({ onOpenQuote }) {
  return (
    <section id="services" style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--border)',
      padding: 'var(--section-pad) 0',
    }}>
      <div className="container">

        {/* Section header — stacks on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 4rem)',
          alignItems: 'end',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <div className="section-intro">
            <span className="label">Our Capabilities</span>
            <h2 className="display-lg" style={{ color: '#f0ede6' }}>
              Complete Construction
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#c9a84c' }}>Blueprint to Handover</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p className="body-text">
              Whether a dream villa on a Kukatpally plot or a glass-fronted commercial hub in Hitech City, AN Constructions manages everything from soil testing to interior finishing.
            </p>
            <button onClick={onOpenQuote} className="btn btn-ghost-gold" style={{ alignSelf: 'flex-start' }}>
              Discuss Your Project <ArrowRight size={13} />
            </button>
          </div>
        </div>

        <hr />

        {/* Services List */}
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 'clamp(1rem, 3vw, 2rem)',
              alignItems: 'center',
              padding: 'clamp(1.25rem, 3vw, 2rem) 0',
              borderBottom: '1px solid var(--border)',
              transition: 'background 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.025)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Number — hide on very small screens */}
              <span className="desktop-only" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.82rem', fontWeight: 400,
                color: 'rgba(201,168,76,0.45)', letterSpacing: '0.05em',
                minWidth: '30px',
              }}>{s.num}</span>

              {/* Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: 34, height: 34, flexShrink: 0,
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={15} style={{ color: '#c9a84c' }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    fontWeight: 600, color: '#f0ede6', letterSpacing: '-0.01em',
                  }}>{s.title}</h3>
                </div>
                <p style={{
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.87rem)',
                  lineHeight: 1.7, color: 'rgba(240,237,230,0.5)',
                  fontWeight: 300, maxWidth: '540px',
                }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.1rem' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      padding: '0.18rem 0.6rem',
                      background: 'rgba(240,237,230,0.04)',
                      border: '1px solid rgba(240,237,230,0.08)',
                      borderRadius: '999px',
                      fontSize: '0.65rem', fontWeight: 500,
                      color: 'rgba(240,237,230,0.4)',
                      letterSpacing: '0.04em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow icon */}
              <div style={{
                width: 36, height: 36, flexShrink: 0,
                border: '1px solid rgba(240,237,230,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(240,237,230,0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                e.currentTarget.style.color = '#c9a84c';
                e.currentTarget.style.background = 'rgba(201,168,76,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(240,237,230,0.07)';
                e.currentTarget.style.color = 'rgba(240,237,230,0.25)';
                e.currentTarget.style.background = 'transparent';
              }}>
                <ArrowRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
