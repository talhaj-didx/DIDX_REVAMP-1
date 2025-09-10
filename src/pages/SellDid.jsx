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
import FeaturesCard from '../components/featuresCard';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const features = [
  { icon: <FaShieldAlt />, title: "Payment Guarantee", text: "DIDX guarantees your payouts as long as your DIDs are working." },
  { icon: <FaHandsHelping />, title: "Ease of Service", text: "Work with one entity—DIDX handles routing/config so you don’t have to." },
  { icon: <FaGlobe />, title: "Huge Market Space", text: "Get exposure on 17,500+ websites, massively boosting DID sales potential." },
  { icon: <FaSlidersH />, title: "You Are In Control", text: "Set your own pricing and features—DIDX becomes your best sales arm." },
  { icon: <FaMoneyCheckAlt />, title: "No Listing Charges", text: "List for free. DIDX tests, grades, and sells; buyer pays the commission." },
  { icon: <FaUserPlus />, title: "No Membership Fee", text: "Seller membership is free. Enlist ≥50 non-US DIDs or ≥500 US DIDs." },
  { icon: <FaUpload />, title: "Bulk Upload", text: "Upload your entire inventory via XLS uploader or the free API." },
  { icon: <FaCode />, title: "Free API", text: "Add/remove DIDs programmatically; DIDX handles end-to-end provisioning." },
  { icon: <FaExchangeAlt />, title: "Free Codec Converter", text: "Automatic conversion for g723, g726, g729, g711, Speex, and iLBC." },
  { icon: <FaProjectDiagram />, title: "Free Protocol Converter", text: "Convert SIP ↔ IAX2 for purchased DIDs; H.323 support coming soon." },
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

      <FeaturesCard data={features} />

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
              <a href="#">Click here for more information</a>
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
