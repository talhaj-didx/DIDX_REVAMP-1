import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaUser, FaLock, FaShieldAlt } from "react-icons/fa";

import { Contact } from "../components/contact";
import BreadCrumb from "../components/BreadCrumbs";

export default function Login() {
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
      <BreadCrumb title={"Login"}/>
      <div className="login-section">
        <div className="login-container">
          <div className="login-content" ref={formRef}>
            {/* Header */}
            <div className="login-header">
              <div className="login-header__icon">
                <FaUser />
              </div>
              <h1 className="login-header__title">Welcome Back</h1>
              <p className="login-header__subtitle">
                Sign in to your DIDX account to access your dashboard
              </p>
            </div>

            {/* Form */}
            <div className="login-form-container">
              <div className="login-form__header">
                <h2 className="login-form__title">Login to your account</h2>
                <p className="login-form__subtitle">
                  Or{" "}
                  <Link to="/signup" className="login-form__link">
                    signup if you don't have an account
                  </Link>
                </p>
              </div>

              <form
                className="login-form"
                action="https://admin.didx.net/LoginAction.php"
                method="POST"
                noValidate
              >
                <div className="login-form__fields">
                  {/* UID Field */}
                  <div className="login-field">
                    <label className="login-field__label">UID *</label>
                    <div className="login-field__icon">
                      <FaUser />
                    </div>
                    <input
                      className="login-field__input"
                      type="text"
                      name="UID"
                      placeholder="Enter your UID"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="login-field">
                    <label className="login-field__label">Password *</label>
                    <div className="login-field__icon">
                      <FaLock />
                    </div>
                    <input
                      className="login-field__input"
                      type="password"
                      name="Pass"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="login-form__forgot">
                  <Link to="/reset-password" className="login-form__forgot-link">
                    Forget Password?
                  </Link>
                </div>

                {/* Divider */}
                <div className="login-form__divider">
                  Security Verification
                </div>

                {/* Captcha */}
                <div className="login-captcha">
                  <label className="login-captcha__label">
                    <FaShieldAlt className="login-captcha__icon" />
                    Captcha *
                  </label>
                  <div className="login-captcha__container">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="login-form__submit">
                  <FaUser className="login-form__submit-icon" />
                  Sign In
                </button>
              </form>

              {/* Info */}
              <div className="login-form__info">
                <p className="login-form__info-text">
                  By signing in, you agree to our{" "}
                  <Link to="/terms" className="login-form__info-link">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="login-form__info-link">
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
