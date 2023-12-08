import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logoBlack from '@public/layout/logo-black.png';
import logoWhite from '@public/layout/logo-white.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.container} ${isScrolled && styles.scrolled}`}>
      <nav>
        <Image
          className={styles.logo}
          src={isScrolled ? logoWhite : logoBlack}
          alt='Paywall logo'
        />

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
