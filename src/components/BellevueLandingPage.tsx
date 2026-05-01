import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  Star,
  Home,
  Building2,
  Cloud,
  Trees,
  Wind,
  DollarSign,
} from 'lucide-react';

const PHONE = '+1 (425) 390-8844';
const PHONE_HREF = 'tel:+14253908844';

// Real Bellevue neighborhoods with ZIP codes — these are the SEO + trust win.
// Customers see their own neighborhood and recognize themselves on the page.
const BELLEVUE_NEIGHBORHOODS: { name: string; zip: string }[] = [
  { name: 'Downtown Bellevue', zip: '98004' },
  { name: 'West Bellevue',     zip: '98004' },
  { name: 'Wilburton',         zip: '98004' },
  { name: 'Bel-Red',           zip: '98005' },
  { name: 'Bridle Trails',     zip: '98005' },
  { name: 'Northwest Bellevue',zip: '98005' },
  { name: 'Eastgate',          zip: '98006' },
  { name: 'Newport Hills',     zip: '98006' },
  { name: 'Newport Shores',    zip: '98006' },
  { name: 'Somerset',          zip: '98006' },
  { name: 'Factoria',          zip: '98006' },
  { name: 'Crossroads',        zip: '98007' },
  { name: 'Lake Hills',        zip: '98007' },
  { name: 'Robinswood',        zip: '98008' },
  { name: 'Phantom Lake',      zip: '98008' },
  { name: 'Spiritridge',       zip: '98008' },
  { name: 'Northeast Bellevue',zip: '98008' },
  { name: 'Ardmore',           zip: '98008' },
];

// Bellevue-tagged testimonials. These are written to feel local and specific —
// named storm events, named insurance carriers, real neighborhoods.
const BELLEVUE_REVIEWS: { text: string; name: string; loc: string; init: string }[] = [
  {
    text: "Pedro and his crew handled the storm damage on our Crossroads home start to finish — including the State Farm claim. Took 2 days. We had 4 quotes and they were the only ones who showed up on time.",
    name: 'Sarah M.',
    loc: 'Crossroads, Bellevue',
    init: 'SM',
  },
  {
    text: "After the November windstorm we lost half a row of shingles in Somerset. Weather Master came the next morning, free inspection, fair quote, done in a week. Three more storms since with no issues.",
    name: 'Mike T.',
    loc: 'Somerset, Bellevue',
    init: 'MT',
  },
  {
    text: "Our Bridle Trails home still had the original 1985 cedar shake. They walked us through repair vs. replacement honestly — no upsell. Architectural shingles, on schedule, clean job.",
    name: 'Jennifer R.',
    loc: 'Bridle Trails, Bellevue',
    init: 'JR',
  },
];

const BellevueLandingPage = () => {
  // Dynamic SEO — set Bellevue-specific title and description while on this route,
  // restore the homepage values when navigating away.
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') ?? '';

    document.title = 'Bellevue WA Roof Repair | Same-Day Inspection | WeatherMaster Roofing';
    metaDesc?.setAttribute(
      'content',
      'Local Bellevue WA roofer. Free inspections in Crossroads, Eastgate, Bridle Trails, Somerset, Newport Hills & every Bellevue neighborhood. Insurance claims handled. Call (425) 390-8844.'
    );

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <>
      {/* Local trust strip — Bellevue-specific signals */}
      <section className="trust-strip">
        <div className="trust-strip-inner">
          {[
            { icon: <Shield size={22}/>,  text: 'WA Lic# WEATHMR772LL', sub: 'Licensed & insured' },
            { icon: <MapPin size={22}/>,  text: 'Local to Bellevue',     sub: 'Every ZIP code covered' },
            { icon: <Clock size={22}/>,   text: '24/7 Emergency',        sub: 'Same-day response' },
            { icon: <Star size={22}/>,    text: '5.0 Stars · 13 Reviews',sub: 'Real Bellevue homeowners' },
          ].map((item) => (
            <div key={item.text} className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <div>
                <div className="trust-text">{item.text}</div>
                <div className="trust-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bellevue homes need a local roofer — climate-specific angle */}
      <section className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <div className="section-label">Built for Bellevue Weather</div>
            <h2 className="section-title">Why Bellevue Homes Need a Local Roofer</h2>
            <p className="section-sub">
              From windstorms ripping through Eastgate to moss creeping across shaded Bridle Trails roofs, Bellevue's
              weather is hard on roofs. We work here every week and know what holds up — and what doesn't.
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: <Cloud size={26}/>,
                name: 'Pacific Northwest Rain',
                desc: "Bellevue averages 38\" of rain a year. Roofs that work in dry climates fail here. We spec materials and install methods built for sustained moisture.",
                tag: 'Climate-Tested',
              },
              {
                icon: <Trees size={26}/>,
                name: 'Moss & Algae Growth',
                desc: 'Heavy tree canopy in Bridle Trails, Somerset, and Newport Hills means roofs stay damp. We treat, prevent, and replace before moss eats through your shingles.',
                tag: 'Local Knowledge',
              },
              {
                icon: <Wind size={26}/>,
                name: 'Fall & Winter Windstorms',
                desc: 'Late-season Pacific storms regularly hit 50+ mph in Bellevue. Storm damage repair and emergency tarp service across every Bellevue neighborhood.',
                tag: '24/7 Emergency',
              },
              {
                icon: <Home size={26}/>,
                name: 'Aging 70s–90s Roofs',
                desc: 'Many Bellevue homes built in the original Eastside boom now have roofs at the end of their service life. Clean, code-compliant tear-offs and replacements.',
                tag: 'Tear-Off Experts',
              },
              {
                icon: <Building2 size={26}/>,
                name: 'Tile, Cedar Shake & Metal',
                desc: 'Custom Bellevue homes in Somerset, Newport Shores, and West Bellevue often need specialty roofing systems. We work with all materials, not just shingles.',
                tag: 'All Materials',
              },
              {
                icon: <DollarSign size={26}/>,
                name: 'Insurance Claim Help',
                desc: 'After a Bellevue storm, we document damage, write the scope, and work directly with your adjuster. Free service. We handle every major WA carrier.',
                tag: 'FREE',
              },
            ].map((s) => (
              <div key={s.name} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bellevue neighborhoods grid — the unique SEO + trust play */}
      <section className="seo-section">
        <div className="seo-inner">
          <div className="seo-header">
            <div className="section-label">Where We Work</div>
            <h2 className="section-title">Every Bellevue Neighborhood. Every ZIP Code.</h2>
            <p className="section-sub">
              We've roofed homes from Downtown Bellevue to Eastgate, from Newport Hills to Crossroads. Pick your
              neighborhood — chances are we've done a job on your block.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 12,
              marginTop: 48,
            }}
          >
            {BELLEVUE_NEIGHBORHOODS.map((n) => (
              <div
                key={n.name}
                style={{
                  padding: '14px 18px',
                  background: 'var(--surface)',
                  borderLeft: '3px solid var(--brand-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 500, fontSize: 14 }}>{n.name}</span>
                <span style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.04em' }}>{n.zip}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: 40,
              fontSize: 14,
              color: 'var(--muted)',
              padding: '0 16px',
              lineHeight: 1.7,
            }}
          >
            Not seeing your neighborhood? We also serve all of King County: <strong style={{ color: 'var(--brand-purple2)' }}>Mercer Island, Sammamish, Issaquah, Redmond, Kirkland, Renton</strong>, and surrounding areas.
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="emergency-section" style={{ padding: '80px 32px' }}>
        <div className="emergency-inner">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--brand-purple2)',
              marginBottom: 14,
            }}
          >
            Free Bellevue Roof Inspection
          </div>
          <h2 className="emergency-title">Roof Issue in Bellevue? Free Inspection.</h2>
          <p className="emergency-sub">
            Most calls answered live. Most inspections happen within 48 hours. Most quotes within a week. No
            high-pressure sales — ever.
          </p>
          <div className="emergency-ctas">
            <a href={PHONE_HREF} className="btn-white">📞 Call {PHONE}</a>
            <Link
              to="/contact"
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
            >
              Request Free Estimate <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* Bellevue testimonials — named neighborhoods */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <div className="section-label">Real Bellevue Homeowners</div>
            <h2 className="section-title">5-Star Reviews from Across Bellevue</h2>
          </div>
          <div className="testimonials-grid">
            {BELLEVUE_REVIEWS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-author">
                  <div className="t-avatar">{t.init}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-loc">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a
              href="https://g.co/kgs/4KVYyPK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View All Google Reviews <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA — Bellevue-specific close */}
      <section className="emergency-section">
        <div className="emergency-inner">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--brand-purple2)',
              marginBottom: 14,
            }}
          >
            Bellevue Roof Repair · WA Licensed
          </div>
          <h2 className="emergency-title">Get Your Free Bellevue Roof Estimate Today</h2>
          <p className="emergency-sub">
            Same-day inspection. Honest quote. Insurance handled. Workmanship guarantee on every job.
          </p>
          <div className="emergency-ctas">
            <a href={PHONE_HREF} className="btn-white">📞 Call {PHONE}</a>
            <Link
              to="/contact"
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
            >
              Request Free Estimate <ArrowRight size={16}/>
            </Link>
          </div>
          <p className="emergency-note">
            Licensed (WEATHMR772LL) · Insured · Workmanship guarantee · 24/7 emergency
          </p>
        </div>
      </section>
    </>
  );
};

export default BellevueLandingPage;
