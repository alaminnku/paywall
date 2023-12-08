import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.container}>
      <Link className={styles.login} href='/login'>
        Login
      </Link>
      <Link className={styles.register} href='/register'>
        Get Started
      </Link>
    </div>
  );
}
