import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logoBlack from '@public/layout/logo-black.png';
import logoWhite from '@public/layout/logo-white.png';
import { Plus_Jakarta_Sans } from 'next/font/google';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'],
});

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
    <header
      className={`${styles.container} ${isScrolled && styles.scrolled} ${
        pjs.className
      }`}
    >
      <nav>
        <Link href='/' className={styles.logo}>
          <Image src={isScrolled ? logoWhite : logoBlack} alt='Paywall logo' />
        </Link>

        <div className={styles.cta_and_menu}>
          <Link className={styles.login} href='/login'>
            Login
          </Link>
          <Link className={styles.register} href='/register'>
            Get Started
          </Link>
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
