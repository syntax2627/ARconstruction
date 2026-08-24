import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const steps = [
  {
    id: 1, title: 'Project Type', subtitle: 'What are you looking to build?',
    options: ['Independent Villa', 'Commercial Building', 'Apartment Block', 'Luxury Interiors', 'Renovation / Addition', 'Turnkey Contract'],
  },
  {
    id: 2, title: 'Location & Scale', subtitle: 'Where is your plot located?',
    locations: ['Kukatpally (KPHB)', 'Pragathi Nagar', 'Miyapur', 'Bachupally', 'Gachibowli', 'Hitech City / Madhapur', 'Jubilee Hills / Banjara Hills', 'Other in Hyderabad'],
    budgets: ['₹25–50 Lakhs', '₹50L–1 Crore', '₹1–2 Crores', '₹2 Crores+'],
  },
  {
    id: 3, title: 'Your Details', subtitle: 'How should Akhil reach you?',
  },
];

export default function LeadFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ projectType: '', location: '', sqft: '', budget: '', name: '', phone: '', notes: '' });

  if (!isOpen) return null;
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
    setSubmitted(true);
  };

  const sendWA = () => {
    const msg = `Hello Akhil! New inquiry from AN Constructions website:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Project: ${form.projectType}\n• Location: ${form.location}, Hyderabad\n• Area: ${form.sqft} sq ft\n• Budget: ${form.budget}\n• Notes: ${form.notes || '—'}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const reset = () => { setStep(0); setSubmitted(false); setForm({ projectType: '', location: '', sqft: '', budget: '', name: '', phone: '', notes: '' }); onClose(); };
  const progress = ((step + (submitted ? 1 : 0)) / 3) * 100;

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'var(--black-2)', border: '1px solid var(--border)',
    color: '#f0ede6', fontFamily: "'Inter', sans-serif", fontSize: '0.88rem',
    outline: 'none', transition: 'border-color 0.2s',
    borderRadius: 0,
  };
  const labelStyle = {
    display: 'block', fontSize: '0.68rem', letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'rgba(240,237,230,0.38)', marginBottom: '0.5rem',
  };

  return (
    <div className="modal-overlay" onClick={reset}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

        {/* Header */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 1.75rem) clamp(1.25rem, 4vw, 2rem) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="label">Free Site Consultation</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.4rem, 4vw, 1.65rem)', fontWeight: 400, color: '#f0ede6', marginTop: '0.3rem', lineHeight: 1.2 }}>
              {submitted ? 'Request Received' : steps[step].title}
            </h3>
            {!submitted && (
              <p style={{ fontSize: '0.8rem', color: 'rgba(240,237,230,0.4)', marginTop: '0.18rem', fontWeight: 300 }}>
                {steps[step].subtitle}
              </p>
            )}
          </div>
          <button onClick={reset} style={{ color: 'rgba(240,237,230,0.3)', cursor: 'pointer', padding: '0.25rem', flexShrink: 0, marginTop: '0.25rem' }}>
            <X size={19} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 1.5rem) clamp(1.25rem, 4vw, 2rem) clamp(1.5rem, 4vw, 2rem)' }}>

          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ width: 48, height: 48, border: '1px solid rgba(201,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={22} style={{ color: '#c9a84c' }} />
              </div>
              <p className="body-text" style={{ fontSize: '0.9rem' }}>
                Thank you, <strong style={{ color: '#f0ede6' }}>{form.name}</strong>. Akhil will call you at <strong style={{ color: '#c9a84c' }}>{form.phone}</strong> within a few hours to discuss your {form.projectType} project.
              </p>
              <div style={{ padding: '1rem', background: 'var(--black-2)', border: '1px solid var(--border)', fontSize: '0.8rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.7 }}>
                <div>Project: {form.projectType}</div>
                <div>Location: {form.location}</div>
                <div>Area: {form.sqft} sq ft · Budget: {form.budget}</div>
              </div>
              <button onClick={sendWA} style={{
                width: '100%', padding: '0.95rem',
                background: '#25D366', color: '#080808',
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700, fontSize: '0.77rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              }}>Connect on WhatsApp</button>
              <button onClick={reset} className="btn btn-ghost" style={{ width: '100%', padding: '0.85rem' }}>Close</button>
            </div>

          ) : step === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                {steps[0].options.map(opt => (
                  <button key={opt} onClick={() => set('projectType', opt)} style={{
                    padding: '0.8rem 0.85rem', textAlign: 'left',
                    border: '1px solid',
                    borderColor: form.projectType === opt ? '#c9a84c' : 'var(--border)',
                    background: form.projectType === opt ? 'rgba(201,168,76,0.08)' : 'transparent',
                    color: form.projectType === opt ? '#f0ede6' : 'rgba(240,237,230,0.45)',
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                  }}>{opt}</button>
                ))}
              </div>
              <button disabled={!form.projectType} onClick={() => setStep(1)} className="btn btn-gold"
                style={{ width: '100%', opacity: form.projectType ? 1 : 0.4, marginTop: '0.4rem' }}>
                Continue <ArrowRight size={14} />
              </button>
            </div>

          ) : step === 1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={labelStyle}>Location in Hyderabad</label>
                <select value={form.location} onChange={e => set('location', e.target.value)} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select area</option>
                  {steps[1].locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Plot Area (sq ft)</label>
                <input type="number" placeholder="e.g. 2400" value={form.sqft} onChange={e => set('sqft', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Approximate Budget</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                  {steps[1].budgets.map(b => (
                    <button key={b} onClick={() => set('budget', b)} style={{
                      padding: '0.68rem 0.65rem',
                      border: '1px solid',
                      borderColor: form.budget === b ? '#c9a84c' : 'var(--border)',
                      background: form.budget === b ? 'rgba(201,168,76,0.08)' : 'transparent',
                      color: form.budget === b ? '#c9a84c' : 'rgba(240,237,230,0.42)',
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                    }}>{b}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
                <button onClick={() => setStep(0)} className="btn btn-ghost" style={{ padding: '0.85rem 1.1rem' }}><ArrowLeft size={14} /></button>
                <button disabled={!form.location || !form.sqft} onClick={() => setStep(2)} className="btn btn-gold"
                  style={{ flex: 1, opacity: (form.location && form.sqft) ? 1 : 0.4 }}>
                  Continue <ArrowRight size={14} />
                </button>
              </div>
            </div>

          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                { label: 'Your Full Name', field: 'name', placeholder: 'e.g. Suresh Reddy', type: 'text' },
                { label: 'WhatsApp / Mobile Number', field: 'phone', placeholder: '+91 98765 43210', type: 'tel' },
              ].map(({ label, field, placeholder, type }) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field]}
                    onChange={e => set(field, e.target.value)} style={inputStyle} />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Notes (optional)</label>
                <textarea placeholder="e.g. 4BHK, east-facing, ground + 2 floors..." value={form.notes}
                  onChange={e => set('notes', e.target.value)} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
                <button onClick={() => setStep(1)} className="btn btn-ghost" style={{ padding: '0.85rem 1.1rem' }}><ArrowLeft size={14} /></button>
                <button disabled={!form.name || !form.phone} onClick={handleSubmit} className="btn btn-gold"
                  style={{ flex: 1, opacity: (form.name && form.phone) ? 1 : 0.4 }}>
                  <Send size={13} /> Submit Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
