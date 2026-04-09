import { useState } from 'react';

const PHONE_DISPLAY = '(425) 389-8224';
const PHONE_HREF    = 'tel:+14253898224';
const W3F_KEY       = '3e73627c-d7db-4955-b040-8fd0d0344b23';

interface Lead { name: string; phone: string; ts: string; source: string; }

function saveLead(lead: Lead) {
  try {
    const arr: Lead[] = JSON.parse(localStorage.getItem('wm_leads') || '[]');
    arr.push(lead);
    localStorage.setItem('wm_leads', JSON.stringify(arr));
  } catch {}
}

const S = {
  section: {
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: '#0a0010',
    overflow: 'hidden',
    fontFamily: 'inherit',
  },
  bgImg: {
    position: 'absolute' as const,
    inset: 0,
    backgroundImage: "url('/images/hero.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    filter: 'saturate(0.7)',
  },
  bgGrad: {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(100deg,rgba(10,0,16,0.95) 0%,rgba(10,0,16,0.70) 55%,rgba(10,0,16,0.25) 100%)',
  },
  inner: {
    position: 'relative' as const,
    zIndex: 2,
    width: '100%',
    maxWidth: 1152,
    margin: '0 auto',
    padding: '112px 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 48,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
  },
  starRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap' as const,
  },
  starText: { color: '#fff', fontWeight: 600, fontSize: 14 },
  starMuted: { color: 'rgba(255,255,255,0.55)', fontSize: 14 },
  h1: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.12,
    letterSpacing: '-0.02em',
    margin: 0,
  },
  h1Purple: { color: '#a855f7' },
  sub: { color: 'rgba(255,255,255,0.68)', fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 380 },
  pills: { display: 'flex', flexWrap: 'wrap' as const, gap: 8 },
  pill: {
    background: 'rgba(255,255,255,0.09)',
    border: '1px solid rgba(255,255,255,0.14)',
    color: 'rgba(255,255,255,0.78)',
    padding: '5px 13px',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
  },
  callBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    background: '#a855f7',
    color: '#fff',
    borderRadius: 12,
    padding: '18px 28px',
    fontSize: 19,
    fontWeight: 800,
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    boxShadow: '0 0 32px rgba(168,85,247,0.45)',
    transition: 'transform 0.15s',
  },
  orText: { color: 'rgba(255,255,255,0.35)', fontSize: 13, marginTop: -8 },
  formCard: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 20,
    padding: 36,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
  },
  formTitle: { color: '#fff', fontSize: 24, fontWeight: 800, margin: 0 },
  formSub: { color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 4 },
  label: {
    display: 'block',
    color: 'rgba(255,255,255,0.50)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase' as const,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 10,
    padding: '13px 16px',
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  },
  submitBtn: {
    width: '100%',
    background: '#a855f7',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '16px 0',
    fontSize: 17,
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'opacity 0.15s',
  },
  errorTxt: { color: '#f87171', fontSize: 13, textAlign: 'center' as const },
  spamTxt: { color: 'rgba(255,255,255,0.22)', fontSize: 11, textAlign: 'center' as const },
  successWrap: {
    display: 'flex', flexDirection: 'column' as const,
    alignItems: 'center', justifyContent: 'center',
    padding: '32px 0', gap: 16, textAlign: 'center' as const,
  },
  successIcon: {
    width: 64, height: 64, borderRadius: '50%',
    background: 'rgba(168,85,247,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 28, color: '#a855f7',
  },
  successTitle: { color: '#fff', fontSize: 22, fontWeight: 800, margin: 0 },
  successSub: { color: 'rgba(255,255,255,0.55)', fontSize: 14 },
  successLink: { color: '#a855f7', fontWeight: 600, textDecoration: 'none' },
};

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
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject: 'New Lead \u2014 WeatherMaster Roofing (Hero Form)',
          name: name.trim(), phone: phone.trim(), source: 'Hero form', botcheck: '',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="lead-hero" style={S.section}>
      <div style={S.bgImg} />
      <div style={S.bgGrad} />
      <div style={S.inner}>

        {/* Left col */}
        <div style={S.left}>
          {/* Stars */}
          <div style={S.starRow}>
            <span style={{ color: '#facc15', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
            <span style={S.starText}>5.0</span>
            <span style={S.starMuted}>&middot; 13 Google Reviews</span>
          </div>

          {/* Headline */}
          <h1 style={S.h1}>
            Roof Repair &amp; Replacement in{' '}
            <span style={S.h1Purple}>Northwest Washington</span>
          </h1>

          <p style={S.sub}>
            Licensed &amp; insured. Free estimates. Same-day response for storm damage.
          </p>

          {/* Trust pills */}
          <div style={S.pills}>
            {['\u2713 Licensed & Insured','\u2713 24/7 Emergency','\u2713 Free Estimates','\u2713 Insurance Claims'].map(t => (
              <span key={t} style={S.pill}>{t}</span>
            ))}
          </div>

          {/* Call button */}
          <a href={PHONE_HREF} data-track="hero-call" style={S.callBtn}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
            </svg>
            Call Now &mdash; {PHONE_DISPLAY}
          </a>
          <p style={S.orText}>or fill out the quick form &rarr;</p>
        </div>

        {/* Right col — form */}
        <div style={S.formCard}>
          {status === 'done' ? (
            <div style={S.successWrap}>
              <div style={S.successIcon}>&#10003;</div>
              <h3 style={S.successTitle}>We&rsquo;ll Call You Soon!</h3>
              <p style={S.successSub}>Our team typically calls back within the hour.</p>
              <a href={PHONE_HREF} style={S.successLink}>Or call us now: {PHONE_DISPLAY}</a>
            </div>
          ) : (
            <>
              <div>
                <h2 style={S.formTitle}>Get a Free Estimate</h2>
                <p style={S.formSub}>We&rsquo;ll call you within the hour.</p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={S.label}>Your Name</label>
                  <input
                    type="text" required placeholder="John Smith"
                    value={name} onChange={e => setName(e.target.value)}
                    style={S.input}
                  />
                </div>
                <div>
                  <label style={S.label}>Phone Number</label>
                  <input
                    type="tel" required placeholder="(425) 555-0000"
                    value={phone} onChange={e => setPhone(e.target.value)}
                    style={S.input}
                  />
                </div>
                <button
                  type="submit" disabled={status === 'sending'}
                  style={{ ...S.submitBtn, opacity: status === 'sending' ? 0.6 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : 'Get My Free Estimate →'}
                </button>
                {status === 'error' && <p style={S.errorTxt}>Something went wrong &mdash; please call us directly.</p>}
              </form>
              <p style={S.spamTxt}>No spam. No pressure. Just a free roof inspection.</p>
            </>
          )}
        </div>
      </div>

      {/* Mobile: stack to single column */}
      <style>{`
        @media (max-width: 767px) {
          #lead-hero > div:last-child { grid-template-columns: 1fr !important; padding: 80px 20px !important; }
          #lead-hero h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
