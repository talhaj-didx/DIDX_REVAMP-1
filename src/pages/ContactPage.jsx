import React, { useRef } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaSkype, FaWhatsapp } from 'react-icons/fa'
import Lottie from 'lottie-react'
import BreadCrumb from '../components/BreadCrumbs'
import { Contact } from '../components/contact'
import contactAnimation from '../lottie/Contact Us.json'

const ContactPage = () => {
  const lottieRef = useRef(null)

  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="contact-page">
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
            {/* Address */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-card__title">Address</h3>
              <div className="contact-card__content">
                <p>1309 Coffeen Avenue STE</p>
                <p>1200 Sheridan, Wyoming</p>
                <p>82801</p>
              </div>
            </div>

            {/* USA Customer Service */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <FaPhone />
              </div>
              <h3 className="contact-card__title">USA Customer Service</h3>
              <div className="contact-card__content">
                <p>(800) 518-0092</p>
              </div>
            </div>

            {/* Sales Email */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-card__title">Sales Email</h3>
              <div className="contact-card__content">
                <p>sales@didx.net</p>
              </div>
            </div>

            {/* Sales Skype */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--skype">
                <FaSkype />
              </div>
              <h3 className="contact-card__title">Sales Skype</h3>
              <div className="contact-card__content">
                <p>salesdidx</p>
              </div>
            </div>

            {/* Sales Whatsapp */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--whatsapp">
                <FaWhatsapp />
              </div>
              <h3 className="contact-card__title">Sales Whatsapp</h3>
              <div className="contact-card__content">
                <p>(800) 518-0092</p>
              </div>
            </div>

            {/* NOC Whatsapp */}
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--whatsapp">
                <FaWhatsapp />
              </div>
              <h3 className="contact-card__title">NOC Whatsapp</h3>
              <div className="contact-card__content">
                <p>(800) 518-0092</p>
              </div>
            </div>
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
