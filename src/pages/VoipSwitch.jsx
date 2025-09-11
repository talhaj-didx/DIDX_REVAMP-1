import React, { useRef } from "react";
import BreadCrumb from "../components/BreadCrumbs";
import { Link as RouterLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaServer, FaGlobe, FaCog, FaCheckCircle, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Contact } from "../components/contact";


export const metadata = {
  title: "VOIP Switch | DIDX",
};

const headings = ["*IP Addresses", "*DNS"];

const values = [
  ["98.101.50.4", "sip4.didx.net"],
  ["67.228.182.162", "sip8.didx.net"],
  ["66.228.114.228", "sip10.didx.net"],
  ["159.203.27.198", "ca.didx.net"],
  ["188.166.168.173", "eu2.didx.net"],
  ["46.101.80.13", "eu3.didx.net"],
  ["198.199.87.53", "us1.didx.net"],
  ["162.243.107.173", "us2.didx.net"],
];

export default function VoipSwitch() {
  const sectionRef = useRef();
  

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".voip-section"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }
  });

  return (
    <>
      <BreadCrumb title={metadata.title} />
      
      <section className="voip-page">
        <div className="voip-container">
          <div ref={sectionRef} className="voip-content">
            
            {/* Hero Section */}
            <div className="voip-hero voip-section">
              <div className="voip-hero__icon">
                <FaServer />
              </div>
              <h1 className="voip-hero__title">
                How to use DID from DIDX on{" "}
                <a
                  href="https://voipswitch.com"
                  target="_blank"
                  rel="noopener"
                  className="voip-hero__link"
                >
                  voipswitch.com
                  <FaExternalLinkAlt />
                </a>
              </h1>
              <p className="voip-hero__subtitle">
                Complete integration guide for VoipSwitch and DIDX DID numbers
              </p>
            </div>

            {/* Introduction */}
            <div className="voip-section">
              <div className="voip-text-block">
                <p className="voip-text">
                  This has been provided to us by voipswitch support team.
                </p>
                <p className="voip-text">
                  In 'GW clients' menu you need to create a new client, with the following Parameters:
                </p>
                <p className="voip-text">
                  In 'login' and 'password' you put whatever you want.
                </p>
                <p className="voip-text">
                  In 'IP numbers' you need to add all the didx.net IP addresses.
                </p>
              </div>
            </div>

            {/* IP Addresses Section */}
            <div className="voip-section">
              <div className="voip-section__header">
                <div className="voip-section__icon">
                  <FaGlobe />
                </div>
                <h2 className="voip-section__title">Our IP addresses are:</h2>
              </div>

              <div className="voip-table-container">
                <table className="voip-table">
                  <thead>
                    <tr>
                      {headings.map((head) => (
                        <th key={head} className="voip-table__header">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {values.map((row, i) => (
                      <tr key={i} className={`voip-table__row ${i % 2 === 0 ? 'voip-table__row--even' : 'voip-table__row--odd'}`}>
                        {row.map((value, j) => (
                          <td key={j} className="voip-table__cell">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Configuration Steps */}
            <div className="voip-section">
              <div className="voip-section__header">
                <div className="voip-section__icon">
                  <FaCog />
                </div>
                <h2 className="voip-section__title">Configuration Steps</h2>
              </div>

              <div className="voip-steps">
                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">
                    Check the box 'PIN source' if you want to use the voipswitch IVR without DID's
                  </p>
                </div>

                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">Check the box 'active'</p>
                </div>

                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">
                    Uncheck the box 'Authorize by login/password'
                  </p>
                </div>

                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">
                    In 'tariff' choose a special tariff such that you do not bill calls coming from DIDX
                  </p>
                </div>

                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">
                    Add some funds to the account. From now the calls sent from the provider are reaching
                    the voipswitch.
                  </p>
                </div>

                <div className="voip-step">
                  <div className="voip-step__icon">
                    <FaCheckCircle />
                  </div>
                  <p className="voip-step__text">
                    The next step depends on what you want to achieve, in order to use them for calling cards
                    the DNIS must be pointed to proper IVR scenario in the dialing plan. For example set the
                    URI in didx web page to be 1111@yourvoipswitchaddress. It will cause that all calls going
                    to the DID will appear on voipswitch with DNIS 1111. Add this number into the dialing
                    plan and point to the IVR.
                  </p>
                </div>
              </div>
            </div>

            {/* Mapping Section */}
            <div className="voip-section">
              <div className="voip-section__header">
                <div className="voip-section__icon">
                  <FaArrowRight />
                </div>
                <h2 className="voip-section__title">Mapping the DID to a user:</h2>
              </div>

              <div className="voip-text-block">
                <p className="voip-text">
                  Add the DID into the dialing plan, select "Internal gatekeeper" or "pc2phone clients"
                </p>
                <p className="voip-text">
                  checkbox and then from the list of the available users pick the one to which the DID
                  will be assigned.
                </p>
              </div>
            </div>

            {/* Offer Section */}
            <div className="voip-section voip-offer">
              <div className="voip-offer__content">
                <h2 className="voip-offer__title">Exclusive VoipSwitch Offer</h2>
                <div className="voip-offer__highlight">
                  <span className="voip-offer__price">$150/month</span>
                  <span className="voip-offer__description">for 1000 US phone numbers</span>
                </div>
                <p className="voip-offer__text">
                  Voipswitch and DIDx announce exclusive offer for voipswitch customers.
                </p>
                <p className="voip-offer__text">
                  Order 1000 phone numbers from the USA for as little as $150 per month!!!
                </p>
                <p className="voip-offer__text">
                  Allow your clients to experience the benefits of the next generation telephony.
                </p>
                <p className="voip-offer__text">
                  For only 15 cents per month per number you can offer your clientele incoming calls to
                  their VoIP devices.
                </p>
              </div>
            </div>

            {/* How it works */}
            <div className="voip-section">
              <div className="voip-section__header">
                <div className="voip-section__icon">
                  <FaCog />
                </div>
                <h2 className="voip-section__title">How it works:</h2>
              </div>

              <div className="voip-process">
                <div className="voip-process__step">
                  <div className="voip-process__number">1</div>
                  <p className="voip-process__text">Purchase a block of US numbers from DIDx</p>
                </div>
                <div className="voip-process__step">
                  <div className="voip-process__number">2</div>
                  <p className="voip-process__text">Import the block to Voipswitch via its DID API</p>
                </div>
                <div className="voip-process__step">
                  <div className="voip-process__number">3</div>
                  <p className="voip-process__text">Configure the online Sign Up component to use DID phone number as a username</p>
                </div>
                <div className="voip-process__step">
                  <div className="voip-process__number">4</div>
                  <p className="voip-process__text">Set the imported US numbers prefix as free in the tariff section</p>
                </div>
                <div className="voip-process__step">
                  <div className="voip-process__number">5</div>
                  <p className="voip-process__text">
                    Bill your customers anywhere from $5 to $10 a month per number. When a new user signs
                    up from your website an account will be created with one of the US numbers as the user's
                    login automatically. The newly created client can register to voipswitch from a VoIP
                    device or a mobile softphone. Incoming calls to the US phone number will trigger a standard ringing tone.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Link */}
            <div className="voip-section">
              <div className="voip-video">
                <p className="voip-text">
                  For more details please check this{" "}
                  <a
                    href="https://www.youtube.com/watch?v=iew-LVDVbLs"
                    target="_blank"
                    rel="noopener"
                    className="voip-video__link"
                  >
                    video
                    <FaExternalLinkAlt />
                  </a>
                  :
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="voip-section">
              <div className="voip-contact">
                <h3 className="voip-contact__title">For any further support, please contact:</h3>
                <div className="voip-contact__info">
                  <p className="voip-contact__item">
                    <strong>Krzysztof Oglaza</strong>
                  </p>
                  <p className="voip-contact__item">
                    <strong>Tel:</strong> +4-860-031-6058
                  </p>
                  <p className="voip-contact__item">
                    <strong>YahooID:</strong> koglaza
                  </p>
                  <p className="voip-contact__item">
                    <strong>Email:</strong> chris@voipswitch.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Contact />
    </>
  );
}
