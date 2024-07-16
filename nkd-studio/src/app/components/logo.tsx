import styles from './logo.module.css';

export default function Logo() {
  return (
    <div id="logo">
      <span className={styles.nkd}>
        NKD
      </span>
      <span className={styles.studio}>Studio</span>
    </div>
  );
}
