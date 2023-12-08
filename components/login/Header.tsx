import Image from 'next/image';
import styles from './Header.module.css';
import logo from '@public/layout/logo-black.png';
import { Inter } from 'next/font/google';
import Navigation from '@components/layout/Navigation';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export default function header() {
  return (
    <header className={`${styles.container} ${inter.className}`}>
      <nav>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='Paywall logo' />
        </Link>

        <Navigation />
      </nav>
      <p className={styles.cta}>Get your bag 💰💸😤</p>
    </header>
  );
}
