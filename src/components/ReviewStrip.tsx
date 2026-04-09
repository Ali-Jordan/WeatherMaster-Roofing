const reviews = [
  { name: 'Sarah M.', location: 'Issaquah, WA',  text: 'Called them after storm damage — they were on my roof the next morning. Fast, professional, and handled everything with my insurance. Incredible service.' },
  { name: 'David K.', location: 'Bellevue, WA',  text: 'Got three quotes for a full roof replacement. WeatherMaster came in competitive and actually showed up on time. Clean work, great communication.' },
  { name: 'Linda R.', location: 'Redmond, WA',   text: 'Fixed a leak I had been fighting for two years. They found the source in 20 minutes, repaired it same day. Should have called sooner.' },
];

function Stars() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_,i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  );
}

export default function ReviewStrip() {
  return (
    <section id="reviews" className="py-20 px-6" style={{ background: '#0d0018' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1"><Stars /><span className="text-white font-bold text-xl">5.0</span></div>
            <p className="text-white/50 text-sm">Based on 13 Google Reviews</p>
          </div>
          <a href="https://www.google.com/maps/search/Weather+Master+Roofing+Northwest" target="_blank" rel="noopener noreferrer"
             className="ml-auto text-purple-400 text-sm font-semibold hover:underline">See all reviews &rarr;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r,i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <Stars />
              <p className="text-white/80 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-auto pt-2 border-t border-white/10">
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <p className="text-white/40 text-xs">{r.location} &middot; Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
