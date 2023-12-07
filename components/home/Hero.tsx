import Image from 'next/image';
import heroBackground from '@public/assets/hero-bg.png';
import Header from '@components/layout/Header';
import styles from '@components/home/Hero.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import phone from '@public/assets/phone.png';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Header />

      <h1>Meet Paywall Your All·in·One Digital Product Store</h1>

      <div className={styles.description}>
        <p>
          The fastest way to turn your knowledge, passions, and experience into
          profit.
        </p>

        <p>
          — Monetize digital files and create internet businesses with simple
          paywalls.
        </p>
      </div>

      <Link className={styles.cta} href='/'>
        Get started <FaArrowRight />
      </Link>

      <Image
        className={styles.phone}
        src={phone}
        alt='iPhone showing subscription options'
      />
    </section>
  );
}
