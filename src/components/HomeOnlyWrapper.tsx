import { useLocation } from 'react-router-dom';
import LeadHero    from './LeadHero';
import StickyCall  from './StickyCall';
import ReviewStrip from './ReviewStrip';
import MidCTA      from './MidCTA';

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

export function ReviewBlock() {
  const { pathname } = useLocation();
  if (pathname !== '/') return null;
  return (
    <>
      <ReviewStrip />
      <MidCTA />
    </>
  );
}
