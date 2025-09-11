import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Contact } from "../components/contact";
import BreadCrumb from "../components/BreadCrumbs";
import { FaInfoCircle, FaCheckCircle, FaEnvelope, FaFilePdf, FaYoutube, FaBook, FaArrowRight, FaCog, FaNetworkWired, FaPhone } from "react-icons/fa";

export default function BuyerSellerInteropPage() {
    const sectionRef = useRef();
    

    useGSAP(() => {
        gsap.from(sectionRef.current?.querySelectorAll("h3, p, a"), {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
        });
    }, []);

    return (
        <>
            {/* <HeroSection
                titleA={"Buyer And Seller Interoperability Process"}
                img={"/img/globe.png"}
            /> */}
            <BreadCrumb title={"Buyer And Seller Interoperability Process"} />

            <section className="interop-page">
                <div className="interop-container">
                    {/* Hero Section */}
                    <div ref={sectionRef} className="interop-hero interop-section">
                        <div className="interop-hero__content">
                            <h1 className="interop-hero__title">Buyer and Seller Interop Process</h1>
                            <p className="interop-hero__subtitle">
                                Seamless integration and testing between your network and DIDX for optimal business activation
                            </p>
                            <div className="interop-hero__stats">
                                <div className="interop-hero__stat">
                                    <span className="interop-hero__stat-number">500+</span>
                                    <span className="interop-hero__stat-label">Minimum Numbers</span>
                                </div>
                                <div className="interop-hero__stat">
                                    <span className="interop-hero__stat-number">24/7</span>
                                    <span className="interop-hero__stat-label">Support Available</span>
                                </div>
                                <div className="interop-hero__stat">
                                    <span className="interop-hero__stat-number">100%</span>
                                    <span className="interop-hero__stat-label">Network Testing</span>
                                </div>
                            </div>
                        </div>
                        <div className="interop-hero__visual">
                            <div className="interop-hero__image-container">
                                <img src="/img/communication.jpg" alt="Interop Process" className="interop-hero__image" />
                                <div className="interop-hero__floating-elements">
                                    <div className="interop-hero__floating-icon interop-hero__floating-icon--1">
                                        <FaNetworkWired />
                                    </div>
                                    <div className="interop-hero__floating-icon interop-hero__floating-icon--2">
                                        <FaCog />
                                    </div>
                                    <div className="interop-hero__floating-icon interop-hero__floating-icon--3">
                                        <FaPhone />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Process Steps */}
                    <div className="interop-process interop-section">
                        <h2 className="interop-process__title">How Interoperability Works</h2>
                        <div className="interop-process__steps">
                            <div className="interop-process__step">
                                <div className="interop-process__step-number">01</div>
                                <div className="interop-process__step-content">
                                    <div className="interop-process__step-icon">
                                        <FaNetworkWired />
                                    </div>
                                    <h3>Network Testing</h3>
                                    <p>Interop enables you and DIDX to test between your networks before activating business with DIDxchange.</p>
                                </div>
                            </div>
                            <div className="interop-process__step">
                                <div className="interop-process__step-number">02</div>
                                <div className="interop-process__step-content">
                                    <div className="interop-process__step-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <h3>Requirements Check</h3>
                                    <p>DIDX requires you to offer at least 500 numbers to the Exchange. Contact us if you have quantity concerns.</p>
                                </div>
                            </div>
                            <div className="interop-process__step">
                                <div className="interop-process__step-number">03</div>
                                <div className="interop-process__step-content">
                                    <div className="interop-process__step-icon">
                                        <FaPhone />
                                    </div>
                                    <h3>IVR Testing</h3>
                                    <p>Numbers are pointed to DIDX that plays an IVR when called. Verify they are alive and reachable.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="interop-contact interop-section">
                        <div className="interop-contact__content">
                            <h3>Need Help with Requirements?</h3>
                            <p>If you have a problem with the 500 number requirement, please contact us with the reason and we will try to take it with our management.</p>
                            <a href="mailto:care@didx.net" className="interop-contact__btn">
                                <FaEnvelope />
                                Contact Us at care@didx.net
                            </a>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="interop-resources interop-section">
                        <h2 className="interop-resources__title">Resources & Documentation</h2>
                        <div className="interop-resources__grid">
                            <a href="/member-manual.pdf" className="interop-resource">
                                <div className="interop-resource__icon">
                                    <FaFilePdf />
                                </div>
                                <div className="interop-resource__content">
                                    <h4>Member Manual</h4>
                                    <p>Browse the DIDX member manual in PDF format</p>
                                </div>
                                <FaArrowRight className="interop-resource__arrow" />
                            </a>

                            <a href="https://www.youtube.com/user/didexchange" target="_blank" rel="noopener" className="interop-resource">
                                <div className="interop-resource__icon">
                                    <FaYoutube />
                                </div>
                                <div className="interop-resource__content">
                                    <h4>Demo Videos</h4>
                                    <p>Watch the DIDX demo videos for guidance</p>
                                </div>
                                <FaArrowRight className="interop-resource__arrow" />
                            </a>

                            <a href="https://kb.didx.net" target="_blank" rel="noopener" className="interop-resource">
                                <div className="interop-resource__icon">
                                    <FaBook />
                                </div>
                                <div className="interop-resource__content">
                                    <h4>Knowledge Base</h4>
                                    <p>Search the knowledge base for detailed information</p>
                                </div>
                                <FaArrowRight className="interop-resource__arrow" />
                            </a>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="interop-cta interop-section">
                        <h2>Ready to Get Started?</h2>
                        <p>Learn more about our interoperability process and how it can benefit your business.</p>
                        <a href="/buyer-interop" className="interop-cta__btn">
                            Get More Information
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );

}
