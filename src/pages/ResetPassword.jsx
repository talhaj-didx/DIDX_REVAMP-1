import React, { useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaKey, FaShieldAlt } from 'react-icons/fa';
import BreadCrumb from '../components/BreadCrumbs';
import { Contact } from '../components/contact';

const ResetPassword = () => {
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
      <BreadCrumb title="Reset Password" />
      
      <div className="reset-password-page">
        <div className="reset-password-container">
          <div className="reset-password-content" ref={formRef}>
            {/* Header */}
            <div className="reset-password-header">
              <div className="reset-password-header__icon">
                <FaKey />
              </div>
              <h1 className="reset-password-header__title">Reset your password</h1>
              <p className="reset-password-header__subtitle">
                Enter your UID and complete the captcha to receive password reset instructions via email.
              </p>
            </div>

            {/* Form */}
            <div className="reset-password-form-container">
              <form
                className="reset-password-form"
                action="https://admin.didx.net/ResetPasswordAction.php"
                method="POST"
                noValidate
              >
                <div className="reset-password-form__fields">
                  {/* UID Field */}
                  <div className="reset-password-field">
                    <label className="reset-password-field__label">UID *</label>
                    <input
                      className="reset-password-field__input"
                      type="text"
                      name="UID"
                      placeholder="Enter your UID"
                      required
                    />
                  </div>

                  {/* Captcha Field */}
                  <div className="reset-password-field">
                    <label className="reset-password-field__label">
                      <FaShieldAlt className="reset-password-field__icon" />
                      Captcha *
                    </label>
                    <div className="reset-password-field__captcha">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="reset-password-form__submit">
                  <FaKey className="reset-password-form__submit-icon" />
                  Get email
                </button>
              </form>

              {/* Additional Info */}
              <div className="reset-password-info">
                <p className="reset-password-info__text">
                  If you don't receive an email within a few minutes, please check your spam folder or contact support.
                </p>
                <div className="reset-password-info__links">
                  <a href="/login-page" className="reset-password-info__link">
                    Back to Login
                  </a>
                  <a href="/signup" className="reset-password-info__link">
                    Create New Account
                  </a>
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

export default ResetPassword;
