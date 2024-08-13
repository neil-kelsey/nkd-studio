import React from 'react';
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <article className={styles.contact}>
      <div className="container">
        <div className="row">
          <div className="col-8 col-gap-1">
            <h2><span className="box">Contact</span> details</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
            <h3><a href="mailto:contact@nkd-studio.co.uk">contact@nkd-studio.co.uk</a></h3>
            <h3>+44 (0) 7814555319</h3>
          </div>
        </div>
      </div>
    </article>
  );
}
