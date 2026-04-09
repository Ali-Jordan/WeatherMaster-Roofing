export default function StickyCall() {
  return (
    <>
      <div
        className="wm-sticky-call"
        style={{
          background: '#a855f7',
          boxShadow: '0 -4px 24px rgba(168,85,247,0.5)',
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 200,
        }}
      >
        <a
          href="tel:+14253898224"
          data-track="sticky-call"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 12, padding: '15px 0',
            color: '#fff', fontWeight: 700, fontSize: 18, textDecoration: 'none',
            width: '100%', fontFamily: 'inherit',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1.01l-2.19 2.21z"/>
          </svg>
          Call for a Free Estimate
        </a>
      </div>
      <style>{`.wm-sticky-call { display: flex; } @media(min-width: 768px){ .wm-sticky-call { display: none !important; } }`}</style>
    </>
  );
}
