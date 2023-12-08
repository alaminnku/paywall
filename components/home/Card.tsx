import Image from 'next/image';
import styles from '@components/home/Card.module.css';

type Prop = {
  icon: string;
  background: string;
  title: string;
  description: string;
};

export default function Card({ icon, background, title, description }: Prop) {
  return (
    <div style={{ backgroundColor: background }} className={styles.container}>
      <Image src={icon} alt='Card icon' width={100} height={109} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
