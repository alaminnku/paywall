import Image from 'next/image';
import Link from 'next/link';
import styles from '@components/layout/MobileNav.module.css';
import logo from '@public/layout/logo-black.png';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ isOpen, setIsOpen }: Props) {
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
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
  );
}
