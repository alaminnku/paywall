import styles from './Form.module.css';

export default function Form() {
  return (
    <form className={styles.container}>
      <input type='text' placeholder='Username' />
      <input type='text' placeholder='Your Name' />
      <input type='email' placeholder='Email' />
      <input type='text' placeholder='Phone Number' />
      <input type='password' placeholder='Password' />
    </form>
  );
}
