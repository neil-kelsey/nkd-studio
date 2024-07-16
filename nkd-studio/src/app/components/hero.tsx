import styles from "./hero.module.css";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <span className={styles.nkd}>Neil Kelsey Development</span>
      <span className={styles.studio}>Studio</span>
    </article>
  );
}
