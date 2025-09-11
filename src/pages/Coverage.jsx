import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGlobe } from "react-icons/fa";
import AnimatedTable from '../components/animatedTable'
import HeroSection from '../components/heroSection'
import { Contact } from '../components/contact'

const Coverage = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".coverage-section"), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div>
      <HeroSection
        titleA={"Global DID Coverage In 100+ Countries"}
        description={
          "DIDx is the world's No.1 Direct Inward Dialing numbering (DID Numbers) provider since 2005. It's an exchange where buyers and sellers meet to trade in DID numbers. We currently have over 100+ countries as part of our coverage. If You need DID Number from a country which you do not see here, Please CONTACT US with your target price and quantity."
        }
        img={"/img/globe.png"}
      />
      
      {/* Coverage Image Section */}
      <section className="coverage-page">
        <div className="coverage-container">
          <div ref={sectionRef} className="coverage-hero coverage-section">
            <div className="coverage-hero__content">
              <div className="coverage-hero__icon">
                <FaGlobe />
              </div>
              <h2 className="coverage-hero__title">Global Coverage Map</h2>
              <p className="coverage-hero__subtitle">
                Explore our extensive network of DID numbers across 100+ countries worldwide
              </p>
            </div>
            <div className="coverage-hero__image">
              <img src="/img/coverages.jpg" alt="Global Coverage Map" />
              <div className="coverage-hero__overlay">
                <div className="coverage-hero__stats">
                  <div className="coverage-hero__stat">
                    <span className="coverage-hero__stat-number">100+</span>
                    <span className="coverage-hero__stat-label">Countries</span>
                  </div>
                  <div className="coverage-hero__stat">
                    <span className="coverage-hero__stat-number">200+</span>
                    <span className="coverage-hero__stat-label">Cities</span>
                  </div>
                  <div className="coverage-hero__stat">
                    <span className="coverage-hero__stat-number">24/7</span>
                    <span className="coverage-hero__stat-label">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedTable />
      
      {/* CTA Section */}
      <section className="coverage-cta-section">
        <div className="coverage-container">
          <div className="coverage-cta coverage-section">
            <h3 className="coverage-cta__title">Need Coverage in a Different Country?</h3>
            <p className="coverage-cta__subtitle">
              Don't see your target country? Contact us with your requirements and we'll work to add it to our network.
            </p>
            <a href="/contact" className="coverage-cta__btn">
              Request New Coverage
              <FaGlobe />
            </a>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  )
}

export default Coverage
