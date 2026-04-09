import { useState } from 'react';

const PHONE_DISPLAY = '(425) 389-8224';
const PHONE_HREF    = 'tel:+14253898224';
const W3F_KEY       = 're_RwvDfYRu_Kevs68NJzoudJ1oiFauspDRP';

interface Lead { name: string; phone: string; ts: string; source: string; }

function saveLead(lead: Lead) {
  try {
    const arr: Lead[] = JSON.parse(localStorage.getItem('wm_leads') || '[]');
    arr.push(lead);
    localStorage.setItem('wm_leads', JSON.stringify(arr));
  } catch {}
}

export default function MidCTA() {
  const [name,  setName]  = useState('');
  const [phone, setPhone] = useState('');
  const [done,  setDone]  = useState(false);
  const [busy,  setBusy]  = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setBusy(true);
    saveLead({ name, phone, ts: new Date().toISOString(), source: 'mid-cta' });
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject: 'New Lead \u2014 WeatherMaster Roofing (Mid-Page CTA)',
          name, phone, source: 'Mid-page CTA', botcheck: '',
        }),
      });
    } catch {}
    setBusy(false);
    setDone(true);
  };

  const inputStyle = {
    flex: 1, minWidth: 140,
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 10, padding: '13px 16px',
    color: '#fff', fontSize: 15, outline: 'none',
    fontFamily: 'inherit', boxSizing: 'border-box' as const,
  };

  return (
    <section style={{
      padding: '80px 24px', textAlign: 'center', fontFamily: 'inherit',
      background: 'linear-gradient(135deg,#180028 0%,#0a0010 100%)',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
        <div>
          <p style={{ color: '#a855f7', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Ready when you are
          </p>
          <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>
            Get a Free Roof Inspection Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: 17, margin: 0 }}>
            No obligation. No pushy sales. Just an honest assessment.
          </p>
        </div>

        {done ? (
          <div>
            <p style={{ color: '#fff', fontSize: 22, fontWeight: 800, margin: '0 0 8px' }}>&#10003; Got it! We&rsquo;ll call you shortly.</p>
            <a href={PHONE_HREF} style={{ color: '#a855f7', fontWeight: 600, textDecoration: 'none' }}>
              Or call us now: {PHONE_DISPLAY}
            </a>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 560, flexWrap: 'wrap' }}>
            <input type="text" required placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            <input type="tel"  required placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
            <button type="submit" disabled={busy} style={{
              background: '#a855f7', color: '#fff', border: 'none', borderRadius: 10,
              padding: '13px 22px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              whiteSpace: 'nowrap', fontFamily: 'inherit', opacity: busy ? 0.6 : 1,
            }}>
              {busy ? '...' : 'Request Estimate'}
            </button>
          </form>
        )}

        <a href={PHONE_HREF} data-track="mid-cta-call" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          color: '#fff', fontWeight: 800, fontSize: 20, textDecoration: 'none',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#a855f7" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
          </svg>
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
