import styles from '@components/home/Marketing.module.css';
import brick from '@public/assets/brick.png';
import Image from 'next/image';
import phones from '@public/assets/phones.png';
import upload from '@public/assets/upload.png';
import { Plus_Jakarta_Sans } from 'next/font/google';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export default function Marketing() {
  return (
    <section className={`${styles.container} ${pjs.className}`}>
      <h2>
        Why Everyone Is Using <br /> Paywall
      </h2>

      <div className={styles.content_and_image}>
        <Image className={styles.brick} src={brick} alt='Brick image' />

        <div className={styles.content}>
          <p className={styles.mobile_title}>
            Financial Freedom Is On The Other Side Of The Wall
          </p>
          <p className={styles.mobile_description}>
            Paywall’s all-in-one integrations shortcuts your workflow by
            allowing you to build and monetize an online business the quickest
            way. Build it like lego bricks with access to all the tools you need
            in our simple page editor.
          </p>

          <p className={styles.desktop_title}>Fully Featured Integrations</p>
          <p className={styles.desktop_description}>
            Stan's Integrations can help you to superpower your workflow by
            connecting your existing third-party tools.
          </p>
        </div>
      </div>

      <div className={styles.content_and_image}>
        <Image
          className={styles.phones}
          src={phones}
          alt='Phones with green background'
        />

        <div className={styles.content2}>
          <p className={styles.title}>One Tap Checkout</p>
          <p className={styles.description}>
            You shouldn’t have to go through hurdles just to sell your product.
            Paywall brings the entire checkout process into your own hands.
          </p>
        </div>
      </div>

      <div className={styles.content_and_image}>
        <Image
          className={styles.upload}
          src={upload}
          alt='iPhone showing upload button'
        />

        <div className={styles.content3}>
          <p className={styles.title}>No Coding Required</p>
          <p className={styles.mobile_description}>
            Unlock the potential of digital products. Get started today and
            launch a Paywall – the digital monetization solution for creators of
            all sizes.
          </p>
          <p className={styles.desktop_description}>
            Stan is super easy to use for beginners, and you really don’t need
            any coding experience to get started. We think even a caveman could
            do it.
          </p>
        </div>
      </div>
    </section>
  );
}
