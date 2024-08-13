import React from 'react';
import Logo from '../Logo/Logo';
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <ul className={styles.mainMenu}>
          <li><a href="#services" className="border-box">Services</a></li>
          <li><a href="#work" className="border-box">Work</a></li>
          <li><a href="#about" className="border-box">About</a></li>
          <li><a href="#contact" className="border-box">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
