import Link from 'next/link';
import styles from './Form.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Form() {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='submit' />
      </form>

      <Link className={styles.forgot_password} href='/'>
        Forgot password?
      </Link>

      <p className={styles.register}>
        Don't have an account?{' '}
        <Link className={styles.forgot_password} href='/register'>
          Register
        </Link>
      </p>
    </section>
  );
}
