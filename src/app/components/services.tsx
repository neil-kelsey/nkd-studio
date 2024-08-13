import styles from "./services.module.css";

export default function Services() {
  return (
    <article className={styles.services}>
      <div className="container">
        <div className="pl-lg pr-lg">
          <h2><span className="box">Services</span> and solutions</h2>
          <div className={styles.servicesWrapper}>
            <div className={styles.serviceBox + " services border-box "}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-powder-blue" src="/project-consultancy.jpg" />
                </div>
                <div className="col-8">
                  <h3>Project consultancy</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceBox + " services border-box"}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-tea-green" src="/web-development.jpg" />
                </div>
                <div className="col-8">
                  <h3>Web development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceBox + " services border-box"}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-naples-yellow" src="/web-development.jpg" />
                </div>
                <div className="col-8">
                  <h3>Logo and brand creation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceBox + " services border-box"}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-burnt-sienna" src="/web-development.jpg" />
                </div>
                <div className="col-8">
                  <h3>Site optimisation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceBox + " services border-box"}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-funchsia-rose" src="/web-development.jpg" />
                </div>
                <div className="col-8">
                  <h3>Accessibility audit</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
            <div className={styles.serviceBox + " services border-box"}>
              <div className="row">
                <div className="col-4">
                  {/* TODO - replace these with <Image /> from Next */}
                  <img className="border-dark-grey" src="/web-development.jpg" />
                </div>
                <div className="col-8">
                  <h3>On-going support and maintenence</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
                  <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="work"></div>
    </article>
  );
}
