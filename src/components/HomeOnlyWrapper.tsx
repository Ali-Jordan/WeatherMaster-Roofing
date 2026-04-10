import { useLocation } from 'react-router-dom';
import LeadHero   from './LeadHero';
import StickyCall from './StickyCall';

export function LeadHeroBlock() {
  const { pathname } = useLocation();
  if (pathname !== '/') return null;
  return (
    <>
      <StickyCall />
      <LeadHero />
    </>
  );
}

// ReviewBlock removed — using original App.tsx testimonials section
export function ReviewBlock() { return null; }
