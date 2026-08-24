import React from 'react';
import { ShieldCheck, Eye, FileCheck, Award, HeartHandshake, Clock, ArrowRight } from 'lucide-react';

const pillars = [
  { icon: Award, title: '10 Years of Trust', body: 'A decade of delivering homes and commercial spaces across Kukatpally, Miyapur, Bachupally and Hitech City. Our portfolio speaks before we do.' },
  { icon: ShieldCheck, title: '50-Year Structural Warranty', body: 'We never use secondary TMT steel. Every RCC frame is certified, load-tested and built to outlive the mortgage.' },
  { icon: FileCheck, title: 'Itemised Bill of Quantities', body: 'Zero ambiguity. You receive a complete BOQ specifying every brand, grade and unit cost before signing the contract.' },
  { icon: Eye, title: 'Daily WhatsApp Reports', body: 'Akhil personally sends daily site photos and videos to your WhatsApp — ideal for NRI clients managing construction remotely.' },
  { icon: HeartHandshake, title: 'Milestone-Based Payments', body: 'Pay only after each stage: Foundation → Slab → Masonry → Plaster → Handover. Your financial risk is zero.' },
  { icon: Clock, title: 'On-Time Delivery, Always', body: 'We have never missed a committed handover date in 10 years. Time is money — yours and ours.' },
];

export default function WhyUsSection({ onOpenQuote }) {
  return (
    <section id="about" style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', padding: 'var(--section-pad) 0' }}>
      <div className="container">

        {/* Marquee Belt */}
        <div style={{
          overflow: 'hidden',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)',
          padding: '0.85rem 0',
          marginBottom: 'clamp(3rem, 6vw, 6rem)',
          background: 'rgba(201,168,76,0.025)',
        }}>
          <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
            {[
              '10 Years Construction Excellence',
              '150+ Delivered Projects',
              'GHMC Approved Contractor',
              'Primary Fe550D Steel Only',
              'NRI-Friendly Daily Updates',
              '0% Hidden Charges',
              'Kukatpally · Miyapur · Gachibowli · Jubilee Hills',
              '50-Year Structural Warranty',
              '10 Years Construction Excellence',
              '150+ Delivered Projects',
              'GHMC Approved Contractor',
              'Primary Fe550D Steel Only',
            ].map((t, i) => (
              <span key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(0.82rem, 1.5vw, 1rem)',
                fontWeight: 300, color: 'rgba(201,168,76,0.65)',
                letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '3rem',
              }}>
                {t}
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 4rem)',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'end',
        }}>
          <div className="section-intro">
            <span className="label">Why Clients Choose Us</span>
            <h2 className="display-lg" style={{ color: '#f0ede6' }}>
              The AN Construction<br />
              <em style={{ fontStyle: 'italic', color: '#c9a84c', fontWeight: 300 }}>Commitment</em>
            </h2>
          </div>
          <div>
            <p className="body-text" style={{ marginBottom: '1.5rem' }}>
              Building a home is a once-in-a-lifetime investment. Akhil ensures every project receives the same personal attention, material integrity, and deadline discipline.
            </p>
            <button onClick={onOpenQuote} className="btn btn-gold">
              Schedule a Meeting with Akhil <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Pillars — 3-col desktop, 2-col tablet, 1-col mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--border)' }} className="pillars-grid">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div key={i} style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                borderRight: col < 2 ? '1px solid var(--border)' : 'none',
                borderBottom: row === 0 ? '1px solid var(--border)' : 'none',
                display: 'flex', flexDirection: 'column', gap: '0.9rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.025)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  border: '1px solid rgba(201,168,76,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={17} style={{ color: '#c9a84c' }} />
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(0.88rem, 1.5vw, 0.95rem)',
                  fontWeight: 700, color: '#f0ede6', letterSpacing: '-0.01em',
                }}>{p.title}</h3>
                <p style={{ fontSize: 'clamp(0.78rem, 1.3vw, 0.84rem)', lineHeight: 1.75, color: 'rgba(240,237,230,0.48)', fontWeight: 300 }}>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .pillars-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .pillars-grid > div:nth-child(odd) {
            border-right: 1px solid var(--border) !important;
          }
          .pillars-grid > div:last-child {
            border-bottom: none !important;
          }
        }
        @media (max-width: 540px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .pillars-grid > div:last-child {
            border-bottom: none !important;
          }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
