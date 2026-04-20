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
import { ObjectionSection } from './components/sections/ObjectionSection';
import { TrustSection } from './components/sections/TrustSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header navItems={landingContent.navItems} />

      <main className="overflow-hidden">
        <HeroSection hero={landingContent.hero} />
        <ProblemSection problem={landingContent.problem} />
        <FlowSection flow={landingContent.flow} />
        <SolutionSection solution={landingContent.solution} />
        <ResultsSection results={landingContent.results} />
        <HowItWorksSection howItWorks={landingContent.howItWorks} />
        <ControlSection control={landingContent.control} />

        <PricingSection pricing={landingContent.pricing} />

        <section className="bg-ink px-[32px] py-[128px]">
          <div className="mx-auto grid w-full max-w-[1216px] gap-[80px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <ObjectionSection objection={landingContent.objection} />
            <TrustSection trust={landingContent.trust} />
          </div>
        </section>

        <FinalCtaSection finalCta={landingContent.finalCta} />
      </main>

      <Footer footer={landingContent.footer} />
    </div>
  );
}

export default App;