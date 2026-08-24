import React, { useState, useEffect } from 'react';
import { Building2, X } from 'lucide-react';

const activities = [
  { name: 'Suresh Reddy', location: 'KPHB, Kukatpally', action: 'Requested 4BHK Villa Quote', time: '3 min ago' },
  { name: 'Dr. Venkat Rao', location: 'Pragathi Nagar', action: 'Scheduled Site Inspection', time: '9 min ago' },
  { name: 'Kiran Kumar', location: 'Gachibowli', action: 'Asked for G+3 Commercial Quote', time: '17 min ago' },
  { name: 'Anand & Priya', location: 'Miyapur', action: 'Downloaded Construction BOQ', time: '26 min ago' },
];

export default function LiveActivityTicker() {
  const [show, setShow] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setInterval(() => {
      setIdx(p => (p + 1) % activities.length);
    }, 7000);
    return () => clearInterval(t);
  }, [show]);

  if (!show) return null;
  const a = activities[idx];

  return (
    <div className="ticker">
      <div style={{
        width: 36, height: 36, flexShrink: 0,
        background: 'rgba(201,168,76,0.12)',
        border: '1px solid rgba(201,168,76,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Building2 size={16} style={{ color: '#c9a84c' }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '0.15rem',
        }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: '#f0ede6' }}>
            {a.name}
          </span>
          <span style={{ fontSize: '0.65rem', color: '#c9a84c', fontWeight: 500 }}>{a.time}</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(240,237,230,0.55)', fontWeight: 300 }}>{a.action}</div>
        <div style={{ fontSize: '0.65rem', color: 'rgba(240,237,230,0.3)', marginTop: '0.1rem' }}>
          📍 {a.location}, Hyderabad
        </div>
      </div>
      <button onClick={() => setShow(false)} style={{
        color: 'rgba(240,237,230,0.25)', cursor: 'pointer', flexShrink: 0,
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.target.style.color = '#f0ede6'}
      onMouseLeave={e => e.target.style.color = 'rgba(240,237,230,0.25)'}
      ><X size={14} /></button>
    </div>
  );
}
