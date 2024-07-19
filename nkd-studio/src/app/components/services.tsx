import styles from "./services.module.css";

export default function Services() {
  return (
    <article className={styles.services}>
      <div className="container">
        <div className="pl-lg pr-lg">
          <h2><span className="box">Services</span> and something else</h2>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-powder-blue"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-tea-green"}>Thing 2</div>
          </div>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-naples-yellow"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-burnt-sienna"}>Thing 2</div>
          </div>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " border-funchsia-rose"}>
              <h3>Consoltation</h3>
              <p>sfsdfsf</p>
            </div>
            <div className={styles.serviceBox + " border-dark-grey"}>Thing 2</div>
          </div>
        </div>
      </div>
      <div id="work"></div>
    </article>
  );
}
