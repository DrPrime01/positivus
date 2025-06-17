import Hero from './sections/Hero.tsx';
import Sponsors from './sections/Sponsors.tsx';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies.tsx';
import WorkingProcess from './sections/WorkingProcess.tsx';
import Team from './sections/Team.tsx';
import Testimonials from './sections/Testimonials.tsx';
import Contact from './sections/Contact.tsx';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Sponsors />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
