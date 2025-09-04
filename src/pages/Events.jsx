// Event.jsx
import React, { useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";

const events = [
  {
    title: "ITEXPO",
    date: "14 to 20 February, 2020",
    location: "Broward County Convention Center, Ft. Lauderdale, FL",
    booth: "1024. DIDX was a media partner.",
    description:
      "ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.",
    image: "/img/events-page-banners/itexpo-green.jpeg",
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK",
    date: "23 to 26 June, 2019",
    location: "Hyatt Regency & Marriot Marquis, Atlanta, GA",
    booth: "Meet DIDX at its meeting table Marriott Marquis, Marquis Tower.",
    description:
      "ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6,743 delegates from 1,944 companies and more than 140 countries to network.",
    image: "/img/events-page-banners/itw-small.png",
  },
  {
    title: "COMMUNICASIA 2019",
    date: "18 to 20 June, 2019",
    location: "Singapore",
    booth: "DIDX was a media partner.",
    description:
      "CommunicAsia is Asia’s most established and relevant event for industry professionals in telecommunications. It brings together thought-leaders, decision makers, influencers throughout the ecosystem to network and explore new technologies.",
    image: "/img/events-page-banners/communasia-2019.png",
  },
  {
    title: "GITEX 2018",
    date: "14 to 18 October, 2018",
    location: "Dubai World Trade Centre, Dubai, UAE",
    booth: "Zabeel Hall, Stand ZL-A40",
    description:
      "GITEX Technology Week is the biggest tech show in the Middle East, North Africa & South Asia. It gathers entrepreneurs, investors and industry leaders for groundbreaking showcases.",
    image: "/img/events-page-banners/gitex.png",
  },
  {
    title: "CLUECON CONFERENCE 2018",
    date: "6 to 9 August, 2018",
    location: "Swissotel, Chicago, IL",
    booth: "DIDX was a media sponsor.",
    description:
      "ClueCon is the annual gathering for telecom developers, businesses, and VOIP enthusiasts with sessions about open-source telecom projects like FreeSWITCH, Kamailio, and OpenSIPS.",
    image: "/img/events-page-banners/cluecon.png",
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK 2018",
    date: "6 to 9 May, 2018",
    location: "Hyatt Regency & Marriot Marquis, Chicago, IL",
    booth: "DIDX at Meeting Room #4172.",
    description:
      "ITW is the world’s largest meeting for the global wholesale telecoms community. It provides a platform for over 7,000 delegates from nearly 2,000 companies representing 140+ countries.",
    image: "/img/events-page-banners/itw-small.png",
  },
  {
    title: "COMMUNICASIA 2017",
    date: "23 to 25 May, 2017",
    location: "Marina Bay Sands, Singapore",
    booth: "DIDX was a proud media partner.",
    description:
      "CommunicAsia showcases a complete range of technologies and innovations from industry leaders in ICT, including IoT, broadband, mobile apps, cloud, big data, and satellite communications.",
    image: "/img/events-page-banners/communasia-2017.jpg",
  },
  {
    title: "MOBILE WORLD CONGRESS 2017",
    date: "27 February to 2 March, 2017",
    location: "Fira Gran Via, Barcelona, Spain",
    booth: "DIDX attended as a participant.",
    description:
      "MWC Barcelona is the largest mobile event in the world, bringing together the latest innovations and leading-edge technology from more than 2,400 leading companies.",
    image: "/img/events-page-banners/mwc-2017.jpg",
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK 2016",
    date: "8 to 11 May, 2016",
    location: "Hyatt Regency & Swissôtel, Chicago, IL",
    booth: "DIDX at Meeting Table #404.",
    description:
      "ITW is the annual meeting for the global wholesale telecoms industry. It connects carriers, data providers, cloud, and satellite players together to explore partnerships.",
    image: "/img/events-page-banners/itw-2016.jpg",
  },
  {
    title: "COMMUNICASIA 2015",
    date: "2 to 5 June, 2015",
    location: "Marina Bay Sands, Singapore",
    booth: "DIDX showcased DID number services.",
    description:
      "CommunicAsia 2015 focused on emerging technologies in ICT and brought together innovators from around the world to collaborate on digital transformation.",
    image: "/img/events-page-banners/communicasia-2015.jpg",
  },
  {
    title: "GITEX 2014",
    date: "12 to 16 October, 2014",
    location: "Dubai World Trade Centre, Dubai, UAE",
    booth: "DIDX Stand with VOIP Innovators.",
    description:
      "GITEX 2014 highlighted smart city solutions, IoT, and advanced telecom services for businesses across the globe.",
    image: "/img/events-page-banners/gitex-2014.jpg",
  },
  {
    title: "ITEXPO 2013",
    date: "29 January to 1 February, 2013",
    location: "Miami Beach Convention Center, Miami, FL",
    booth: "DIDX Booth #232.",
    description:
      "ITEXPO 2013 brought together service providers, carriers, and telecom developers to exchange ideas and form partnerships.",
    image: "/img/events-page-banners/itexpo-2013.jpg",
  },
  {
    title: "COMMUNICASIA 2012",
    date: "19 to 22 June, 2012",
    location: "Marina Bay Sands, Singapore",
    booth: "DIDX with global telecom exhibitors.",
    description:
      "CommunicAsia 2012 emphasized cloud computing, connected devices, and wholesale telecom growth strategies.",
    image: "/img/events-page-banners/communicasia-2012.jpg",
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK 2010",
    date: "23 to 26 May, 2010",
    location: "Hilton Chicago, Chicago, IL",
    booth: "DIDX networking suite.",
    description:
      "ITW 2010 was the world’s key wholesale voice and data event, and DIDX participated to showcase DID marketplace solutions.",
    image: "/img/events-page-banners/itw-2010.jpg",
  },
  {
    title: "VON CONFERENCE 2008",
    date: "11 to 14 March, 2008",
    location: "San Jose Convention Center, San Jose, CA",
    booth: "DIDX exhibited with VoIP startups.",
    description:
      "VON 2008 was a leading VoIP event covering innovations in internet telephony, broadband, wireless, and IP communications.",
    image: "/img/events-page-banners/von-2008.jpg",
  },
  {
    title: "GLOBAL VOIP SUMMIT 2006",
    date: "7 to 10 June, 2006",
    location: "Washington, D.C.",
    booth: "DIDX participated as VoIP pioneer.",
    description:
      "The Global VoIP Summit 2006 connected VoIP service providers with infrastructure and wholesale suppliers.",
    image: "/img/events-page-banners/voip-2006.jpg",
  },
  {
    title: "VON SPRING 2005",
    date: "7 to 10 March, 2005",
    location: "Santa Clara Convention Center, Santa Clara, CA",
    booth: "DIDX introduced wholesale DID marketplace.",
    description:
      "At VON Spring 2005, DIDX first introduced its concept of a global DID exchange, forever changing VoIP wholesale markets.",
    image: "/img/events-page-banners/von-2005.jpg",
  },
];


export default function Events() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <HeroSection
        titleA={" DIDX Events"}
        img={"/img/globe.png"}
      />

      <Container maxWidth="lg" sx={{ py: 8 }} ref={containerRef}>
        {/* <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        DIDX Events
      </Typography> */}

        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} key={index} className="event-card">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: 4,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 320 },
                    height: 200,              // fixed height
                    objectFit: "contain",       // fills the box and crops if needed
                    borderRadius: 2           // optional, for smooth corners
                  }}
                  image={event.image}
                  alt={event.title}
                />

                <CardContent sx={{
                  width: { xs: "100%", md: 800 },  // 👈 fixed width on larger screens
                  flexShrink: 0,            // prevents shrinking
                  overflowWrap: "break-word",     // 👈 ensures long words wrap
                  wordBreak: "break-word",
                }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {event.title}
                  </Typography>

                  <Box display="flex" alignItems="center" mb={1}>
                    <FaClock style={{ marginRight: 8, color: "#666" }} />
                    <Typography variant="body1" color="textSecondary">
                      {event.date}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={2}>
                    <FaMapMarkerAlt style={{ marginRight: 8, color: "#666" }} />
                    <Typography variant="body1" color="textSecondary">
                      {event.location}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2, fontWeight: "bold" }}>
                    Booth#: {event.booth}
                  </Typography>

                  <Typography variant="body1" color="textSecondary">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container >
    </>
  );
}
