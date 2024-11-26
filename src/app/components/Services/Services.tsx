"use client";

import React from "react";
import styles from "./services.module.css";
import { useTiltEffect } from "../../utils/tiltEffectHandlers";
import Image from 'next/image'
import tree from "../../assets/Tree-green-fields-shading.svg";
import wireframing from "../../assets/wireframing.svg";
import recycle from "../../assets/recycle-shading.svg";
import speechBubble from "../../assets/speech-bubble.png";
import plant from "../../assets/plant.png";
import personTick from "../../assets/person-tick.png";
import cog from "../../assets/cog.png";
import womanRunning from "../../assets/woman-running.png";
// import shield from "../../assets/security-updates.png";

export default function Services() {
  useTiltEffect();

  console.log('NeilTest - tree', tree);

  return (
    <>
      <div id="services"></div>
      <article className={styles.services}>
        <div className="wavey">
          <div className="container">
            <div className={styles.servicesWrapper}>
              <h2><span className="box selected" data-content="Services"><span>Services</span></span> and solutions</h2>
              <div className="grid">
                <div className="item item-0">
                  <div className="card one">
                    <div className="row">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge ml-5">Analysis</span>
                        <h2>Project consultancy</h2>
                        <p>Understanding your requirements to create a roadmap, define the project scope and achieve your goals</p>
                      </div>
                      <div className="col-4 text-align-right pb-0">
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
                    <div className="row full-height">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge ml-5">Analysis</span>
                        <h2>New projects</h2>
                        <p className="mb-0">Building intuitive modern experiences that your visitors will love, that “<i>just work</i>” on every device, every screen, that are fast, robost and accessible.</p>
                      </div>
                      <div className="col-4 text-align-right align-image-bottom pb-0">
                        <Image
                          className={styles.plant}
                          src={plant}
                          alt="Plant"
                          width={157}
                          height={203}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-2">
                  <div className="card three">
                    <div className="row">
                      <div className="col-4 pb-0">
                        <Image
                          src={personTick}
                          alt="Person tick"
                          width={85}
                          height={273}
                        />
                      </div>
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge ml-5">Analysis</span>
                        <h2>User Journeys Wireframing</h2>
                        <p>Wireframing enables us to visualize your project before a single line of code is written.</p>
                        <p>Refining the user flow to give visitors a great user experience with such tools as Figma or Photoshop</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-3">
                  <div className="card four">
                    <div className="row">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge ml-5">Analysis</span>
                        <h2>Refresh and improvements</h2>

                        <p>Trends and technology move fast, If you have an existing website that needs a refresh or complete overhaul, I will identify areas for improvement. We’ll focus on enhancing functionality, modernizing the design, and optimizing performance to ensure your website meets current standards and user expectations.</p>
                      </div>
                      <div className="col-4 text-align-right pb-0">
                        <Image
                          src={cog}
                          alt="Cog"
                          width={169}
                          height={169}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-4">
                  <div className="card five">
                    <div className="row">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge blue ml-5">Development</span>
                        <h2>Website development</h2>
                        <p>Make shorter - having a website that looks great and works seamlessly on all devices is non-negotiable. I design responsive websites that offer a consistent and engaging user experience, whether your visitors are on a smartphone, tablet, or desktop.Your website is a direct reflection of your brand. Your site needs to be engaging, beautiful, intuitive and optimized for performance.

                          Whether you&apos;re launching a new business, starting an online portfolio, or building an eCommerce platform, I offer tailored solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-5">
                  <div className="card six">
                    <div className="row full-height">
                      <div className="col-12 pt-0 pb-0">
                        <span className="badge blue ml-5">Development</span>
                        <h2>Performance optimization</h2>
                        <p className="mb-0 mb-0">Speed matters. I optimize every aspect of your website to ensure it loads quickly and efficiently. This includes image optimization, clean and efficient coding practices, and leveraging caching mechanisms. A faster site means better user retention and improved SEO performance.</p>
                      </div>
                      <div className="col-12 text-align-center">
                        <div className={styles.womanContainer}>
                          <Image
                            className={styles.womanRunning}
                            src={womanRunning}
                            alt="Woman running"
                            width={297}
                            height={327}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-6">
                  <div className="card seven">
                    <div className="row">
                      <div className="col-12 pt-0 pb-0">
                        <span className="badge blue ml-5">Development</span>
                        <h2>Logo & Brand creation</h2>
                        <p>A strong brand identity is crucial for standing out in today’s digital landscape. I collaborate with you to create a logo and branding elements that resonate with your audience and communicate your unique value proposition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-7">
                  <div className="card eight">
                    <div className="row">
                      <div className="col-128 pt-0 pb-0">
                        <span className="badge blue ml-5">Development</span>
                        <h2>Analytics and tracking</h2>
                        <p>Speed matters. I optimize every aspect of your website to ensure it loads quickly and efficiently. This includes image optimization, clean and efficient coding practices, and leveraging caching mechanisms. A faster site means better user retention and improved SEO performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-8">
                  <div className="card nine">
                    <div className="row">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge orange ml-5">Support</span>
                        <h2>Security updates</h2>
                        <p>Keeping your site secure is a top priority. I provide regular updates to your CMS, plugins, and other software components to protect against vulnerabilities.</p>
                      </div>
                      {/* <div className="col-4 text-align-right pb-0">
                        <Image
                          src={shield}
                          alt="Cog"
                          width={369}
                          height={319}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="item item-9">
                  <div className="card ten">
                    <div className="row full-height">
                      <div className="col-12 pt-0 pb-0">
                        <span className="badge orange ml-5">Support</span>
                        <h2>Content updates</h2>
                        <p className="mb-0 mb-0">Need to add new content or make changes? I offer support for regular content updates, ensuring that your site remains fresh and relevant.</p>
                      </div>
                      <div className="col-12 text-align-center">
                        {/* <div className={styles.womanContainer}>
                          <Image
                            src={shield}
                            alt="Cog"
                            width={369}
                            height={319}
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-10">
                  <div className="card eleven">
                    <div className="row">
                      <div className="col-4 pb-0">
                        &nbsp;
                      </div>
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge orange ml-5">Support</span>
                        <h2>Performance monitoring</h2>
                        <p>I continuously monitor your site’s performance, addressing any issues that arise, and making necessary adjustments to keep your site running at its best.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-11">
                  <div className="card twelve">
                    <div className="row">
                      <div className="col-8 pt-0 pb-0">
                        <span className="badge orange ml-5">Support</span>
                        <h2>Bug hunting</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisl sapien, convallis in accumsan nec, scelerisque sed sapien.</p>
                        <p>Duis est metus, blandit vel tristique a, dignissim vitae enim.</p>
                      </div>
                      {/* <div className="col-4 text-align-right pb-0">
                        <Image
                          src={shield}
                          alt="Cog"
                          width={369}
                          height={319}
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>









      </article>
    </>
  );
}
