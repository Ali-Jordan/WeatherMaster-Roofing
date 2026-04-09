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

export default function LeadHero() {
  const [name,   setName]   = useState('');
  const [phone,  setPhone]  = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('sending');
    const lead: Lead = { name: name.trim(), phone: phone.trim(), ts: new Date().toISOString(), source: 'hero-form' };
    saveLead(lead);
    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject:    'New Lead — WeatherMaster Roofing (Hero Form)',
          name:       lead.name,
          phone:      lead.phone,
          source:     'Hero form',
          botcheck:   '',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="lead-hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0a0010' }}>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.webp')", filter: 'brightness(0.35)' }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(10,0,16,0.92) 0%,rgba(10,0,16,0.55) 60%,rgba(10,0,16,0.20) 100%)' }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_,i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-white font-semibold text-sm">5.0</span>
            <span className="text-white/60 text-sm">&middot; 13 Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Roof Repair &amp; Replacement in{' '}
            <span style={{ color: '#a855f7' }}>Northwest Washington</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-md">
            Licensed &amp; insured. Free estimates. Same-day response for storm damage.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider">
            {['✓ Licensed & Insured','✓ 24/7 Emergency','✓ Free Estimates','✓ Insurance Claims'].map(t => (
              <span key={t} className="bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/15">{t}</span>
            ))}
          </div>

          <a
            href={PHONE_HREF}
            data-track="hero-call"
            className="inline-flex items-center justify-center gap-3 rounded-xl font-bold text-xl px-8 py-5 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ background: '#a855f7', color: '#fff', boxShadow: '0 0 32px rgba(168,85,247,0.45)' }}
          >
            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
            </svg>
            Call Now — {PHONE_DISPLAY}
          </a>
          <p className="text-white/40 text-sm -mt-2">or fill out the quick form →</p>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-white/10 p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
          {status === 'done' ? (
            <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: 'rgba(168,85,247,0.2)' }}>✓</div>
              <h3 className="text-white text-2xl font-bold">We’ll Call You Soon!</h3>
              <p className="text-white/60 text-sm">Our team typically calls back within the hour.</p>
              <a href={PHONE_HREF} className="text-purple-400 font-semibold hover:underline">Or call us now: {PHONE_DISPLAY}</a>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-white text-2xl font-bold">Get a Free Estimate</h2>
                <p className="text-white/50 text-sm mt-1">We’ll call you within the hour.</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Your Name</label>
                  <input type="text" required placeholder="John Smith" value={name} onChange={e => setName(e.target.value)}
                    className="rounded-xl px-4 py-3.5 text-white placeholder-white/25 border border-white/15 outline-none focus:border-purple-500 transition-colors text-base"
                    style={{ background: 'rgba(255,255,255,0.07)' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Phone Number</label>
                  <input type="tel" required placeholder="(425) 555-0000" value={phone} onChange={e => setPhone(e.target.value)}
                    className="rounded-xl px-4 py-3.5 text-white placeholder-white/25 border border-white/15 outline-none focus:border-purple-500 transition-colors text-base"
                    style={{ background: 'rgba(255,255,255,0.07)' }} />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  className="rounded-xl py-4 font-bold text-lg text-white transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60 mt-1"
                  style={{ background: status === 'sending' ? '#6b21a8' : '#a855f7' }}>
                  {status === 'sending' ? 'Sending...' : 'Get My Free Estimate →'}
                </button>
                {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong — please call us directly.</p>}
              </form>
              <p className="text-white/25 text-xs text-center">No spam. No pressure. Just a free roof inspection.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
