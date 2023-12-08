import Image from 'next/image';
import Header from './Header';
import styles from '@components/home/Hero.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import phone from '@public/assets/phone.png';
import { Plus_Jakarta_Sans } from 'next/font/google';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function Hero() {
  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.content_and_image}>
        <div className={styles.content}>
          <h1>Meet Paywall Your All·in·One Digital Product Store</h1>

          <div className={styles.description}>
            <p>
              The fastest way to turn your knowledge, passions, and experience
              into profit.
            </p>

            <p>
              — Monetize digital files and create internet businesses with
              simple paywalls.
            </p>
          </div>

          <Link className={`${styles.cta} ${pjs.className}`} href='/register'>
            Get started <FaArrowRight />
          </Link>
        </div>

        <Image
          className={styles.phone}
          src={phone}
          alt='iPhone showing subscription options'
        />
      </div>
    </section>
  );
}
