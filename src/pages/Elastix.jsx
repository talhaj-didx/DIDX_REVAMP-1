// Elastix.jsx
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCog, FaServer, FaRoute, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


/**
 * Elastix configuration step-by-step page
 * - Custom styled components with consistent theming
 * - GSAP animations on mount (staggered fade + slide)
 * - Professional step-by-step guide layout
 */

export const metadata = {
  title: "Elastix",
};

export default function Elastix() {
  const containerRef = useRef(null);

  // GSAP animation on mount
  useGSAP(() => {
    if (!containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(".elastix-step");
    gsap.from(targets, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      // stagger: 0.15,
      ease: "power3.out",
    });
  }, []);



  return (
    <>
      <BreadCrumb title={metadata.title} />

      <section className="elastix-page">
        <div className="elastix-container">
          {/* Hero Section */}
          {/* <div className="elastix-hero">
            <div className="elastix-hero__icon">
              <FaCog />
            </div>
            <h1 className="elastix-hero__title">Elastix Configuration Guide</h1>
            <p className="elastix-hero__subtitle">
              Step-by-step instructions to configure Elastix PBX with DIDX for seamless DID number integration
            </p>
          </div> */}

          <div className="elastix-hero elastix-section">
            <div className="elastix-hero__icon">
              <FaCog />
            </div>
            <h1 className="elastix-hero__title">Elastix Configuration Guide</h1>
            <p className="elastix-hero__subtitle">
              Step-by-step instructions to configure Elastix PBX with DIDX for seamless DID number integration
            </p>
          </div>

          {/* Steps Section */}
          <div ref={containerRef} className="elastix-steps">
            
            {/* Step 1 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">1</div>
                <div className="elastix-step__icon">
                  <FaServer />
                </div>
                <h3 className="elastix-step__title">Click on PBX</h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">2</div>
                <div className="elastix-step__icon">
                  <FaRoute />
                </div>
                <h3 className="elastix-step__title">Click on Trunks</h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">3</div>
                <div className="elastix-step__icon">
                  <FaArrowRight />
                </div>
                <h3 className="elastix-step__title">Click on add SIP Trunk</h3>
              </div>
            </div>

            {/* Step 1 Image */}
            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step1.jpg" alt="Elastix step 1" className="elastix-step__image" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">4</div>
                <div className="elastix-step__icon">
                  <FaCog />
                </div>
                <h3 className="elastix-step__title">Give the Trunk Name and Outbound Caller ID</h3>
              </div>
            </div>

            {/* Step 2 Image */}
            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step2.jpg" alt="Elastix step 2" className="elastix-step__image" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">5</div>
                <div className="elastix-step__icon">
                  <FaCheckCircle />
                </div>
                <h3 className="elastix-step__title">Set the Outgoing and Incoming Settings</h3>
              </div>
              
              <div className="elastix-step__content">
                <div className="elastix-step__settings">
                  <h4 className="elastix-step__settings-title">Outgoing Settings:</h4>
                  <div className="elastix-step__settings-content">
                    <p><strong>Trunk Name:</strong> DIDX</p>
                    <p><strong>Peer Details:</strong></p>
                    <ul>
                      <li>Host: Ip Address</li>
                      <li>Type: Peer</li>
                    </ul>
                  </div>
                </div>

                <div className="elastix-step__settings">
                  <h4 className="elastix-step__settings-title">Incoming Settings:</h4>
                  <div className="elastix-step__settings-content">
                    <p><strong>User Context:</strong> DIDX</p>
                    <p><strong>User Details:</strong></p>
                    <ul>
                      <li>Host: Ip Address</li>
                      <li>Type: Peer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">6</div>
                <div className="elastix-step__icon">
                  <FaCog />
                </div>
                <h3 className="elastix-step__title">Set registration settings</h3>
              </div>
            </div>

            {/* Step 3 Image */}
            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step3.jpg" alt="Elastix registration step" className="elastix-step__image" />
              </div>
            </div>

            {/* Step 7 */}
            <div className="elastix-step">
              <div className="elastix-step__header">
                <div className="elastix-step__number">7</div>
                <div className="elastix-step__icon">
                  <FaRoute />
                </div>
                <h3 className="elastix-step__title">Click on Inbound routes</h3>
              </div>
            </div>

            {/* Step Images */}
            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step4.jpg" alt="Elastix inbound routes 1" className="elastix-step__image" />
              </div>
            </div>

            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step5.jpg" alt="Elastix inbound routes 2" className="elastix-step__image" />
              </div>
            </div>

            <div className="elastix-step elastix-step--image">
              <div className="elastix-step__image-container">
                <img src="img/elastix-page-banners/step6.jpg" alt="Elastix inbound routes 3" className="elastix-step__image" />
              </div>
            </div>

          </div>
        </div>
          </section>
      
      <Contact />
    </>
  );
}
