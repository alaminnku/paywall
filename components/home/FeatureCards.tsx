import { featureCards } from 'data/home';
import { Inter } from 'next/font/google';
import styles from './FeatureCards.module.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '700'],
});

type Props = {
  padding?: string;
};

export default function FeatureCards({ padding }: Props) {
  return (
    <div
      className={`${styles.container} ${inter.className}`}
      style={{ padding: padding }}
    >
      {featureCards.map(({ icon, text }, index) => (
        <div key={index} className={styles.card}>
          <span>{icon}</span>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
