import React, { useRef } from "react";
import { Box, Container, Typography, Link, Divider } from "@mui/material";
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
} from "react-icons/fa";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


export default function CaseStudy() {
    const sectionRef = useRef(null);
    

    // Animate on mount
    useGSAP(() => {
        gsap.from(sectionRef.current.children, {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        });
    });

    const textStyle = {
        fontSize: { xs: "1.1rem", md: "1.25rem" },
        color: "text.secondary",
        lineHeight: 1.7,
        overflowWrap: "break-word",
    };

    const boldTextStyle = {
        ...textStyle,
        fontWeight: "bold",
    };

    return (
        <>
            <BreadCrumb title="DIDX Case Study | DIDX" />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box ref={sectionRef}>
                    {/* Main Heading */}
                    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                        SAMPLES / POSSIBLE USES
                    </Typography>

                    {/* Case Study: SACS */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        mt={4}
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaBuilding /> SACS INTERNATIONAL
                    </Typography>
                    <Typography sx={boldTextStyle} gutterBottom>
                        Case Study: Obama and DIDX Members Leverage the Blackberry
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        SACS is an international steel trading company with 14 locations worldwide and 200 business clients. The key necessity is to increase their global presence. They already had a Cisco unified communications backbone for their IP PBX with integration of RIM (Research in Motion) Blackberry MVS (Mobility Voice Suite). The One Number Reach enables them to have one phone number ring at the user’s desk phone and the Blackberry simultaneously. With a Blackberry connected to the PBX plus a laptop and data card in the hands of each of their global sales staff, all can access and use the company’s CRM and ERP systems. <br /><br />

                        “DIDX has been a great asset in accessing global DIDs for a virtual presence. We’ve been assured of quality by choosing DIDs from DIDX sellers with vendor rating of higher rating 5-8. We’re also able to control those DIDs from one central location, very convenient,“ states Omar Ali Chohan, SACS’ CFO and Vice President. “DIDX has truly assisted in exponential growth of the company.“
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Case Study: CALLWITHUS */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaPhoneAlt /> CALL WITH US
                    </Typography>
                    <Typography sx={boldTextStyle} gutterBottom>
                        Callwithus and DIDXchange Case Study Wins Internet Telephony
                        Excellence 2007
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        Callwithus, headquartered in New Jersey, USA, began operation in late 2006, with a plan for a more user-friendly Internet Protocol-based communications service than the ones that its director Sergey Okhapkin had experience with. It established itself as a user-friendly choice for consumers and small businesses by using every day language on its website that could be easily understood. To truly set itself apart from the many VoIP company start-ups fiercely competing for business, it needed DID direct inward dialing local phone numbers from all over the world for its extremely diverse set of customers.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Case Study: GLOBALVON */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaGlobe /> GLOBALVON
                    </Typography>
                    <Typography sx={boldTextStyle} gutterBottom>
                        Case Study: Broadband Solution Communication Empowered by DID Number
                        Peering
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        Pensacola, FL, September 22, 2006 –(PR.com)– (This case study won the Internet Telephony Excellence Award for 2006) BroadBand Solution Communication’s end-users have a huge appetite for DID’s (phone numbers) both local and international. An example of a BSCOMM end-user: Company Z needs a Pakistan DID to ring over SIP to their English-speaking appointment takers. They need a Miami DID to ring their Spanish-speaking appointment takers. BSCOMM soon discovers the complicated interop and interconnect agreements of DID providers. Typically, a healthy deposit in the range of thousands is required. Minimum monthly DID purchase is huge. Picture the VoIP newcomer with effective and exciting marketing and customer service strategies, catering to a niche market with few funds to invest. The average DID setup is $16 and monthly fee $6.50 for even a USA number. BSCOMM experiences demands from its DID vendor for ever increasing purchase and length of DID setup period. The company needed just one “Pakistan DID” and received demand for a minimum purchase of 100 at $40 each plus the initial deposit and monthly minimum DID and MOU requirement. Just one of several scenarios occurring within one 24 hour period. Impossible!
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Case Study: Russian Company */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaFlag /> RUSSIAN COMPANY LLC
                    </Typography>
                    <Typography sx={boldTextStyle} gutterBottom>
                        Russian Dotcom Success Story, The Crisis That Stimulated Demand for
                        SIP Trunking Services
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        In 1958, American Express (News – Alert) opened its representative office in Moscow. Thirty-three years later – in 1991 – the first Internet-enabled terminal was installed in Russia, powered by a dialup link to Helsinki, Finland, to put them online. Post-1998 saw tremendous growth in broadband access: from 64 kbit ADSL with metered bandwidth in 2000, to 25 Mbit symmetrical FTTH services in 2008.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Case Study: REVE SYSTEMS */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaNetworkWired /> REVE SYSTEMS
                    </Typography>
                    <Typography sx={boldTextStyle} gutterBottom>
                        Reve Systems and DIDX Partner to Deliver International Phone Numbers
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        Wholesale DID phone number exchange player Super Technologies has partnered with Reve Systems (News – Alert) to enable local international phone numbers from 55 nations on the iTel Mobile Dialer.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Case Study: VOIP SWITCH */}
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        gutterBottom
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <FaVoicemail /> VOIP SWITCH
                    </Typography>
                    <Typography sx={textStyle} paragraph>
                        VoipSWITCH is known as a future-thinking, high quality soft switch, IP PBX and mobile voip application provider. Their customer is excellent and has a great reputation worldwide. See them mixing with their clients and suppliers at conferences worldwide from Dubai to Singapore to Barcelona to Hannover to Los Angeles. The company needed to satisfy its clients increasing demand for global presence and chose DIDX to make that happen.
                        <br />
                        <Link
                            href="https://www.tmcnet.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            See more on TMCNET
                        </Link>
                    </Typography>
                </Box>
            </Container>
               <Contact />
        </>
    );
}
