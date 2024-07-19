import styles from "./services.module.css";

export default function Services() {
  return (
    <article className={styles.services}>
      <div className="container">
        <div className="pl-lg pr-lg">
          <h2><span className="box">Services</span> and something else</h2>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-box"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-box"}>Thing 2</div>
          </div>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-box"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-box"}>Thing 2</div>
          </div>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-box"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-box"}>Thing 2</div>
          </div>
        </div>
      </div>
      <div id="work"></div>
    </article>
  );
}
