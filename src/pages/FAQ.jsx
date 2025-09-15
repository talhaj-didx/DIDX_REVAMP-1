import React, { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Lottie from 'lottie-react';
import faqAnimation from '../lottie/faq.json';
import BreadCrumb from '../components/BreadCrumbs';
import { Contact } from '../components/contact';

const FAQ = () => {
  const sectionRef = useRef(null);
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "What is DIDX?",
      answer: "DIDX is a DID number market for wholesale customers. Many call it \"Ebay for DID\" or \"Arbinet for DID.\" We call it, DIDXchange. DIDX is for wholesale VOIP service providers (LEC's, CLEC's and IXC's) eager to buy, sell, and trade their available DID numbering plan to others."
    },
    {
      id: 2,
      question: "Does DIDX offer a member manual?",
      answer: "Yes, you can download Power Point format. PDF format."
    },
    {
      id: 3,
      question: "Is there any membership fee?",
      answer: "No membership fee. Inactive members do not do business on DIDX. To do business, one must activate the account first by following steps at interop. Each active basic member starts with 2 free DID's. For the buyer, a minimum of 50 DID's purchased is required. For new sellers, as of March 25, 2008, a minimum of 50 international DIDs for sale or a minimum of 500 USA/UK DID is required. Otherwise, a monthly minimum service fee of $50 will apply per month in each of the 3 cases listed."
    },
    {
      id: 4,
      question: "How do I check the DIDX services?",
      answer: "Each member receives 2 free DID numbers at signup to test and use. In addition, a DIDX member purchases a DID and may test the DID for 36 hours. If during that 36 hours, he does not like the quality, he may return the DID by deleting it from his account. In order to get a full refund, he must delete the DID before 36 hours."
    },
    {
      id: 5,
      question: "Can I port my did number away from DIDX?",
      answer: "Yes. Contact the carrier to which you are porting the numbers to in order to get their directions."
    },
    {
      id: 6,
      question: "Can I port my number TO DIDX?",
      answer: "Please click here to get the full details about."
    },
    {
      id: 7,
      question: "When will the Beta mode of DIDX end?",
      answer: "\"Beta\" means final product test. DIDX began August 1, 2005. The DIDX system has been re-engineered 3 times and will continue to evolve to better serve the growing numbers in DIDX wholesale provider membership. DIDX has 9000 + members who buy, sell and trade with success. See the up-to-date list at coverage and more available on request."
    },
    {
      id: 8,
      question: "How does DIDX make money?",
      answer: "DIDX charges a transaction fee to the Buyer. The Transaction fee is charged based on the qty of the numbers a user buy."
    },
    {
      id: 9,
      question: "I've forgotten my password. How can I get it back?",
      answer: "Go to reset-password. Enter your account number or email address to get your password."
    },
    {
      id: 10,
      question: "How much time will it take for my number to be active?",
      answer: "Instant, all numbers are instantly activated to you when you purchased them unless they are special order numbers, which you will be notified of before you buy."
    },
    {
      id: 11,
      question: "What is the procedure for DIDX members to receive customer support?",
      answer: "Platinum DIDX members receive customer support via telephone, email, IM and DIDX account ticketing system. The remaining valued DIDX members will receive support via the DIDX account ticketing system. Login to your account, click Contact Us, and enter your technical and customer support requests there."
    },
    {
      id: 12,
      question: "Do you offer any API service for integration of DIDX in my own software?",
      answer: "We offer API for you to integrate into your software application for managing your DID's on DIDX. You can use these API's to buy or sell the DID numbers."
    },
    {
      id: 13,
      question: "Why I received less amount when I pay via Paypal?",
      answer: "DIDx uses PayPal as a payment method for receiving payments from DIDx members. Any fee incurred by Paypal will be deducted from the total payment sent and the net amount will be added to the DIDx member account."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useGSAP(() => {
    gsap.from(sectionRef.current.querySelectorAll(".faq-item"), {
      opacity: 0,
      y: 30,
      duration: 0.6,
    //   stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <BreadCrumb title="Frequently Asked Questions" />
      
      <div className="faq-page" ref={sectionRef}>
        <div className="faq-container">
          {/* Hero Section */}
          <div className="faq-hero">
            <div className="faq-hero__content">
              <div className="faq-hero__icon">
                <FaQuestionCircle />
              </div>
              <h1 className="faq-hero__title">Frequently Asked Questions</h1>
              <p className="faq-hero__subtitle">
                Find answers to common questions about DIDX services, membership, and support
              </p>
            </div>
            <div className="faq-hero__animation">
              <Lottie
                animationData={faqAnimation}
                loop={true}
                autoplay={true}
                className="faq-lottie"
              />
            </div>
          </div>

          {/* FAQ Items */}
          <div className="faq-content">
            <div className="faq-items">
              {faqData.map((item) => (
                <div key={item.id} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={openItems[item.id] || false}
                  >
                    <span className="faq-question__text">{item.question}</span>
                    <div className="faq-question__icon">
                      {openItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>
                  <div className={`faq-answer ${openItems[item.id] ? 'faq-answer--open' : ''}`}>
                    <div className="faq-answer__content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="faq-cta">
            <div className="faq-cta__content">
              <h3 className="faq-cta__title">Still have questions?</h3>
              <p className="faq-cta__text">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a href="/contact" className="faq-cta__button">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default FAQ;
