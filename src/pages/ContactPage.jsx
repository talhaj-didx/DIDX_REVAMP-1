import React, { useRef } from 'react'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaSkype, 
  FaWhatsapp, 
  FaClock, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook 
} from 'react-icons/fa'
import Lottie from 'lottie-react'
import BreadCrumb from '../components/BreadCrumbs'
import { Contact } from '../components/contact'
import contactAnimation from '../lottie/Contact Us.json'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { useApi } from "../hooks/useApi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactUsSection } from '../services/dataServices'

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const getIconComponent = (iconName) => {
  const iconMap = {
    'FaMapMarkerAlt': FaMapMarkerAlt,
    'FaPhone': FaPhone,
    'FaEnvelope': FaEnvelope,
    'FaSkype': FaSkype,
    'FaWhatsapp': FaWhatsapp,
    'FaClock': FaClock,
    'FaLinkedin': FaLinkedin,
    'FaTwitter': FaTwitter,
    'FaFacebook': FaFacebook
  };
  
  return iconMap[iconName] || FaPhone; // Default to FaPhone if icon not found
};

const ContactPage = () => {
  const lottieRef = useRef(null)
  const rootRef = useRef();

  const { data, isLoading, error} = useApi({
    queryKey:"contact-us",
    queryFn: contactUsSection
  });

  const {data: contactsData} = data ?? {}
  
  
      useGSAP(() => {
          // Animate the main container
          gsap.from(rootRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 80%",
            },
          });
        });

  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="contact-page" ref={rootRef}>
        <div className="contact-container">
          {/* Header Section with Lottie Animation */}
          <div className="contact-header">
            <div className="contact-header__content">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-description">
                DIDX, Inc. offers a registered and patent-pending service, designed for enhanced security and reliability in telecom solutions.
              </p>
            </div>
            <div className="contact-header__animation">
              <Lottie
                lottieRef={lottieRef}
                animationData={contactAnimation}
                loop={true}
                autoplay={true}
                className="contact-lottie"
              />
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="contact-grid">
            {isLoading ? (
              <div className="contact-loading">
                <p>Loading contact information...</p>
              </div>
            ) : error ? (
              <div className="contact-error">
                <p>Error loading contact information. Please try again later.</p>
              </div>
            ) : contactsData && contactsData.length > 0 ? (
              contactsData.map((contact) => {
                const IconComponent = getIconComponent(contact.icon);
                
                // If contact has a link and it's not an address, make the whole card clickable
                if (contact.link && contact.type !== 'address') {
                  return (
                    <a 
                      key={contact.id} 
                      href={contact.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-card contact-card--clickable"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <div className={`contact-card__icon ${contact.iconClass || ''}`}>
                        <IconComponent />
                      </div>
                      <h3 className="contact-card__title">{contact.title}</h3>
                      <div className="contact-card__content">
                        {contact.content.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </a>
                  );
                }
                
                // For address and other non-clickable cards, render as div
                return (
                  <div key={contact.id} className="contact-card">
                    <div className={`contact-card__icon ${contact.iconClass || ''}`}>
                      <IconComponent />
                    </div>
                    <h3 className="contact-card__title">{contact.title}</h3>
                    <div className="contact-card__content">
                      {contact.content.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="contact-no-data">
                <p>No contact information available.</p>
              </div>
            )}
          </div>

          {/* Customer Service Notice */}
          <div className="contact-notice">
            <p className="contact-notice__text">
              Customer Service: Please login to your account, and click on Contact Us to make a trouble ticket.
            </p>
            <p className="contact-notice__text contact-notice__text--warning">
              We DO NOT provide phone support. (No Customer Service Provided without a Complaint Ticket)
            </p>
          </div>
        </div>
      </div>
      
      <Contact />
    </>
  )
}

export default ContactPage
