import Image from 'next/image';
import styles from './Header.module.css';
import logo from '@public/layout/logo-black.png';
import { Inter } from 'next/font/google';
import Navigation from '@components/layout/Navigation';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export default function header() {
  return (
    <header className={`${styles.container} ${inter.className}`}>
      <nav>
        <Image className={styles.logo} src={logo} alt='Paywall logo' />

        <Navigation />
      </nav>
      <p className={styles.cta}>Get your bag 💰💸😤</p>
    </header>
  );
}
