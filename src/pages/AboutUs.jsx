import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaUsers,
  FaGlobe, FaHandshake
} from "react-icons/fa";
import { Contact } from "../components/contact";

import HeroSection from "../components/heroSection";
import InfoSection from "../components/InfoCardSection";

gsap.registerPlugin(ScrollTrigger);

const getIconComponent = (iconName) => {
  const iconMap = {
    'FaGlobe': FaGlobe,
    'FaUsers': FaUsers,
    'FaHandshake': FaHandshake
  };
  
  return iconMap[iconName] || FaGlobe; // Default to FaGlobe if icon not found
};

const aboutUsData = {
  hero: {
    title: "We connect the world with phone numbers",
    description: "Since 2005, DIDX has helped carriers and service providers buy and sell DIDs at scale—securely, transparently, and efficiently.",
    image: "/img/globe.png"
  },
  video: {
    title: "Everything You Need to Know About Direct Inward Dialing (DID)",
    youtubeUrl: "https://www.youtube.com/embed/WGYbrxZutMY",
    youtubeTitle: "DIDX Intro"
  },
  sections: [
    {
      id: "who-are-we",
      title: "Who Are We?",
      description: "DIDX, incorporated in Delaware since 2005, has been working in the field of telecom solutions. More information on Super Technologies can be found at supertec.com.",
      imageUrl: "/img/about3.jpg",
      imageAlt: "Technologists working",
      imagePosition: "left"
    },
    {
      id: "why-do-we-do",
      title: "Why Do We Do?",
      description: "DIDX was created initially because we needed to buy phone numbers for our own services like virtualphoneline.com but when we went out there to look for numbers, no one was willing to sell in small qty and being a small company we needed smaller qty's.\n\nSo one of the vendor's told us that we can not sell you less numbers because we do not have a billing system to sell you the numbers in small qty with and the answer from our team was CAN WE BUILD SOMETHING for you to BILL US with ?\n\nWe thought that if we could solve this problem for them, there may be a few dozen other companies who would want to use us for billing, and perhaps 50 or so more could eventually use DIDX. Little did we know that within a few years, over 30,000 phone companies would use it, and great names like Google, IBM, and Microsoft became our partners and customers.",
      imageUrl: "/img/about0.jpg",
      imageAlt: "Technologists working",
      imagePosition: "right"
    },
    {
      id: "what-do-we-do",
      title: "What do we Do?",
      description: "DID Exchange is a VOIP-based wholesale DID Phone Number marketplace which can and is used by Mobile Operators, LECs, ClECs, IXCs or other telecommunications service providers who offer or use any kind of PHONE NUMBERS in there network.",
      imageUrl: "/img/about1.jpg",
      imageAlt: "Technologists working",
      imagePosition: "left"
    },
    {
      id: "since-when",
      title: "Since When We Are Doing This?",
      description: "Our Founder Rehan Allahwala who has beta tested for Net2phone in 1997 and worked with Jeff Pulver's Free World Project # 1 has been around doing this since the birth of Voice of the Internet.\n\nHe has invented services like www.virtualphoneline .com , Super-phone .com, Ip-pabx .com. Then in 2005 he came up with the Idea of DID Exchange, which eventually became DIDX and it becomes most successful of them all.\n\nDIDX was started in 2005 and formally launched in 2006 as a side project and now have over 25000 telecom companies as members.",
      imageUrl: "/img/sincewhen.jpg",
      imageAlt: "Technologists working",
      imagePosition: "right"
    },
   
    {
      id: "recognition",
      title: "Recognition",
      description: "DIDX has been honoured with many awards over the years from many countries, a list of which is here Awards",
      imageUrl: "/img/recong.jpg",
      imageAlt: "Technologists working",
      imagePosition: "left"
    },
     {
      id: "our-team",
      title: "Team",
      description: "Our founder Rehan Allahwala calls DIDX as an ACCIDENT, many people were behind the entire System like Mr Khurram Shafi, Umair Bari, Danish Moosa and Sajid who wrote DIDX as his internship project.\n\nSince then the system has been re-created, written and evolved over the years to become one of the largest Phone Number network of the world.",
      imageUrl: "/img/ourteam.jpg",
      imageAlt: "Technologists working",
      imagePosition: "right"
    },
  ],
  stats: {
    title: "Our Impact",
    items: [
      {
        id: "countries",
        icon: "FaGlobe",
        value: "50",
        label: "Countries"
      },
      {
        id: "members",
        icon: "FaUsers",
        value: "30000",
        label: "Members"
      },
      {
        id: "partners",
        icon: "FaHandshake",
        value: "25000",
        label: "Partners"
      }
    ]
  },
};

const AboutUs = () => {
  const videoRef = useRef(null);
  const statsRef = useRef([]);

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

  return (
    <main className="about-page">
      <HeroSection
        titleA={aboutUsData.hero.title}
        description={aboutUsData.hero.description}
        img={aboutUsData.hero.image} />

      {/* INTRO VIDEO */}
      <section className="about-video container" ref={videoRef}>
        <div className="about-video__row">
          <div className="about-video__text">
            <h1>{aboutUsData.video.title}</h1>
          </div>
          <div className="responsive-iframe">
            <iframe
              src={aboutUsData.video.youtubeUrl}
              title={aboutUsData.video.youtubeTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="about-sections container">
        {aboutUsData.sections.map((section) => (
          <InfoSection
            key={section.id}
            title={section.title}
            description={section.description.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < section.description.split('\n\n').length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
            imageUrl={section.imageUrl}
            imageAlt={section.imageAlt}
            imagePosition={section.imagePosition}
          />
        ))}


        <div className="about-stats enhanced">
          <h2>{aboutUsData.stats.title}</h2>
          {aboutUsData.stats.items.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
            return (
              <div 
                key={stat.id} 
                className="about-stat enhanced" 
                ref={(el) => (statsRef.current[index] = el)}
              >
                <IconComponent />
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            );
          })}
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
