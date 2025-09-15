import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaUsers,
  FaCode,
  FaBolt,
  FaClock,
  FaCheckCircle,
  FaMoneyBill,
  FaPhone,
  FaPercent,
  FaCogs,
} from "react-icons/fa";
import { Contact } from "../components/contact";
import HeroSection from "../components/heroSection";

export default function BuyDid() {
  const rootRef = useRef(null);
  
  // GSAP animation
  useGSAP(() => {
    gsap.from(rootRef.current.querySelectorAll(".buydid-section"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top 80%",
      },
    });
  });

  const features = [
    {
      icon: <FaUsers />,
      title: "No Membership fee",
      text: "There is no Membership fees to register yourself at DIDx.",
    },
    {
      icon: <FaCode />,
      title: "Free API (Application Programming Interface)",
      text: "Our FREE web API service will display all available DID's inside your web or switch application, grabbing the database in real time basis. This empowers you to offer these global phone numbers to everyone of your customers.",
    },
    {
      icon: <FaBolt />,
      title: "Instant Activation",
      text: (
        <>
          All the DID's we offer are INSTANTLY turned on for you, without any delays, with our WYSIWYG{" "}
          <a href="/coverage" className="buydid-feature__link">live available inventory system</a>.
        </>
      ),
    },
    {
      icon: <FaClock />,
      title: "36 Hrs FREE DID Trial",
      text: "Buy any DID from DIDX for 36 hours free of charge. Try the quality of the service on it. Then remove it for a instant refund before 36 hours if you are not 100% satisfied.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Guarantee",
      text: "Each DID you get from DIDx.net is tested by our DIDtester ™ software. Each DID is rated by quality of the service and provider. You can choose to display all or only the best quality DID's to your customers.",
    },
    {
      icon: <FaMoneyBill />,
      title: "Money Back Guarantee",
      text: "DIDX offers Money Back guarantee on any DID that does not work for more than 3 days in a row.",
    },
    {
      icon: <FaPhone />,
      title: "Low Price DID Numbers",
      text: (
        <>
          DIDX offers low setup and monthly fee on the DID numbers. Check out{" "}
          <a href="/rates" className="buydid-feature__link">DIDX rates</a> and{" "}
          <a href="/coverage" className="buydid-feature__link">live available inventory system</a>.
        </>
      ),
    },
    {
      icon: <FaPercent />,
      title: "Low Commission Rates",
      text: "Variable commission rate, the more DID's you buy, the less commission DIDX charges you.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Application Development",
      text: "Custom support for your applications available to integrate DIDX API's into your applications. While paying by wire transfer or PayPal all transaction charges are to be borne by the customer. DIDX will recognize only net amounts received. It is customer's responsibility to determine what, if any charges are being applied to the payment.",
    },
  ];

  return (
    <>
      <HeroSection
        titleA={"BUY DIDS FROM US"}
        description={"DIDX.net empowers VoIP phone companies to offer phone service from different areas of the world to its end-users."}
        img={"/img/globe.png"}
      />
      
      <div className="buydid-page" ref={rootRef}>
        <div className="buydid-container">

          {/* Features Section */}
          <div className="buydid-features buydid-section">
            {/* <h2 className="buydid-features__title">Why Choose DIDX for Your DID Needs?</h2>
            <p className="buydid-features__subtitle">
              Discover the comprehensive benefits and features that make DIDX the preferred choice for VoIP providers worldwide
            </p> */}
            
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

          {/* CTA Section */}
          <div className="buydid-cta buydid-section">
            <h2 className="buydid-cta__title">Ready to Start Buying DIDs?</h2>
            <p className="buydid-cta__text">
              Join thousands of VoIP providers who trust DIDX for their global DID requirements
            </p>
            <div className="buydid-cta__actions">
              <a href="/signup" className="buydid-cta__btn buydid-cta__btn--primary">
                Get Started Now
              </a>
              <a href="/rates" className="buydid-cta__btn buydid-cta__btn--secondary">
                View Rates
              </a>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
