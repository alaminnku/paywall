import CTA from '@components/home/CTA';
import Cards from '@components/home/Cards';
import Features from '@components/home/Features';
import Hero from '@components/home/Hero';
import Marketing from '@components/home/Marketing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Features />
      <Marketing />
      <CTA />
    </main>
  );
}
