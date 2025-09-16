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

import HeroSection from "../components/heroSection";
import InfoSection from "../components/InfoCardSection";
import LeadershipQuote from "../components/LeadershipQuote";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const videoRef = useRef(null);
  const statsRef = useRef([]);


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
        titleA={"We connect the world with phone numbers"}
        // titleB={"phone numbers"}
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
        {/* <FeaturesCard data={cardData} /> */}
        {/* <MultiActionAreaCard
          title={" Who Are We?"}
          description={"DIDX, incorporated in Delaware since 2005, has been working in the field of telecom solutions. More information on Super Technologies can be found at supertec.com."}
          img={"/img/who.jpg"}
        /> */}

        {/* <MultiActionAreaCard
          title={"Why Do We Do?"}
          description={
            <>
              DIDX was created initially because we needed to buy phone numbers for our
              own services like virtualphoneline.com but when we went out there to look
              for numbers, no one was willing to sell in small qty and being a small
              company we needed smaller qty’s.
              <br />
              <br />
              So one of the vendor’s told us that we can not sell you less numbers because
              we do not have a billing system to sell you the numbers in small qty with
              and the answer from our team was CAN WE BUILD SOMETHING for you to BILL US
              with ?
              <br />
              <br />
              We thought that if we could solve this problem for them, there may be a few
              dozen other companies who would want to use us for billing, and perhaps 50
              or so more could eventually use DIDX. Little did we know that within a few
              years, over 30,000 phone companies would use it, and great names like
              Google, IBM, and Microsoft became our partners and customers.
            </>
          }

          img={"/img/who.jpg"}
          style={{ mt: 5 }}
        /> */}
        <InfoSection
          title="Who Are We?"
          description="DIDX, incorporated in Delaware since 2005, has been working in the field of telecom solutions. More information on Super Technologies can be found at supertec.com."
          imageUrl="/img/about3.jpg"
          imageAlt="Technologists working"
          imagePosition="left"   // Image LEFT, content RIGHT
        />

        <InfoSection
          title="Why Do We Do?"
          description={
            <>
              DIDX was created initially because we needed to buy phone numbers for our
              own services like virtualphoneline.com but when we went out there to look
              for numbers, no one was willing to sell in small qty and being a small
              company we needed smaller qty’s.
              <br />
              <br />
              So one of the vendor’s told us that we can not sell you less numbers because
              we do not have a billing system to sell you the numbers in small qty with
              and the answer from our team was CAN WE BUILD SOMETHING for you to BILL US
              with ?
              <br />
              <br />
              We thought that if we could solve this problem for them, there may be a few
              dozen other companies who would want to use us for billing, and perhaps 50
              or so more could eventually use DIDX. Little did we know that within a few
              years, over 30,000 phone companies would use it, and great names like
              Google, IBM, and Microsoft became our partners and customers.
            </>
          }
          imageUrl="/img/about0.jpg"
          imageAlt="Technologists working"
          imagePosition="right"   // Image LEFT, content RIGHT
        />

        <InfoSection
          title="What do we Do?"
          description="DID Exchange is a VOIP-based wholesale DID Phone Number marketplace which can and is used by Mobile Operators, LECs, ClECs, IXCs or other telecommunications service providers who offer or use any kind of PHONE NUMBERS in there network."
          imageUrl="/img/about1.jpg"
          imageAlt="Technologists working"
          imagePosition="left"   // Image LEFT, content RIGHT
        />

        <InfoSection
          title="Since When We Are Doing This?"
          description={
            <>
              Our Founder Rehan Allahwala who has beta tested for Net2phone in 1997 and worked with Jeff Pulver’s Free World Project # 1 has been around doing this since the birth of Voice of the Internet.
              <br />
              <br />
              He has invented services like www.virtualphoneline .com , Super-phone .com, Ip-pabx .com. Then in 2005 he came up with the Idea of DID Exchange, which eventually became DIDX and it becomes most successful of them all.
              <br />
              <br />
              DIDX was started in 2005 and formally launched in 2006 as a side project and now have over 25000 telecom companies as members.
            </>
          }
          imageUrl="/img/sincewhen.jpg"
          imageAlt="Technologists working"
          imagePosition="right"   // Image LEFT, content RIGHT
        />

        <InfoSection
          title="Recognition"
          description={
            "DIDX has been honoured with many awards over the years from many countries, a list of which is here Awards"
          }
          imageUrl="/img/recong.jpg"
          imageAlt="Technologists working"
          imagePosition="left"   // Image LEFT, content RIGHT
        />

        <LeadershipQuote />



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

      <Contact />

      {/* MODAL */}
      {/* {activeModal && (
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
      )} */}
    </main>
  );
};

export default AboutUs;
