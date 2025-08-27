import React from 'react'
import HeroSection from '../components/heroSection'
import { Contact } from '../components/contact'
import JsonData from "../data/data.json";
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

export const features = [
  {
    icon: <FaShieldAlt />,
    title: "Payment Guarantee",
    text: "DIDX guarantees your payouts as long as your DIDs are working.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Ease of Service",
    text: "Work with one entity—DIDX handles routing/config so you don’t have to.",
  },
  {
    icon: <FaGlobe />,
    title: "Huge Market Space",
    text: "Get exposure on 17,500+ websites, massively boosting DID sales potential.",
  },
  {
    icon: <FaSlidersH />,
    title: "You Are In Control",
    text: "Set your own pricing and features—DIDX becomes your best sales arm.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "No Listing Charges",
    text: "List for free. DIDX tests, grades, and sells; buyer pays the commission.",
  },
  {
    icon: <FaUserPlus />,
    title: "No Membership Fee",
    text: "Seller membership is free. Enlist ≥50 non-US DIDs or ≥500 US DIDs.",
  },
  {
    icon: <FaUpload />,
    title: "Bulk Upload",
    text: "Upload your entire inventory via XLS uploader or the free API.",
  },
  {
    icon: <FaCode />,
    title: "Free API",
    text: "Add/remove DIDs programmatically; DIDX handles end-to-end provisioning.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Free Codec Converter",
    text: "Automatic conversion for g723, g726, g729, g711, Speex, and iLBC.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Free Protocol Converter",
    text: "Convert SIP ↔ IAX2 for purchased DIDs; H.323 support coming soon.",
  },
];

const SellDid = () => {
  const landingPageData = JsonData;
  return (
    <div>
      <HeroSection
        titleA={"Sell Your DIDS To Us"}
        description={"DIDX provides the most profitable marketplace to sell your DIDs to thousands of members who are carriers, telecoms, and new VoIP companies. They are the buyers and join DIDX to buy service in the areas that you offer DID service."}
      />

      <FeaturesCard data={features} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default SellDid
