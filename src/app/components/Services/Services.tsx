"use client";

import React from "react";
import styles from "./services.module.css";
import { initializeTiltEffect } from "../../utils/tiltEffectHandlers";
import Image from 'next/image'
import tree from "../../assets/Tree-green-fields-shading.svg";
import wireframing from "../../assets/wireframing.svg";
import recycle from "../../assets/recycle-shading.svg";

export default function Services() {
  initializeTiltEffect();

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
                    <h1>Project consultancy</h1>
                    <p>Every successful web project starts with a strong foundation. My Project Consultancy service is designed to help you navigate the initial stages of your project with clarity and confidence. Whether you're embarking on a greenfield project or looking to enhance an existing website, I provide expert guidance through every step of the planning process.</p>
                  </div>
                </div>
                <div className="item item-1">
                  <div className="card two">
                    <span className="icon">
                      <Image
                        className="tree"
                        width={60}
                        height={60}
                        src={tree}
                        alt="Picture of the author"
                      />
                    </span>
                    <h3>
                      Greenfield Projects:

                    </h3>
                    <p>From the ground up, I assist in transforming your vision into a tangible plan.</p>
                    <p>Together, we’ll outline your goals, define your target audience, and create a roadmap that ensures your project stays on track. This includes initial brainstorming sessions, competitive analysis, and strategic planning.</p>

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
                    <h3>
                      Prototyping:
                    </h3>
                    <p>I will help you visualize your project before the first line of code is written.</p>
                    <p>Either with Figma, Photoshop or with wireframes - we'll refine the concept together to ensure the project looks beautiful and that the user experience is intuitive.</p>

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
                    <h3>
                      Refresh and improvements:

                    </h3>
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
