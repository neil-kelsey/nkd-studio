"use client";

import React, { useEffect, useRef } from "react";
import styles from "./intro.module.css";
import { initializeTextEffect } from "../../utils/textEffectHandler";

export default function Intro() {
  const textRef = useRef(null);
  useEffect(() => {
    // Initialize text effect and get cleanup function
    const cleanupTextEffect = initializeTextEffect(textRef, "0.1", "#textSection");

    // Cleanup on unmount
    return cleanupTextEffect;
  }, []);

  return (
    <article className={styles.intro} id="textSection" style={{ height: "90vh", padding: "90px 150px", background: "#FFF" }}>
      <div className={styles.wrapper}>
        <h1 ref={textRef}>I&#39;m Neil, an experienced web developer, passionate for creating beautiful online experiences that perform exceptionally.</h1>
        <p>I design and build new sites and improve old; adding mobile responsive solutions, SEO and accessibility audits and much much more - offering on-going support using technologies such as React, Wordpress, Next.js, Shopify, JavaScript and PHP.</p>
        <p>Throughout my career I&#39;ve worked with such brands as Channel 4, Pronamel, The NHS, Legal & General and many more small and local businesses.</p>
      </div>

    </article>
  );
}
