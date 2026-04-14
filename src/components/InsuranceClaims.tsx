export default function InsuranceClaims() {
  const bullets = [
    'We\u2019ve worked with Allstate, State Farm, Farmers, and all major carriers in King County',
    'We photograph and document all damage before we start \u2014 adjuster-ready reports',
    'We can meet your adjuster on-site to make sure nothing gets missed',
    'No extra charge for insurance documentation \u2014 it\u2019s part of the job',
  ];
  const stats = [
    { stat: '24hr', label: 'Typical response after storm call' },
    { stat: '$0', label: 'Extra charge for claim documentation' },
    { stat: '5.0\u2605', label: 'Google rating from Bellevue homeowners' },
    { stat: '13', label: 'Five-star Google reviews' },
  ];

  return (
    <section style={{ fontFamily: 'inherit', background: 'linear-gradient(135deg,#1a0030 0%,#0a0010 100%)', padding: '72px 24px' }}>
      <div className="wm-ins-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
          <p style={{ color: '#a855f7', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' as const, margin: 0 }}>STORM DAMAGE &amp; INSURANCE</p>
          <h2 style={{ color: '#fff', fontSize: 30, fontWeight: 800, lineHeight: 1.2, margin: 0 }}>Your Insurance Probably Covers This.</h2>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            Most homeowners don&rsquo;t realize wind, hail, and fallen trees are covered under standard policies. We document everything your adjuster needs &mdash; at no extra charge.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {bullets.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: '#a855f7', fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <a href='tel:+14254064522' data-track='insurance-call'
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#a855f7', color: '#fff', borderRadius: 12, padding: '16px 28px', fontSize: 17, fontWeight: 800, textDecoration: 'none', width: 'fit-content', marginTop: 8 }}>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' style={{ flexShrink: 0 }}>
              <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z'/>
            </svg>
            Start My Insurance Claim →
          </a>
        </div>
        <div className="wm-ins-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {stats.map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 16, padding: '24px 20px', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <p style={{ color: '#a855f7', fontSize: 32, fontWeight: 900, margin: 0, lineHeight: 1 }}>{c.stat}</p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5, margin: 0 }}>{c.label}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{'@media(max-width:767px){.wm-ins > div{grid-template-columns:1fr!important}}'}</style>
    </section>
  );
}
