import BreadCrumb from "../components/BreadCrumbs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaServer, FaCode, FaCog, FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa";
import { Contact } from "../components/contact";


export const metadata = {
    title: "Asterisk Configuration | DIDX",
};

const headings = ["*IP Addresses", "*DNS"];

const values = [
    ["162.243.32.115", "sip4.didx.net"],
    ["142.93.9.107", "sip10.didx.net"],
    ["159.203.27.198", "ca.didx.net"],
    ["188.166.168.173", "eu2.didx.net"],
    ["46.101.80.13", "eu3.didx.net"],
    ["198.199.87.53", "us1.didx.net"],
    ["162.243.107.173", "us2.didx.net"],
];

export default function Asterisk() {
    const containerRef = useRef();

    useGSAP(() => {
        if (containerRef.current) {
            gsap.from(containerRef.current.querySelectorAll(".asterisk-section"), {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <>
            <BreadCrumb title={metadata.title} />

            <section className="asterisk-page">
                <div className="asterisk-container">
                    <div ref={containerRef} className="asterisk-content">

                        {/* Hero Section */}
                        <div className="asterisk-hero asterisk-section">
                            <div className="asterisk-hero__icon">
                                <FaServer />
                            </div>
                            <h1 className="asterisk-hero__title">Asterisk Configuration Guide</h1>
                            <p className="asterisk-hero__subtitle">
                                Complete setup instructions for integrating DIDX with your Asterisk server
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="asterisk-section">
                            <div className="asterisk-text-block">
                                <p className="asterisk-text">
                                    DIDX provides simple call forwarding Service, does not offer SIP or
                                    IAX2 accounts (PEERS) to register on our network.
                                </p>
                                <p className="asterisk-text">
                                    Which means that you must allow DIDX to send you calls on your
                                    asterisk server from our IP Addresses.
                                </p>
                            </div>
                        </div>

                        {/* IP Addresses Section */}
                        <div className="asterisk-section">
                            <div className="asterisk-section__header">
                                <div className="asterisk-section__icon">
                                    <FaCog />
                                </div>
                                <h2 className="asterisk-section__title">Our IP Addresses:</h2>
                            </div>

                            <div className="asterisk-table-container">
                                <table className="asterisk-table">
                                    <thead>
                                        <tr>
                                            {headings.map((head, idx) => (
                                                <th key={idx} className="asterisk-table__header">
                                                    {head}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {values.map((row, rowIndex) => (
                                            <tr key={rowIndex} className={`asterisk-table__row ${rowIndex % 2 === 0 ? 'asterisk-table__row--even' : 'asterisk-table__row--odd'}`}>
                                                {row.map((val, colIndex) => (
                                                    <td key={colIndex} className="asterisk-table__cell">
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Configuration Info */}
                        <div className="asterisk-section">
                            <div className="asterisk-text-block">
                                <p className="asterisk-text">
                                    You should be able to receive calls from DIDX over SIP or IAX2
                                </p>
                                <p className="asterisk-text">
                                    Asterisk Sample Configurations
                                </p>
                            </div>
                        </div>

                        {/* Sample Files */}
                        <div className="asterisk-section">
                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>Sample Configuration Files</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`Sample sip.conf
Sample extensions.conf
Sample iax.conf`}</pre>
                            </div>
                        </div>

                        {/* SIP Configuration */}
                        <div className="asterisk-section">
                            <div className="asterisk-text-block">
                                <p className="asterisk-text">
                                    <strong>SIP.Conf Sample File Location:</strong> /etc/asterisk/sip.conf
                                </p>
                                <p className="asterisk-text">
                                    Since the call is going to you over GENERAL Context, you will need
                                    to add the following lines to make your asterisk work with DIDX
                                    properly. Otherwise you will face errors and will think that DID is
                                    not working.
                                </p>
                            </div>

                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>sip.conf Configuration</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`[general]
context=default ; This is very important, as this is where the
call from DIDX will land to.

port=5060 ; The port where DIDX sends the call to

bindaddr=X.X.X.X ; Please bind to your main IP address

srvlookup=yes ; Enable DNS SRV lookups on outbound calls

dtmfmode=rfc2833

relaxdtmf=no

disallow=all
allow=ulaw
allow=alaw

allow=g729
allow=gsm

maxexpirey=30
defaultexpirey=180
canreinvite=yes
nat=0
UserAgent= Asterisk
echocancel=yes
echocancelwhenbridge=yes

[1000]
type=friend
username=12126559343`}</pre>
                            </div>
                        </div>

                        {/* IAX Configuration */}
                        <div className="asterisk-section">
                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>iax.conf Configuration</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`IAX.conf /etc/asterisk/iax.conf

[general]
bindport=4569
bindaddr=0.0.0.0 ; Your server ip address
jitterbuffer = yes
disallow=all
allow=alaw
allow=ulaw
dtmfmode = rfc2833
context=Default
asterisk@yourdomain.com/1111111111

allow=all

[guest]
Context=default
Disallow= all
Allow= ulaw
dtmfmode= rfc2833`}</pre>
                            </div>
                        </div>

                        {/* Extensions Configuration */}
                        <div className="asterisk-section">
                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>extensions.conf Configuration</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`Extensions.conf /etc/asterisk/extensions.conf

Extensions.conf has to know where the call you are getting
from has to go to.`}</pre>
                            </div>

                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>DIDX Context</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`[didx]
exten = _X.,1,Dial(SIP/123456@fwd.pulver.com)
exten = _X.,2,Hangup`}</pre>
                            </div>

                            <div className="asterisk-code-block">
                                <div className="asterisk-code-block__header">
                                    <FaCode />
                                    <span>Radio Extension</span>
                                </div>
                                <pre className="asterisk-code-block__content">{`exten = radio,1,Answer
exten = radio,2,MP3Player(https://www.didx.net/jesus.mp3)`}</pre>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div className="asterisk-section">
                            <div className="asterisk-support">
                                <div className="asterisk-support__header">
                                    <div className="asterisk-support__icon">
                                        <FaQuestionCircle />
                                    </div>
                                    <h3 className="asterisk-support__title">Support</h3>
                                </div>
                                <div className="asterisk-support__content">
                                    <p className="asterisk-text">
                                        We recommend you to visit{" "}
                                        <a href="/about" className="asterisk-link">
                                            About us
                                        </a>
                                        ,{" "}
                                        <a
                                            href="https://voip-info.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="asterisk-link"
                                        >
                                            VOIP information
                                            <FaExternalLinkAlt />
                                        </a>
                                    </p>
                                    <p className="asterisk-text">
                                        If you are still having problems, We suggest you contact an asterisk
                                        consultant, or best would be to contact www.Digium.com
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
