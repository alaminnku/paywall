import Header from '@components/layout/Header';
import type { AppProps } from 'next/app';
import './global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
