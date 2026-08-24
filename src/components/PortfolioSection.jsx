import React, { useState } from 'react';
import { ArrowRight, MapPin, X, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1, cat: 'villa',
    title: 'KPHB — 4BHK Luxury Villa',
    location: 'Phase 3, KPHB, Kukatpally',
    area: '4,200 sq ft', duration: '11 months',
    image: '/images/hero_construction.jpg', year: '2025',
    desc: 'Turnkey G+2 luxury villa with Italian marble, double-height living room, teak carpentry, and automated LED landscape lighting.',
  },
  {
    id: 2, cat: 'villa',
    title: 'Pragathi Nagar — Contemporary Duplex',
    location: 'Pragathi Nagar, Kukatpally',
    area: '3,600 sq ft', duration: '9 months',
    image: '/images/project_villa.jpg', year: '2025',
    desc: 'Modern stone-clad elevation villa with glass balustrade balconies, louvered wood panels, and Vastu-compliant floor plan.',
  },
  {
    id: 3, cat: 'commercial',
    title: 'Gachibowli — Corporate Hub',
    location: 'Gachibowli, Hyderabad',
    area: '12,500 sq ft', duration: '14 months',
    image: '/images/project_commercial.jpg', year: '2024',
    desc: 'Glass curtain-wall commercial complex for mixed retail and corporate office use, with underground parking.',
  },
  {
    id: 4, cat: 'apartment',
    title: 'Miyapur — G+4 Gated Residences',
    location: 'Miyapur Main Road, Hyderabad',
    area: '18,000 sq ft', duration: '16 months',
    image: '/images/project_apartment.jpg', year: '2024',
    desc: '10-unit luxury apartment block with stilt parking, earthquake-resistant RCC frame, solar water heating, and rainwater harvesting.',
  },
  {
    id: 5, cat: 'interior',
    title: 'Jubilee Hills — Interior Masterpiece',
    location: 'Road No. 36, Jubilee Hills',
    area: '3,800 sq ft', duration: '3 months',
    image: '/images/project_interior.jpg', year: '2025',
    desc: 'Full interior fit-out with quartz countertops, custom teak wardrobes, Kohler sanitaryware, and architectural cove lighting.',
  },
];

const cats = [
  { id: 'all', label: 'All' },
  { id: 'villa', label: 'Villas' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'apartment', label: 'Apartments' },
  { id: 'interior', label: 'Interiors' },
];

export default function PortfolioSection({ onOpenQuote }) {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" style={{
      background: 'var(--black-2)',
      borderTop: '1px solid var(--border)',
      padding: 'var(--section-pad) 0',
    }}>
      <div className="container">

        {/* Header + Filters */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}>
          <div className="section-intro">
            <span className="label">Selected Works</span>
            <h2 className="display-lg" style={{ color: '#f0ede6' }}>Our Portfolio</h2>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c.id} className={`pill ${active === c.id ? 'active' : ''}`} onClick={() => setActive(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {filtered.map((p, i) => {
            const isFeatured = i === 0 || i === 3;
            return (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                className="img-zoom project-card"
                style={{
                  gridColumn: isFeatured ? 'span 7' : 'span 5',
                  position: 'relative',
                  aspectRatio: isFeatured ? '16/10' : '4/3',
                  cursor: 'pointer',
                  background: '#0d0d0d',
                  overflow: 'hidden',
                }}
              >
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: 'clamp(0.9rem, 2vw, 1.5rem)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.62rem', color: '#c9a84c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        {p.cat} · {p.year}
                      </span>
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
                        fontWeight: 500, color: '#f0ede6', lineHeight: 1.2, marginTop: '0.2rem',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>{p.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem', fontSize: '0.65rem', color: 'rgba(240,237,230,0.4)' }}>
                        <MapPin size={10} /> {p.location}
                      </div>
                    </div>
                    <div style={{
                      width: 32, height: 32, flexShrink: 0,
                      background: 'rgba(201,168,76,0.15)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ArrowUpRight size={14} style={{ color: '#c9a84c' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button onClick={onOpenQuote} className="btn btn-ghost-gold">
            Start a Similar Project <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <div className="img-zoom" style={{ aspectRatio: '16/9' }}>
              <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                <span className="label">{selected.cat} · {selected.year}</span>
                <button onClick={() => setSelected(null)} style={{ color: 'rgba(240,237,230,0.35)', cursor: 'pointer' }}
                  onMouseEnter={e => e.target.style.color = '#f0ede6'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,237,230,0.35)'}>
                  <X size={18} />
                </button>
              </div>
              <h2 className="display-md" style={{ color: '#f0ede6', marginBottom: '0.4rem' }}>{selected.title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1.25rem', fontSize: '0.78rem', color: 'rgba(240,237,230,0.4)' }}>
                <MapPin size={11} style={{ color: '#c9a84c' }} /> {selected.location}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.9rem 1rem', borderRight: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.62rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Built-Up Area</span>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.35rem', fontWeight: 500, color: '#f0ede6', marginTop: '0.15rem' }}>{selected.area}</div>
                </div>
                <div style={{ padding: '0.9rem 1rem' }}>
                  <span style={{ fontSize: '0.62rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Completion</span>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.35rem', fontWeight: 500, color: '#c9a84c', marginTop: '0.15rem' }}>{selected.duration}</div>
                </div>
              </div>
              <p className="body-text" style={{ marginBottom: '1.5rem' }}>{selected.desc}</p>
              <button onClick={() => { setSelected(null); onOpenQuote(); }} className="btn btn-gold" style={{ width: '100%' }}>
                Build Something Similar <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: all cards full-width */}
      <style>{`
        @media (max-width: 600px) {
          .project-card {
            grid-column: span 12 !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (min-width: 601px) and (max-width: 860px) {
          .project-card {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
