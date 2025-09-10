import { useRef } from "react";
import { Box, Typography, Button, Divider, Container, Grid, Paper } from "@mui/material";
import { FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";
import BreadCrumb from "../components/BreadCrumbs";

export const metadata = {
  title: "Partners | DIDX",
};

// const awards = [
//   {
//     img: '/img/partners-page-banners/telinta.png',
//     title: 'TELINTA',
//     desc:" Founded in 2002, Telinta offers highly reliable cloud-based Switching and Billing solutions for VoIP service providers and their resellers around the globe. Our full portfolio of white label carrier-grade solutions includes Hosted PBX, Calling Card, Pinless, Mobile solutions, Business and Residential VoIP, WebRTC, Click-to-Call, Wholesale VoIP, Audio-Conferencing, and other solutions.",
//     link: 'https://www.telinta.com/',
//   },
//   {
//     img: '/img/awards-page-banners/get-voip.jpg',
//     title: 'DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2011 FRIENDS OF KAMAILIO AWARD',
//     link: 'https://by-miconda.blogspot.com/2012/02/kamailio-2011-awards.html',
//     desc:<>
//     DIDX was created initially because we needed to buy phone numbers for our
//     own services like virtualphoneline.com but when we went out there to look
//     for numbers, no one was willing to sell in small qty and being a small
//     company we needed smaller qty’s.
//     <br />
//     <br />
//     So one of the vendor’s told us that we can not sell you less numbers because
//     we do not have a billing system to sell you the numbers in small qty with
//     and the answer from our team was CAN WE BUILD SOMETHING for you to BILL US
//     with ?
//     <br />
//     <br />
//     We thought that if we could solve this problem for them, there may be a few
//     dozen other companies who would want to use us for billing, and perhaps 50
//     or so more could eventually use DIDX. Little did we know that within a few
//     years, over 30,000 phone companies would use it, and great names like
//     Google, IBM, and Microsoft became our partners and customers.
//   </>
//   },
  
// ]
const awards = [
  {
    img: '/img/partners-page-banners/telinta.png',
    title: 'TELINTA',
    desc: (
      <>
        Founded in 2002, Telinta offers highly reliable cloud-based Switching and
        Billing solutions for VoIP service providers and their resellers around
        the globe.
        <br />
        <br />
        Our full portfolio of white label carrier-grade solutions includes Hosted
        PBX, Calling Card, Pinless, Mobile solutions, Business and Residential
        VoIP, WebRTC, Click-to-Call, Wholesale VoIP, Audio-Conferencing, and
        other solutions.
      </>
    ),
    link: 'https://www.telinta.com/',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title:
      'DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2011 FRIENDS OF KAMAILIO AWARD',
    desc: (
      <>
        DIDX was created initially because we needed to buy phone numbers for our
        own services like virtualphoneline.com but when we went out there to look
        for numbers, no one was willing to sell in small qty and being a small
        company we needed smaller qty’s.
        <br />
        <br />
        So one of the vendor’s told us that we can not sell you less numbers
        because we do not have a billing system to sell you the numbers in small
        qty with and the answer from our team was CAN WE BUILD SOMETHING for you
        to BILL US with?
        <br />
        <br />
        We thought that if we could solve this problem for them, there may be a
        few dozen other companies who would want to use us for billing, and
        perhaps 50 or so more could eventually use DIDX. Little did we know that
        within a few years, over 30,000 phone companies would use it, and great
        names like Google, IBM, and Microsoft became our partners and customers.
      </>
    ),
    link: 'https://by-miconda.blogspot.com/2012/02/kamailio-2011-awards.html',
  },
  {
    img: '/img/partners-page-banners/nct.png',
    title: 'NEW CONCEPT TECHNOLOGIES (NCT)',
    desc: (
      <>
        New Concept Technologies (NCT) is a leading application development and
        telecommunication company with offices in Australia and USA, supported by
        global resellers network.
        <br />
        <br />
        Our products are compatible with SIP based applications/equipment
        manufactured around the world. We enable ITSPs to deliver the highest
        levels of performance and quality using our carrier grade, flexible, user
        friendly, reliable and scalable VoIP Softswitch and Billing System. We
        offer a turn-key system for ITSPs, CSP and other organizations without
        the need of any third party applications.
        <br />
        <br />
        NCT has been an innovative powerhouse in communication technologies, VoIP
        Services and Products. We embrace excellence and the highest ethical
        standards for the benefit of our stakeholders. Since inception, our
        strategic advantages have been our expertise, creativity and technical
        competence.
      </>
    ),
    link: 'https://newconcepttechnologies.com/',
  },
  {
    img: '/img/partners-page-banners/cx.png',
    title: 'CX INNOVATING COMMUNICATIONS',
    desc: (
      <>
        CX maintains a global presence with offices worldwide in the US, the UK,
        Germany, France, Japan, Russia, South Africa, Poland, Switzerland,
        Cyprus, Australia, Hong Kong, and Malta as well as fully localized
        websites available in many languages.
        <br />
        <br />
        News, features and useful ‘how-to’ articles on 3CX Phone System for
        Windows, VoIP and SIP are available from the company’s 3CX VoIP Blog.
      </>
    ),
    link: 'https://www.3cx.com/',
  },
  {
    img: '/img/partners-page-banners/callision.png',
    title: 'CALLISION',
    desc: (
      <>
        Callision is a hosted virtual PBX. Callision’s technology optimizes the
        operations of Contact Centers by integrating various means of
        communication into an all-in-one dashboard.
        <br />
        <br />
        In November 2013 Callision was the first hosted PBX provider to launch a
        VoIP Hybrid Cloud model, allowing companies to preserve their existing
        SIP provider while using Callision as an interactive layer.
      </>
    ),
    link: 'https://www.callision.com/',
  },
  {
    img: '/img/partners-page-banners/symphony.jpg',
    title: 'SYMPHONY GLOBAL',
    desc: (
      <>
        Mobile payments is widely tipped to become a hot growth area for cellcos,
        and in some markets in Asia Pacific it already is.
        <br />
        <br />
        IE Market Research projects global mobile payment revenue to grow from
        $47.2 billion in 2011 to $998.5 billion in 2016. KPMG forecasts the value
        of global m-payment transactions to pass $958 billion by 2015.
      </>
    ),
    link: 'https://www.symphonyglobal.com/',
  },
  {
    img: '/img/partners-page-banners/kolmi-soft.jpeg',
    title: 'KOLMISOFT',
    desc: (
      <>
        Kolmisoft provides a single solution covering telecom, prepaid calling
        card and callshop operator services.
        <br />
        <br />
        With clear and short-spoken explanations of existing VoIP business models
        it is easier to weigh the pros and cons of each based on your particular
        needs.
      </>
    ),
    link: 'https://www.kolmisoft.com/',
  },
  {
    img: '/img/partners-page-banners/itexpo.png',
    title: 'ITEXPO',
    desc: (
      <>
        ITEXPO is the event with an educational program that teaches resellers,
        enterprises, SMBs, and Government Agencies how to select IP-based voice,
        video, fax, and unified communications to purchase or resell.
        <br />
        <br />
        It’s where service providers learn how to profitably roll out services
        their subscribers are clamoring for.
      </>
    ),
    link: 'https://itexpo.tmcnet.com/',
  },
  {
    img: '/img/partners-page-banners/sip-school.png',
    title: 'THE SIP SCHOOL',
    desc: (
      <>
        The SIP School is the home of the web’s premier SIP training service and
        the SSCA™ certification program.
        <br />
        <br />
        It’s a full training system on SIP (Session Initiation Protocol) with
        animations, learning games, labs, quizzes, etc. Training evolves as SIP
        evolves covering basics to advanced topics like security, NAT, trunking,
        and SIP in Unified Communications.
      </>
    ),
    link: 'https://www.thesipschool.com/',
  },
  {
    img: '/img/partners-page-banners/portaone.png',
    title: 'PORTA ONE',
    desc: (
      <>
        Based in Canada, PortaOne is a leading global vendor of carrier grade
        software for modern telecommunication service providers.
        <br />
        <br />
        PortaOne enables service providers to run a broad line of
        telecommunication services with a single software package, offering VoIP
        billing, class 4 and 5 SIP softswitch, unified messaging, IVR,
        conferencing applications, callbacks and more.
      </>
    ),
    link: 'https://www.portaone.com/',
  },
  {
    img: '/img/partners-page-banners/voip-switch.png',
    title: 'VOIP SWITCH',
    desc: (
      <>
        VoipSwitch is a complete IP telephony platform integrating all the
        elements required for successful implementation of VoIP services into one
        comprehensive solution.
        <br />
        <br />
        DIDx.net has been integrated with Voipswitch software for years, with
        enhanced compatibility via the new DIDx API.
      </>
    ),
    link: 'https://www.voipswitch.com/',
  },
  {
    img: '/img/partners-page-banners/brekeke.png',
    title: 'BREKEKE SOFTWARE, INC',
    desc: (
      <>
        Brekeke Software, Inc., develops high-quality, innovative SIP
        communication software products for telephony carriers and service
        providers.
        <br />
        <br />
        Brekeke’s SIP-based family of products enables organizations to
        seamlessly migrate or integrate IP communication systems. Founded in
        2002, Brekeke is headquartered in San Mateo, California.
      </>
    ),
    link: 'https://www.brekeke.com/',
  },
  {
    img: '/img/partners-page-banners/snom.png',
    title: 'SNOM',
    desc: (
      <>
        The snom 820 is a new step in combining high class telephony with
        extraordinary design.
        <br />
        <br />
        It is the beginning of a superior line of business VoIP phones. Its
        elegance and performance combine latest technology and well-known snom
        features.
      </>
    ),
    link: 'https://www.snom.com/',
  },
  {
    img: '/img/partners-page-banners/sangoma.png',
    title: 'SANGOMA',
    desc: (
      <>
        Founded in 1984, Sangoma’s flexibility and commitment to provide
        outstanding service and support has enabled it to build long-lasting
        relationships with OEMs, VARs, system integrators, telecom companies and
        software developers worldwide.
        <br />
        <br />
        Today Sangoma sells its solutions in more than 130 countries.
      </>
    ),
    link: 'https://www.sangoma.com/',
  },
  {
    img: '/img/partners-page-banners/allison.jpeg',
    title: 'ALLISON SMITH',
    desc: (
      <>
        Allison Smith is one of the most prevalent telephone voices in the world
        today, having voiced platforms for Vonage, Bell Canada, Cingular, Qwest,
        Marriott, Pfizer, Toyota, Victoria’s Secret, Bank of America, and eBay.
        <br />
        <br />
        She is also the proud voice of Asterisk.
      </>
    ),
    link: 'https://www.theivrvoice.com/',
  },
  {
    img: '/img/partners-page-banners/grand-stream.png',
    title: 'GRANDSTREAM NETWORKS',
    desc: (
      <>
        Grandstream Networks is a leading designer and manufacturer of
        innovative, affordable, and high quality IP voice and video products for
        the worldwide broadband telephony market.
        <br />
        <br />
        Products are fully SIP compatible and interoperable with the majority of
        3rd party SIP products.
      </>
    ),
    link: 'https://www.grandstream.com/',
  },
  {
    img: '/img/partners-page-banners/virtualphoneline.png',
    title: 'VIRTUAL PHONE LINE',
    desc: (
      <>
        Virtual Phone Line is a call forwarding service that offers you a Virtual
        Phone Number to ring on your existing number, SIP Address and many
        instant messengers, no matter where you are.
        <br />
        <br />
        Get a US 1800/Toll-Free number or numbers from over 10 countries
        instantly.
      </>
    ),
    link: 'https://www.virtualphoneline.com/',
  },
  {
    img: '/img/partners-page-banners/inc-5000.png',
    title: 'INC 5000',
    desc: (
      <>
        Recognized in the Inc. 5000 list for fast-growing innovative companies.
      </>
    ),
    link: 'https://www.inc.com/inc5000',
  },
  {
    img: '/img/partners-page-banners/jaymie.png',
    title: 'JAYMIE SCOTTO',
    desc: (
      <>
        Jaymie Scotto & Associates professionals have a proven track record of
        establishing recognizable corporate brands and deploying marketing and
        communications strategies.
        <br />
        <br />
        They position customers as leaders in the industry.
      </>
    ),
    link: 'https://www.jsa.net/',
  },
];




export default function Partners() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current.querySelectorAll(".award-item"), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* <BreadCrumb title={metadata.title} /> */}
      {/* <HeroSection
        titleA={metadata.title}
        img={"/img/globe.png"}
      /> */}

      <BreadCrumb title={metadata.title}/>
      <Container maxWidth="lg" sx={{ py: 6 }} ref={containerRef}>
        {awards.map((award, index) => (
          <Box key={index} className="award-item" sx={{ mb: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: 3,
              }}
            >
              <Box
                component="img"
                src={award.img}
                alt={award.title}
                sx={{
                  width: { xs: "100%", sm: 160, md: 200 },
                  height: "auto",
                  border: "1px solid #ccc",
                  borderRadius: 2,
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "text.primary", mb: 1, fontWeight: 600 }}
                >
                  {award.title}
                </Typography>
                <Typography
                  color="text.primary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8, mb: 1 }}
                >
                  {award.desc ?? ""}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={award.link}
                  target="_blank"
                >
                  View More
                </Button>
              </Box>
            </Paper>

            {/* Trophy Divider */}
            {index < awards.length - 1 && (
              <Divider sx={{ my: 6 }}>
                <FaTrophy
                  style={{
                    fontSize: "3rem",
                    color: "#9e9e9e",
                    background: "#f5f5f5",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                />
              </Divider>
            )}
          </Box>
        ))}
      </Container>
    </>
  );
}
