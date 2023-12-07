import { cards } from 'data/cards';
import Card from './Card';

export default function Cards() {
  return (
    <section style={{ marginBottom: '2rem' }}>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
}
