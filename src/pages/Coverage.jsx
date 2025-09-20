import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedTable from '../components/animatedTable';
import HeroSection from '../components/heroSection';
import { Contact } from '../components/contact';
import JsonData from "../data/data.json";
import { useApi } from "../hooks/useApi";
import { coverageSection } from "../services/dataServices";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Coverage = () => {
  const sectionRef = useRef();
  const heroRef = useRef();
  const ctaRef = useRef();
  const { data } = useApi({ queryKey: "coverage", queryFn: coverageSection })

  const { data: countries } = data ?? {}


  useGSAP(() => {
    // Hero section animations
    if (heroRef.current) {
      const icon = heroRef.current.querySelector(".coverage-hero__icon");
      const title = heroRef.current.querySelector(".coverage-hero__title");
      const subtitle = heroRef.current.querySelector(".coverage-hero__subtitle");
      const info = heroRef.current.querySelector(".coverage-hero__info");
      const image = heroRef.current.querySelector(".coverage-hero__image");
      const stats = heroRef.current.querySelectorAll(".coverage-hero__stat");
      const imageElement = heroRef.current.querySelector(".coverage-hero__image img");

      if (icon && title && subtitle && info && image && stats.length > 0) {
        const tl = gsap.timeline();

        // Icon animation
        tl.from(icon, {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          ease: "back.out(1.7)"
        })
          // Title animation
          .from(title, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.4")
          // Subtitle animation
          .from(subtitle, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.3")
          // Info text animation
          .from(info, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.2")
          // Image animation
          .from(image, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: "power3.out"
          }, "-=0.4")
          // Stats animation
          .from(stats, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.3");

        // Continuous floating animation for icon
        gsap.to(icon, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Image hover effect
        if (imageElement) {
          gsap.set(imageElement, { scale: 1 });
          imageElement.addEventListener("mouseenter", () => {
            gsap.to(imageElement, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          });
          imageElement.addEventListener("mouseleave", () => {
            gsap.to(imageElement, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      }
    }

    // CTA section animations
    if (ctaRef.current) {
      const ctaElements = ctaRef.current.querySelectorAll(".coverage-cta > *");
      if (ctaElements.length > 0) {
        // Set initial state
        gsap.set(ctaElements, { opacity: 0, y: 30 });

        // Animate in
        gsap.to(ctaElements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.5
        });
      }
    }

    // General section animations (excluding CTA)
    if (sectionRef.current) {
      const sections = sectionRef.current.querySelectorAll(".coverage-section:not(.coverage-cta)");
      if (sections.length > 0) {
        gsap.from(sections, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3
        });
      }
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
          <div ref={heroRef} className="coverage-hero coverage-section">
            <div className="coverage-hero__content">
              <div className="coverage-hero__icon">
                <FaGlobe />
              </div>
              <h2 className="coverage-hero__title">Global Coverage Map</h2>
              <p className="coverage-hero__subtitle">
                Explore our extensive network of DID numbers across 100+ countries worldwide
              </p>
              <p className="coverage-hero__info">
                For DID numbers at a fixed Per month rate and purchase by channel{" "}
                <Link to="/channels" className="coverage-hero__link">
                  see for more information
                </Link>
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

      {countries?.length > 0 &&
        <AnimatedTable countries={countries} />
      }

      {/* CTA Section */}
      <section className="coverage-cta-section">
        <div className="coverage-container">
          <div ref={ctaRef} className="coverage-cta coverage-section">
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
