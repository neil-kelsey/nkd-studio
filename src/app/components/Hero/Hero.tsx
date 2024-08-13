'use client';

import React from 'react';
import styles from "./Hero.module.css";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <article className={styles.hero}>
      <span className={styles.nkd}>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Next-Gen Knowledge Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Networked Know-how Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("New Key Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Navigating Kaleidoscope Dreams")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Noble Knight Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Neil Kelsey Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("NKD")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .typeString("Not Known Development")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(500)
              .start();
          }}
        />
      </span>
      <span className={styles.studio}>Studio</span>
    </article>
  );
}
