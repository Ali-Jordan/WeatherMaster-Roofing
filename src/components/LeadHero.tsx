import { useState } from 'react';

const PHONE_DISPLAY = '(425) 406-4522';
const PHONE_HREF    = 'tel:+14254064522';
const W3F_KEY       = '3e73627c-d7db-4955-b040-8fd0d0344b23';

interface Lead { name: string; phone: string; ts: string; source: string; }
function saveLead(lead: Lead) {
  try {
    const arr: Lead[] = JSON.parse(localStorage.getItem('wm_leads') || '[]');
    arr.push(lead);
    localStorage.setItem('wm_leads', JSON.stringify(arr));
  } catch {}
}

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 10, padding: '13px 16px',
  color: '#fff', fontSize: 15, outline: 'none', fontFamily: 'inherit',
};

const pillStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.09)',
  border: '1px solid rgba(255,255,255,0.14)',
  color: 'rgba(255,255,255,0.78)',
  padding: '5px 13px', borderRadius: 999,
  fontSize: 11, fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
};

const callBtnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  gap: 12, background: '#a855f7', color: '#fff',
  borderRadius: 12, padding: '18px 28px',
  fontSize: 19, fontWeight: 800,
  textDecoration: 'none', whiteSpace: 'nowrap' as const,
  boxShadow: '0 0 32px rgba(168,85,247,0.45)',
};

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
  </svg>
);

function HeroContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ color: '#facc15', fontSize: 18, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>5.0</span>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>&middot; 13 Google Reviews</span>
      </div>

      <h1 style={{ color: '#fff', fontSize: 'clamp(20px,2.2vw,36px)', fontWeight: 900, lineHeight: 1.12, letterSpacing: '-0.02em', margin: 0 }}>
        Roof Repair in Bellevue, WA — <span style={{ color: '#a855f7' }}>Call Now for Fast Leak &amp; Damage Repair</span>
      </h1>

      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 17, lineHeight: 1.65, margin: 0 }}>
        Free Estimate. Same-Day Service Available.
      </p>
      <p style={{ color: '#facc15', fontSize: 14, fontWeight: 700, margin: 0, letterSpacing: '0.02em' }}>
        ⚡ Same-day inspections available — emergency service ready
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {['\u2713 Licensed & Insured','\u2713 24/7 Emergency','\u2713 Free Estimates','\u2713 Insurance Claims'].map(t => (
          <span key={t} style={pillStyle}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
        <span style={{ background: 'rgba(168,85,247,0.18)', border: '1px solid rgba(168,85,247,0.35)', color: '#d8b4fe', padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
          &#9889; Limited availability today
        </span>
        <span style={{ background: 'rgba(168,85,247,0.18)', border: '1px solid rgba(168,85,247,0.35)', color: '#d8b4fe', padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
          &#10003; Fast response team ready
        </span>
      </div>
      <a href={PHONE_HREF} data-track="hero-call" style={callBtnStyle}>
        <PhoneIcon />
        Call Now – Speak to a Roofer
      </a>
    </div>
  );
}

function HeroForm({ status, name, phone, setName, setPhone, handleSubmit }: {
  status: 'idle'|'sending'|'done'|'error';
  name: string; phone: string;
  setName: (v: string) => void;
  setPhone: (v: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 20, padding: 32,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      {status === 'done' ? (
        <div style={{ textAlign: 'center', padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#a855f7' }}>&#10003;</div>
          <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 800, margin: 0 }}>We&rsquo;ll Call You Soon!</h3>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, margin: 0 }}>Our team typically calls back within the hour.</p>
          <a href={PHONE_HREF} style={{ color: '#a855f7', fontWeight: 600, textDecoration: 'none' }}>Or call us: {PHONE_DISPLAY}</a>
        </div>
      ) : (
        <>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: 12, fontWeight: 600, textAlign: 'center' as const, margin: '0 0 16px', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>or request a callback</p>
              <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 700, margin: 0 }}>Get a Call Back in Minutes</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 4 }}>We&rsquo;ll call you within the hour.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.50)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 6 }}>Your Name</label>
              <input type="text" required placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.50)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 6 }}>Phone Number</label>
              <input type="tel" required placeholder="(425) 555-0000" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
            </div>
            <button type="submit" disabled={status === 'sending'} style={{
              width: '100%', background: '#a855f7', color: '#fff', border: 'none',
              borderRadius: 10, padding: '15px 0', fontSize: 16, fontWeight: 800,
              cursor: 'pointer', fontFamily: 'inherit', opacity: status === 'sending' ? 0.6 : 1,
            }}>
              {status === 'sending' ? 'Sending...' : 'Get My Call Back \u2192'}
            </button>
            {status === 'error' && <p style={{ color: '#f87171', fontSize: 13, textAlign: 'center', margin: 0 }}>Something went wrong &mdash; please call us directly.</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default function LeadHero() {
  const [name,   setName]   = useState('');
  const [phone,  setPhone]  = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('sending');
    saveLead({ name: name.trim(), phone: phone.trim(), ts: new Date().toISOString(), source: 'hero-form' });
    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: W3F_KEY, subject: 'New Lead \u2014 WeatherMaster (Hero Form)', name: name.trim(), phone: phone.trim(), source: 'Hero form', botcheck: '' }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch { setStatus('error'); }
  };

  const formProps = { status, name, phone, setName, setPhone, handleSubmit };

  return (
    <>
      <section id="lead-hero" style={{ position: 'relative', background: '#0a0010', overflow: 'hidden', fontFamily: 'inherit' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.50, filter: 'saturate(0.85)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(10,0,16,0.78) 0%,rgba(10,0,16,0.55) 55%,rgba(10,0,16,0.15) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1152, margin: '0 auto', padding: '112px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="wm-hero-grid">
          <HeroContent />
          <HeroForm {...formProps} />
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .wm-hero-grid {
            grid-template-columns: 1fr !important;
            padding: 72px 20px 40px !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </>
  );
}
