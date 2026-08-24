import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection({ onOpenQuote }) {
  return (
    <section id="contact" style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', padding: 'var(--section-pad) 0' }}>
      <div className="container">

        {/* Header */}
        <div className="section-intro section-intro--centered" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span className="label">Reach Akhil Directly</span>
          <h2 className="display-lg" style={{ color: '#f0ede6' }}>
            Let's Start Your <em className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Project</em>
          </h2>
          <p className="body-text" style={{ textAlign: 'center' }}>
            Call, WhatsApp, or walk into our Kukatpally office. Akhil personally handles every new inquiry.
          </p>
        </div>

        {/* Contact Split — stacks on mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--border)' }} className="contact-grid">

          {/* Left: Info */}
          <div style={{
            padding: 'clamp(1.75rem, 4vw, 3.5rem)',
            borderRight: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 'clamp(1.75rem, 3vw, 2.5rem)',
          }}>

            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300,
                color: '#f0ede6', lineHeight: 1.2, marginBottom: '0.3rem',
              }}>AN Constructions</div>
              <span style={{ fontSize: '0.72rem', color: 'rgba(201,168,76,0.65)', letterSpacing: '0.08em' }}>
                Kukatpally · Hyderabad · Since 2016
              </span>
            </div>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
              {[
                {
                  icon: MapPin,
                  title: 'Office Address',
                  content: 'Plot No. 42, 2nd Floor, Kukatpally Main Road,\nNear KPHB Metro Station, Hyderabad – 500072',
                },
                { icon: Phone, title: 'Direct Line (Akhil)', content: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: Mail, title: 'Email', content: 'akhil@anconstructions.in', href: 'mailto:akhil@anconstructions.in' },
                { icon: Clock, title: 'Working Hours', content: 'Mon – Sat: 9:00 AM – 8:00 PM\nSunday: By Appointment' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 34, height: 34, flexShrink: 0,
                      border: '1px solid rgba(201,168,76,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={14} style={{ color: '#c9a84c' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', marginBottom: '0.2rem' }}>
                        {item.title}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.88rem', color: '#c9a84c', fontWeight: 500 }}>{item.content}</a>
                      ) : (
                        <span style={{ fontSize: '0.84rem', color: 'rgba(240,237,230,0.6)', fontWeight: 300, whiteSpace: 'pre-line', lineHeight: 1.65 }}>
                          {item.content}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service Areas */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.3)', marginBottom: '0.65rem' }}>
                Active Service Areas
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {['Kukatpally', 'Pragathi Nagar', 'Miyapur', 'Bachupally', 'Gachibowli', 'Hitech City', 'Madhapur', 'Jubilee Hills'].map(a => (
                  <span key={a} style={{
                    padding: '0.18rem 0.6rem',
                    border: '1px solid rgba(201,168,76,0.16)',
                    borderRadius: '999px',
                    fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', fontWeight: 500, letterSpacing: '0.03em',
                  }}>{a}</span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <a href="https://wa.me/919876543210?text=Hi%20Akhil%2C%20I%20want%20to%20discuss%20a%20construction%20project." target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.55rem',
                  padding: '0.9rem', background: '#25D366', color: '#080808',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '0.77rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <MessageSquare size={14} /> Chat on WhatsApp
              </a>
              <button onClick={onOpenQuote} className="btn btn-ghost-gold" style={{ width: '100%', padding: '0.88rem', fontSize: '0.72rem' }}>
                Request Free Site Visit <ArrowRight size={12} />
              </button>
            </div>

          </div>

          {/* Right: Map */}
          <div style={{ position: 'relative', minHeight: 'clamp(300px, 40vw, 550px)', overflow: 'hidden' }}>
            <iframe
              title="AN Constructions Kukatpally Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.158309195328!2d78.39655!3d17.48785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f486517e57%3A0x8e83344e45d9472e!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{
                border: 'none', position: 'absolute', inset: 0,
                filter: 'grayscale(100%) invert(1) contrast(0.9) brightness(0.4)',
              }}
              allowFullScreen loading="lazy"
            />
            <div style={{
              position: 'absolute', top: '1.25rem', left: '1.25rem',
              background: 'rgba(8,8,8,0.92)',
              border: '1px solid rgba(201,168,76,0.28)',
              padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.9rem, 2vw, 1.1rem)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#25D366', animation: 'pulseDot2 2s infinite' }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#25D366', fontWeight: 600 }}>
                  Office Open
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#f0ede6' }}>Kukatpally, Hyderabad</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(240,237,230,0.38)', marginTop: '0.08rem' }}>
                Near KPHB Metro Station
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulseDot2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 760px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  );
}
