import styles from '@components/home/Marketing.module.css';
import brick from '@public/assets/brick.png';
import Image from 'next/image';
import phones from '@public/assets/phones.png';
import upload from '@public/assets/upload.png';

export default function Marketing() {
  return (
    <section className={styles.container}>
      <div className={styles.color}>
        <Image className={styles.brick} src={brick} alt='Brick image' />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>
          Financial Freedom Is On The Other Side Of The Wall
        </p>

        <p>
          Paywall’s all-in-one integrations shortcuts your workflow by allowing
          you to build and monetize an online business the quickest way. Build
          it like lego bricks with access to all the tools you need in our
          simple page editor.
        </p>
      </div>

      <Image
        className={styles.phones}
        src={phones}
        alt='Phones with green background'
      />

      <div className={styles.content2}>
        <p className={styles.title}>One Tap Checkout</p>

        <p>
          You shouldn’t have to go through hurdles just to sell your product.
          Paywall brings the entire checkout process into your own hands.
        </p>
      </div>

      <Image
        className={styles.upload}
        src={upload}
        alt='iPhone showing upload button'
      />

      <div className={styles.content3}>
        <p className={styles.title}>No Coding Required</p>
        <p>
          Unlock the potential of digital products. Get started today and launch
          a Paywall – the digital monetization solution for creators of all
          sizes.
        </p>
      </div>
    </section>
  );
}
