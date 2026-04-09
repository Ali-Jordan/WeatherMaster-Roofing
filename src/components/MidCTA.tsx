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
    const lead: Lead = { name, phone, ts: new Date().toISOString(), source: 'mid-cta' };
    saveLead(lead);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject:    'New Lead — WeatherMaster Roofing (Mid-Page CTA)',
          name:       lead.name,
          phone:      lead.phone,
          source:     'Mid-page CTA',
          botcheck:   '',
        }),
      });
    } catch {}
    setBusy(false);
    setDone(true);
  };

  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg,#1a0030 0%,#0a0010 100%)' }}>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div>
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Ready when you are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get a Free Roof Inspection Today</h2>
          <p className="text-white/50 mt-3 text-lg">No obligation. No pushy sales. Just an honest assessment.</p>
        </div>
        {done ? (
          <div className="text-center py-6">
            <p className="text-2xl text-white font-bold">✓ Got it! We’ll call you shortly.</p>
            <a href={PHONE_HREF} className="text-purple-400 mt-2 block font-semibold hover:underline">Or call us now: {PHONE_DISPLAY}</a>
          </div>
        ) : (
          <form onSubmit={submit} className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
            <input type="text" required placeholder="Your name" value={name} onChange={e => setName(e.target.value)}
              className="flex-1 rounded-xl px-4 py-4 text-white placeholder-white/30 border border-white/15 outline-none focus:border-purple-500 transition-colors text-base"
              style={{ background: 'rgba(255,255,255,0.07)' }} />
            <input type="tel" required placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)}
              className="flex-1 rounded-xl px-4 py-4 text-white placeholder-white/30 border border-white/15 outline-none focus:border-purple-500 transition-colors text-base"
              style={{ background: 'rgba(255,255,255,0.07)' }} />
            <button type="submit" disabled={busy}
              className="rounded-xl px-6 py-4 font-bold text-white transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              style={{ background: '#a855f7' }}>
              {busy ? '...' : 'Request Estimate'}
            </button>
          </form>
        )}
        <a href={PHONE_HREF} data-track="mid-cta-call"
           className="flex items-center gap-3 text-white font-bold text-xl hover:text-purple-300 transition-colors">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
          </svg>
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
