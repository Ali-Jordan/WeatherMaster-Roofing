import { useLocation } from 'react-router-dom';
import LeadHero        from './LeadHero';
import StickyCall      from './StickyCall';
import ProcessStrip    from './ProcessStrip';
import InsuranceClaims from './InsuranceClaims';
import GuaranteeBlock  from './GuaranteeBlock';

// Paths that should render the same lead-capture experience as the homepage.
// Add ad landing URLs here when new campaigns launch.
const isHomeLikePath = (pathname: string) =>
  pathname === '/' || pathname.startsWith('/roof-repair');

export function LeadHeroBlock() {
  const { pathname } = useLocation();
  if (!isHomeLikePath(pathname)) return null;
  return (
    <>
      <StickyCall />
      <LeadHero />
      <ProcessStrip />
    </>
  );
}

export function ReviewBlock() {
  const { pathname } = useLocation();
  if (!isHomeLikePath(pathname)) return null;
  return (
    <>
      <InsuranceClaims />
      <GuaranteeBlock />
    </>
  );
}
