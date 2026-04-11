export default function GuaranteeBlock() {
  const promises = [
    { icon: '☑', title: 'Written Quote Before Any Work',
      body: 'You get a detailed written estimate before we touch your roof. No surprise bills — ever.' },
    { icon: '🛡', title: 'Workmanship Guarantee',
      body: 'If something we repaired fails, we come back and fix it. No runaround, no fine print.' },
    { icon: '✓', title: 'Licensed & Insured — Verified',
      body: 'WA State Licensed. Fully insured. Verify our license at Verify.LNI.wa.gov.' },
    { icon: '✆', title: 'We Answer 7 Days a Week',
      body: 'Including weekends. Because roofs don’t leak on schedule.' },
    { icon: '$', title: 'Free Estimate — Zero Pressure',
      body: 'Our inspection is free. Our quote is free. You decide if and when you want to move forward.' },
  ];

  return (
    <section style={{ background: '#08000f', padding: '72px 24px', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ color: '#a855f7', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' as const, textAlign: 'center' as const, margin: '0 0 10px' }}>OUR PROMISE</p>
        <h2 style={{ color: '#fff', fontSize: 30, fontWeight: 800, textAlign: 'center' as const, margin: '0 0 48px' }}>What You Get With Every Job</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const }}>
          {promises.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '24px 0', borderBottom: i < promises.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
              <div>
                <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
