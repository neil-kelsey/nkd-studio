"use client";

import React from "react";
import styles from "./services.module.css";
import { useTiltEffect } from "../../utils/tiltEffectHandlers";
import Image from 'next/image'
import tree from "../../assets/Tree-green-fields-shading.svg";
import wireframing from "../../assets/wireframing.svg";
import recycle from "../../assets/recycle-shading.svg";
import speechBubble from "../../assets/speech-bubble.png";

export default function Services() {
  useTiltEffect();

  console.log('NeilTest - tree', tree);

  return (
    <>
      <div id="services"></div>
      <article className={styles.services}>
        <div className="container">
          <div className="pl-lg pr-lg">
            <h2><span className="box selected" data-content="Services"><span>Services</span></span> and solutions</h2>
            <div className={styles.servicesWrapper}>
              <div className="grid">
                <div className="item item-0">
                  <div className="card one">
                    <div className="row m-0">
                      <div className="col-8">
                        <span className="badge">Analysis</span>
                        <h2>Project consultancy</h2>
                        <p>Every successful web project starts with a strong foundation. My Project Consultancy service is designed to help you navigate the initial stages of your project with clarity and confidence.</p>
                        <p>Whether you&apos;re embarking on a greenfield project or looking to enhance an existing website, I provide expert guidance through every step of the planning process.</p>
                      </div>
                      <div className="col-4 align-right">
                        <Image
                          src={speechBubble}
                          alt="Speech Bubble"
                          width={188}
                          height={183}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-1">
                  <div className="card two">
                    <span className="icon">
                      <Image
                        src={speechBubble}
                        alt="Speech Bubble"
                        width={60}
                        height={60}
                      />
                      <p>Test</p>
                    </span>
                    <span className="badge">Analysis</span>
                    <h2>
                      Greenfield Projects:
                    </h2>
                    <p>Building intuitive experiences that the visitors to your site will love, experiences that are responsive and “just work” on every device, every screen and that are fast, robost and accessible.</p>
                  </div>
                </div>
                <div className="item item-2">
                  <div className="card three">
                    <span className="icon">
                      <Image
                        className="wireframing"
                        width={60}
                        height={60}
                        src={wireframing}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="badge">Analysis</span>
                    <h2>
                      Prototyping:
                    </h2>
                    <p>I will help you visualize your project before the first line of code is written.</p>
                    <p>Either with Figma, Photoshop or with wireframes - we&apos;ll refine the concept together to ensure the project looks beautiful and that the user experience is intuitive.</p>
                  </div>
                </div>
                <div className="item item-3">
                  <div className="card four">
                    <span className="icon">
                      <Image
                        className="recycle"
                        width={60}
                        height={60}
                        src={recycle}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="badge">Analysis</span>
                    <h2>
                      Refresh and improvements:
                    </h2>
                    <p>Technology and trends move fast and sites can quickly become dated. We’ll focus on enhancing functionality, modernizing the design, and optimizing performance to ensure your website meets current standards and user expectations.</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
