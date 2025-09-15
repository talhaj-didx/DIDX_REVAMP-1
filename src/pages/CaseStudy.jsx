import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// react-icons
import {
    FaBuilding,
    FaPhoneAlt,
    FaGlobe,
    FaFlag,
    FaNetworkWired,
    FaVoicemail,
    FaChartLine,
    FaAward,
    FaUsers,
} from "react-icons/fa";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


export default function CaseStudy() {
    const sectionRef = useRef(null);
    

    // Animate on mount
    useGSAP(() => {
        gsap.from(sectionRef.current.querySelectorAll(".case-study-item"), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            // stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });
    });

    return (
        <>
            <BreadCrumb title="DIDX Case Study" />
            
            <div className="case-study-page" ref={sectionRef}>
                <div className="case-study-container">
                    {/* Hero Section */}
                    <div className="case-study-hero">
                        <div className="case-study-hero__icon">
                            <FaChartLine />
                        </div>
                        <h1 className="case-study-hero__title">DIDX Case Studies</h1>
                        <p className="case-study-hero__subtitle">
                            Real-world success stories showcasing how businesses leverage DIDX for global communication solutions
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="case-study-content">
                        <div className="case-study-intro">
                            <h2 className="case-study-intro__title">Success Stories & Use Cases</h2>
                            <p className="case-study-intro__text">
                                Discover how companies worldwide have transformed their communication infrastructure using DIDX's global DID marketplace.
                            </p>
                        </div>

                        {/* Case Study: SACS */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaBuilding />
                                </div>
                                <h3 className="case-study-item__company">SACS INTERNATIONAL</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                Case Study: Obama and DIDX Members Leverage the Blackberry
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    SACS is an international steel trading company with 14 locations worldwide and 200 business clients. The key necessity is to increase their global presence. They already had a Cisco unified communications backbone for their IP PBX with integration of RIM (Research in Motion) Blackberry MVS (Mobility Voice Suite). The One Number Reach enables them to have one phone number ring at the user's desk phone and the Blackberry simultaneously. With a Blackberry connected to the PBX plus a laptop and data card in the hands of each of their global sales staff, all can access and use the company's CRM and ERP systems.
                                </p>
                                <blockquote className="case-study-item__quote">
                                    "DIDX has been a great asset in accessing global DIDs for a virtual presence. We've been assured of quality by choosing DIDs from DIDX sellers with vendor rating of higher rating 5-8. We're also able to control those DIDs from one central location, very convenient," states Omar Ali Chohan, SACS' CFO and Vice President. "DIDX has truly assisted in exponential growth of the company."
                                </blockquote>
                            </div>
                        </div>

                        {/* Case Study: CALLWITHUS */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaPhoneAlt />
                                </div>
                                <h3 className="case-study-item__company">CALL WITH US</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                Callwithus and DIDXchange Case Study Wins Internet Telephony Excellence 2007
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    Callwithus, headquartered in New Jersey, USA, began operation in late 2006, with a plan for a more user-friendly Internet Protocol-based communications service than the ones that its director Sergey Okhapkin had experience with. It established itself as a user-friendly choice for consumers and small businesses by using every day language on its website that could be easily understood. To truly set itself apart from the many VoIP company start-ups fiercely competing for business, it needed DID direct inward dialing local phone numbers from all over the world for its extremely diverse set of customers.
                                </p>
                            </div>
                        </div>

                        {/* Case Study: GLOBALVON */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaGlobe />
                                </div>
                                <h3 className="case-study-item__company">GLOBALVON</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                Case Study: Broadband Solution Communication Empowered by DID Number Peering
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    Pensacola, FL, September 22, 2006 –(PR.com)– (This case study won the Internet Telephony Excellence Award for 2006) BroadBand Solution Communication's end-users have a huge appetite for DID's (phone numbers) both local and international. An example of a BSCOMM end-user: Company Z needs a Pakistan DID to ring over SIP to their English-speaking appointment takers. They need a Miami DID to ring their Spanish-speaking appointment takers. BSCOMM soon discovers the complicated interop and interconnect agreements of DID providers. Typically, a healthy deposit in the range of thousands is required. Minimum monthly DID purchase is huge. Picture the VoIP newcomer with effective and exciting marketing and customer service strategies, catering to a niche market with few funds to invest. The average DID setup is $16 and monthly fee $6.50 for even a USA number. BSCOMM experiences demands from its DID vendor for ever increasing purchase and length of DID setup period. The company needed just one "Pakistan DID" and received demand for a minimum purchase of 100 at $40 each plus the initial deposit and monthly minimum DID and MOU requirement. Just one of several scenarios occurring within one 24 hour period. Impossible!
                                </p>
                            </div>
                        </div>

                        {/* Case Study: Russian Company */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaFlag />
                                </div>
                                <h3 className="case-study-item__company">RUSSIAN COMPANY LLC</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                Russian Dotcom Success Story, The Crisis That Stimulated Demand for SIP Trunking Services
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    In 1958, American Express (News – Alert) opened its representative office in Moscow. Thirty-three years later – in 1991 – the first Internet-enabled terminal was installed in Russia, powered by a dialup link to Helsinki, Finland, to put them online. Post-1998 saw tremendous growth in broadband access: from 64 kbit ADSL with metered bandwidth in 2000, to 25 Mbit symmetrical FTTH services in 2008.
                                </p>
                            </div>
                        </div>

                        {/* Case Study: REVE SYSTEMS */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaNetworkWired />
                                </div>
                                <h3 className="case-study-item__company">REVE SYSTEMS</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                Reve Systems and DIDX Partner to Deliver International Phone Numbers
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    Wholesale DID phone number exchange player Super Technologies has partnered with Reve Systems (News – Alert) to enable local international phone numbers from 55 nations on the iTel Mobile Dialer.
                                </p>
                            </div>
                        </div>

                        {/* Case Study: VOIP SWITCH */}
                        <div className="case-study-item">
                            <div className="case-study-item__header">
                                <div className="case-study-item__icon">
                                    <FaVoicemail />
                                </div>
                                <h3 className="case-study-item__company">VOIP SWITCH</h3>
                            </div>
                            <h4 className="case-study-item__title">
                                VoipSWITCH Global Presence with DIDX
                            </h4>
                            <div className="case-study-item__content">
                                <p>
                                    VoipSWITCH is known as a future-thinking, high quality soft switch, IP PBX and mobile voip application provider. Their customer is excellent and has a great reputation worldwide. See them mixing with their clients and suppliers at conferences worldwide from Dubai to Singapore to Barcelona to Hannover to Los Angeles. The company needed to satisfy its clients increasing demand for global presence and chose DIDX to make that happen.
                                </p>
                                <div className="case-study-item__link">
                                    <a
                                        href="https://www.tmcnet.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="case-study-item__external-link"
                                    >
                                        See more on TMCNET
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
}
