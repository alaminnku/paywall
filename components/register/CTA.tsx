import Link from 'next/link';
import styles from './CTA.module.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import money from '@public/assets/internet-money.png';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500'],
});

export default function CTA() {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <p className={styles.login}>
        Already have an account? <Link href='/login'>Login</Link>
      </p>

      <h1>Start From Scratch Get Your Bag 💰💸🚀</h1>

      <Image
        className={styles.money}
        src={money}
        alt='Image showing coins and laptop'
      />

      <p className={`${styles.username} ${pjs.className}`}>Hey @Username 👋</p>
      <p className={styles.cta}>Let's make internet money</p>
    </section>
  );
}
