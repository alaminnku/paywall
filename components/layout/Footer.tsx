import styles from '@components/layout/Footer.module.css';
import Link from 'next/link';
import logo from '@public/layout/logo-black.png';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Footer() {
  return (
    <footer className={`${styles.container} ${pjs.className}`}>
      <ul>
        <li>
          <Link href='/'>Sign In</Link>
        </li>
        <li>
          <Link href='/'>Support</Link>
        </li>
        <li>
          <Link href='/'>Refund Policy</Link>
        </li>
        <li>
          <Link href='/'>Privacy Policy</Link>
        </li>
        <li>
          <Link href='/'>Terms and Conditions</Link>
        </li>
      </ul>

      <Image className={styles.logo} src={logo} alt='Paywall logo' />
    </footer>
  );
}
