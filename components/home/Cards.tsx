import { generalCards } from 'data/home';
import Card from './Card';
import styles from './Cards.module.css';

export default function Cards() {
  return (
    <section className={styles.container}>
      {generalCards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
}
