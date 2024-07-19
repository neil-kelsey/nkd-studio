import styles from "./work.module.css";

export default function Work() {
  return (
    <article className={styles.work}>
      <div className="container">
        <h2><span className="box">Work</span> and something else</h2>
        <p>Stuff here</p>
      </div>
      <div id="about"></div>
    </article>
  );
}
