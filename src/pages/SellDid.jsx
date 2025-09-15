import React, { useRef } from 'react'
import HeroSection from '../components/heroSection'
import { Contact } from '../components/contact'

import {
  FaShieldAlt,
  FaHandsHelping,
  FaGlobe,
  FaSlidersH,
  FaMoneyCheckAlt,
  FaUserPlus,
  FaUpload,
  FaCode,
  FaExchangeAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const features = [
  { 
    icon: <FaShieldAlt />, 
    title: "Payment Guarantee", 
    text: "DIDX guarantees your payments as long as your DIDs work." 
  },
  { 
    icon: <FaHandsHelping />, 
    title: "Ease Of Service", 
    text: "You deal with one entity DIDX. You do not have to teach your customers how to configure or route to different locations. DIDX does it for you." 
  },
  { 
    icon: <FaGlobe />, 
    title: "Huge Market Space", 
    text: "By joining us, you have 17,500+ web sites with your numbers for sale. This will increase the chance of selling your DID by several hundred times." 
  },
  { 
    icon: <FaSlidersH />, 
    title: "You Are In Control", 
    text: "You decide the sale price and features you are willing to offer on your DID. We will be your BEST SALES ARM in the business." 
  },
  { 
    icon: <FaMoneyCheckAlt />, 
    title: "No Listing Charges", 
    text: "DIDX does not charge you anything to list your numbers on the exchange. DIDX tests your numbers, grades them, sells them, and does not charge you any commission. DIDX commissions are paid by the buyer." 
  },
  { 
    icon: <FaUserPlus />, 
    title: "No Membership Fee", 
    text: "DIDX Membership is FREE to sellers. Enlist at least 50 DID number that are in geographical areas outside the United States or 500 if they are United States' area codes." 
  },
  { 
    icon: <FaUpload />, 
    title: "Bulk Upload Feature", 
    text: "Bulk Upload your entire inventory using XLS file uploader or our free API." 
  },
  { 
    icon: <FaCode />, 
    title: "Free API", 
    text: (
      <>
        Our FREE API allows you to enlist your inventory on the DIDX system, in a jiffy. Add or delete them from the DIDX system, as you sell them directly from your own system. One time provisioning: DIDX takes care of the interop and provisioning of the DID number from its end to the other ITSP.{" "}
        <a href="https://kb.didx.net/list-of-api-functions/" target="_blank" rel="noopener noreferrer" className="buydid-feature__link">FREE API</a>
      </>
    )
  },
  { 
    icon: <FaExchangeAlt />, 
    title: "Free Codec Convertor", 
    text: "DIDX offers FREE codec conversion of all the DIDs sold via DIDX. DIDX supports g723, g726, g729, g711, Speex, and ILBC." 
  },
  { 
    icon: <FaProjectDiagram />, 
    title: "Free Protocol Convertor", 
    text: "DIDX offers FREE protocol conversion of all the DID's sold via DIDX. Buyers can convert the DIDs from SIP to IAX2 or IAX2 to SIP. H323 coming soon." 
  },
];

const SellDid = () => {

  const sectionRef = useRef(null);

  // Animate the new section
  useGSAP(() => {
    gsap.from(sectionRef.current.querySelectorAll(".money-block"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(sectionRef.current.querySelector(".money-image"), {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  });

  return (
    <div>
      <HeroSection
        titleA={"Sell Your DIDS To Us"}
        description={
          "DIDX provides the most profitable marketplace to sell your DIDs to thousands of members who are carriers, telecoms, and new VoIP companies. They are the buyers and join DIDX to buy service in the areas that you offer DID service."
        }
        img={"/img/globe.png"}
      />


      <div className="buydid-page">
        <div className="buydid-container">
          {/* Features Section */}
          <div className="buydid-features buydid-section">
            <div className="buydid-features__grid">
              {features.map((feature, index) => (
                <div key={index} className="buydid-feature">
                  <div className="buydid-feature__icon">
                    {feature.icon}
                  </div>
                  <div className="buydid-feature__content">
                    <h3 className="buydid-feature__title">{feature.title}</h3>
                    <p className="buydid-feature__text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* New Section: How to Make Money from DIDX */}
      <section className="money-section" ref={sectionRef}>
        <h2>HOW TO MAKE MONEY FROM DIDX?</h2>

        <div className="money-container">
          {/* Left Content */}
          <div className="money-text">
            <div className="money-block">
              <h3>
                For Mobile Phone Operator:{" "}
                <span className="italic">(Outside North America)</span>
              </h3>
              <p>
                A goal for a mobile operator is to have as many subscribers as
                possible, with the least possible cost. The ARPU is based on the
                incoming calls and outgoing calls but most of the revenue is made
                when a call comes in.
              </p>
              <p>
                The acquisition cost of this customer is becoming higher and higher
                as the competition becomes more intense.
              </p>
            </div>

            <div className="money-block">
              <h3>
                For Internet Telephone Service providers:{" "}
                <span className="italic">(Clec and Local Loop)</span>
              </h3>
              <p>
                As an Internet Telephone Service provider, you can now offer
                incoming service and generate more ARPU from your customers by not
                only offering US numbers but also offering global phone numbers in
                an instant without any investment.
              </p>
            </div>

            <div className="money-block">
              <a href="/mobile">Click here for more information</a>
            </div>
          </div>

          {/* Right Image */}
          <div className="money-image">
            <img src="/img/make-money.jpg" alt="Make Money from DIDX" />
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default SellDid;
