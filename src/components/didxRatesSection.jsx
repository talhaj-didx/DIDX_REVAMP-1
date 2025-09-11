import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  FaInfoCircle, 
  FaUser, 
  FaDollarSign, 
  FaCreditCard,
  FaCheckCircle,
  FaArrowRight,
  FaStar
} from "react-icons/fa";

export default function DidxRatesSection() {
  const rootRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(rootRef.current, { opacity: 0, y: 24, duration: 0.6 });
    tl.from(leftColRef.current, { x: -20, opacity: 0, duration: 0.6 }, "-=");
    tl.from(
      cardsRef.current.querySelectorAll(".rates-card"),
      { y: 16, opacity: 0, duration: 0.45 },
      "-="
    );
  });

  const membershipPlans = [
    {
      icon: <FaInfoCircle />,
      title: "Basic Membership",
      description: "Basic membership on DIDX is free. Member gets 2 free DIDs for 30 days to explore services. Accounts must be activated to buy/sell.",
      features: ["2 Free DIDs", "30 Day Trial", "Activation Required"],
      color: "var(--c1)"
    },
    {
      icon: <FaUser />,
      title: "Regular Membership", 
      description: "Zero setup charge · Zero monthly charge. Sellers do not pay listing or brokerage fees. A monthly minimum quantity charge of $50 applies when buyers do not have at least 50 purchased numbers OR domestic USA sellers have at least 500 numbers OR international sellers have at least 50 numbers for sale on DIDX.",
      features: ["Zero Setup", "Zero Monthly", "No Brokerage Fees"],
      color: "var(--c1)"
    },
    {
      icon: <FaDollarSign />,
      title: "Listing Charges",
      description: "There is NO CHARGE to list your numbers on DIDX to sell them. DIDX is for wholesale customers only. If you need fewer than 50 numbers please visit virtualphoneline.com.",
      features: ["No Listing Fee", "Wholesale Only", "50+ Numbers"],
      color: "var(--c1)"
    }
  ];

  const rateCards = [
    {
      icon: <FaUser />,
      label: "Basic",
      title: "Free Trial",
      description: "2 free DIDs for 30 days. Activation required to transact.",
      color: "var(--c1)"
    },
    {
      icon: <FaDollarSign />,
      label: "Regular", 
      title: "Wholesale",
      description: "No setup or monthly charge. Sellers keep control of pricing. Minimum charges apply in certain low-volume scenarios.",
      color: "var(--c1)"
    },
    {
      icon: <FaInfoCircle />,
      label: "Listing",
      title: "No Listing Fee",
      description: "List your DIDs for sale without charge. DIDX is targeted at wholesale customers.",
      color: "var(--c1)"
    },
    {
      icon: <FaCreditCard />,
      label: "Note",
      title: "How to view rates",
      description: "Vendor/Seller sets each DID price — log in to your DIDX account to view live rates for specific numbers.",
      color: "var(--c1)"
    }
  ];

  return (
    <section ref={rootRef} className="rates-section">
      <div className="rates-container">
        <div className="rates-header">
          <h2 className="rates-title">DIDX Membership & Rates</h2>
          <p className="rates-subtitle">Choose the perfect plan for your business needs</p>
        </div>

        <div className="rates-content">
          {/* Left Column - Membership Plans */}
          <div ref={leftColRef} className="rates-left">
            <div className="membership-plans">
              {membershipPlans.map((plan, index) => (
                <div key={index} className="membership-card">
                  <div className="membership-card__header">
                    <div className="membership-card__icon" style={{ backgroundColor: plan.color }}>
                      {plan.icon}
                    </div>
                    <h3 className="membership-card__title">{plan.title}</h3>
                  </div>
                  <p className="membership-card__description">{plan.description}</p>
                  <div className="membership-card__features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FaCheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rates-actions">
              <button className="btn btn-primary">
                <FaCreditCard />
                Log in to view rates
                <FaArrowRight />
              </button>
              <button className="btn btn-secondary">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Column - Rate Cards */}
          <div className="rates-right">
            <div ref={cardsRef} className="rates-cards">
              {rateCards.map((card, index) => (
                <div key={index} className="rates-card">
                  <div className="rates-card__header">
                    <div className="rates-card__badge" style={{ backgroundColor: card.color }}>
                      {card.label}
                    </div>
                    <div className="rates-card__icon" style={{ color: card.color }}>
                      {card.icon}
                    </div>
                  </div>
                  <h4 className="rates-card__title">{card.title}</h4>
                  <p className="rates-card__description">{card.description}</p>
                  <div className="rates-card__glow" style={{ background: `linear-gradient(135deg, ${card.color}20, transparent)` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
