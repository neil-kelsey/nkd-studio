import React from 'react';
import styles from "./about.module.css";

export default function About() {
  return (
    <article className={styles.about}>
      <div className="container">
        <h2><span className="box selected" data-content="About"><span>About</span></span> me and NKD Studio</h2>
        <div className="border-box">
          <div className="row">
            <div className="col-8 col-gap-1">
              <h3>I&#39;m Neil from Burgess Hill, West Sussex, UK -  your local friendly web expert.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt diam ut pretium posuere. Aliquam erat volutpat.</p>
              <p>Vivamus a purus sed est dapibus eleifend eu non diam. Aliquam eu turpis eu odio sollicitudin tempus. Phasellus vitae ante porttitor.</p>
              <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ul>
            </div>
            <div className="col-4">
              {/* TODO - replace these with <Image /> from Next */}
              <img className="border-funchsia-rose" src="/family.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </article>
  );
}
