import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Shield, Clock, CheckCircle, Star, ArrowRight, Home, Building2, CloudLightning, DollarSign, Droplets, Layers, Wrench, Award, Zap, FileText } from 'lucide-react';

const PHONE = '+1 (425) 389-8224';
const PHONE_HREF = 'tel:+14253898224';
const EMAIL = 'info@weathermasterroofingnw.com';
const ADDRESS = 'P.O. Box 388, Issaquah, WA 98027';

const Nav = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">🏠</div>
          <span>Weather Master Roofing NW</span>
        </Link>
        <div className="nav-links">
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/process" className="nav-link">Our Process</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href={PHONE_HREF} className="nav-phone">📞 {PHONE}</a>
        </div>
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
            <div className="footer-contact-item">📞 <a href={PHONE_HREF} style={{color:'var(--red2)',fontWeight:600}}>{PHONE}</a></div>
            <div className="footer-contact-item">📧 {EMAIL}</div>
            <div className="footer-contact-item">📍 {ADDRESS}</div>
            <div className="footer-contact-item">🚨 Available 24/7 for emergencies</div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links-list">
            {['Residential Roofing','Commercial Roofing','Storm Damage Restoration','Gutter Installation','Roof Coating & Sealing','Financing & Insurance'].map(s => (
              <Link key={s} to="/services" className="footer-link">{s}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Service Areas</div>
          <div className="footer-links-list">
            {['Issaquah','Bellevue','Redmond','Kirkland','Renton','Seattle','Sammamish','Mercer Island'].map(a => (
              <span key={a} className="footer-link">{a}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links-list">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/process" className="footer-link">Our Process</Link>
            <Link to="/contact" className="footer-link">Free Estimate</Link>
            <a href="https://www.facebook.com/weathermasterroofingnw" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
            <a href="https://www.instagram.com/roofingweathermaster/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Weather Master Roofing Northwest. Licensed & Insured. All rights reserved.</div>
        <div className="footer-powered">Powered by <a href="https://hostitwise.com">HostItWise.com</a></div>
      </div>
    </div>
  </footer>
);

const TrustStrip = () => (
  <div className="trust-strip">
    <div className="trust-strip-inner">
      {[
        { icon: <Shield size={20} />, text: 'Licensed & Insured', sub: 'Fully certified' },
        { icon: <Clock size={20} />, text: '24/7 Emergency', sub: 'Always available' },
        { icon: <FileText size={20} />, text: 'Free Estimates', sub: 'No obligation' },
        { icon: <DollarSign size={20} />, text: 'Insurance Claims', sub: 'We handle paperwork' },
      ].map(item => (
        <div key={item.text} className="trust-item">
          <div className="trust-icon">{item.icon}</div>
          <div>
            <div className="trust-text">{item.text}</div>
            <div className="trust-sub">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HomePage = () => (
  <>
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="badge">🏠 Northwest Washington's #1 Roofing Contractor</span>
          </div>
          <h1 className="hero-title">
            Protect Your Home With<br /><span>Northwest Washington's</span><br />Most Trusted Roofers
          </h1>
          <p className="hero-sub">
            Licensed and insured roofing contractor serving Issaquah, Bellevue, Redmond, Kirkland, Renton, and all of Northwest Washington. Residential, commercial, storm damage, and gutters.
          </p>
          <div className="hero-ctas">
            <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
            <Link to="/services" className="btn-outline">View Services <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-trust">
            <span>Licensed & Insured</span>
            <span className="trust-sep"></span>
            <span>24/7 Emergency Service</span>
            <span className="trust-sep"></span>
            <span>Free Estimates</span>
            <span className="trust-sep"></span>
            <span>Insurance Claims Handled</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hc-dot" style={{background:'#ff5f57'}}></div>
              <div className="hc-dot" style={{background:'#febc2e'}}></div>
              <div className="hc-dot" style={{background:'#28c840'}}></div>
              <span style={{fontSize:11,color:'var(--faint)',marginLeft:8}}>weathermasterroofingnw.com</span>
            </div>
            <div className="hero-card-body">
              <div className="roof-visual">
                <div className="roof-shape">
                  <div className="roof-peak"></div>
                  <div className="roof-body"></div>
                </div>
                <div className="roof-label">Certified Roofing Professionals</div>
              </div>
              <div className="stat-row">
                <div className="stat-box">
                  <div className="stat-val">24/7</div>
                  <div className="stat-lbl">Emergency Response</div>
                </div>
                <div className="stat-box">
                  <div className="stat-val">Free</div>
                  <div className="stat-lbl">Estimates & Inspections</div>
                </div>
              </div>
              <div className="emergency-bar">
                🚨 <span>Storm damage? Call us now — {PHONE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* SERVICES PREVIEW */}
    <section className="services-section">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Complete Roofing & Gutter Solutions</h2>
          <p className="section-sub">From new installations to emergency storm repairs — one call covers it all.</p>
        </div>
        <div className="services-grid">
          {[
            { icon: <Home size={24} />, name: 'Residential Roofing', desc: 'Full installations, repairs, and replacements for homes across Northwest Washington. Top-grade materials built for Pacific Northwest weather.', tag: 'Most Requested', featured: true },
            { icon: <Building2 size={24} />, name: 'Commercial Roofing', desc: 'Expert installation and repair for businesses of all sizes. Energy-efficient systems built to withstand harsh Washington weather.', tag: 'TPO · EPDM · PVC' },
            { icon: <CloudLightning size={24} />, name: 'Storm Damage Restoration', desc: 'Fast emergency response after severe weather. Rapid inspection, repair, and full insurance claim assistance. Available 24/7.', tag: '24/7 Emergency', featured: true },
            { icon: <Droplets size={24} />, name: 'Gutter Installation & Repair', desc: 'Seamless, K-style, half-round, aluminum, and vinyl gutters. Full installation, repair, and replacement service.', tag: 'Seamless Options' },
            { icon: <Layers size={24} />, name: 'Roof Coating & Sealing', desc: 'Energy-efficient coatings that extend roof life, prevent leaks, and improve insulation. Ideal for flat and low-slope roofs.', tag: 'Energy Efficient' },
            { icon: <DollarSign size={24} />, name: 'Financing & Insurance', desc: 'FREE insurance claim handling. We navigate the paperwork so you get maximum coverage. Flexible financing options available.', tag: 'FREE Claims Help', featured: true },
          ].map(s => (
            <div key={s.name} className={`service-card ${s.featured ? 'featured' : ''}`}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tag">{s.tag}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:40}}>
          <Link to="/services" className="btn-outline">View All Services & Roofing Systems <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="why-section">
      <div className="why-inner">
        <div className="why-left">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">Quality. Speed. Reliability.</h2>
          <p className="section-sub">At Weather Master Roofing Northwest, we combine decades of experience with local expertise and a genuine commitment to your satisfaction.</p>
          <a href={PHONE_HREF} className="btn-primary">Get a Free Estimate <ArrowRight size={16} /></a>
          <div className="why-grid" style={{marginTop:32}}>
            {[
              { icon: <Award size={18} />, title: 'Decades of Experience', desc: 'Hands-on roofing and gutter installation expertise.' },
              { icon: <Shield size={18} />, title: 'Licensed & Insured', desc: 'Fully certified. Top-quality service for every need.' },
              { icon: <Zap size={18} />, title: 'Fast & Reliable', desc: 'On-time completion with attention to detail.' },
              { icon: <CheckCircle size={18} />, title: 'Workmanship Guarantee', desc: 'We stand behind every roof we install or repair.' },
              { icon: <Building2 size={18} />, title: 'Residential & Commercial', desc: 'Solutions tailored for homes and businesses.' },
              { icon: <DollarSign size={18} />, title: 'Honest Pricing', desc: 'Clear estimates with no hidden fees.' },
              { icon: <Home size={18} />, title: 'Locally Owned', desc: 'Proudly serving our NW Washington community.' },
              { icon: <Star size={18} />, title: 'Customer First', desc: "We're not happy until you're completely satisfied." },
            ].map(w => (
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
            <div style={{fontSize:32,marginBottom:8}}>📝</div>
            <div className="insurance-badge-title">FREE Insurance Claim Handling</div>
            <div className="insurance-badge-sub">We handle all the paperwork so you get maximum coverage</div>
          </div>
          <div className="insurance-steps">
            {[
              'Call us immediately after storm damage',
              'We perform a free inspection and document all damage',
              'We file your insurance claim on your behalf',
              'We work directly with your adjuster',
              'Your roof gets repaired — you just approve the work',
            ].map((step, i) => (
              <div key={i} className="insurance-step">
                <div className="ins-num">{i + 1}</div>
                <div style={{fontSize:14,color:'var(--muted)',lineHeight:1.5}}>{step}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:24,padding:'16px',background:'rgba(192,57,43,0.08)',borderRadius:'var(--radius)',border:'1px solid rgba(192,57,43,0.2)',fontSize:13,color:'var(--muted)',textAlign:'center'}}>
            🚨 Storm emergency? Call <a href={PHONE_HREF} style={{color:'var(--red2)',fontWeight:700}}>{PHONE}</a><br />Available 24/7 for urgent roofing needs
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-label">Client Reviews</div>
          <h2 className="section-title">What Northwest Washington Homeowners Say</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { text: 'Weather Master Roofing did an outstanding job on our new roof. The team was professional, efficient, and the results were better than we expected. Highly recommend!', name: 'John Allison', loc: 'Issaquah, WA', init: 'JA' },
            { text: "I've worked with Weather Master Roofing on multiple commercial properties, and they never disappoint. From installation to repair, their quality and service are top-notch.", name: 'Alicia Potter', loc: 'Bellevue, WA', init: 'AP' },
            { text: 'Fantastic service from start to finish. The Weather Master team explained everything clearly and completed the job on time. Very happy with the quality of the work!', name: 'Edward Suarez', loc: 'Redmond, WA', init: 'ES' },
          ].map(t => (
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
        <div style={{textAlign:'center',marginTop:36}}>
          <a href="https://g.co/kgs/4KVYyPK" target="_blank" rel="noopener noreferrer" className="btn-outline">View All Google Reviews <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>

    {/* EMERGENCY CTA */}
    <section className="emergency-section">
      <div className="emergency-inner">
        <div style={{fontSize:14,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--red2)',marginBottom:12}}>24/7 Emergency Service</div>
        <h2 className="emergency-title">Storm Damage? Don't Wait.</h2>
        <p className="emergency-sub">Every hour of delay can mean more water damage. Call us now — we respond fast, inspect for free, and handle your insurance claim.</p>
        <div className="emergency-ctas">
          <a href={PHONE_HREF} className="btn-white">📞 Call {PHONE}</a>
          <Link to="/contact" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.3)',color:'#fff'}}>Get Free Estimate <ArrowRight size={16} /></Link>
        </div>
        <p className="emergency-note">Licensed & Insured · Serving all of Northwest Washington · FREE Insurance Claims</p>
      </div>
    </section>
  </>
);

const ServicesPage = () => (
  <>
    <div style={{padding:'140px 24px 60px',background:'var(--bg2)',borderBottom:'1px solid var(--border)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div className="section-label">Complete Roofing Solutions</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>
          Every Roofing Service<br />Northwest Washington Needs
        </h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7,marginBottom:32}}>
          From single-shingle repairs to full commercial installations — licensed, insured, and backed by a workmanship guarantee.
        </p>
        <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
          <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
          <Link to="/contact" className="btn-outline">Schedule Inspection <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>

    <TrustStrip />

    <section className="services-section">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">Roofing Services</div>
          <h2 className="section-title">Residential & Commercial Roofing</h2>
        </div>
        <div className="services-grid">
          {[
            { icon: <Home size={24} />, name: 'Residential Roof Installation', desc: 'New roof installations for homes of all sizes. We work with every roofing material — shingle, metal, tile, slate, and more.', tag: 'Most Popular' },
            { icon: <Wrench size={24} />, name: 'Roof Repair', desc: 'Fast, reliable repairs for leaks, missing shingles, flashing, and more. Most repairs completed in a single visit.', tag: 'Same-Day Available' },
            { icon: <Home size={24} />, name: 'Roof Replacement', desc: 'Complete tear-off and replacement when repairs are no longer cost-effective. Clean, efficient, and fully warrantied.', tag: 'Workmanship Guarantee' },
            { icon: <Building2 size={24} />, name: 'Commercial Roofing', desc: 'TPO, EPDM, PVC, modified bitumen, and built-up roofing for commercial buildings. Energy-efficient and durable.', tag: 'All Systems' },
            { icon: <CloudLightning size={24} />, name: 'Storm Damage Restoration', desc: 'Emergency response for wind, hail, and water damage. We inspect, repair, and handle your insurance claim from start to finish.', tag: '24/7 Emergency' },
            { icon: <Layers size={24} />, name: 'Roof Coating & Sealing', desc: 'Extend the life of your existing roof with professional coating and sealing services. Ideal for flat and low-slope roofs.', tag: 'Energy Efficient' },
            { icon: <Droplets size={24} />, name: 'Gutter Installation', desc: 'Seamless, K-style, half-round, and custom gutter systems. Full installation with proper pitch and downspout placement.', tag: 'Seamless Options' },
            { icon: <Wrench size={24} />, name: 'Gutter Repair & Replacement', desc: 'Fixing sagging, leaking, and clogged gutters. When repair is not enough, we replace with a superior system.', tag: 'Fast Turnaround' },
            { icon: <DollarSign size={24} />, name: 'Financing & Insurance', desc: 'FREE insurance claim handling. Flexible financing options. We navigate all the paperwork and work directly with your adjuster.', tag: 'FREE Claims Help' },
          ].map(s => (
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

    <section className="systems-section">
      <div className="systems-inner">
        <div className="systems-header">
          <div className="section-label">Roofing Systems</div>
          <h2 className="section-title">We Install & Repair Every System</h2>
        </div>
        <div className="systems-grid">
          <div className="system-group">
            <div className="system-group-title"><Home size={18} style={{color:'var(--red2)'}} /> Roofing Systems</div>
            <div className="system-tags">
              {['Shingle Roofing','Metal Roofing','Tile Roofing','Slate Roofing','TPO Roofing','EPDM Roofing','PVC Roofing','Modified Bitumen','Built-Up Flat (BUR)','Wood Shake','Skylight Roofing','Low Slope','Green Roofing','Commercial Skylight'].map(t => (
                <span key={t} className="system-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="system-group">
            <div className="system-group-title"><Droplets size={18} style={{color:'var(--red2)'}} /> Gutter Systems</div>
            <div className="system-tags">
              {['Seamless Gutters','K-Style Gutters','Half-Round Gutters','Box Gutters','Fascia Gutters','Aluminum Gutters','Vinyl Gutters','Custom Gutters','Gutter Guards','Downspout Systems'].map(t => (
                <span key={t} className="system-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="emergency-section">
      <div className="emergency-inner">
        <h2 className="emergency-title">Ready to Get Started?</h2>
        <p className="emergency-sub">Call for a free estimate or fill out our contact form. We respond fast and show up on time.</p>
        <div className="emergency-ctas">
          <a href={PHONE_HREF} className="btn-white">📞 {PHONE}</a>
          <Link to="/contact" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.3)',color:'#fff'}}>Request Free Estimate <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  </>
);

const ProcessPage = () => (
  <>
    <div style={{padding:'140px 24px 60px',background:'var(--bg2)',borderBottom:'1px solid var(--border)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div className="section-label">How We Work</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>
          Our 8-Step Process —<br />Zero Surprises, Every Time
        </h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7,marginBottom:32}}>
          From first call to final walkthrough, every step is designed to make your roofing project stress-free.
        </p>
        <a href={PHONE_HREF} className="btn-primary">📞 Start with a Free Consultation</a>
      </div>
    </div>

    <section style={{padding:'80px 24px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20}}>
          {[
            { num:'01', emoji:'🗣️', title:'Consultation', desc:'We begin with a no-obligation consultation to understand your needs, discuss roofing options, and answer any questions. No pressure, no commitment.' },
            { num:'02', emoji:'🔍', title:'Detailed Roof Inspection', desc:'Our team conducts a thorough on-site inspection to assess the current condition, identify issues or risks, and document everything with photos.' },
            { num:'03', emoji:'📄', title:'Customized Proposal', desc:"You'll receive a clear, detailed proposal including scope of work, materials, timeline, and pricing — no hidden fees, no surprises." },
            { num:'04', emoji:'📆', title:'Project Scheduling', desc:'Once approved, we schedule your project at a time that works for you, ensuring minimal disruption to your home or business routine.' },
            { num:'05', emoji:'🔧', title:'Professional Installation', desc:'Our certified installers carry out all roofing work with precision, quality materials, and safety top of mind. Clean and efficient every time.' },
            { num:'06', emoji:'✅', title:'Final Inspection & Certification', desc:"After installation, we perform a detailed final inspection to ensure everything meets our high standards — and yours. You get a certification of completion." },
            { num:'07', emoji:'🧹', title:'Clean-Up & Walkthrough', desc:"We clean the worksite thoroughly and walk you through the finished project to ensure complete satisfaction before we leave." },
            { num:'08', emoji:'🔁', title:'Ongoing Support & Maintenance', desc:"We're here even after the job is done — offering maintenance plans and prompt support to keep your roof in top shape for years to come." },
          ].map(step => (
            <div key={step.num} style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'36px'}}>
              <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
                <div style={{fontFamily:'var(--font-head)',fontSize:'2.5rem',fontWeight:800,color:'var(--border2)',lineHeight:1}}>{step.num}</div>
                <div style={{fontSize:28}}>{step.emoji}</div>
              </div>
              <div style={{fontWeight:700,fontSize:18,marginBottom:10}}>{step.title}</div>
              <div style={{fontSize:14,color:'var(--muted)',lineHeight:1.7}}>{step.desc}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:60,background:'var(--surface)',border:'1px solid rgba(192,57,43,0.3)',borderRadius:'var(--radius-lg)',padding:'48px',textAlign:'center'}}>
          <div style={{fontSize:32,marginBottom:12}}>📝</div>
          <h3 style={{fontFamily:'var(--font-head)',fontSize:'1.8rem',fontWeight:800,marginBottom:12}}>FREE Insurance Claim Handling</h3>
          <p style={{color:'var(--muted)',maxWidth:480,margin:'0 auto 28px',lineHeight:1.7}}>Storm damage doesn't have to be a financial burden. We file your claim, work with your adjuster, and make sure you get the coverage you deserve.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
            <Link to="/contact" className="btn-outline">Submit Free Claim Request <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ContactPage = () => (
  <>
    <div style={{padding:'140px 24px 60px',background:'var(--bg2)',borderBottom:'1px solid var(--border)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div className="section-label">Get in Touch</div>
        <h1 style={{fontFamily:'var(--font-head)',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',marginBottom:16}}>
          Get Your Free Estimate Today
        </h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:560,lineHeight:1.7}}>
          Call us directly for fastest service or fill out the form below. We respond within hours and show up on time.
        </p>
      </div>
    </div>

    <section className="contact-section">
      <div className="contact-inner">
        <div>
          <h2 className="contact-info-title">Let's protect your roof</h2>
          <p className="contact-info-sub">Whether it's storm damage, a routine inspection, or a full replacement — we're ready to help. Licensed, insured, and serving all of Northwest Washington.</p>
          <div className="contact-items">
            <div className="contact-item">
              <Phone size={18} className="c-icon" />
              <div>
                <div className="c-label">Phone</div>
                <div className="c-val"><a href={PHONE_HREF} style={{color:'var(--red2)',fontWeight:700}}>{PHONE}</a></div>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} className="c-icon" />
              <div>
                <div className="c-label">Email</div>
                <div className="c-val">{EMAIL}</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="c-icon" />
              <div>
                <div className="c-label">Address</div>
                <div className="c-val">{ADDRESS}</div>
              </div>
            </div>
            <div className="contact-item">
              <Clock size={18} className="c-icon" />
              <div>
                <div className="c-label">Hours</div>
                <div className="c-val">Available 24/7 for emergency service</div>
              </div>
            </div>
          </div>
          <div className="contact-areas">
            <div className="areas-title">Service Areas</div>
            <div className="areas-list">
              {['Issaquah','Bellevue','Redmond','Kirkland','Renton','Seattle','Sammamish','Mercer Island','Eastside WA','All NW Washington'].map(a => (
                <span key={a} className="area-tag">{a}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-title">Request a Free Estimate</div>
          <div className="form-sub">No obligation. We'll respond within hours.</div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input className="form-input" placeholder="(425) 000-0000" type="tel" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" placeholder="your@email.com" type="email" />
          </div>
          <div className="form-group">
            <label className="form-label">Service Needed</label>
            <select className="form-select">
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
          <div className="form-group">
            <label className="form-label">Property Address</label>
            <input className="form-input" placeholder="Your property address" />
          </div>
          <div className="form-group">
            <label className="form-label">Project Details</label>
            <textarea className="form-textarea" placeholder="Tell us about your project — age of roof, type of damage, any other details..." />
          </div>
          <button className="btn-primary form-submit">
            Request Free Estimate <ArrowRight size={16} />
          </button>
          <p style={{fontSize:12,color:'var(--faint)',textAlign:'center',marginTop:12}}>Licensed & Insured · No obligation · We respond within hours</p>
        </div>
      </div>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <Nav />
      <main style={{paddingTop:72}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
