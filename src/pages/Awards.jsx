import { useRef } from "react";
import { Box, Typography, Button, Divider, Container, Grid, Paper } from "@mui/material";
import { FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";
import BreadCrumb from "../components/BreadCrumbs";

export const metadata = {
  title: "DIDX Awards | DIDX",
};

const awards = [
  {
    img: "img/awards-page-banners/get-voip.jpg",
    title:
      "DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2015 GETVOIP TOP 50 UC EXPERTS TO FOLLOW",
    link: "https://getvoip.com/blog/2015/04/22/top-50-uc-experts",
  },
  {
    img: "img/awards-page-banners/kamailio-2011.jpg",
    title:
      "DIDX VP OF MARKETING VIA SUPER TECHNOLOGIES WINS 2011 FRIENDS OF KAMAILIO AWARD",
    link: "https://by-miconda.blogspot.com/2012/02/kamailio-2011-awards.html",
  },
  {
    img: "img/awards-page-banners/pensacola-awards.jpg",
    title:
      "SUPER TECHNOLOGIES GOT CERTIFICATE OF MEMBERSHIP FROM PENSACOLA CHAMBER OF COMMERCE",
    link: "https://getvoip.com/blog/2015/04/22/top-50-uc-experts",
  },
  {
    img: "img/awards-page-banners/arabia-fast-growth.jpg",
    title: "DIDX VIA SUPER TECHNOLOGIES WINS THE ARABIA FAST GROWTH 500 AWARD",
  },
  {
    img: "img/awards-page-banners/cbbb.jpg",
    title:
      "DIDX VIA SUPER TECHNOLOGIES IS A MEMBER SINCE 2006. DIDX (SUPER TECHNOLOGIES, INC.) HAS AN A+ RATING SINCE 2005.",
    desc: (
      <>
        In 2012, Super Technologies, Inc. maintains an A+ Better Business Bureau
        rating in the United States of America since 2005.
      </>
    ),
  },
  {
    img: "img/awards-page-banners/cwhp-2011.jpg",
    title:
      "VIRTUAL PHONE LINE EMPOWERED BY DIDX WINS 2011 COMPUTERWORLD HONORS LAUREATE MEDAL",
    desc: (
      <>
        DIDX empowers thousands of award-winning entrepreneurs, carriers,
        operators and Internet service providers such as Virtual Phone Line to
        add revenue never realized before and/or to start new businesses via the
        power of direct inward dialing.
        <br />
        <br />
        In addition, those that are empowered in this way … in turn … enable
        their users to have a local presence in areas of the world they are not
        physically in, so that they are able to receive calls from very
        important people in those areas to reach new business, social and
        personal goals.
      </>
    ),
    link: "https://www.pr.com/press-release/350916",
  },
  {
    img: "img/awards-page-banners/internet-telephony-2009.jpg",
    title: "DIDX WINS TERADATA NATIONAL IT EXCELLENCE AWARD 2010",
    desc: (
      <>
        Teradata National IT Excellence Awards celebrate accomplishments in the
        regional IT industry.
        <br />
        <br />
        “Each year we recognize those persons and services who are instrumental
        in introducing, promoting and implementing IT in Pakistan,” said Khuram
        Rahat, managing director, Teradata Pakistan.
      </>
    ),
    link: "https://www.teradata-awards.com/",
  },
  {
    img: "img/awards-page-banners/von-innovator.jpg",
    title: "GROOVYTEL WON THE VON INNOVATOR AWARD 2008",
    desc: (
      <>
        “The winners of the VON Magazine Innovator Awards should take pride in
        their accomplishments, and we’d like to thank everyone who submitted a
        nomination,” said Doug Mohney, Editor-in-Chief of VON Magazine, and
        Chairman of the awards program.
        <br />
        <br />
        “The scope of the nomination process was extensive, and the quality of
        submissions was impressive, illustrating a significant level of
        development and innovation throughout the industry. We look forward to
        honoring all of the winners at Spring VON.x.”
      </>
    ),
    link: "https://www.vision2mobile.com/",
  },
  {
    img: "img/awards-page-banners/digium-innovation.png",
    title: "DIDX WON THE DIGIUM INNOVATION PRODUCT OF THE YEAR AWARD 2007",
    desc: (
      <>
        The Innovation Award is designed to recognize developers, customers and
        partners for outstanding achievements that are improving business
        processes, overcoming technology challenges and enhancing the company’s
        bottom line.
      </>
    ),
    link: "https://www.digium.com/en/company/awards/innovation.php",
  },
  {
    img: "img/awards-page-banners/product-of-the-year-2008.png",
    title: "DIDX WON THE COMMUNICATIONS SOLUTIONS PRODUCT OF THE YEAR AWARD 2006",
    desc: (
      <>
        Super Technologies, Inc. has been recognized with a 2006 Product of the
        Year Award for their excellence in technological advancement and
        application refinement,” said Rich Tehrani, TMC President and Group
        Editor-in-Chief of Communications Solutions.
        <br />
        <br />
        “It has proven with its DIDXchange they are committed to quality and
        excellence in solutions that benefit the customer experience as well as
        ROI for the companies that use them. I am pleased to honor their hard
        work and accomplishments and look forward to more innovative solutions
        from them in the future.
      </>
    ),
    link: "https://news.tmcnet.com/news/2007/04/30/2564473.htm",
  },
  {
    img: "img/awards-page-banners/pasha.png",
    title: "DIDX WON THE “BEST OF SHOW” FROM PASHA ICT AWARDS 2006",
    desc: (
      <>
        This annual Awards program also provides an opportunity and an ideal
        environment for companies to gain local, regional and international
        exposure through on-going promotional activities.
        <br />
        <br />
        The top winners of the P@SHA ICT Awards (only product categories) will
        be nominated for representation at the annual Asia Pacific Awards.
      </>
    ),
    link: "https://pasha.org.pk/html_files/newsroom_news67.html",
  },
  {
    img: "img/awards-page-banners/internet-telephony-2009.jpg",
    title:
      "DIDX CHANGE HONORED FOR DELIVERING EXCEPTIONAL VOIP/IP COMMUNICATIONS SOLUTIONS",
    desc: (
      <>
        Pensacola, FL. Sept 18, 2007 Super Technologies, Inc. announced today
        that Technology Marketing Corporation has named DIDXchange as a
        recipient of a 2007 INTERNET TELEPHONY Excellence Award presented by
        INTERNET TELEPHONY magazine (www.itmag.com).
      </>
    ),
    link: "https://www.tmcnet.com/usubmit/2007/09/19/2951250.htm",
  },
  {
    img: "img/awards-page-banners/internet-telephony-2009.jpg",
    title: "DIDX WON THE INTERNET TELEPHONY PRODUCT OF THE YEAR AWARD 2007",
    desc: (
      <>
        INTERNET TELEPHONY editors selected the companies which in their view
        demonstrate the vision, leadership and attention to detail that are the
        hallmarks of the prestigious Product of the Year award winners who
        include DIDXchange, Avaya One-X Deskphone for 9600 Series IP Telephones,
        Citrix Application Gateway™, eyeBeam 1.5, Truphone and others.
      </>
    ),
    link: "https://www.tmcnet.com/usubmit/2007/01/03/2213308.htm",
  },
  {
    img: "img/awards-page-banners/it-excel-2006.png",
    title: "DIDX WON THE INTERNET TELEPHONY EXCELLENCE AWARDS 2006",
    desc: (
      <>
        The editorial staff of Internet Telephony magazine is proud to announce
        the winners of this year’s Internet Telephony Excellence Awards.
        <br />
        <br />
        These companies are as varied as there are products that fit under the
        IP telephony umbrella. In fact the only thing more varied than the
        vendors serving their customers are the customers themselves.
      </>
    ),
  },
  {
    img: "img/awards-page-banners/wca-2006.png",
    title:
      "DIDX CHANGE AMONG TOP 8 WORLD COMMUNICATION CHANGEMAKER AWARDS SHORTLIST",
    desc: (
      <>
        Pensacola, FL, August 17, 2006. Total Telecom’s panel of judges selected
        Super Technologies Inc.’s product DIDXchange to be on its Communication
        Changermaker Shortlist.
        <br />
        <br />
        Awards will be showcased at London Marriott Hotel.
      </>
    ),
  },
  {
    img: "img/awards-page-banners/apicta-2010.png",
    title: "DIDX WON THE “BEST OF SHOW” FROM APICTA PACIFIC ICT AWARDS",
    desc: (
      <>
        The Asia Pacific ICT Awards (APICTA) is an international Awards Program
        initiated by the Multimedia Development Corporation of Malaysia to
        increase ICT awareness in the community and assist in bridging the
        Digital Divide.
        <br />
        <br />
        By providing networking and product benchmarking opportunities to ICT
        innovators and entrepreneurs in the region, the program is designed to
        stimulate ICT innovation and creativity, promote economic and trade
        relations, facilitate technology transfer, and offer business matching
        opportunities via exposure to venture capitalists and investors.
      </>
    ),
  },
];



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
      {/* <HeroSection
        titleA={metadata.title}
        img={"/img/globe.png"}
      /> */}
      <BreadCrumb title={metadata.title} />
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
