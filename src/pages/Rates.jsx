import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BreadCrumb from '../components/BreadCrumbs'
import { Contact } from '../components/contact';
import { FaDollarSign, FaUsers, FaList, FaFileAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Rates = () => {
  const rootRef = useRef(null);

  // GSAP animation (same as CaseStudy.jsx)
  useGSAP(() => {
    gsap.from(rootRef.current.querySelectorAll(".case-study-item"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      // stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <BreadCrumb title="Rates" />
      
      <div className="case-study-page" ref={rootRef}>
        <div className="case-study-container">
          {/* Hero Section */}
          <div className="case-study-hero">
            <div className="case-study-hero__icon">
              <FaDollarSign />
            </div>
            <h1 className="case-study-hero__title">Rates</h1>
            <p className="case-study-hero__subtitle">
              Each DID on DIDX is priced by the Vendor/Seller of the DID. This rate is not controlled by DIDX. To view the DID rates, please log in to your account.
            </p>
          </div>

          {/* Main Content */}
          <div className="case-study-content">

            <div className="case-study-item">
              <div className="case-study-item__header">
                <div className="case-study-item__icon">
                  <FaUsers />
                </div>
                <h3 className="case-study-item__company">BASIC MEMBERSHIP</h3>
              </div>
              <h4 className="case-study-item__title">Basic Membership</h4>
              <div className="case-study-item__content">
                <p>Basic membership on DIDX is free.</p>
                <p>Member gets 2 free DIDs to check DIDX services and to understand how the system works for 30 days.</p>
                <p>Member can not buy/sell DIDs unless they activate account after Signup.</p>
              </div>
            </div>

            <div className="case-study-item">
              <div className="case-study-item__header">
                <div className="case-study-item__icon">
                  <FaDollarSign />
                </div>
                <h3 className="case-study-item__company">REGULAR MEMBERSHIP</h3>
              </div>
              <h4 className="case-study-item__title">Regular Membership</h4>
              <div className="case-study-item__content">
                <p>Zero Setup Charge Zero Monthly Charge Seller does not pay a listing or brokerage fee. Monthly minimum quantity charge of $50/month when buyers do not have at least 50 purchased numbers OR domestic USA sellers have at least 500 numbers or international sellers have at least 50 numbers for sale on DIDX</p>
              </div>
            </div>

            <div className="case-study-item">
              <div className="case-study-item__header">
                <div className="case-study-item__icon">
                  <FaList />
                </div>
                <h3 className="case-study-item__company">DID LIST</h3>
              </div>
              <h4 className="case-study-item__title">DID List</h4>
              <div className="case-study-item__content">
                <p>The DID numbers are <a href="/coverage" className="case-study-item__link">listed here</a>.</p>
              </div>
            </div>

            <div className="case-study-item">
              <div className="case-study-item__header">
                <div className="case-study-item__icon">
                  <FaFileAlt />
                </div>
                <h3 className="case-study-item__company">LISTING CHARGES</h3>
              </div>
              <h4 className="case-study-item__title">Listing Charges</h4>
              <div className="case-study-item__content">
                <p>There is NO CHARGE to list your numbers on DIDX to sell them.</p>
                <p>DIDX is for wholesale customers only. If you need fewer than 50 numbers please visit <a href="https://virtualphoneline.com" target="_blank" rel="noopener noreferrer" className="case-study-item__link">virtualphoneline.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}

export default Rates
