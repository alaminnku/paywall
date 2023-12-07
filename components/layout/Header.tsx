import MobileNav from './MobileNav';
import { useState } from 'react';
import styles from '@components/layout/Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.container}>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
