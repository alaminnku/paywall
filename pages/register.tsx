import FeatureCards from '@components/home/FeatureCards';
import CTA from '@components/register/CTA';
import Form from '@components/register/Form';
import Header from '@components/register/Header';

export default function register() {
  return (
    <main>
      <Header />
      <CTA />
      <Form />
      <FeatureCards padding='20px' />
    </main>
  );
}
