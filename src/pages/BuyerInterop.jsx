import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";
import { FaCog, FaCheckCircle, FaPhone, FaFileAlt, FaUserCheck } from "react-icons/fa";

export default function BuyerInterop() {
  const contentRef = useRef();

  useGSAP(() => {
    gsap.from(contentRef.current.querySelectorAll("h2, h3, p, a"), {
      opacity: 0,
      y: 20,
      // stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <BreadCrumb title="Buyer Interoperability Process" />
      
      <div className="buyer-interop-page">
        <div className="buyer-interop-container">
          {/* Hero Section */}
          <div className="case-study-hero">
            <div className="case-study-hero__icon">
              <FaCog />
            </div>
            <h1 className="case-study-hero__title">Buyer Interoperability Process</h1>
            <p className="case-study-hero__subtitle">
              Complete guide to testing and activating your DIDX account for seamless global communication
            </p>
          </div>

        {/* Main Content */}
          <div className="buyer-interop-content" ref={contentRef}>
            {/* Introduction Section */}
            <div className="buyer-interop-section">
              <div className="buyer-interop-section__header">
                <div className="buyer-interop-section__icon">
                  <FaCheckCircle />
                </div>
                <h2 className="buyer-interop-section__title">DIDX Interoperability Test</h2>
              </div>
              <div className="buyer-interop-section__content">
                <p className="buyer-interop-section__text">
            Interop (interoperability) enables you to test between your and DIDX
            networks before activating business with DIDxchange.
                </p>
                <p className="buyer-interop-section__text">
            See how DIDX works now; we offer each DIDX member 2 free DID numbers,
            one UK DID and one USA DID, temporarily for testing.
                </p>
                <p className="buyer-interop-section__text">
            These DIDs test successfully. They are pointed at{" "}
                  <a href="#" className="buyer-interop-section__link">
              radio@us1.didx.net
                  </a>{" "}
            that plays an IVR when called. Check the numbers by calling them to
            see they are alive and reachable from your telephone.
                </p>
                <p className="buyer-interop-section__text">
            Browse a copy of the DIDX member{" "}
                  <a href="/pdf/member-manual.pdf" className="buyer-interop-section__link">
              manual
                  </a>{" "}
            in PDF. Watch the DIDX demo{" "}
                  <a
              href="https://www.youtube.com/user/didexchange"
              target="_blank"
              rel="noopener"
                    className="buyer-interop-section__link"
            >
              videos
                  </a>{" "}
            and search the{" "}
                  <a
              href="https://kb.didx.net"
              target="_blank"
              rel="noopener"
                    className="buyer-interop-section__link"
            >
              knowledge base
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="buyer-interop-section">
              <div className="buyer-interop-section__header">
                <div className="buyer-interop-section__icon">
                  <FaPhone />
                </div>
                <h2 className="buyer-interop-section__title">Requirements</h2>
              </div>
              <div className="buyer-interop-section__content">
                <div className="buyer-interop-requirements">
                  <div className="buyer-interop-requirement">
                    <span className="buyer-interop-requirement__number">1</span>
                    <p className="buyer-interop-requirement__text">A SIP or IAX2 server / Switch.</p>
                  </div>
                  <div className="buyer-interop-requirement">
                    <span className="buyer-interop-requirement__number">2</span>
                    <p className="buyer-interop-requirement__text">A SIP or IAX2 account working on your desktop or IP Soft Phone.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Overview Section */}
            <div className="buyer-interop-section">
              <div className="buyer-interop-section__header">
                <div className="buyer-interop-section__icon">
                  <FaFileAlt />
                </div>
                <h2 className="buyer-interop-section__title">Summary Of Testing Steps</h2>
              </div>
              <div className="buyer-interop-section__content">
                <p className="buyer-interop-section__text">
            Interop Test process consists of 5-steps.
                </p>
                <div className="buyer-interop-steps-overview">
                  <div className="buyer-interop-step-overview">
                    <span className="buyer-interop-step-overview__number">1</span>
                    <p className="buyer-interop-step-overview__text">Get the FREE numbers.</p>
                  </div>
                  <div className="buyer-interop-step-overview">
                    <span className="buyer-interop-step-overview__number">2</span>
                    <p className="buyer-interop-step-overview__text">Check the numbers on your server.</p>
                  </div>
                  <div className="buyer-interop-step-overview">
                    <span className="buyer-interop-step-overview__number">3</span>
                    <p className="buyer-interop-step-overview__text">DTMF and ECHO Test.</p>
                  </div>
                  <div className="buyer-interop-step-overview">
                    <span className="buyer-interop-step-overview__number">4</span>
                    <p className="buyer-interop-step-overview__text">Fax or scan and Upload the DIDX service agreement and credit card agreement with copies of related documents.</p>
                  </div>
                  <div className="buyer-interop-step-overview">
                    <span className="buyer-interop-step-overview__number">5</span>
                    <p className="buyer-interop-step-overview__text">Activation call and then your account is activated. See below more details of each step.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Step 1 */}
            <div className="buyer-interop-step">
              <div className="buyer-interop-step__header">
                <div className="buyer-interop-step__number">01</div>
                <div className="buyer-interop-step__content">
                  <h3 className="buyer-interop-step__title">Getting Free Numbers</h3>
                  <p className="buyer-interop-step__aim">Aim: To learn the process to buy numbers via DIDX.</p>
                </div>
              </div>
              <div className="buyer-interop-step__details">
                <div className="buyer-interop-step__instructions">
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">A</span>
                    <p className="buyer-interop-instruction__text">Login to your account.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">B</span>
                    <p className="buyer-interop-instruction__text">Click on Tool Box button on the left Menu Bar.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">C</span>
                    <p className="buyer-interop-instruction__text">Click on Get Free DID button.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">D</span>
                    <p className="buyer-interop-instruction__text">Two DIDs will then be allocated on your account.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">E</span>
                    <p className="buyer-interop-instruction__text">Click on My Purchased DIDs button in the left panel to see the two free numbers.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Step 2 */}
            <div className="buyer-interop-step">
              <div className="buyer-interop-step__header">
                <div className="buyer-interop-step__number">02</div>
                <div className="buyer-interop-step__content">
                  <h3 className="buyer-interop-step__title">Checking the free phone numbers on your server</h3>
                  <p className="buyer-interop-step__aim">AIM: To make sure DIDX numbers are working with your SIP/IAX Server.</p>
                </div>
              </div>
              <div className="buyer-interop-step__details">
                <div className="buyer-interop-step__instructions">
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">A</span>
                    <p className="buyer-interop-instruction__text">Click on My Purchased Numbers.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">B</span>
                    <p className="buyer-interop-instruction__text">See your free DID's listed.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">C</span>
                    <p className="buyer-interop-instruction__text">Call the numbers. Hear a music or IVR sound. The demonstrates the numbers work fine.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">D</span>
                    <p className="buyer-interop-instruction__text">
                      Click in the row of the first number where it says{" "}
                      <a href="#" className="buyer-interop-section__link">radio@us1.didx.net</a>{" "}
                      Re-point it to the SIP or IAX2 address of your server.
                    </p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">E</span>
                    <p className="buyer-interop-instruction__text">
                      If you have a firewall, please allow all of our IPs before moving to the next step. You can find the IPs{" "}
                      <a href="/asterisk" className="buyer-interop-section__link">here</a>.
                    </p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">F</span>
                    <p className="buyer-interop-instruction__text">Call the phone number and talk on it for 5 minutes. Then, follow points A and F. under this Step 2 before going to point G.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">G</span>
                    <p className="buyer-interop-instruction__text">Keep at least one of the FREE DID pointed to your office SIP/IAX system, so we can make test call on it and reach you if needed.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Step 3 */}
            <div className="buyer-interop-step">
              <div className="buyer-interop-step__header">
                <div className="buyer-interop-step__number">03</div>
                <div className="buyer-interop-step__content">
                  <h3 className="buyer-interop-step__title">DTMF and Echo Test</h3>
                  <p className="buyer-interop-step__aim">AIM: To make sure that DTMF works on DIDX phone numbers for you.</p>
                </div>
              </div>
              <div className="buyer-interop-step__details">
                <div className="buyer-interop-step__instructions">
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">A</span>
                    <p className="buyer-interop-instruction__text">
                      Point the DID's on{" "}
                      <a href="#" className="buyer-interop-section__link">dtmftest@us1.didx.net</a>
                    </p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">B</span>
                    <p className="buyer-interop-instruction__text">Call your free DID numbers. Hear the greeting, which will explain the reason for this test, followed by a beep.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">C</span>
                    <p className="buyer-interop-instruction__text">Use the keypad of your touch tone phone to dial each number. You will hear the IVR repeat each number you press, if the DTMF is passing correctly on the DID number.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Step 4 */}
            <div className="buyer-interop-step">
              <div className="buyer-interop-step__header">
                <div className="buyer-interop-step__number">04</div>
                <div className="buyer-interop-step__content">
                  <h3 className="buyer-interop-step__title">Documentation</h3>
                </div>
              </div>
              <div className="buyer-interop-step__details">
                <div className="buyer-interop-step__instructions">
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">A</span>
                    <p className="buyer-interop-instruction__text">
                      Download the Service Agreement.{" "}
                      <a
              target="_blank"
              href="/pdf/terms-of-service-agreement.pdf"
                        className="buyer-interop-section__link buyer-interop-section__link--bold"
            >
              Click Here to Download Newest Version to Buy
                      </a>
                    </p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">B</span>
                    <p className="buyer-interop-instruction__text">Login to your DIDX account, and click on Profile button on the left menu bar.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">C</span>
                    <p className="buyer-interop-instruction__text">Upload the agreement, filled, signed, and initialed on each page, via the Upload document section in the PROFILE section of your DIDX account.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Step 5 */}
            <div className="buyer-interop-step">
              <div className="buyer-interop-step__header">
                <div className="buyer-interop-step__number">05</div>
                <div className="buyer-interop-step__content">
                  <h3 className="buyer-interop-step__title">Activation Call</h3>
                  <p className="buyer-interop-step__aim">AIM: To make sure you understand how DIDX works and to participate in a brief survey.</p>
                </div>
              </div>
              <div className="buyer-interop-step__details">
                <div className="buyer-interop-step__instructions">
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">A</span>
                    <p className="buyer-interop-instruction__text">Make sure to complete the profile section of your DIDx.net account.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">B</span>
                    <p className="buyer-interop-instruction__text">Use the Contact Us/Email Us button under your account and let us know your phone number and convenient dates/times for us to call you to get your account activated.</p>
                  </div>
                  <div className="buyer-interop-instruction">
                    <span className="buyer-interop-instruction__letter">C</span>
                    <p className="buyer-interop-instruction__text">Be sure to include your DIDX account number in your message. We will verify your account, discuss your DID needs and activate your account.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Notes */}
            <div className="buyer-interop-section">
              <div className="buyer-interop-section__content">
                <p className="buyer-interop-section__text">
            As an active member of DIDX, you can{" "}
                  <a href="/contact" className="buyer-interop-section__link">
              contact us
                  </a>{" "}
            assistance regarding buying and/or selling DID phone numbers on DIDX.
                </p>
                <p className="buyer-interop-section__text">
            Your account should now be active, and you will be able to purchase
            and sell DIDs from the DIDX network.
                </p>
                <p className="buyer-interop-section__text buyer-interop-section__text--highlight">
              Welcome aboard happy trading.
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

