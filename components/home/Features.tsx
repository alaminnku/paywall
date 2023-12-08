import Image from 'next/image';
import block from '@public/assets/block.png';
import phone from '@public/assets/phone-straight.png';
import styles from '@components/home/Features.module.css';
import { featureLists } from 'data/home';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import FeatureCards from './FeatureCards';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export default function Features() {
  return (
    <>
      <section className={styles.container_mobile}>
        <Image className={styles.block} src={block} alt='Block image' />

        <h2 className={pjs.className}>
          The Fast-Track To Passive Income Is On The Other Side Of The Wall 💰
        </h2>

        <p className={styles.description}>
          Don't spend days trying to make internet money . Use the shortcut that
          was built to turn visitors into paying customers! Paywall does it all
          for you.
        </p>

        <Image
          className={styles.phone}
          src={phone}
          alt='Phone showing subscription options'
        />

        <FeatureCards />

        <div className={`${styles.feature_card} ${inter.className}`}>
          <p className={styles.title}>Start Any One-Person Business</p>

          <div>
            {featureLists.map(({ icon, text, price }, index) => (
              <div className={styles.list} key={index}>
                <div className={styles.detail}>
                  <span>{icon}</span>
                  <p>{text}</p>
                </div>
                <p className={styles.price}>{price}</p>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.detail}>
              <span>❌</span>
              <p>What you'd spend otherwise</p>
            </div>
            <p className={styles.price}>$240/mo</p>
          </div>

          <div className={styles.total}>
            <div className={styles.detail}>
              <span>🧱</span>
              <p>Build your Paywall</p>
            </div>
            <p>$19.99/mo</p>
          </div>
        </div>

        <Link href='/register' className={`${styles.cta} ${pjs.className}`}>
          Start My Trial <FaArrowRight />
        </Link>
      </section>

      <section className={styles.container_desktop}>
        <div className={styles.content_and_image}>
          <div className={styles.content}>
            <h2 className={pjs.className}>
              The Fast-Track To Passive Income Is On The Other Side Of The Wall
              💰
            </h2>

            <Image className={styles.block} src={block} alt='Block image' />

            <p className={styles.description}>
              Don’t spend days trying to make internet money . Use the shortcut
              that was built to turn visitors into paying customers! Paywall
              does it all for you.
            </p>

            <FeatureCards />
          </div>

          <Image
            className={styles.phone}
            src={phone}
            alt='Phone showing subscription options'
          />
        </div>

        <div className={styles.cta_with_features}>
          <div className={`${styles.feature_card} ${inter.className}`}>
            <p className={styles.title}>Start Any One-Person Business</p>

            <div>
              {featureLists.map(({ icon, text, price }, index) => (
                <div className={styles.list} key={index}>
                  <div className={styles.detail}>
                    <span>{icon}</span>
                    <p>{text}</p>
                  </div>
                  <p className={styles.price}>{price}</p>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div className={styles.detail}>
                <span>❌</span>
                <p>What you'd spend otherwise</p>
              </div>
              <p className={styles.price}>$240/mo</p>
            </div>

            <div className={styles.total}>
              <div className={styles.detail}>
                <span>🧱</span>
                <p>Build your Paywall</p>
              </div>
              <p>$19.99/mo</p>
            </div>
          </div>

          <Link href='/register' className={`${styles.cta} ${pjs.className}`}>
            Start My Trial <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
