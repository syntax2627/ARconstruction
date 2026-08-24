import React from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer style={{ background: '#040810', borderTop: '1px solid rgba(240,237,230,0.06)' }}>

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Akhil%2C%20I%20found%20AN%20Constructions%20online%20and%20want%20to%20discuss%20a%20project."
        target="_blank" rel="noopener noreferrer"
        className="whatsapp-btn" title="WhatsApp Akhil"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Main Footer */}
      <div className="container" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }} className="footer-grid">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 600,
                color: '#f0ede6', letterSpacing: '0.04em',
              }}>
                AN <span style={{ color: '#c9a84c' }}>CONSTRUCTIONS</span>
              </div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.17em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.55)', marginTop: '0.18rem' }}>
                Kukatpally · Hyderabad · Est. 2016
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: 'rgba(240,237,230,0.38)', fontWeight: 300, maxWidth: '260px' }}>
              Founded by <strong style={{ color: 'rgba(240,237,230,0.6)' }}>Akhil</strong>, AN Constructions delivers turnkey villas, apartments, and commercial landmarks across Hyderabad with uncompromising material integrity.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['GHMC Approved', '50-Yr Warranty'].map(b => (
                <span key={b} style={{
                  padding: '0.25rem 0.7rem',
                  border: '1px solid rgba(201,168,76,0.18)', borderRadius: '999px',
                  fontSize: '0.62rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.55)', fontWeight: 600,
                }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', fontWeight: 600, marginBottom: '1rem' }}>
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                ['#services', 'Services'],
                ['#calculator', 'Cost Estimator'],
                ['#projects', 'Portfolio'],
                ['#about', 'Why Choose Us'],
                ['#reviews', 'Reviews'],
                ['#contact', 'Contact'],
              ].map(([href, label]) => (
                <a key={href} href={href} style={{ fontSize: '0.8rem', color: 'rgba(240,237,230,0.4)', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#c9a84c'}
                  onMouseLeave={e => e.target.style.color = 'rgba(240,237,230,0.4)'}>{label}</a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', fontWeight: 600, marginBottom: '1rem' }}>
              Areas Served
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {['Kukatpally (KPHB)', 'Pragathi Nagar', 'Miyapur', 'Bachupally', 'Gachibowli', 'Hitech City', 'Jubilee Hills'].map(a => (
                <span key={a} style={{ fontSize: '0.77rem', color: 'rgba(240,237,230,0.32)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 300 }}>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(201,168,76,0.45)', flexShrink: 0 }} />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', fontWeight: 600, marginBottom: '1rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.76rem', color: 'rgba(240,237,230,0.36)', lineHeight: 1.6, fontWeight: 300 }}>
                Kukatpally Main Road,<br />Near KPHB Metro,<br />Hyderabad – 500072
              </div>
              <a href="tel:+919876543210" style={{ fontSize: '0.88rem', color: '#c9a84c', fontWeight: 500 }}>
                +91 98765 43210
              </a>
              <span style={{ fontSize: '0.7rem', color: 'rgba(240,237,230,0.25)' }}>Mon–Sat · 9 AM – 8 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(240,237,230,0.05)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(240,237,230,0.22)', fontWeight: 300 }}>
            © {new Date().getFullYear()} AN Constructions. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(240,237,230,0.28)', cursor: 'pointer', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,237,230,0.28)'}
          >
            <ArrowUp size={12} /> Back to Top
          </button>
        </div>
      </div>

      {/* Responsive footer grid */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
