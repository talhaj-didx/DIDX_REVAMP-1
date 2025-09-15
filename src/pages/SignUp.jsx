import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { 
    FaUser, 
    FaEnvelope, 
    FaBuilding, 
    FaGlobe, 
    FaPhone, 
    FaShieldAlt,
    FaUserPlus,
    FaCheck
} from "react-icons/fa";
import countries from "../data/countries.json";

import ReferralCodeFromURL from "../components/ReferralCodeFromURL";
import PhoneInput from "../components/phoneInput";
import { Contact } from "../components/contact";
import BreadCrumb from "../components/BreadCrumbs";

export default function Signup() {
    const formRef = useRef(null);
    

    useEffect(() => {
        const loadReCaptcha = () => {
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };
        loadReCaptcha();
    }, []);

    useGSAP(() => {
        gsap.from(formRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    });

    return (
        <> 
          <BreadCrumb title={"SignUp"}/>
          <div className="signup-section">
            <div className="signup-container">
              <div className="signup-content" ref={formRef}>
                {/* Header */}
                <div className="signup-header">
                  <div className="signup-header__icon">
                    <FaUserPlus />
                  </div>
                  <h1 className="signup-header__title">Join DIDX Today</h1>
                  <p className="signup-header__subtitle">
                    Create your account and start trading DIDs on our platform
                  </p>
                </div>

                {/* Form */}
                <div className="signup-form-container">
                  <div className="signup-form__header">
                    <h2 className="signup-form__title">Sign up to create your account</h2>
                    <p className="signup-form__subtitle">
                      Or{" "}
                      <Link to="/login-page" className="signup-form__link">
                        login if you have an account
                      </Link>
                    </p>
                  </div>

                  <form
                    className="signup-form"
                    action="https://admin.didx.net/signup/NewSignupConfirm.php"
                    method="POST"
                    noValidate
                  >
                    <div className="signup-form__fields">
                      {/* Personal Information Section */}
                      <div className="signup-form__section">
                        <h3 className="signup-form__section-title">
                          <FaUser className="signup-form__section-icon" />
                          Personal Information
                        </h3>
                        
                        <div className="signup-form__row">
                          {/* First Name */}
                          <div className="signup-field">
                            <label className="signup-field__label">First Name *</label>
                            <div className="signup-field__icon">
                              <FaUser />
                            </div>
                            <input
                              className="signup-field__input"
                              type="text"
                              name="CFName"
                              placeholder="John"
                              required
                            />
                          </div>

                          {/* Last Name */}
                          <div className="signup-field">
                            <label className="signup-field__label">Last Name *</label>
                            <div className="signup-field__icon">
                              <FaUser />
                            </div>
                            <input
                              className="signup-field__input"
                              type="text"
                              name="CLName"
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="signup-field">
                          <label className="signup-field__label">Email *</label>
                          <div className="signup-field__icon">
                            <FaEnvelope />
                          </div>
                          <input
                            className="signup-field__input"
                            type="email"
                            name="CEmail"
                            placeholder="business emails only"
                            required
                          />
                        </div>
                      </div>

                      {/* Business Information Section */}
                      <div className="signup-form__section">
                        <h3 className="signup-form__section-title">
                          <FaBuilding className="signup-form__section-icon" />
                          Business Information
                        </h3>

                        {/* I want to */}
                        <div className="signup-field">
                          <label className="signup-field__label">I want to *</label>
                          <div className="signup-field__icon">
                            <FaBuilding />
                          </div>
                          <select
                            className="signup-field__select"
                            name="custype"
                            defaultValue="0"
                            required
                          >
                            <option value="0">Buy DIDS on DIDX</option>
                            <option value="1">Sell DIDS on DIDX</option>
                          </select>
                        </div>

                        {/* Company Name */}
                        <div className="signup-field">
                          <label className="signup-field__label">Company Name *</label>
                          <div className="signup-field__icon">
                            <FaBuilding />
                          </div>
                          <input
                            className="signup-field__input"
                            type="text"
                            name="CCompany"
                            placeholder="John Cyber Inc"
                            required
                          />
                        </div>

                        {/* Company Website */}
                        <div className="signup-field">
                          <label className="signup-field__label">Company Website</label>
                          <div className="signup-field__input-group">
                            <span className="signup-field__prefix">https://</span>
                            <input
                              className="signup-field__input"
                              type="text"
                              name="company-website"
                              placeholder="john-cyber.com"
                              style={{ paddingLeft: '0.5rem', border: 'none', borderRadius: '0 12px 12px 0' }}
                            />
                          </div>
                        </div>

                        {/* Country */}
                        <div className="signup-field">
                          <label className="signup-field__label">Country *</label>
                          <div className="signup-field__icon">
                            <FaGlobe />
                          </div>
                          <select
                            className="signup-field__select"
                            name="CCountry"
                            defaultValue="AF"
                            required
                          >
                            {countries.map((country) => (
                              <option key={country.iso_code} value={country.iso_code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Phone Inputs */}
                        <PhoneInput title="Company Phone" name="HTel1" />
                        <PhoneInput title="Personal Phone" name="mobileno" />

                        {/* Referral Code */}
                        <ReferralCodeFromURL />
                      </div>

                      {/* Divider */}
                      <div className="signup-form__divider">
                        Terms & Conditions
                      </div>

                      {/* Checkboxes */}
                      <div className="signup-checkboxes">
                        <div className="signup-checkbox">
                          <input type="checkbox" name="agree1" required />
                          <FaCheck className="signup-checkbox__mark" />
                          <p className="signup-checkbox__text">
                            I am or will be an Internet telephone service provider.
                          </p>
                        </div>
                        
                        <div className="signup-checkbox">
                          <input type="checkbox" name="agree2" required />
                          <FaCheck className="signup-checkbox__mark" />
                          <p className="signup-checkbox__text">
                            I have read the{" "}
                            <Link to="/terms" className="signup-checkbox__link">
                              terms
                            </Link>{" "}
                            of service and fully agree to this.
                          </p>
                        </div>
                      </div>

                      {/* Captcha */}
                      <div className="signup-captcha">
                        <label className="signup-captcha__label">
                          <FaShieldAlt className="signup-captcha__icon" />
                          Captcha *
                        </label>
                        <div className="signup-captcha__container">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="signup-form__submit">
                        <FaUserPlus className="signup-form__submit-icon" />
                        Create Account
                      </button>
                    </div>
                  </form>

                  {/* Info */}
                  <div className="signup-form__info">
                    <p className="signup-form__info-text">
                      By creating an account, you agree to our{" "}
                      <Link to="/terms" className="signup-form__info-link">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="signup-form__info-link">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </>
    );
}
