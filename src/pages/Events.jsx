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
import BreadCrumb from "../components/BreadCrumbs";
export const metadata = {
  title: "DIDX Events",
};

 const events = [
  {
    title: "ITEXPO",
    image: "img/events-page-banners/itexpo-green.jpeg",
    date: "14 to 20 February, 2020",
    location: "Broward County Convention Center, Ft. Lauderdale, FL",
    booth: "Booth#: 1024. DIDx was a media partner.",
    description: `ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.`,
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK",
    image: "img/events-page-banners/itw-small.png",
    date: "23 to 26 June, 2019",
    location: "Hyatt Regency & Marriot Marquis, Atlanta, GA",
    booth: "Booth#: Meet DIDX at its meeting table Marriott Marquis, Marquis Tower.",
    description: `ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6,743 delegates from 1,944 companies and more than 140 countries (the same countries that DIDX offers DID number business) to meet together and network.`,
  },
  {
    title: "COMMUNICASIA 2019",
    image: "img/events-page-banners/communasia-2019.png",
    date: "18 to 20 June, 2019",
    location: "Singapore",
    booth: "Booth#: DIDX was a media partner.",
    description: `Inspired by the radical changes in the ICT industry, the refreshed CommunicAsia continues to be Asia’s most established and relevant event for industry professionals in the telecommunications sector. It brings together thought-leaders, decision makers, influencers throughout the ecosystem to network, explore new technologies, share ideas and create valuable opportunities for all.`,
  },
  {
    title: "ITEXPO",
    image: "img/events-page-banners/itexpo.png",
    date: "29 January to 1 February, 2019",
    location: "Fort Lauderdale, FL",
    booth: "Booth#: TBA. DIDX was a media partner.",
    description: `ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.`,
  },
  {
    title: "GIGTEX TECHNOLOY WEEK 2018",
    image: "img/events-page-banners/gitex-2017.jpg",
    date: "14 to 18 October, 2018",
    location: "Dubai World Trade Center",
    booth: "Booth#: TBA.",
    description: `GITEX Technology Week is a game-changing, must-attend event located in Dubai – the world’s fastest growing technology hub`,
  },
  {
    title: "ASTRICON 2018",
    image: "img/events-page-banners/astricon.png",
    date: "9 to 11 October, 2018",
    location: "Orlando, FL, USA",
    booth: "Booth#: TBA. Meet our CEO Rehan Allahwala",
    description: `AstriCon is celebrating its 15th year in Orlando! As the longest-running event devoted to all-things Asterisk, AstriCon celebrates one of the most influential open source telecommunication projects in history and also its future impact on the communications industry.`,
  },
  {
    title: "CLUECON DEVELOPERS CONFERENCE 2018",
    image: "img/events-page-banners/cluecon.jpg",
    date: "23 to 26 July, 2018",
    location: "Swissotel, Chicago, IL, USA",
    booth: "Booth#: TBA. DIDX is media partner",
    description: `ClueCon is a conference for developers by developers: an annual technology conference held every summer hosted by the team behind the FreeSWITCH open-source project. Our primary focus is to gather various open source projects to discuss Voice over IP, open-source software and hardware, Telecommunications, WebRTC, and IoT. We sit at the intersection of communication and technology and we love all things technical.`,
  },
  {
    title: "COMMUNICASIA 2018",
    image: "img/events-page-banners/communic-asia.png",
    date: "26 to 28 July, 2018",
    location: "Swissotel, Chicago, IL, USA",
    booth: "Booth#: DIDX was a media partner / exhibitor # Bs5-12.",
    description: `Inspired by the radical changes in the ICT industry, the refreshed CommunicAsia continues to be Asia’s most established and relevant event for industry professionals in the telecommunications sector. It brings together thought-leaders, decision makers, influencers throughout the ecosystem to network, explore new technologies, share ideas and create valuable opportunities for all.`,
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK",
    image: "img/events-page-banners/itw.png",
    date: "6 to 9 May, 2018",
    location: "Hyatt Hotel Chicago, IL",
    booth: "Booth#: Meet DIDX at its premium meeting table. We are an ITW Prime Sponsor.",
    description: `ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6,743 delegates from 1,944 companies and more than 140 countries (the same countries that DIDX offers DID number business) to meet together and network.`,
  },
  {
    title: "GLOBAL VOICE CONGRESS",
    image: "img/events-page-banners/telco-days.png",
    date: "6 May, 2018",
    location: "Chicago, IL",
    booth: "Booth#: Visit our booth in the Swissotel. We are a Global Voice Congress sponsor.",
    description: `Why DIDX and you will be there? #1 Connect with voice industry decisions-makers. #2 Network in a quiet, hassle-free environment. #3 Build long-lasting connections having more time for meetings. #4 Find new partners and make deals. #5 Learn industry trends, share experience and insights. # 6 Raise your company profile in the industry.`,
  },
  {
    title: "OPENSIPS SUMMIT, AMSTERDAM, NETHERLANDS",
    image: "img/events-page-banners/opensips.jpeg",
    date: "1 to 4 May, 2018",
    location: "Radisson Blue Hotel, Amsterdam, Netherland",
    booth: "Booth#: DIDX was a sponsor.",
    description: `Join us for four exciting days filled with VoIP and RTC communications presentations, workshops and design clinics bringing the latest updates from the OpenSIPS global community, to learn, discuss and share ideas and projects with like minds. Get ready for the fun, relaxed, informal and rewarding context, right in the city center of lovely Amsterdam.`,
  },
  {
    title: "WORLD TELECOMS ASIA",
    image: "img/events-page-banners/telcoms-worlds.gif",
    date: "18 March, 2018",
    location: "Bangkok, Thailand",
    booth: "Booth#: TBA.",
    description: `For 19 years, Telecoms World Asia has been an annual platform for leading international carriers, operators, authorities and suppliers to meet, learn and create fruitful business partnerships for the betterment of wholesale revenue and growth.`,
  },
  {
    title: "TELCODAYS BARCELONA",
    image: "img/events-page-banners/download.png",
    date: "TBA",
    location: "Barcelona, Spain",
    booth: "DIDX was a Exhibitor TBA.",
    description: `TelcoDays Barcelona brings together wholesale voice, mobile, data carriers, SMS companies, MVNOs, solution vendors and other players of international telecom market, and provides favorable environment to network, discuss industry issues, do business and build long-lasting relationships with peers.`,
  },
  {
    title: "MOBILE WORLD CONGRESS GSMA 2018",
    image: "img/events-page-banners/mobile.jpg",
    date: "26 Feb to 1 March, 2018",
    location: "N/A Press",
    booth: "DIDX was a Exhibitor TBA.",
    description: `Mobile World Congress is the world’s largest gathering for the mobile industry, organised by the GSMA and held in the Mobile World Capital, Barcelona, 26 February – 1 March 2018.`,
  },
  {
    title: "ITEXPO",
    image: "img/events-page-banners/itexpo.png",
    date: "14 to 16 February, 2018",
    location: "Fort Lauderdale, FL",
    booth: "Booth#: 126",
    description: `ITEXPO attracts companies of all sizes and representing all sectors of the IP Communications industry, including Service Providers, Carriers, Enterprises, Government Agencies, Resellers, Manufacturers, Developers, and more.`,
  },
  {
    title: "TELCO DAYS LAS VEGAS 2017",
    image: "img/events-page-banners/download.png",
    date: "7 to 8 January, 2017",
    location: "The Linq Hotel",
    booth: "Booth#: DIDX was a media partner",
    description: `TelcoDays Las Vegas is the North American chapter of the international telecom meetings. The event will be held on January 7-8, in the Linq Hotel, Las Vegas and will bring together 500+ decision makers of telecom industry from around the world. This is more than just another telecom industry event: a unique formula of 3TDs is applied to achieve an ultimate synthesis of learning, deal-making and building trusting long-lasting relations.`,
  },
  {
    title: "GITEX TECHNOLOY WEEK",
    image: "img/events-page-banners/gitex-2017.jpg",
    date: "8 to 12 October, 2017",
    location: "Dubai World Trade Center",
    booth: "Booth#: TBA.",
    description: `GITEX Technology Week is a game-changing, must-attend event located in Dubai – the world’s fastest growing technology hub.`,
  },
  {
    title: "CLUECON DEVELOPERS CONFERENCE",
    image: "img/events-page-banners/cluecon.jpg",
    date: "7 to 10 August, 2017",
    location: "Swissotel Chicago, IL",
    booth: "DIDX was a media partner.",
    description: `ClueCon is a conference for developers by developers: an annual technology conference held every summer hosted by the team behind the FreeSWITCH open-source project. Our primary focus is to gather various open source projects to discuss Voice over IP, open-source software and hardware, Telecommunications, WebRTC, and IoT.`,
  },
  {
    title: "OPENSIPS SUMMIT, AMSTERDAM, NETHERLANDS",
    image: "img/events-page-banners/opensips.jpeg",
    date: "2 to 5 May, 2017",
    location: "Radisson Blue Hotel, Amsterdam, Netherland",
    booth: "DIDX was a key partner.",
    description: `Join us for three exciting days filled with VoIP and RTC presentations, workshops and design clinics bringing the latest updates from the OpenSIPS community, to learn, discuss and share ideas with alike-minds in a fun, relaxed and informal context, right in the city center of lovely Amsterdam`,
  },
  {
    title: "INTERNATIONAL TELECOMS WEEK",
    image: "img/events-page-banners/itw.png",
    date: "14 to 17 May, 2017",
    location: "Chicago, IL",
    booth: "Booth#: Swiss Tower Bronze Level SB523, DIDX is a media partner.",
    description: `ITW (International Telecoms Week) is the annual meeting for the global wholesale telecoms industry, providing a platform for 6771 delegates from 1989 companies and more than 140 countries to meet together and network.`,
  },
  {
    title: "COMMUNICASIA, SINGAPORE",
    image: "img/events-page-banners/enterprise-it-2017.jpg",
    date: "23 to 25 May, 2017",
    location: "Malaysia",
    booth: "Booth#: 5D1-03, DIDX.net was a media partner.",
    description: `The premier sourcing and knowledge ICT platform in Asia, CommunicAsia2017 will bring together a comprehensive display of cutting-edge technologies. With the convergence of technologies and the disruption of traditional business models, ensure that your business stays updated and ready to tackle future consumer demands.`,
  },
  {
    title: "AFRICACOM 2017",
    image: "img/events-page-banners/africa.png",
    date: "14 to 17 Novmeber, 2017",
    location: "Capetown, South Africa",
    booth: "DIDX was a media partner.",
    description: `AfricaCom is the largest and most influential Africa-focused tech event in the world – the meeting place for those driving Africa’s digital transformation. The event is now a week-long festival of thought-provoking content, immersive satellite events, and unique networking experiences.`,
  },
  {
    title: "GSM MOBILE WORLD CONGRESS",
    image: "img/events-page-banners/mobile2017.jpg",
    date: "27 February to 2 March, 2017",
    location: "Barcelona, Spain",
    booth: "DIDX was a media partner.",
    description: `Mobile World Congress is the world’s largest gathering for the mobile industry, organised by the GSMA and held in the Mobile World Capital Barcelona, 27 February - 2 March 2017`,
  },
  {
    title: "ITEXPO EAST",
    image: "img/events-page-banners/itexpo-red.jpg",
    date: "8 to 10 February, 2017",
    location: "Barcelona, Spain",
    booth: "DIDX was a media partner.",
    description: `One of the key things for us at ITEXPO is the diversity of the audience. It's not just a reseller show, it's not just a service provider show, it's not just an enterprise show. We have an opportunity to meet with a very diverse goup and its also a good place to run into the mid-market.`,
  },
  {
    title: "ITEXPO EAST",
    image: "img/events-page-banners/convergence-india-2017.jpg",
    date: "8 to 10 February, 2017",
    location: "Pragati Maiden, New Delhi, India",
    booth: "DIDX was a media partner.",
    description: `Convergence India is the only platform in this region which demonstrates convergence of technologies in Telecom, IT, Broadcast and Digital media sectors.
The expo will showcase latest trends and technologies related to Telecom, Broadcast, Cable and Satellite TV, Cloud and Big Data, IoT, Digital Homes, Mobile devices, Film and Radio, Content Creation, Management and Delivery, etc. and also provides engagement with digital innovators, international business gurus, telecom and broadcasting czars.`,
  },
  {
    title: "GITEX TECHNOLOY WEEK",
    image: "img/events-page-banners/gitex-2016.jpg",
    date: "16 to 20 October, 2016",
    location: "Dubai, United Arab Emirates",
    booth: "DIDX was a media partner.",
    description: `GITEX Global is the world's most important technology event. It is an exciting showcase of the very best solutions, ideas and innovations that could revolutionise the world we live in. Presenting over 4,000 exhibitors from every corner of the world, GITEX Global is the only event you need to consider if you want to meet influential business buyers and decision makers.`,
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
      {/* <HeroSection
        titleA={" DIDX Events"}
        img={"/img/globe.png"}
      /> */}
      <BreadCrumb title={metadata.title} />

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
                    <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
                      {event.date} 
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={2}>
                    <FaMapMarkerAlt style={{ marginRight: 8, color: "#666" }} />
                    <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
                      {event.location}
                    </Typography>
                  </Box>

                  <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8, fontWeight:"bold" }}>
                    Booth#: {event.booth}
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
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
