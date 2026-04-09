import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Shield, Clock, CheckCircle, Star, ArrowRight, Home, Building2, CloudLightning, DollarSign, Droplets, Layers, Wrench, Award, Zap, FileText, Search, Globe } from 'lucide-react';
import LeadHero     from './components/LeadHero';
import StickyCall   from './components/StickyCall';
import ReviewStrip  from './components/ReviewStrip';
import MidCTA       from './components/MidCTA';


const PHONE = '+1 (425) 389-8224';
const PHONE_HREF = 'tel:+14253898224';
const EMAIL = 'info@weathermasterroofingnw.com';
const ADDRESS = 'P.O. Box 388, Issaquah, WA 98027';

const PHOTOS = [
  '/images/project-1.webp',
  '/images/project-2.webp',
  '/images/project-3.webp',
  '/images/project-4.webp',
  '/images/project-5.webp',
  '/images/project-6.webp',
  '/images/project-7.webp',
  '/images/project-8.webp',
];

const BLOG_POSTS = [
  {
    slug: 'signs-roof-needs-replacement',
    title: '7 Signs Your Northwest Washington Roof Needs Replacing',
    excerpt: 'Pacific Northwest weather is brutal on roofs. Here are the warning signs homeowners in Issaquah, Bellevue, and Redmond should never ignore.',
    category: 'Residential Roofing',
    date: 'March 15, 2025',
    readTime: '5 min read',
    photo: PHOTOS[1],
    content: [
      { heading: 'The Pacific Northwest climate is hard on roofs', body: 'Constant rain, moss growth, wind, and occasional ice make Northwest Washington one of the most demanding climates for roofing materials. Most asphalt shingle roofs last 20-25 years in this region — less if maintenance has been neglected.' },
      { heading: '1. Shingles are curling or buckling', body: 'Curling shingles are a sign of weathering and indicate the shingles are past their life expectancy. Shingles that are curling at the edges or buckling in the middle mean moisture is getting underneath.' },
      { heading: '2. Missing shingles after a storm', body: 'Washington windstorms are common, especially in fall and winter. If you notice shingles in your yard or visible patches on your roof after a storm, call for an inspection immediately.' },
      { heading: '3. Granules in your gutters', body: 'Asphalt shingles shed granules as they age. If your gutters are full of dark, sand-like granules, your shingles are deteriorating. This leaves the underlying asphalt exposed to UV rays and moisture.' },
      { heading: '4. Daylight through your attic boards', body: 'On a bright day, go into your attic and look for light coming through the roof boards. If light gets in, so does rain, cold air, and pests.' },
      { heading: '5. Roof sagging', body: 'A sagging roof is a structural issue and should be addressed immediately. It indicates a problem with the decking in the attic or with the foundational supports of the roof.' },
      { heading: '6. Moss and algae growth', body: "Northwest Washington's constant moisture makes roofs prime territory for moss and algae. While it looks cosmetic, moss holds moisture against shingles and accelerates decay." },
      { heading: '7. Your roof is over 20 years old', body: 'Even if your roof looks fine from the ground, a roof over 20 years old in the Pacific Northwest should receive a professional inspection. Many issues are only visible up close.' },
    ]
  },
  {
    slug: 'storm-damage-insurance-claim-guide',
    title: 'Storm Damage Insurance Claims: A Complete Guide for WA Homeowners',
    excerpt: 'Filing a roofing insurance claim in Washington State can feel overwhelming. We break down exactly what to do — and how we handle it for you at no extra charge.',
    category: 'Insurance & Storm Damage',
    date: 'February 28, 2025',
    readTime: '7 min read',
    photo: PHOTOS[6],
    content: [
      { heading: 'Washington storms cause more roof damage than most homeowners realize', body: 'Wind, hail, falling branches, and standing water from heavy rain are all covered perils under most Washington homeowner policies.' },
      { heading: 'Step 1: Document damage immediately', body: 'Take photos from ground level right after the storm. Note the date and time. Do not attempt to get on the roof yourself.' },
      { heading: 'Step 2: Call a licensed roofer before calling your insurer', body: 'A licensed roofer who works with insurance claims will document the damage professionally, in terms your adjuster cannot dispute.' },
      { heading: 'Step 3: File your claim promptly', body: 'Washington State requires claims to be filed within a reasonable time after the storm event. Most policies specify 30-60 days.' },
      { heading: 'Step 4: Meet your adjuster with your contractor present', body: 'Have your roofing contractor present when the adjuster visits. They will point out damage the adjuster might miss.' },
      { heading: 'How Weather Master Roofing handles your claim', body: 'We have handled hundreds of insurance claims across Northwest Washington. We document everything, write the scope of work in insurance-standard language, and follow up until the claim is settled. This service is completely free.' },
    ]
  },
  {
    slug: 'best-roofing-materials-pacific-northwest',
    title: 'Best Roofing Materials for the Pacific Northwest Climate',
    excerpt: 'Not all roofing materials perform equally in Washington State. Here is what works best in our wet, mossy, windy climate — and what to avoid.',
    category: 'Materials & Installation',
    date: 'February 10, 2025',
    readTime: '6 min read',
    photo: PHOTOS[5],
    content: [
      { heading: 'Climate-first material selection', body: 'Northwest Washington averages 150+ days of rain per year in many areas. Your roofing material needs to handle constant moisture, resist moss and algae, and stand up to wind events.' },
      { heading: 'Architectural shingles: The best value', body: 'Architectural asphalt shingles are the most popular choice. They last 25-30 years in our climate, handle moss treatment well, and are the most cost-effective option for residential homes.' },
      { heading: 'Metal roofing: The premium long-term choice', body: 'Metal roofs last 40-70 years, shed rain and snow efficiently, and are naturally resistant to moss and algae. They cost 2-3x more upfront but are often the last roof a homeowner ever buys.' },
      { heading: 'Tile roofing: Beautiful but heavy', body: 'Clay and concrete tile roofing is durable and attractive but requires structural reinforcement. More susceptible to cracking from freeze-thaw cycles at higher elevations.' },
      { heading: 'What to avoid in the Pacific Northwest', body: 'Wood shake roofs absorb moisture, promote moss growth, and require intensive maintenance. Most insurance companies in Washington are reluctant to cover wood shake.' },
      { heading: 'Our recommendation', body: 'For most Northwest Washington homes: architectural shingles with a Class 4 impact rating, algae-resistant granules, and a 30-year manufacturer warranty.' },
    ]
  },
  {
    slug: 'commercial-roofing-tpo-vs-epdm',
    title: 'TPO vs EPDM: Which Flat Roof System Is Right for Your Washington Business?',
    excerpt: 'If you own a commercial building in Northwest Washington, you will eventually face this choice. Here is the honest comparison from roofers who install both.',
    category: 'Commercial Roofing',
    date: 'January 22, 2025',
    readTime: '5 min read',
    photo: PHOTOS[7],
    content: [
      { heading: 'Flat roofs dominate commercial construction', body: 'Most commercial buildings in the Pacific Northwest use some form of low-slope or flat roofing. The two most common systems are TPO and EPDM.' },
      { heading: 'TPO: Energy efficient and weld-sealed', body: 'TPO is a white or light-colored single-ply membrane that reflects UV rays and reduces cooling costs. Seams are heat-welded, creating a watertight bond.' },
      { heading: 'EPDM: Proven durability in wet climates', body: 'EPDM is a synthetic rubber membrane used in commercial roofing for 40+ years. It performs exceptionally well in cold, wet climates making it highly suitable for Northwest Washington.' },
      { heading: 'Which lasts longer in the Pacific Northwest?', body: 'Both systems last 20-30 years when properly installed. EPDM has a slight edge in our climate due to its flexibility and proven track record in wet, cold environments.' },
      { heading: 'Cost comparison', body: 'TPO typically runs $5-8 per square foot installed. EPDM runs $4-7 per square foot. What matters more than material cost is installation quality.' },
      { heading: 'Our recommendation', body: 'EPDM if longevity in wet conditions is the priority. TPO if energy efficiency and aesthetics matter more. We install both systems.' },
    ]
  },
  {
    slug: 'gutter-maintenance-pacific-northwest',
    title: 'Gutter Maintenance in the Pacific Northwest: What Every Homeowner Needs to Know',
    excerpt: 'Clogged gutters cause foundation damage, rot fascia boards, and flood basements. Here is how to keep yours working all year in Washington State.',
    category: 'Gutters & Maintenance',
    date: 'January 8, 2025',
    readTime: '4 min read',
    photo: PHOTOS[3],
    content: [
      { heading: 'The Pacific Northwest is the hardest climate for gutters', body: 'Moss, pine needles, maple seeds, and heavy rainfall make Northwest Washington gutters work overtime. A clogged gutter in summer becomes a flood risk the first week of October rains.' },
      { heading: 'How often should you clean gutters in Washington?', body: 'Twice a year minimum — once in late spring and once in late fall. If you have pine trees overhanging your roof, four times per year is recommended.' },
      { heading: 'Signs your gutters need attention now', body: 'Water spilling over the sides, gutters pulling away from the fascia, plants growing in gutters, water stains on siding, or water pooling near your foundation.' },
      { heading: 'Seamless gutters: The upgrade worth making', body: 'Traditional sectional gutters have seams that leak and separate over time. Seamless gutters are cut to the exact length of your roofline with no seams except at corners.' },
      { heading: 'Gutter guards: Do they work?', body: 'Quality gutter guards reduce maintenance frequency but do not eliminate it. The fine mesh style works best for keeping out pine needles and debris.' },
    ]
  },
  {
    slug: 'moss-removal-roof-washington',
    title: 'Roof Moss Removal in Washington State: DIY vs Professional',
    excerpt: 'Moss on your roof is more than an eyesore. Left untreated, it shortens your roof life by years. Here is what actually works — and what makes it worse.',
    category: 'Maintenance & Repair',
    date: 'December 15, 2024',
    readTime: '4 min read',
    photo: PHOTOS[0],
    content: [
      { heading: 'Moss is the number one roof enemy in Northwest Washington', body: 'Our combination of rainfall, cloud cover, and tree canopy creates ideal conditions for moss. Once established, moss holds moisture against shingles 24/7, accelerating decay.' },
      { heading: 'What you should never do', body: 'Power washing is the most common and most damaging DIY mistake. High-pressure water strips granules from asphalt shingles and ages a roof by years in a single afternoon.' },
      { heading: 'What actually works: zinc strips', body: 'Zinc strips installed along the roof ridge release zinc ions when it rains, which run down the roof and kill moss. Results take 6-12 months to show fully.' },
      { heading: 'Professional moss treatment process', body: 'Professional treatment involves low-pressure chemical application of moss-killing solution, gentle hand removal of dead moss, and installation of prevention strips.' },
      { heading: 'How often is treatment needed?', body: 'In heavy tree areas, every 2-3 years. In open areas with good sun exposure, every 4-5 years. We offer maintenance plans that include moss treatment on a scheduled basis.' },
    ]
  },
];

const Preloader = ({ done }: { done: boolean }) => (
  <div className={`preloader ${done ? 'done' : ''}`}>
    <div className="preloader-logo">
      <div className="preloader-icon"><img src="/logo.png" alt="WM Roofing" style={{width:"100%",height:"100%",objectFit:"contain"}}/></div>
      <span>Weather Master <span style={{color:'var(--brand-purple2)'}}>Roofing</span></span>
    </div>
    <div className="preloader-bar-track">
      <div className="preloader-bar-fill" />
    </div>
    <div className="preloader-text">Northwest Washington's Trusted Roofers</div>
  </div>
);

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { if (!location.hash) { window.scrollTo(0, 0); } }, [location]);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="nav-logo-icon"><img src="/logo.png" alt="WM Roofing" style={{width:"100%",height:"100%",objectFit:"contain"}}/></div>
          <span>Weather Master Roofing NW</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/process" className="nav-link">Process</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href={PHONE_HREF} className="nav-phone">📞 {PHONE}</a>
        </div>

        {/* Mobile right side */}
        <div className="nav-mobile-right">
          <a href={PHONE_HREF} className="nav-mobile-phone">📞 Call</a>
          <Link to="/contact" className="nav-mobile-contact">Contact</Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line${mobileMenuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${mobileMenuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${mobileMenuOpen ? ' open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`nav-mobile-menu${mobileMenuOpen ? ' nav-mobile-menu--open' : ''}`}>
        <Link to="/services" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link to="/process" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>Our Process</Link>
        <Link to="/blog" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <a href={PHONE_HREF} className="nav-mobile-link nav-mobile-cta" onClick={() => setMobileMenuOpen(false)}>📞 {PHONE}</a>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Weather Master Roofing Northwest</div>
          <div className="footer-brand-sub">Trusted roofing contractor serving Northwest Washington with residential and commercial roofing, storm damage restoration, and gutter solutions.</div>
          <div className="footer-contact-quick">
            <div className="footer-contact-item">📞 <a href={PHONE_HREF} style={{color:'var(--brand-purple2)',fontWeight:700}}>{PHONE}</a></div>
            <div className="footer-contact-item">📧 {EMAIL}</div>
            <div className="footer-contact-item">📍 {ADDRESS}</div>
            <div className="footer-contact-item">🚨 Available 24/7 for emergencies</div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links-list">
                          <a key="Residential Roofing" href="/services#residential-roof-installation" className="footer-link">Residential Roofing</a>
              <a key="Commercial Roofing" href="/services#commercial-roofing" className="footer-link">Commercial Roofing</a>
              <a key="Storm Damage" href="/services#storm-damage-restoration" className="footer-link">Storm Damage</a>
              <a key="Gutter Installation" href="/services#gutter-installation" className="footer-link">Gutter Installation</a>
              <a key="Roof Coating" href="/services#roof-coating-sealing" className="footer-link">Roof Coating</a>
              <a key="Insurance Claims" href="/services#financing-insurance" className="footer-link">Insurance Claims</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Service Areas</div>
          <div className="footer-links-list">
            {['Issaquah','Bellevue','Redmond','Kirkland','Renton','Seattle','Sammamish','Mercer Island'].map(a=>(
              <Link key={a} to="/contact" className="footer-link">{a}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links-list">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/process" className="footer-link">Our Process</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/contact" className="footer-link">Free Estimate</Link>
            <a href="https://www.facebook.com/weathermasterroofingnw" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Weather Master Roofing Northwest. Licensed and Insured.</div>
        
      </div>
    </div>
  </footer>
);

const TrustStrip = () => (
  <div className="trust-strip">
    <div className="trust-strip-inner">
      {[
        {icon:<Shield size={22}/>,text:'Licensed & Insured',sub:'Fully certified'},
        {icon:<Clock size={22}/>,text:'24/7 Emergency',sub:'Always available'},
        {icon:<FileText size={22}/>,text:'Free Estimates',sub:'No obligation'},
        {icon:<DollarSign size={22}/>,text:'Insurance Claims',sub:'We handle it all'},
      ].map(item=>(
        <div key={item.text} className="trust-item">
          <div className="trust-icon">{item.icon}</div>
          <div><div className="trust-text">{item.text}</div><div className="trust-sub">{item.sub}</div></div>
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => (
  <section className="gallery-section">
    <div style={{maxWidth:1280,margin:'0 auto'}}>
      <div style={{textAlign:'center'}}>
        <div className="section-label">Our Work</div>
        <h2 className="section-title">Recent Roofing Projects</h2>
        <p className="section-sub" style={{margin:'12px auto 0'}}>Real jobs across Northwest Washington — residential, commercial, and storm restoration.</p>
      </div>
      <div className="gallery-grid" style={{marginTop:48}}>
        {PHOTOS.map((src,i)=>(
          <div key={i} className="gallery-item">
            <img src={src} alt={`Roofing project ${i+1}`} loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SEOSection = () => (
  <section className="seo-section">
    <div className="seo-inner">
      <div className="seo-header">
        <div className="section-label">Why Northwest Washington Chooses Us</div>
        <h2 className="section-title">Local. Trusted. Always Nearby.</h2>
        <p className="section-sub">We serve homeowners and businesses across all of King County and surrounding areas — fast response, honest pricing, and workmanship you can count on.</p>
      </div>
      <div className="seo-grid">
        <div className="seo-card">
          <div className="seo-icon"><Search size={24}/></div>
          <h3>Easy to Reach, Fast to Respond</h3>
          <p>When you need a roofer in Issaquah, Bellevue, Redmond, or anywhere in Northwest Washington — we pick up the phone and show up on time. No runaround, no waiting weeks for a callback.</p>
          <div className="seo-areas">
            {['Issaquah','Bellevue','Redmond','Kirkland','Renton','Seattle','Sammamish','Mercer Island'].map(a=>(
              <span key={a} className="seo-area-tag">{a}</span>
            ))}
          </div>
        </div>
        <div className="seo-card">
          <div className="seo-icon"><Globe size={24}/></div>
          <h3>Verified & Reviewed by Real Customers</h3>
          <p>Hundreds of Northwest Washington homeowners and business owners have trusted Weather Master Roofing. Our reviews speak for themselves — check them on Google before you call.</p>
          <a href="https://g.co/kgs/4KVYyPK" target="_blank" rel="noopener noreferrer" className="seo-link">Read our Google reviews <ArrowRight size={14}/></a>
        </div>
        <div className="seo-card">
          <div className="seo-icon"><FileText size={24}/></div>
          <h3>Roofing Tips & Expert Guides</h3>
          <p>Our blog covers everything Northwest Washington homeowners need to know — from spotting storm damage to choosing the right materials for our wet climate.</p>
          <div className="seo-areas" style={{marginBottom:16}}>
            {['Storm Damage Claims','Moss Removal','Metal vs Shingle','Gutter Maintenance','TPO vs EPDM'].map(t=>(
              <span key={t} className="seo-area-tag">{t}</span>
            ))}
          </div>
          <a href="/blog" className="seo-link">Read our roofing guides <ArrowRight size={14}/></a>
        </div>
      </div>
      <div className="seo-cta-bar">
        <div>
          <div style={{fontWeight:700,fontSize:15,marginBottom:4,textTransform:'uppercase',letterSpacing:'0.04em'}}>Licensed, insured, and backed by a workmanship guarantee</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>Serving Northwest Washington homeowners and businesses since day one. Free estimates — no obligation.</div>
        </div>
        <div style={{display:'flex',gap:12,flexShrink:0}}>
          <a href={PHONE_HREF} className="btn-primary">📞 Call Now</a>
          <Link to="/contact" className="btn-outline">Get Free Estimate <ArrowRight size={14}/></Link>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero.webp" alt="Northwest Washington roofing"/>
      </div>
      <div className="hero-overlay-top"/>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow" style={{marginBottom:20}}>
            <span className="badge">🏠 Northwest Washington Roofing Contractor</span>
          </div>
          <h1 className="hero-title">
            Northwest<br/><span>Washington's</span><br/>Trusted Roofer
          </h1>
          <p className="hero-sub">
            Licensed and insured roofing contractor serving Issaquah, Bellevue, Redmond, Kirkland, Renton, and all of Northwest Washington. Residential, commercial, storm damage, and gutters.
          </p>
          <div className="hero-ctas">
            <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
            <Link to="/services" className="btn-outline">View Services <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-trust">
            <span>Licensed & Insured</span><span className="trust-sep"/>
            <span>24/7 Emergency</span><span className="trust-sep"/>
            <span>Free Estimates</span><span className="trust-sep"/>
            <span>Insurance Claims Handled</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-cards">
            <div className="hero-stat-card">
              <div className="hero-stat-val">24/7</div>
              <div className="hero-stat-lbl">Emergency Response</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-val">Free</div>
              <div className="hero-stat-lbl">Estimates & Inspections</div>
            </div>
          </div>
          <div className="hero-emergency">
            🚨 <span>Storm damage? Call now — {PHONE}</span>
          </div>
          <div className="hero-guarantee">
            ✅ <span>Workmanship guarantee on every job</span>
          </div>
        </div>
      </div>
    </section>

    <TrustStrip/>

    <section className="services-section">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Complete Roofing & Gutter Solutions</h2>
          <p className="section-sub">From new installations to emergency storm repairs — one call covers it all across Northwest Washington.</p>
        </div>
        <div className="services-grid">
          {[
            {icon:<Home size={26}/>,name:'Residential Roofing',desc:'Full installations, repairs, and replacements. Top-grade materials built for Pacific Northwest weather.',tag:'Most Requested',featured:true},
            {icon:<Building2 size={26}/>,name:'Commercial Roofing',desc:'Expert installation and repair for businesses of all sizes. Energy-efficient systems built to last.',tag:'TPO · EPDM · PVC'},
            {icon:<CloudLightning size={26}/>,name:'Storm Damage Restoration',desc:'Fast emergency response after severe weather. Inspection, repair, and full insurance claim assistance.',tag:'24/7 Emergency',featured:true},
            {icon:<Droplets size={26}/>,name:'Gutter Installation & Repair',desc:'Seamless, K-style, half-round, aluminum, and vinyl gutters. Complete installation and repair service.',tag:'Seamless Options'},
            {icon:<Layers size={26}/>,name:'Roof Coating & Sealing',desc:'Energy-efficient coatings extending roof life, preventing leaks, and improving insulation performance.',tag:'Energy Efficient'},
            {icon:<DollarSign size={26}/>,name:'Financing & Insurance',desc:'FREE insurance claim handling. We navigate the paperwork so you get maximum coverage fast.',tag:'FREE Claims Help',featured:true},
          ].map((s: {icon: React.ReactNode, name: string, desc: string, tag: string, featured?: boolean})=>(
            <div key={s.name} className={`service-card ${s.featured?'featured':''}`}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tag">{s.tag}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:48}}>
          <Link to="/services" className="btn-outline">View All Services <ArrowRight size={16}/></Link>
        </div>
      </div>
    </section>

    <Gallery/>
    <SEOSection/>

    <section className="why-section">
      <div className="why-inner">
        <div className="why-left">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">Quality. Speed. Reliability.</h2>
          <p className="section-sub">Decades of experience, local expertise, and a commitment to your satisfaction on every job.</p>
          <a href={PHONE_HREF} className="btn-primary" style={{marginBottom:0}}>Get a Free Estimate <ArrowRight size={16}/></a>
          <div className="why-grid">
            {[
              {icon:<Award size={18}/>,title:'Decades of Experience',desc:'Hands-on roofing and gutter expertise.'},
              {icon:<Shield size={18}/>,title:'Licensed & Insured',desc:'Fully certified for every job type.'},
              {icon:<Zap size={18}/>,title:'Fast & Reliable',desc:'On-time completion, every time.'},
              {icon:<CheckCircle size={18}/>,title:'Workmanship Guarantee',desc:'We stand behind every roof we install.'},
              {icon:<Building2 size={18}/>,title:'Residential & Commercial',desc:'Solutions for homes and businesses.'},
              {icon:<DollarSign size={18}/>,title:'Honest Pricing',desc:'Clear estimates with no hidden fees.'},
              {icon:<Home size={18}/>,title:'Locally Owned',desc:'Proudly serving our NW Washington community.'},
              {icon:<Star size={18}/>,title:'Customer First',desc:"Not happy until you are completely satisfied."},
            ].map(w=>(
              <div key={w.title} className="why-item">
                <div className="why-item-icon">{w.icon}</div>
                <div className="why-item-title">{w.title}</div>
                <div className="why-item-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-right">
          <div className="insurance-badge">
            <div style={{fontSize:36,marginBottom:10}}>📝</div>
            <div className="insurance-badge-title">FREE Insurance Claim Handling</div>
            <div className="insurance-badge-sub">We handle all the paperwork so you get maximum coverage</div>
          </div>
          <div className="insurance-steps">
            {['Call us immediately after storm damage','We perform a free inspection and document all damage','We file your insurance claim on your behalf','We work directly with your adjuster','Your roof gets repaired — you just approve the work'].map((step,i)=>(
              <div key={i} className="insurance-step">
                <div className="ins-num">{i+1}</div>
                <div style={{fontSize:14,color:'var(--muted)',lineHeight:1.6}}>{step}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:28,padding:'16px 20px',background:'rgba(143,45,150,0.08)',borderLeft:'3px solid var(--brand-purple)',fontSize:13,color:'var(--muted)'}}>
            🚨 Storm emergency? Call <a href={PHONE_HREF} style={{color:'var(--brand-purple2)',fontWeight:700}}>{PHONE}</a> — Available 24/7
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-label">Client Reviews</div>
          <h2 className="section-title">What Northwest Washington Homeowners Say</h2>
        </div>
        <div className="testimonials-grid">
          {[
            {text:'Weather Master Roofing did an outstanding job on our new roof. The team was professional, efficient, and the results were better than we expected. Highly recommend!',name:'John Allison',loc:'Issaquah, WA',init:'JA'},
            {text:"I have worked with Weather Master Roofing on multiple commercial properties, and they never disappoint. From installation to repair, their quality and service are top-notch.",name:'Alicia Potter',loc:'Bellevue, WA',init:'AP'},
            {text:'Fantastic service from start to finish. The Weather Master team explained everything clearly and completed the job on time. Very happy with the quality of the work!',name:'Edward Suarez',loc:'Redmond, WA',init:'ES'},
          ].map(t=>(
            <div key={t.name} className="testimonial-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-author">
                <div className="t-avatar">{t.init}</div>
                <div><div className="t-name">{t.name}</div><div className="t-loc">{t.loc}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:40}}>
          <a href="https://g.co/kgs/4KVYyPK" target="_blank" rel="noopener noreferrer" className="btn-outline">View All Google Reviews <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>

    <section style={{padding:'100px 32px',background:'var(--bg)'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:56,flexWrap:'wrap',gap:24}}>
          <div>
            <div className="section-label">Roofing Resources</div>
            <h2 className="section-title">From the Blog</h2>
          </div>
          <Link to="/blog" className="btn-outline">View All Articles <ArrowRight size={16}/></Link>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.slice(0,3).map(post=>(
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-img"><img src={post.photo} alt={post.title} loading="lazy"/></div>
              <div className="blog-card-body">
                <div className="blog-meta"><span className="blog-cat">{post.category}</span><span className="blog-read">{post.readTime}</span></div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-link">Read article <ArrowRight size={13}/></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="emergency-section">
      <div className="emergency-inner">
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--brand-purple2)',marginBottom:14}}>24/7 Emergency Service</div>
        <h2 className="emergency-title">Storm Damage? Don't Wait.</h2>
        <p className="emergency-sub">Every hour of delay means more water damage. Call now — we respond fast, inspect for free, and handle your insurance claim.</p>
        <div className="emergency-ctas">
          <a href={PHONE_HREF} className="btn-white">📞 Call {PHONE}</a>
          <Link to="/contact" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.25)',color:'#fff'}}>Get Free Estimate <ArrowRight size={16}/></Link>
        </div>
        <p className="emergency-note">Licensed & Insured · All of Northwest Washington · FREE Insurance Claims</p>
      </div>
    </section>
  </>
);

const BlogPage = () => (
  <>
    <div className="page-hero">
      <div className="page-hero-inner">
        <div className="section-label">Roofing Knowledge Base</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>Roofing Tips & Resources<br/>for NW Washington</h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:580,lineHeight:1.7}}>Expert advice from licensed roofing contractors serving Issaquah, Bellevue, Redmond, Kirkland, and all of King County.</p>
      </div>
    </div>
    <section style={{padding:'80px 32px'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <div className="blog-grid">
          {BLOG_POSTS.map(post=>(
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-img"><img src={post.photo} alt={post.title} loading="lazy"/></div>
              <div className="blog-card-body">
                <div className="blog-meta"><span className="blog-cat">{post.category}</span><span className="blog-read">{post.readTime}</span></div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-link">Read article <ArrowRight size={13}/></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{marginTop:64,background:'var(--surface)',borderTop:'3px solid var(--brand-purple)',padding:48,textAlign:'center'}}>
          <h3 style={{fontFamily:'var(--font-head)',fontSize:'1.8rem',fontWeight:800,marginBottom:12,textTransform:'uppercase'}}>Have a roofing question?</h3>
          <p style={{color:'var(--muted)',maxWidth:480,margin:'0 auto 28px',lineHeight:1.7}}>Call us for a free consultation. We answer questions with no sales pressure.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            <Link to="/contact" className="btn-outline">Request Free Estimate <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

const BlogPostPage = ({ slug }: { slug: string }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <div style={{padding:'140px 32px',textAlign:'center'}}><h1>Post not found</h1><Link to="/blog" className="btn-primary" style={{marginTop:24,display:'inline-flex'}}>Back to Blog</Link></div>;
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Link to="/blog" style={{fontSize:12,color:'var(--brand-purple2)',fontWeight:700,display:'inline-flex',alignItems:'center',gap:6,marginBottom:24,textTransform:'uppercase',letterSpacing:'0.08em'}}>← Back to Blog</Link>
          <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:20}}>
            <span className="blog-cat">{post.category}</span>
            <span style={{fontSize:13,color:'var(--faint)'}}>·</span>
            <span style={{fontSize:13,color:'var(--faint)'}}>{post.date}</span>
            <span style={{fontSize:13,color:'var(--faint)'}}>·</span>
            <span style={{fontSize:13,color:'var(--faint)'}}>{post.readTime}</span>
          </div>
          <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.02em',marginBottom:0}}>{post.title}</h1>
        </div>
      </div>
      <section style={{padding:'0 32px 80px',background:'var(--bg2)'}}>
        <div style={{maxWidth:860,margin:'0 auto'}}>
          <div style={{overflow:'hidden',marginBottom:48}}>
            <img src={post.photo} alt={post.title} style={{width:'100%',height:380,objectFit:'cover'}}/>
          </div>
          <div className="blog-content">
            {post.content.map((section,i)=>(
              <div key={i} style={{marginBottom:36}}>
                <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.4rem',fontWeight:700,marginBottom:12,textTransform:'uppercase',letterSpacing:'0.02em'}}>{section.heading}</h2>
                <p style={{fontSize:16,color:'var(--muted)',lineHeight:1.8}}>{section.body}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:56,background:'var(--surface)',borderTop:'3px solid var(--brand-purple)',padding:40,textAlign:'center'}}>
            <h3 style={{fontFamily:'var(--font-head)',fontSize:'1.5rem',fontWeight:800,marginBottom:10,textTransform:'uppercase'}}>Need a professional roofing inspection?</h3>
            <p style={{color:'var(--muted)',marginBottom:28}}>We offer free inspections across all of Northwest Washington. Licensed, insured, and honest.</p>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
              <Link to="/contact" className="btn-outline">Request Free Estimate <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ServicesPage = () => (
  <>
    <div className="page-hero">
      <div className="page-hero-inner">
        <div className="section-label">Complete Roofing Solutions</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>Every Roofing Service<br/>Northwest Washington Needs</h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7,marginBottom:32}}>Licensed, insured, and backed by a workmanship guarantee on every job.</p>
        <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
          <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
          <Link to="/contact" className="btn-outline">Schedule Inspection <ArrowRight size={16}/></Link>
        </div>
      </div>
    </div>
    <TrustStrip/>
    <section className="services-section">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">All Services</div>
          <h2 className="section-title">Residential & Commercial Roofing</h2>
        </div>
        <div className="services-grid">
          {[
            {icon:<Home size={26}/>,name:'Residential Roof Installation',desc:'New roof installations for homes of all sizes. Every material — shingle, metal, tile, slate, and more.',tag:'Most Popular'},
            {icon:<Wrench size={26}/>,name:'Roof Repair',desc:'Fast, reliable repairs for leaks, missing shingles, flashing issues. Most repairs completed same-day.',tag:'Same-Day Available'},
            {icon:<Home size={26}/>,name:'Roof Replacement',desc:'Complete tear-off and replacement when repairs are no longer cost-effective. Clean and fully warrantied.',tag:'Workmanship Guarantee'},
            {icon:<Building2 size={26}/>,name:'Commercial Roofing',desc:'TPO, EPDM, PVC, modified bitumen, and built-up roofing for commercial buildings. Energy-efficient.',tag:'All Systems'},
            {icon:<CloudLightning size={26}/>,name:'Storm Damage Restoration',desc:'Emergency response for wind, hail, and water damage. We inspect, repair, and handle insurance.',tag:'24/7 Emergency'},
            {icon:<Layers size={26}/>,name:'Roof Coating & Sealing',desc:'Extend roof life with professional coating and sealing. Ideal for flat and low-slope roofs.',tag:'Energy Efficient'},
            {icon:<Droplets size={26}/>,name:'Gutter Installation',desc:'Seamless, K-style, half-round, and custom gutter systems. Full installation service.',tag:'Seamless Options'},
            {icon:<Wrench size={26}/>,name:'Gutter Repair & Replacement',desc:'Fixing sagging, leaking, and clogged gutters. Replace with a superior system when needed.',tag:'Fast Turnaround'},
            {icon:<DollarSign size={26}/>,name:'Financing & Insurance',desc:'FREE insurance claim handling. Flexible financing. We work directly with your adjuster.',tag:'FREE Claims Help'},
          ].map((s: {icon: React.ReactNode, name: string, desc: string, tag: string})=>(
            <div key={s.name} id={s.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Gallery/>
    <SEOSection/>
    <section className="emergency-section">
      <div className="emergency-inner">
        <h2 className="emergency-title">Ready to Get Started?</h2>
        <p className="emergency-sub">Call for a free estimate or fill out our contact form. We respond fast and show up on time.</p>
        <div className="emergency-ctas">
          <a href={PHONE_HREF} className="btn-white">📞 {PHONE}</a>
          <Link to="/contact" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.25)',color:'#fff'}}>Request Free Estimate <ArrowRight size={16}/></Link>
        </div>
      </div>
    </section>
  </>
);

const ProcessPage = () => (
  <>
    <div className="page-hero">
      <div className="page-hero-inner">
        <div className="section-label">How We Work</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>Our 8-Step Process —<br/>Zero Surprises, Every Time</h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7,marginBottom:32}}>From first call to final walkthrough, every step designed to make your project stress-free.</p>
        <a href={PHONE_HREF} className="btn-primary">📞 Start with a Free Consultation</a>
      </div>
    </div>
    <section style={{padding:'80px 32px'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:2,background:'var(--border)'}}>
          {[
            {num:'01',emoji:'🗣️',title:'Consultation',desc:'No-obligation consultation to understand your needs, discuss options, and answer any questions.'},
            {num:'02',emoji:'🔍',title:'Detailed Roof Inspection',desc:'Thorough on-site inspection to assess condition, identify issues, and document everything with photos.'},
            {num:'03',emoji:'📄',title:'Customized Proposal',desc:"Clear, detailed proposal with scope of work, materials, timeline, and pricing — no hidden fees."},
            {num:'04',emoji:'📆',title:'Project Scheduling',desc:'Scheduled at a convenient time, ensuring minimal disruption to your home or business.'},
            {num:'05',emoji:'🔧',title:'Professional Installation',desc:'Certified installers, quality materials, and safety top of mind. Clean and efficient.'},
            {num:'06',emoji:'✅',title:'Final Inspection & Certification',desc:"Detailed final inspection ensuring our high standards are met. Certification of completion issued."},
            {num:'07',emoji:'🧹',title:'Clean-Up & Walkthrough',desc:"Full site cleanup and walkthrough to ensure your complete satisfaction before we leave."},
            {num:'08',emoji:'🔁',title:'Ongoing Support & Maintenance',desc:"Maintenance plans and prompt support to keep your roof in top shape for years to come."},
          ].map(step=>(
            <div key={step.num} style={{background:'var(--bg)',padding:'40px 40px',borderBottom:'1px solid var(--border)'}}>
              <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:18}}>
                <div style={{fontFamily:'var(--font-head)',fontSize:'2.8rem',fontWeight:800,color:'var(--border2)',lineHeight:1}}>{step.num}</div>
                <div style={{fontSize:28}}>{step.emoji}</div>
              </div>
              <div style={{fontWeight:700,fontSize:16,marginBottom:10,textTransform:'uppercase',letterSpacing:'0.04em'}}>{step.title}</div>
              <div style={{fontSize:14,color:'var(--muted)',lineHeight:1.7}}>{step.desc}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:48,background:'var(--surface)',borderTop:'3px solid var(--brand-purple)',padding:56,textAlign:'center'}}>
          <div style={{fontSize:36,marginBottom:14}}>📝</div>
          <h3 style={{fontFamily:'var(--font-head)',fontSize:'1.8rem',fontWeight:800,marginBottom:12,textTransform:'uppercase'}}>FREE Insurance Claim Handling</h3>
          <p style={{color:'var(--muted)',maxWidth:480,margin:'0 auto 32px',lineHeight:1.7}}>We file your claim, work with your adjuster, and make sure you get the coverage you deserve.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            <Link to="/contact" className="btn-outline">Submit Free Claim Request <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ContactPage = () => {
  const [fd, setFd] = useState({name:"",phone:"",email:"",service:"",address:"",message:""});
  const [fs, setFs] = useState("idle");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setFs("sending");
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({access_key:"3e73627c-d7db-4955-b040-8fd0d0344b23",subject:"New Lead: "+fd.name,Name:fd.name,Phone:fd.phone,Email:fd.email,Service:fd.service,Address:fd.address,Message:fd.message})
      });
      const data = await r.json();
      if (data.success) { setFs("sent"); setFd({name:"",phone:"",email:"",service:"",address:"",message:""}); }
      else setFs("error");
    } catch { setFs("error"); }
  };
  return (
  <>
    <div className="page-hero">
      <div className="page-hero-inner">
        <div className="section-label">Get in Touch</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>Get Your Free Estimate Today</h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7}}>Call us directly for fastest service or fill out the form below. We respond within hours.</p>
      </div>
    </div>
    <section className="contact-section">
      <div className="contact-inner">
        <div>
          <h2 className="contact-info-title">Let's protect your roof</h2>
          <p className="contact-info-sub">Whether storm damage, routine inspection, or full replacement — we are ready. Licensed, insured, serving all of Northwest Washington.</p>
          <div className="contact-items">
            <div className="contact-item"><Phone size={18} className="c-icon"/><div><div className="c-label">Phone</div><div className="c-val"><a href={PHONE_HREF} style={{color:'var(--brand-purple2)',fontWeight:700}}>{PHONE}</a></div></div></div>
            <div className="contact-item"><Mail size={18} className="c-icon"/><div><div className="c-label">Email</div><div className="c-val">{EMAIL}</div></div></div>
            <div className="contact-item"><MapPin size={18} className="c-icon"/><div><div className="c-label">Address</div><div className="c-val">{ADDRESS}</div></div></div>
            <div className="contact-item"><Clock size={18} className="c-icon"/><div><div className="c-label">Hours</div><div className="c-val">Available 24/7 for emergency service</div></div></div>
          </div>
          <div className="contact-areas">
            <div className="areas-title">Service Areas</div>
            <div className="areas-list">
              {['Issaquah','Bellevue','Redmond','Kirkland','Renton','Seattle','Sammamish','Mercer Island','Eastside WA','All NW Washington'].map(a=>(
                <span key={a} className="area-tag">{a}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="contact-form"><form onSubmit={submit}>
          <div className="form-title">Request a Free Estimate</div>
          <div className="form-sub">No obligation. We respond within hours.</div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" placeholder="Your full name" required value={fd.name} onChange={e=>setFd(f=>({...f,name:e.target.value}))}/></div>
            <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" placeholder="(425) 000-0000" type="tel" required value={fd.phone} onChange={e=>setFd(f=>({...f,phone:e.target.value}))}/></div>
          </div>
          <div className="form-group"><label className="form-label">Email Address</label><input className="form-input" placeholder="your@email.com" type="email" required value={fd.email} onChange={e=>setFd(f=>({...f,email:e.target.value}))}/></div>
          <div className="form-group">
            <label className="form-label">Service Needed</label>
            <select className="form-select" value={fd.service} onChange={e=>setFd(f=>({...f,service:e.target.value}))}>
              <option value="">Select a service</option>
              <option>Residential Roofing</option>
              <option>Commercial Roofing</option>
              <option>Storm Damage / Emergency</option>
              <option>Roof Repair</option>
              <option>Roof Replacement</option>
              <option>Gutter Installation</option>
              <option>Gutter Repair</option>
              <option>Roof Coating & Sealing</option>
              <option>Insurance Claim Assistance</option>
              <option>Free Inspection</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group"><label className="form-label">Property Address</label><input className="form-input" placeholder="Your property address" value={fd.address} onChange={e=>setFd(f=>({...f,address:e.target.value}))}/></div>
          <div className="form-group"><label className="form-label">Project Details</label><textarea className="form-textarea" placeholder="Tell us about your project..." value={fd.message} onChange={e=>setFd(f=>({...f,message:e.target.value}))}/></div>
          <button type="submit" disabled={fs==="sending"} className="btn-primary form-submit" style={{width:"100%",justifyContent:"center"}}>{fs==="sending"?"Sending...":"Request Free Estimate"}</button>
          {fs==="error" && <p style={{color:"#f87171",fontSize:13,textAlign:"center",marginTop:8}}>Error. Call +1 (425) 389-8224</p>}
          </form>
          <p style={{fontSize:12,color:'var(--faint)',textAlign:'center',marginTop:12}}>Licensed & Insured · No obligation · We respond within hours</p>
        </div>
      </div>
    </section>
  </>
  );
}

function BlogRouteWrapper() {
  const location = useLocation();
  const slug = location.pathname.split('/blog/')[1] || '';
  return <BlogPostPage slug={slug}/>;
}

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <Router>
      <Preloader done={loaded}/>
      <Nav/>
      <main style={{paddingTop:72}}>
        <>
        <StickyCall />
        <LeadHero />
      </>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/process" element={<ProcessPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blog/:slug" element={<BlogRouteWrapper/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <ReviewStrip />
      <MidCTA />
      <Footer/>
    </Router>
  );
}

export default App;