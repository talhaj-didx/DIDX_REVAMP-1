import { useRef } from "react";
import { Box, Typography, Button, Divider, Container, Grid, Paper } from "@mui/material";
import { FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";

export const metadata = {
  title: "DIDX Awards | DIDX",
};

const awards = [
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2015 GETVOIP TOP 50 UC EXPERTS TO FOLLOW',
    link: 'https://getvoip.com/blog/2015/04/22/top-50-uc-experts',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2011 FRIENDS OF KAMAILIO AWARD',
    link: 'https://by-miconda.blogspot.com/2012/02/kamailio-2011-awards.html',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'SUPER TECHNOLOGIES GOT CERTIFICATE OF MEMBERSHIP FROM PENSACOLA CHAMBER OF COMMERCE',
    link: 'https://getvoip.com/blog/2015/04/22/top-50-uc-experts',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX VIA SUPER TECHNOLOGIES WINS THE ARABIA FAST GROWTH 500 AWARD',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX VIA SUPER TECHNOLOGIES IS A MEMBER SINCE 2006. DIDX (SUPER TECHNOLOGIES, INC.) HAS AN A+ RATING SINCE 2005.',
    desc: 'In 2012, Super Technologies, Inc. maintains an A+ Better Business Bureau rating in the United States of America since 2005.',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'VIRTUAL PHONE LINE EMPOWERED BY DIDX WINS 2011 COMPUTERWORLD HONORS LAUREATE MEDAL',
    desc: 'DIDX empowers thousands of award-winning entrepreneurs, carriers, operators and Internet service providers such as Virtual Phone Line to add revenue never realized before and/or to start new businesses via the power of direct inward dialing.',
    link: 'https://www.pr.com/press-release/350916',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WINS TERADATA NATIONAL IT EXCELLENCE AWARD 2010',
    desc: 'Teradata National IT Excellence Awards celebrate accomplishments in the regional IT industry.',
    link: 'https://www.teradata-awards.com/',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'GROOVYTEL WON THE VON INNOVATOR AWARD 2008',
    desc: 'The winners of the VON Magazine Innovator Awards should take pride in their accomplishments.',
    link: 'https://www.vision2mobile.com/',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE DIGIUM INNOVATION PRODUCT OF THE YEAR AWARD 2007',
    desc: 'The Innovation Award is designed to recognize developers, customers and partners for outstanding achievements that are improving business processes.',
    link: 'https://www.digium.com/en/company/awards/innovation.php',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE COMMUNICATIONS SOLUTIONS PRODUCT OF THE YEAR AWARD 2006',
    desc: 'Super Technologies, Inc. has been recognized with a 2006 Product of the Year Award for their excellence in technological advancement.',
    link: 'https://news.tmcnet.com/news/2007/04/30/2564473.htm',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE “BEST OF SHOW” FROM PASHA ICT AWARDS 2006',
    desc: 'This annual Awards program also provides an opportunity and an ideal environment for companies to gain local, regional and international exposure.',
    link: 'https://pasha.org.pk/html_files/newsroom_news67.html',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX CHANGE HONORED FOR DELIVERING EXCEPTIONAL VOIP/IP COMMUNICATIONS SOLUTIONS',
    desc: 'Super Technologies, Inc. announced today that Technology Marketing Corporation has named DIDXchange as a recipient of a 2007 INTERNET TELEPHONY Excellence Award.',
    link: 'https://www.tmcnet.com/usubmit/2007/09/19/2951250.htm',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE INTERNET TELEPHONY PRODUCT OF THE YEAR AWARD 2007',
    desc: 'INTERNET TELEPHONY editors selected the companies which in their view demonstrate the vision, leadership and attention to detail.',
    link: 'https://www.tmcnet.com/usubmit/2007/01/03/2213308.htm',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE INTERNET TELEPHONY EXCELLENCE AWARDS 2006',
    desc: 'The editorial staff of Internet Telephony magazine is proud to announce the winners of this year’s Internet Telephony Excellence Awards.',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX CHANGE AMONG TOP 8 WORLD COMMUNICATION CHANGEMAKER AWARDS SHORTLIST',
    desc: 'Total Telecom’s panel of judges selected Super Technologies Inc.’s product DIDXchange to be on its Communication Changermaker Shortlist.',
  },
  {
    img: '/img/awards-page-banners/get-voip.jpg',
    title: 'DIDX WON THE “BEST OF SHOW” FROM APICTA PACIFIC ICT AWARDS',
    desc: 'The Asia Pacific ICT Awards (APICTA) is an international Awards Program initiated by the Multimedia Development Corporation of Malaysia to increase ICT awareness in the community.',
  },
]


export default function Awards() {
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
      <HeroSection
        titleA={metadata.title}
        img={"/img/globe.png"}
      />
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
                  sx={{ color: "text.primary", mb: 2, fontWeight: 600 }}
                >
                  {award.title}
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
