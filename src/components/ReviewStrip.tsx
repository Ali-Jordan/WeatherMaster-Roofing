const reviews = [
  {
    name: 'Paul Smith',
    location: 'Google Review · 2 years ago',
    text: 'A WeatherMaster "cold call" at my home came at the right time. They grabbed a ladder to inspect, gave me a price, and told me when they could do it the following week. They showed up right on time and did a beautiful repair job that perfectly matched my wood siding — even painting it before they left. Very clever technicians and VERY talented. They are my roofers forever.',
  },
  {
    name: 'Ron Daniels',
    location: 'Google Review · 2 years ago',
    text: 'Pedro and his crew at Weather Master re-roofed 2 houses for me and their prices were very competitive. They started and ended both jobs on schedule. They cleaned up the sites after they finished and were very friendly and accommodating. Very professional business and I highly recommend them.',
  },
  {
    name: 'James Wagner',
    location: 'Google Review · a year ago',
    text: 'Great service! The team was professional, efficient, and did excellent work on our roof. Highly recommend for anyone needing reliable roofing services.',
  },
];

function Stars() {
  return <span style={{ color: '#facc15', fontSize: 15, letterSpacing: 2 }}>★★★★★</span>;
}

export default function ReviewStrip() {
  return (
    <section style={{ background: '#0d0018', padding: '80px 24px', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Stars />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 20 }}>5.0</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, margin: 0 }}>Based on 13 Google Reviews</p>
          </div>
          <a href="https://www.google.com/maps/search/Weather+Master+Roofing+Northwest"
             target="_blank" rel="noopener noreferrer"
             style={{ marginLeft: 'auto', color: '#a855f7', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
            See all reviews &rarr;
          </a>
        </div>
        <div className="wm-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Stars />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: 12, marginTop: 'auto' }}>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14, margin: 0 }}>{r.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: '2px 0 0' }}>{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <style>{`
        @media (max-width: 767px) {
          .wm-reviews-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
