import Image from 'next/image';
import logo from '@public/layout/logo-black.png';
import styles from '@components/register/Header.module.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Navigation from '@components/layout/Navigation';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Header() {
  return (
    <header className={`${styles.container} ${inter.className}`}>
      <nav>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='Paywall logo' />
        </Link>

        <Navigation />
      </nav>

      <p className={styles.login}>
        Already have an account? <Link href='/login'>Login</Link>
      </p>
    </header>
  );
}
