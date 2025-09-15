import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPhoneAlt, FaSearch, FaShieldAlt } from "react-icons/fa";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


export const metadata = {
    title: "Local Number Portability (LNP) Lookup",
};

export default function Lookup() {
    const formRef = useRef(null);
    


    // Animate form on mount
    useGSAP(() => {
        gsap.from(formRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        });
    });

    return (
        <>
            <BreadCrumb title={metadata.title} />

            <div className="lookup-section">
                <div className="lookup-container">
                    <div className="lookup-content" ref={formRef}>
                        {/* Header */}
                        <div className="lookup-header">
                            <div className="lookup-header__icon">
                                <FaPhoneAlt />
                            </div>
                            <h1 className="lookup-header__title">LNP Lookup</h1>
                            <p className="lookup-header__subtitle">
                                Enter a phone number to check its Local Number Portability status
                            </p>
                        </div>

                        {/* Form */}
                        <div className="lookup-form-container">
                            <div className="lookup-form__header">
                                <h2 className="lookup-form__title">Search Phone Number</h2>
                                <p className="lookup-form__subtitle">
                                    Get detailed information about any phone number's portability status
                                </p>
                            </div>

                            <form className="lookup-form" noValidate>
                                <div className="lookup-form__fields">
                                    {/* DID Field */}
                                    <div className="lookup-field">
                                        <label className="lookup-field__label">DID Number *</label>
                                        <div className="lookup-field__icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <input
                                            className="lookup-field__input"
                                            type="tel"
                                            name="did"
                                            placeholder="+1-555-222-5566"
                                            required
                                        />
                                        <p className="lookup-field__help">
                                            Enter the full number with country code
                                        </p>
                                    </div>

                                    {/* Security Notice */}
                                    <div className="lookup-security">
                                        <label className="lookup-security__label">
                                            <FaShieldAlt className="lookup-security__icon" />
                                            Security Notice
                                        </label>
                                        <p className="lookup-security__text">
                                            Your search is secure and confidential. We do not store or share your search queries.
                                        </p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="lookup-form__submit">
                                    <FaSearch className="lookup-form__submit-icon" />
                                    Search Number
                                </button>
                            </form>

                            {/* Info */}
                            <div className="lookup-form__info">
                                <p className="lookup-form__info-text">
                                    This lookup service helps you verify the portability status of phone numbers. 
                                    Results may take a few moments to process.
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
