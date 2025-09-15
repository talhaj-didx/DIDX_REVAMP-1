import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaMobile, FaGlobe, FaMoneyBillWave, FaUsers, FaChartLine, FaPhone, FaRocket, FaHandshake, FaCog, FaShieldAlt } from 'react-icons/fa';
import BreadCrumb from '../components/BreadCrumbs';
import { Contact } from '../components/contact';

const Mobile = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate other sections on scroll (excluding hero)
    gsap.from(sectionRef.current.querySelectorAll(".mobile-section:not(.mobile-hero)"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <BreadCrumb title="Mobile Operators" />
      
      <div className="mobile-page" ref={sectionRef}>
        <div className="mobile-container">
          {/* Hero Section */}
          <div className="mobile-hero mobile-section">
            <div className="mobile-hero__icon">
              <FaMobile />
            </div>
            <h1 className="mobile-hero__title">How to Make Money from DIDX</h1>
            <p className="mobile-hero__subtitle">
              For Mobile Phone Operators (Outside North America)
            </p>
          </div>

          {/* Main Content */}
          <div className="mobile-content">
            {/* Introduction Section */}
            <div className="mobile-section mobile-intro">
              <div className="mobile-intro__content">
                <h2 className="mobile-intro__title">
                  <FaMoneyBillWave className="mobile-intro__icon" />
                  Increase Your Revenue with Zero Acquisition Cost
                </h2>
                <p className="mobile-intro__text">
                  Mobile operators require as many subscribers as possible, with the least possible cost. 
                  In fact, the ARPU is based on the incoming calls and outgoing calls even though more 
                  profit is made from incoming calls.
                </p>
                <p className="mobile-intro__text">
                  The acquisition cost of each customer increases as competition become more intense.
                </p>
                <p className="mobile-intro__text">
                  Other costs, such as customer service, marketing, BTU installation, tower installation, 
                  tower location, and maintenance add to the mobile phone operator's worries.
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="mobile-section mobile-solution">
              <div className="mobile-solution__content">
                <h2 className="mobile-solution__title">
                  <FaRocket className="mobile-solution__icon" />
                  The DIDX Solution
                </h2>
                <div className="mobile-solution__highlight">
                  <p className="mobile-solution__question">
                    What if there is a way to increase the number of users, increase the incoming call volume, 
                    and have <strong>ZERO customer acquisition cost</strong>, almost no maintenance cost, 
                    no BTU cost, and no customer service cost?
                  </p>
                  <p className="mobile-solution__answer">
                    <strong>It is possible with the mobile phone operator's participation in DIDX.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Global Expansion Section */}
            <div className="mobile-section mobile-global">
              <div className="mobile-global__content">
                <h2 className="mobile-global__title">
                  <FaGlobe className="mobile-global__icon" />
                  Go Global with Your Mobile Network
                </h2>
                <p className="mobile-global__text">
                  Currently, your customers are located where its towers and coverage are, and most often 
                  in one licensed country, but what if you had millions of users outside your licensed 
                  country on roaming, and you could make additional money on the incoming calls?
                </p>
                <div className="mobile-global__benefits">
                  <div className="mobile-global__benefit">
                    <FaUsers className="mobile-global__benefit-icon" />
                    <span>Be a global telecom company with customers all over the world</span>
                  </div>
                  <div className="mobile-global__benefit">
                    <FaChartLine className="mobile-global__benefit-icon" />
                    <span>Expand to the United States, Middle East, China, India, and Asia</span>
                  </div>
                  <div className="mobile-global__benefit">
                    <FaHandshake className="mobile-global__benefit-icon" />
                    <span>Someone else has all the marketing cost, but you keep the income</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Opportunity Section */}
            <div className="mobile-section mobile-market">
              <div className="mobile-market__content">
                <h2 className="mobile-market__title">
                  <FaPhone className="mobile-market__icon" />
                  Massive Market Opportunity
                </h2>
                <p className="mobile-market__text">
                  DIDX empowers you to offer your mobile numbers to the world, and make revenue from 
                  a market that was never before possible.
                </p>
                <div className="mobile-market__stats">
                  <div className="mobile-market__stat">
                    <span className="mobile-market__stat-number">700M+</span>
                    <span className="mobile-market__stat-label">NGN Subscribers</span>
                  </div>
                  <div className="mobile-market__stat">
                    <span className="mobile-market__stat-number">3000+</span>
                    <span className="mobile-market__stat-label">Telecom Companies</span>
                  </div>
                  <div className="mobile-market__stat">
                    <span className="mobile-market__stat-number">3x</span>
                    <span className="mobile-market__stat-label">More Subscribers</span>
                  </div>
                </div>
                <p className="mobile-market__text">
                  Your DID numbers will ring on end-users' Yahoo Messengers in Russia or North America 
                  or even China. The NGN operators have an estimated 700 Million + subscribers, 
                  a <strong>HUGE market now yours</strong>.
                </p>
              </div>
            </div>

            {/* Revenue Model Section */}
            <div className="mobile-section mobile-revenue">
              <div className="mobile-revenue__content">
                <h2 className="mobile-revenue__title">
                  <FaMoneyBillWave className="mobile-revenue__icon" />
                  Your Revenue Streams
                </h2>
                <div className="mobile-revenue__streams">
                  <div className="mobile-revenue__stream">
                    <h3>Monthly Income</h3>
                    <p>Rental of the phone number</p>
                  </div>
                  <div className="mobile-revenue__stream">
                    <h3>Interconnect Fees</h3>
                    <p>Incoming call interconnect fee from local users and other operators</p>
                  </div>
                  <div className="mobile-revenue__stream">
                    <h3>Guaranteed Payments</h3>
                    <p>Complete end-to-end support with dedicated account managers</p>
                  </div>
                </div>
                <div className="mobile-revenue__services">
                  <h3>DIDX Handles Everything:</h3>
                  <ul>
                    <li><FaCog /> All the billing</li>
                    <li><FaCog /> All the collection</li>
                    <li><FaCog /> All the customer service</li>
                    <li><FaShieldAlt /> All the guarantee of the payments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* North America Section */}
            <div className="mobile-section mobile-north-america">
              <div className="mobile-north-america__content">
                <h2 className="mobile-north-america__title">
                  <FaPhone className="mobile-north-america__icon" />
                  For Mobile Operators in North America, Hong Kong, CDMA operators
                </h2>
                <p className="mobile-north-america__text">
                  Today, you provide your customers with a local phone number, and you do not charge 
                  for incoming call. How about increasing that ARPU?
                </p>
                <p className="mobile-north-america__text">
                  DIDX empowers you to offer your customer the option to buy numbers from other area 
                  codes than the ones you currently provider. They pay you an extra monthly service 
                  fee for this and you increase your ARPU by <strong>30% or more</strong>.
                </p>
              </div>
            </div>

            {/* Scenarios Section */}
            <div className="mobile-section mobile-scenarios">
              <div className="mobile-scenarios__content">
                <h2 className="mobile-scenarios__title">Real-World Scenarios</h2>
                
                <div className="mobile-scenario">
                  <h3 className="mobile-scenario__title">Scenario 1: New York to Tampa</h3>
                  <div className="mobile-scenario__content">
                    <div className="mobile-scenario__description">
                      <p><strong>Customer is in New York. His mom Lives in Tampa.</strong></p>
                      <p>Currently Mom has to call a long distance number to reach the person in New York, 
                      but for an extra $10, the customer can get a Tampa phone number, that will ring on 
                      the customer's cell phone in Seattle.</p>
                      <p>The mom is now virtually and psychologically (which is good) more inclined to 
                      call the customer by dialing the phone number that is local to her. She feels more 
                      attached to the customer, and finds him nearer which is important to her.</p>
                    </div>
                    <div className="mobile-scenario__technical">
                      <h4>Technically how it will work:</h4>
                      <p>The call will generate on our DIDX network in Tampa, travel over IP to your 
                      network in New York, deliver the call to your switch in Seattle or nearest 
                      interconnect, and finally deliver the call to the customer locally, thus 
                      removing the long distance leg.</p>
                    </div>
                  </div>
                </div>

                <div className="mobile-scenario">
                  <h3 className="mobile-scenario__title">Scenario 2: Seattle to London</h3>
                  <div className="mobile-scenario__content">
                    <div className="mobile-scenario__description">
                      <p><strong>Customer lives in Seattle. Customer's girlfriend lives in London.</strong></p>
                      <p>Customer pays $10 to $15 more to get a London phone number on his cell phone in Seattle.</p>
                      <p>The customer's girlfriend feels closer to the customer. The customer is willing 
                      to pay $15 for this service. Customer's girlfriend dials local and reaches the 
                      customer in Seattle.</p>
                    </div>
                    <div className="mobile-scenario__technical">
                      <h4>Technically how it will work:</h4>
                      <p>The call will generate on DIDX network partner's location in London, travel over 
                      IP to your network in Seattle, deliver the call to your switch in Seattle or nearest 
                      interconnect, and deliver the call to the customer locally. This remove the long 
                      distance leg and generates a new revenue stream thus increasing your ARPU.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="mobile-section mobile-implementation">
              <div className="mobile-implementation__content">
                <h2 className="mobile-implementation__title">
                  <FaCog className="mobile-implementation__icon" />
                  Easy Implementation
                </h2>
                <p className="mobile-implementation__text">
                  With DIDX, your customer selects the number from any part of the world, pays you, 
                  and instantly we route that number to your pre-defined switch and the number is provisioned.
                </p>
                <div className="mobile-implementation__benefits">
                  <div className="mobile-implementation__benefit">
                    <h3>You Decide</h3>
                    <p>The price and billing plan to charge your customer for this service</p>
                  </div>
                  <div className="mobile-implementation__benefit">
                    <h3>We Handle</h3>
                    <p>Wholesale fee only and pay to our partner network that you choose the number from</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mobile-section mobile-cta">
              <div className="mobile-cta__content">
                <h2 className="mobile-cta__title">Ready to Increase Your ARPU?</h2>
                <p className="mobile-cta__text">
                  Give it a try, you have nothing to lose and a world to gain. Let one of our 
                  consultants call you and advise you on how to proceed.
                </p>
                <div className="mobile-cta__highlight">
                  <h3>Increase Your ARPU today!!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Mobile;
