import Image from 'next/image';
import logo from '@public/layout/logo-black.png';
import styles from '@components/register/Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <Image className={styles.logo} src={logo} alt='Paywall logo' />
    </header>
  );
}
