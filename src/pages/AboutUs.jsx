import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaUsers, FaAward, FaQuestionCircle,
  FaHistory, FaNetworkWired, FaPeopleCarry,
  FaGlobe, FaHandshake
} from "react-icons/fa";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import FeaturesCard from "../components/featuresCard";
import HeroSection from "../components/heroSection";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const videoRef = useRef(null);
  const statsRef = useRef([]);
  const landingPageData = JsonData;

  const [activeModal, setActiveModal] = useState(null);

  useGSAP(() => {

    // Video fade-in
    gsap.from(videoRef.current, {
      scrollTrigger: { trigger: videoRef.current, start: "top 85%" },
      opacity: 0,
      scale: 0.85,
      duration: 1,
      ease: "power3.out"
    });

    // IMPACT STATS
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      const num = el.querySelector("span");
      const finalValue = num.textContent;

      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 90%" },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power3.out",
        onStart: () => {
          gsap.fromTo(num, { innerText: 0 }, {
            innerText: parseInt(finalValue),
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 }
          });
        }
      });
    });
  }, []);

  // Data for modal
  const cardData = [
    { icon: <FaUsers />, title: "Who Are We?", text: "DIDX, incorporated in Delaware since 2005..." },
    { icon: <FaQuestionCircle />, title: "Why Do We Do?", text: "We needed phone numbers for services..." },
    { icon: <FaNetworkWired />, title: "What Do We Do?", text: "DID Exchange is a VoIP-based wholesale..." },
    { icon: <FaHistory />, title: "Since When Are We Doing This?", text: "Our founder Rehan Allahwala..." },
    { icon: <FaAward />, title: "Recognition", text: "DIDX has been honored with awards..." },
    { icon: <FaPeopleCarry />, title: "Team", text: "Rehan calls DIDX an accident..." },
  ];

  return (
    <main className="about-page">
      <HeroSection
        titleA={"We connect the world with"}
        titleB={"phone numbers"}
        description={" Since 2005, DIDX has helped carriers and service providers buy and sell DIDs at scale—securely, transparently, and efficiently."}
        img={"/img/globe.png"} />

      {/* INTRO VIDEO */}
      <section className="about-video container" ref={videoRef}>
        <div className="about-video__row">
          <div className="about-video__text">
            <h1>Everything You Need to Know About Direct Inward Dialing (DID)</h1>
          </div>
          <div className="responsive-iframe">
            <iframe
              src="https://www.youtube.com/embed/WGYbrxZutMY"
              title="DIDX Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="about-sections container">

        <FeaturesCard data={cardData} />

        <div className="about-stats">
          <h2 style={{ gridColumn: "1 / -1", textAlign: "center" }}>Our Impact</h2>
          <div className="about-stat" ref={(el) => (statsRef.current[0] = el)}>
            <FaGlobe />
            <span>50</span>
            <small>Countries</small>
          </div>
          <div className="about-stat" ref={(el) => (statsRef.current[1] = el)}>
            <FaUsers />
            <span>30000</span>
            <small>Members</small>
          </div>
          <div className="about-stat" ref={(el) => (statsRef.current[2] = el)}>
            <FaHandshake />
            <span>25000</span>
            <small>Partners</small>
          </div>
        </div>
      </section>

      <Contact data={landingPageData.Contact} />

      {/* MODAL */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActiveModal(null)}>✖</button>
            <div className="modal-icon">{activeModal.icon}</div>
            <h2>{activeModal.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis, nunc et feugiat tempus, ligula felis faucibus lectus,
              in ullamcorper sapien nisi vitae sapien. (Replace with real content later)
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default AboutUs;
