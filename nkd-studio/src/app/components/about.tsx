import styles from "./about.module.css";

export default function About() {
  return (
    <article className={styles.about}>
      <div className="container">
        <h2><span className="box">About</span> and something else</h2>
        <p>Stuff here</p>
      </div>
      <div id="contact"></div>
    </article>
  );
}
