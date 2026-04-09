const reviews = [
  { name: 'Sarah M.',  location: 'Issaquah, WA', text: 'Called them after storm damage — they were on my roof the next morning. Fast, professional, and handled everything with my insurance. Incredible service.' },
  { name: 'David K.',  location: 'Bellevue, WA',  text: 'Got three quotes for a full roof replacement. WeatherMaster came in competitive and actually showed up on time. Clean work, great communication.' },
  { name: 'Linda R.',  location: 'Redmond, WA',   text: 'Fixed a leak I had been fighting for two years. They found the source in 20 minutes, repaired it same day. Should have called sooner.' },
];

function Stars() {
  return <span style={{ color: '#facc15', fontSize: 15, letterSpacing: 2 }}>★★★★★</span>;
}

export default function ReviewStrip() {
  return (
    <section style={{ background: '#0d0018', padding: '80px 24px', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Stars />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 20 }}>5.0</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, margin: 0 }}>Based on 13 Google Reviews</p>
          </div>
          <a
            href="https://www.google.com/maps/search/Weather+Master+Roofing+Northwest"
            target="_blank" rel="noopener noreferrer"
            style={{ marginLeft: 'auto', color: '#a855f7', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
          >
            See all reviews &rarr;
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 16, padding: 24,
                display: 'flex', flexDirection: 'column', gap: 14,
              }}
            >
              <Stars />
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: 12, marginTop: 'auto' }}>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14, margin: 0 }}>{r.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: '2px 0 0' }}>{r.location} &middot; Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:767px){ #reviews-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
