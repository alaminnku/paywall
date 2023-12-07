import styles from '@components/home/CTA.module.css';
import Image from 'next/image';
import building from '@public/assets/building.png';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '800'],
});

export default function CTA() {
  return (
    <section className={`${styles.container} ${pjs.className}`}>
      <h2>Build Wealth With Paywall</h2>
      <p>
        Stan is super easy to use for beginners, and you really don’t need any
        coding experience to get started. We think even a caveman could do it.
      </p>
      <Image
        className={styles.building}
        src={building}
        alt='Image showing money and building block'
      />

      <Link className={styles.cta} href='/'>
        Try For 14 Days Free
      </Link>
    </section>
  );
}
