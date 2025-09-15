import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaBuilding, FaChartLine, FaUsers, FaCog, FaGlobe, FaPhone } from "react-icons/fa";
import { Contact } from "../components/contact";
import BreadCrumb from "../components/BreadCrumbs";

// // ✅ Breadcrumb (converted from your layout component)
// const BreadCrumb = ({ title }) => (
//   <Box sx={{mt: 10, py: 2, px: { xs: 2, md: 6 }, bgcolor: "#f5f5f5" }}>
//     <Typography variant="h5" color="text.secondary" style={{justifySelf:'flex-end'}}>
//       Home / <span style={{ color: "#1976d2" }}>{title}</span>
//     </Typography>
//   </Box>
// );

export default function Clec() {
  const sectionRef = useRef(null);
  

  // ✅ GSAP entrance animation
  useGSAP(() => {
    gsap.from(sectionRef.current.querySelectorAll(".clec-section"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <BreadCrumb title="CLEC Company" />
      
      <div className="clec-page" ref={sectionRef}>
        <div className="clec-container">
          {/* Hero Section */}
          <div className="clec-hero clec-section">
            <div className="clec-hero__icon">
              <FaBuilding />
            </div>
            <h1 className="clec-hero__title">CLEC Company Solutions</h1>
            <p className="clec-hero__subtitle">
              Empowering Competitive Local Exchange Carriers with comprehensive DID solutions for Internet Telephone Service providers
            </p>
            <div className="clec-hero__stats">
              <div className="clec-hero__stat">
                <span className="clec-hero__stat-number">60+</span>
                <span className="clec-hero__stat-label">Countries</span>
              </div>
              <div className="clec-hero__stat">
                <span className="clec-hero__stat-number">API</span>
                <span className="clec-hero__stat-label">Integration</span>
              </div>
              <div className="clec-hero__stat">
                <span className="clec-hero__stat-number">Instant</span>
                <span className="clec-hero__stat-label">Deployment</span>
              </div>
            </div>
          </div>

          {/* CLEC Sells Section */}
          <div className="clec-sells clec-section">
            <div className="clec-sells__header">
              <div className="clec-sells__icon">
                <FaChartLine />
              </div>
              <h2 className="clec-sells__title">CLEC Sells Scenario</h2>
            </div>
            <div className="clec-sells__content">
              <p className="clec-sells__text">
                CLECs (competitive local exchange carriers) can operate as sellers of
                DID phone numbers on DIDX. If they are Internet telephone service
                providers, they can offer and sell incoming service to thousands of
                other providers who use DIDX, generating increased ARPU.
              </p>
              <div className="clec-sells__benefits">
                <div className="clec-sells__benefit">
                  <FaUsers className="clec-sells__benefit-icon" />
                  <span>Generate increased ARPU</span>
                </div>
                <div className="clec-sells__benefit">
                  <FaGlobe className="clec-sells__benefit-icon" />
                  <span>Reach thousands of providers</span>
                </div>
                <div className="clec-sells__benefit">
                  <FaCog className="clec-sells__benefit-icon" />
                  <span>Seamless integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* CLEC Buys Section */}
          <div className="clec-buys clec-section">
            <div className="clec-buys__header">
              <div className="clec-buys__icon">
                <FaPhone />
              </div>
              <h2 className="clec-buys__title">CLEC Buys Scenario</h2>
            </div>
            <div className="clec-buys__content">
              <p className="clec-buys__text">
                CLECs can also operate as buyers of USA and international DID phone
                numbers on DIDX and resell to the CLECs' direct user base. They can
                offer their own direct customer base both USA and international phone
                numbers in an instant without any investment, thereby not only
                satisfying current users but also increasing customer sales and
                retention.
              </p>
              <p className="clec-buys__text">
                DIDX provides full API/web services to integrate its database with the
                CLEC's front end engine, whether sharing the CLEC's DID phone numbers
                for sale on DIDX OR displaying all DIDX available numbers from 60+
                countries to the CLEC's customers on the CLEC's website. DIDX is not
                visible to the CLEC's customers. The CLEC's customer selects a number
                via the API on the CLEC's website or app, and it is instantly routed
                to the CLEC's switch and then delivered to its customer over the IP
                network. CLECs control the billing price of the phone number being
                sold to its customer. DIDX charges only the wholesale price to the
                CLEC.
              </p>
              <div className="clec-buys__features">
                <div className="clec-buys__feature">
                  <h3>API Integration</h3>
                  <p>Full API/web services for seamless database integration</p>
                </div>
                <div className="clec-buys__feature">
                  <h3>Instant Deployment</h3>
                  <p>Numbers are instantly routed to your switch and delivered to customers</p>
                </div>
                <div className="clec-buys__feature">
                  <h3>Pricing Control</h3>
                  <p>CLECs control billing prices while DIDX charges only wholesale rates</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="clec-cta clec-section">
            <h2 className="clec-cta__title">Ready to Transform Your CLEC Business?</h2>
            <p className="clec-cta__text">
              Join thousands of CLECs already leveraging DIDX for enhanced revenue and customer satisfaction
            </p>
            <div className="clec-cta__actions">
              <a href="/signup" className="clec-cta__btn clec-cta__btn--primary">
                Get Started Today
              </a>
              <a href="/contact" className="clec-cta__btn clec-cta__btn--secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
