import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Menu, X } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#calculator', label: 'Estimator' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,237,230,0.06)' : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

          {/* Brand */}
          <a href="#home" style={{ flexShrink: 0 }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#f0ede6',
              lineHeight: 1,
            }}>
              AN <span style={{ color: '#c9a84c' }}>CONSTRUCTIONS</span>
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.65)',
              fontWeight: 500,
              marginTop: '0.1rem',
            }}>
              Kukatpally, Hyderabad · Est. 2016
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-only" style={{ gap: '2rem', alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(240,237,230,0.6)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a84c'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,237,230,0.6)'}
              >{l.label}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Desktop CTA */}
            <button onClick={onOpenQuote} className="btn btn-gold desktop-only" style={{ padding: '0.65rem 1.25rem', fontSize: '0.7rem' }}>
              Free Site Visit <ArrowRight size={12} />
            </button>

            {/* Phone icon for mobile */}
            <a href="tel:+919876543210" className="mobile-only" style={{
              width: 38, height: 38,
              border: '1px solid rgba(201,168,76,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#c9a84c',
            }}>
              <Phone size={16} />
            </a>

            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-only"
              style={{ color: '#f0ede6', padding: '0.25rem', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 890,
          background: 'rgba(8,8,8,0.98)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          gap: '2rem',
          paddingTop: '5rem',
          animation: 'fadeOverlay 0.25s ease',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 7vw, 2.8rem)',
                fontWeight: 300,
                color: '#f0ede6',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a84c'}
              onMouseLeave={e => e.target.style.color = '#f0ede6'}
            >{l.label}</a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onOpenQuote(); }}
            className="btn btn-gold"
            style={{ marginTop: '0.5rem', padding: '0.95rem 2.5rem' }}
          >
            Get Free Quote
          </button>
          {/* Contact quick links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            <a href="tel:+919876543210" style={{ fontSize: '0.8rem', color: 'rgba(240,237,230,0.5)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} /> +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </>
  );
}
