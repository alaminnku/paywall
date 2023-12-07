import { generalCards } from 'data/home';
import Card from './Card';

export default function Cards() {
  return (
    <section>
      {generalCards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
}
