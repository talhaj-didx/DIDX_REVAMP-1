import  { useRef } from "react";
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
import "../css/buyDid.css";
import {
  FaAward, FaQuestionCircle,
  FaHistory, FaNetworkWired, FaPeopleCarry,
} from "react-icons/fa";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import FeaturesCard from "../components/featuresCard";
import HeroSection from "../components/heroSection";

export default function BuyDid() {
  const rootRef = useRef(null);
  const landingPageData = JsonData;


  const features = [
    {
      icon: <FaUsers />,
      title: "No Membership fee",
      text: "There is no Membership fees to register yourself at DIDx.",
    },
    {
      icon: <FaCode />,
      title: "Free API (Application Programming Interface)",
      text: "Our FREE web API service will display all available DID’s inside your web or switch application in real time.",
    },
    {
      icon: <FaBolt />,
      title: "Instant Activation",
      text: (
        <>
          All the DID’s we offer are INSTANTLY turned on for you with our{" "}
          <a href="#">live available inventory system</a>.
        </>
      ),
    },
    {
      icon: <FaClock />,
      title: "36 Hrs FREE DID Trial",
      text: "Buy any DID from DIDX for 36 hours free of charge. Remove it within 36 hours for an instant refund if not satisfied.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Guarantee",
      text: "Each DID is tested by our DIDtester™ software and rated for quality by the service and provider.",
    },
    {
      icon: <FaMoneyBill />,
      title: "Money Back Guarantee",
      text: "DIDX offers a money-back guarantee on any DID that does not work for more than 3 days in a row.",
    },
    {
      icon: <FaPhone />,
      title: "Low Price DID Numbers",
      text: (
        <>
          DIDX offers low setup and monthly fees. Check rates and{" "}
          <a href="#">live available inventory system</a>.
        </>
      ),
    },
    {
      icon: <FaPercent />,
      title: "Low Commission Rates",
      text: "The more DID’s you buy, the less commission DIDX charges you.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Application Development",
      text: "We support integration of DIDX APIs into your apps. Transaction fees are borne by the customer.",
    },
  ];

  return (
    <>
      <HeroSection
        titleA={"BUY DIDS FROM US"}
        description={"DIDX.net empowers VoIP phone companies to offer phone service from different areas of the world to its end-users."}
      />
      
      <section ref={rootRef} className="buydid">
        <FeaturesCard data={features} />
      </section>
      <Contact data={landingPageData.Contact} />
    </>
  );
}
