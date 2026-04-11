import { useLocation } from 'react-router-dom';
import LeadHero        from './LeadHero';
import StickyCall      from './StickyCall';
import ProcessStrip    from './ProcessStrip';
import InsuranceClaims from './InsuranceClaims';
import GuaranteeBlock  from './GuaranteeBlock';

export function LeadHeroBlock() {
  const { pathname } = useLocation();
  if (pathname !== '/') return null;
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
  if (pathname !== '/') return null;
  return (
    <>
      <InsuranceClaims />
      <GuaranteeBlock />
    </>
  );
}
