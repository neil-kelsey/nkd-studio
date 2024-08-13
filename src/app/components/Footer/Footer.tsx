import React from 'react';
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <article className={styles.footer} id="footer">
      <div className="container">
        <p>© Copyright 2024 | Neil Kelsey Development Studio</p>
      </div>
    </article>
  );
}
