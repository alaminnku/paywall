import styles from '@components/layout/Footer.module.css';
import Link from 'next/link';
import logo from '@public/layout/logo-black.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.container}>
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
