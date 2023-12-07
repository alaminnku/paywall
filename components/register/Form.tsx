import FeatureCards from '@components/home/FeatureCards';
import styles from './Form.module.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export default function Form() {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <form className={styles.user_info}>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Your Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Phone Number' />
        <input type='password' placeholder='Password' />
      </form>

      <FeatureCards />

      <form className={styles.subscriptions}>
        <div className={styles.annual}>
          <div className={styles.option}>
            <input type='radio' name='subscription' />
            <p>Annual</p>
          </div>
          <div className={`${styles.price} ${pjs.className}`}>
            <p className={styles.invalid}>14.99/mo</p>
            <p>$179.99/yr</p>
          </div>
        </div>

        <div className={styles.monthly}>
          <div className={styles.option}>
            <input type='radio' name='subscription' />
            <p>Monthly</p>
          </div>
          <div className={`${styles.price} ${pjs.className}`}>
            <p>19.99/mo</p>
          </div>
        </div>
      </form>

      <form className={`${styles.payment} ${inter.className}`}>
        <label htmlFor='card' className={pjs.className}>
          Credit Card Payment
        </label>
        <input
          className={styles.card}
          type='text'
          id='card'
          placeholder='1234 1234 1234 1234'
        />

        <div className={styles.secrets}>
          <input className={styles.expiry} type='text' />
          <input className={styles.ccv} type='text' />
        </div>
        <p className={`${pjs.className} ${styles.stripe}`}>
          Secure Payment Powered by <span>Stripe</span>
        </p>
      </form>

      <form className={styles.agreement}>
        <input type='checkbox' />
        <p>
          I acknowledge that I have read and understand the
          <Link href='/'>Terms of Service</Link> and the{' '}
          <Link href='/'>Privacy Policy</Link>.
        </p>
      </form>

      <button className={`${styles.button} ${pjs.className}`}>
        Start Your 14 Day Free Trial
      </button>

      <div className={styles.nav}>
        <Link href='/'>Terms Of Service</Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Logout</Link>
      </div>
    </section>
  );
}
