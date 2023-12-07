import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <header className={styles.container}></header>;
}
