import React, { useState } from 'react';
import { Info, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const tiers = {
  basic: {
    label: 'Essentials',
    rate: 1799,
    tagline: 'Quality construction for budget-conscious projects',
    specs: ['Fe550 TMT Steel', 'UltraTech 53 OPC', 'Vitrified Tiles', 'Flush Doors', 'Cera Fittings'],
  },
  premium: {
    label: 'Prestige',
    rate: 2199,
    tagline: 'Most popular — ideal for independent villas',
    specs: ['Primary Fe550D TMT', 'UltraTech Super OPC', '4×2 Large Vitrified', 'Teak Veneer Doors', 'Jaquar CP Fittings'],
  },
  luxury: {
    label: 'Ultra Luxury',
    rate: 2799,
    tagline: 'Architectural masterpiece — zero compromise',
    specs: ['Tata Tiscon Fe550D', 'UltraTech Premium', 'Italian Marble / Quartz', 'Full Teak Doors', 'Kohler Gold Series'],
  },
};

const floors = [
  { id: 1, label: 'G' },
  { id: 2, label: 'G+1' },
  { id: 3, label: 'G+2' },
  { id: 4, label: 'G+3' },
  { id: 5, label: 'G+4' },
];

const fmt = n => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  return `₹${(n / 100000).toFixed(1)} L`;
};

export default function CostCalculator({ onOpenQuote }) {
  const [area, setArea] = useState(2400);
  const [numFloors, setNumFloors] = useState(2);
  const [tier, setTier] = useState('premium');

  const builtUp = area * numFloors;
  const total = builtUp * tiers[tier].rate;

  const sendWA = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } });
    const txt = `Hello Akhil! I used the AN Constructions cost calculator:\n• Plot Area: ${area} sq ft\n• Floors: ${floors.find(f => f.id === numFloors)?.label}\n• Package: ${tiers[tier].label} @ ₹${tiers[tier].rate}/sqft\n• Total: ${fmt(total)}\n\nPlease schedule a site visit.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(txt)}`, '_blank');
  };

  const inputLabel = (text) => ({
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.68rem', fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(240,237,230,0.45)',
    marginBottom: '1rem',
  });

  return (
    <section id="calculator" style={{
      background: 'var(--black-2)',
      borderTop: '1px solid var(--border)',
      padding: 'var(--section-pad) 0',
    }}>
      <div className="container">

        {/* Header */}
        <div className="section-intro section-intro--centered" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="label">Transparent Pricing</span>
          <h2 className="display-lg" style={{ color: '#f0ede6' }}>
            Construction Cost <em className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Estimator</em>
          </h2>
          <p className="body-text" style={{ textAlign: 'center' }}>
            No hidden charges. Instant estimate based on your plot, floors, and finish quality.
          </p>
        </div>

        {/* Calculator — splits into stacked panels on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          border: '1px solid var(--border)',
        }}>

          {/* LEFT: Inputs */}
          <div style={{
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            borderRight: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)',
            background: 'var(--black-3)',
          }}>

            {/* Area Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <span style={inputLabel()}>Plot Area</span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 500, color: '#f0ede6',
                }}>
                  {area.toLocaleString()} <span style={{ fontSize: '0.8rem', color: '#c9a84c', fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>sq ft</span>
                </span>
              </div>
              <input type="range" min={600} max={8000} step={100} value={area} onChange={e => setArea(+e.target.value)}
                style={{ width: '100%', accentColor: '#c9a84c' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.65rem', color: 'rgba(240,237,230,0.25)' }}>
                <span>600 sqft</span><span>8,000 sqft</span>
              </div>
            </div>

            {/* Floors */}
            <div>
              <span style={inputLabel()}>Number of Floors</span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {floors.map(f => (
                  <button key={f.id} onClick={() => setNumFloors(f.id)} style={{
                    flex: 1,
                    padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0.4rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', fontWeight: 600,
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    borderColor: numFloors === f.id ? '#c9a84c' : 'rgba(240,237,230,0.08)',
                    background: numFloors === f.id ? 'rgba(201,168,76,0.12)' : 'transparent',
                    color: numFloors === f.id ? '#c9a84c' : 'rgba(240,237,230,0.4)',
                    cursor: 'pointer',
                  }}>{f.label}</button>
                ))}
              </div>
            </div>

            {/* Tier Selector */}
            <div>
              <span style={inputLabel()}>Quality Package</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {Object.entries(tiers).map(([key, t]) => (
                  <button key={key} onClick={() => setTier(key)} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: 'clamp(0.8rem, 2vw, 1.1rem) clamp(0.75rem, 2vw, 1.25rem)',
                    border: '1px solid',
                    transition: 'all 0.25s ease', textAlign: 'left',
                    borderColor: tier === key ? '#c9a84c' : 'rgba(240,237,230,0.08)',
                    background: tier === key ? 'rgba(201,168,76,0.07)' : 'transparent',
                    cursor: 'pointer',
                  }}>
                    <div>
                      <span style={{
                        display: 'block', fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 'clamp(0.8rem, 1.5vw, 0.88rem)', fontWeight: 600,
                        color: tier === key ? '#f0ede6' : 'rgba(240,237,230,0.5)',
                      }}>{t.label}</span>
                      <span style={{ fontSize: '0.68rem', color: 'rgba(240,237,230,0.3)', fontWeight: 300 }}>{t.tagline}</span>
                    </div>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 500, flexShrink: 0, marginLeft: '0.5rem',
                      color: tier === key ? '#c9a84c' : 'rgba(240,237,230,0.3)',
                    }}>₹{t.rate}<span style={{ fontSize: '0.65rem', fontFamily: "'Inter',sans-serif", fontWeight: 300 }}>/sqft</span></span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Output */}
          <div style={{
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            background: 'var(--black)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem',
          }}>

            {/* Total */}
            <div>
              <span style={{
                display: 'block', marginBottom: '0.4rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.65)',
              }}>Estimated Total</span>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                fontWeight: 300, lineHeight: 1, color: '#f0ede6', letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}>
                {fmt(total)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(240,237,230,0.3)', fontSize: '0.7rem' }}>
                <Info size={11} /> Inclusive of material, labour, architecture & GHMC support
              </div>
            </div>

            {/* Breakdown */}
            <div>
              {[
                ['Plot Area', `${area.toLocaleString()} sqft`],
                ['Floors', floors.find(f => f.id === numFloors)?.label],
                ['Total Built-Up', `${builtUp.toLocaleString()} sqft`],
                ['Rate Applied', `₹${tiers[tier].rate}/sqft`],
              ].map(([k, v], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(240,237,230,0.05)',
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(240,237,230,0.35)', fontWeight: 300 }}>{k}</span>
                  <span style={{
                    fontSize: '0.82rem', fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: i === 2 ? '#c9a84c' : '#f0ede6',
                  }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div>
              <span style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.25)' }}>
                What's Included
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {tiers[tier].specs.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'rgba(240,237,230,0.55)' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9a84c', flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button onClick={sendWA} style={{
                width: '100%', padding: 'clamp(0.85rem, 2vw, 1rem)',
                background: '#25D366', color: '#080808',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                border: 'none', cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <MessageSquare size={14} /> WhatsApp Quote to Akhil
              </button>
              <button onClick={onOpenQuote} className="btn btn-ghost" style={{ width: '100%', padding: 'clamp(0.75rem, 2vw, 0.9rem)', fontSize: '0.72rem' }}>
                Book Site Meeting <ArrowRight size={12} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile: stack panels vertically */}
      <style>{`
        @media (max-width: 720px) {
          #calculator .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #calculator [style*="borderRight: '1px solid var(--border)'"] {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  );
}
