import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import logo from '@public/layout/logo-black.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className={styles.container}>
        <Image className={styles.logo} src={logo} alt='Paywall logo' />

        <div className={styles.cta_and_menu}>
          <Link href='/login'>Get Started</Link>
          <div
            className={`${styles.menu} ${isOpen && styles.open}`}
            onClick={toggleMobileMenu}
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
