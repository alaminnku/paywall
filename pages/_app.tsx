import type { AppProps } from 'next/app';
import './global.css';
import Footer from '@components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
