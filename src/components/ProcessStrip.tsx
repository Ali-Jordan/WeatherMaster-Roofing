export default function ProcessStrip() {
  const steps = [
    { num: '1', title: 'Call or Submit',
      body: 'Reach us by phone or form. We respond within 60 minutes during business hours — same day on weekends.' },
    { num: '2', title: 'Free On-Site Inspection',
      body: 'A licensed roofer arrives same day or next morning. We assess the damage and give you a written quote — no pressure.' },
    { num: '3', title: 'Work Begins — Fast',
      body: 'Most repairs completed within 24–48 hours of approval. Full site cleanup. Workmanship guarantee in writing.' },
  ];

  return (
    <section style={{ background: '#0d0018', padding: '64px 24px', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ color: '#a855f7', fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' as const, margin: '0 0 10px', textAlign: 'center' as const }}>HOW IT WORKS</p>
        <h2 style={{ color: '#fff', fontSize: 30, fontWeight: 800, textAlign: 'center' as const, margin: '0 0 48px' }}>Simple. Fast. No Surprises.</h2>
        <div className="wm-process-grid">
          {steps.map((s, i) => (
            <div key={i} className="wm-process-step">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(168,85,247,0.15)', border: '1.5px solid rgba(168,85,247,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, fontSize: 20 }}>{s.num}</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, margin: 0 }}>{s.title}</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 15, lineHeight: 1.7, margin: 0, paddingLeft: 66 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
