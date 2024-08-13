import styles from "./intro.module.css";

export default function Intro() {
  return (
    <article className={styles.intro}>
      <div className="container">
        <h1>I&#39;m Neil, a skilled and engaging web developer with a passion for creating exceptional websites.</h1>
        <p>I design and build new sites and improve old; adding mobile responsive solutions, SEO and accessibility audits and much much more - offering on-going support using technologies such as React, Wordpress, Next.js, Shopify, JavaScript and PHP.</p>
        <p>Throughout my career I&#39;ve worked with such brands as Channel 4, Pronamel, The NHS, Legal & General and many more small and local businesses.</p>
      </div>
      <div id="services"></div>
    </article>
  );
}
