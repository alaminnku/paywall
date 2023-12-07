import Image from 'next/image';
import styles from './Header.module.css';
import logo from '@public/layout/logo-black.png';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export default function header() {
  return (
    <header className={`${styles.container} ${inter.className}`}>
      <Image className={styles.logo} src={logo} alt='Paywall logo' />
      <p className={styles.cta}>Get your bag 💰💸😤</p>
    </header>
  );
}
