import React from 'react';
import styles from "./work.module.css";

export default function Work() {
  return (
    <article className={styles.work}>
      <div className="container">
        <h2>Latest <span className="box selected" data-content="Work"><span>Work</span></span> and projects</h2>
        <div className="row">
          <div className="col-4">
            <div className={styles.square + " border-powder-blue"}>
              <p>Stuff here</p>
            </div>
            <h3>Seaside Coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
            <ul>
              <li>Logo creation</li>
              <li>Branding</li>
              <li>Site creation</li>
              <li>Wordpress CMS</li>
            </ul>
          </div>
          <div className="col-4">
            <div className={styles.square + " border-tea-green"}>
              <p>Stuff here</p>
            </div>
            <h3>Glen Miller hallucinations</h3>
          </div>
          <div className="col-4">
            <div className={styles.square + " border-naples-yellow"}>
              <p>Stuff here</p>
            </div>
            <h3>Title</h3>
          </div>
        </div>
      </div>
      <div id="about"></div>
    </article>
  );
}
