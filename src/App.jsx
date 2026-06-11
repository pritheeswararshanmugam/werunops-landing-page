import { landingContent } from './data/landingContent';
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { FlowSection } from './components/sections/FlowSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { ResultsSection } from './components/sections/ResultsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { ControlSection } from './components/sections/ControlSection';
import { PricingSection } from './components/sections/PricingSection';
import { FaqSection } from './components/sections/FaqSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Footer } from './components/sections/Footer';
import { MobileActionBar } from './components/mobile/MobileActionBar';

function App() {
  const whatsapp = landingContent.footer.contact.find((item) => item.kind === 'whatsapp');

  return (
    <div className="bg-surface text-ink">
      <Header navItems={landingContent.navItems} brand={landingContent.footer.brand} />

      <main className="overflow-x-hidden">
        <HeroSection hero={landingContent.hero} whatsapp={whatsapp} />
        <ProblemSection problem={landingContent.problem} />
        <FlowSection flow={landingContent.flow} />
        <SolutionSection solution={landingContent.solution} />
        <ResultsSection results={landingContent.results} cta={landingContent.hero.primaryCta} />
        <HowItWorksSection howItWorks={landingContent.howItWorks} />
        <ControlSection control={landingContent.control} />

        <PricingSection pricing={landingContent.pricing} />

        <FaqSection objection={landingContent.objection} trust={landingContent.trust} />

        <FinalCtaSection finalCta={landingContent.finalCta} />

        <Footer footer={landingContent.footer} />
      </main>

      <MobileActionBar primaryCta={landingContent.hero.primaryCta} whatsapp={whatsapp} />
    </div>
  );
}

export default App;
