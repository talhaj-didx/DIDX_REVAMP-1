import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaKey, FaShieldAlt } from 'react-icons/fa';
import BreadCrumb from '../components/BreadCrumbs';
import { Contact } from '../components/contact';
import { useResetPasswordForm } from '../hooks/useResetPasswordForm';

const ResetPassword = () => {
  const formRef = useRef(null);
  const {
    formData,
    errors,
    isSubmitting,
    captchaVerified,
    handleInputChange,
    handleSubmit
  } = useResetPasswordForm();


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
                onSubmit={handleSubmit}
              >
                <div className="reset-password-form__fields">
                  {/* UID Field */}
                  <div className="reset-password-field">
                    <label className="reset-password-field__label">UID *</label>
                    <input
                      className={`reset-password-field__input ${errors.UID ? 'reset-password-field__input--error' : ''}`}
                      type="text"
                      name="UID"
                      value={formData.UID}
                      onChange={handleInputChange}
                      placeholder="Enter your UID"
                    />
                    {errors.UID && (
                      <span className="reset-password-field__error">{errors.UID}</span>
                    )}
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
                        data-callback="onCaptchaChangeReset"
                      />
                    </div>
                    {errors.captcha && (
                      <span className="reset-password-field__error">{errors.captcha}</span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="reset-password-form__submit"
                  disabled={isSubmitting || !formData.UID.trim() || !captchaVerified}
                >
                  <FaKey className="reset-password-form__submit-icon" />
                  {isSubmitting ? "Sending..." : "Get email"}
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
