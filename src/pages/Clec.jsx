import React, { useRef } from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Contact } from "../components/contact";

import BreadCrumb from "../components/BreadCrumbs";

// // ✅ Breadcrumb (converted from your layout component)
// const BreadCrumb = ({ title }) => (
//   <Box sx={{mt: 10, py: 2, px: { xs: 2, md: 6 }, bgcolor: "#f5f5f5" }}>
//     <Typography variant="h5" color="text.secondary" style={{justifySelf:'flex-end'}}>
//       Home / <span style={{ color: "#1976d2" }}>{title}</span>
//     </Typography>
//   </Box>
// );

export default function Clec() {
  const sectionRef = useRef(null);
  

  // ✅ GSAP entrance animation
  useGSAP(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <>
      <BreadCrumb title="CLEC Company | DIDX" />
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        <Box ref={sectionRef}>
          {/* Page Title */}
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              mb: 4,
            }}
          >
            CLEC Company
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 6,
              color: "text.secondary",
              lineHeight: 1.7,
              overflowWrap: "break-word",
            }}
          >
            For Internet Telephone Service providers (CLEC and Local Loop).
          </Typography>

          {/* Section: CLEC Sells */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: "text.primary",
              mb: 2,
            }}
          >
            CLEC Sells Scenario
          </Typography>
          <Divider sx={{ mb: 3, maxWidth: 200 }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 6,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            CLECs (competitive local exchange carriers) can operate as sellers of
            DID phone numbers on DIDX. If they are Internet telephone service
            providers, they can offer and sell incoming service to thousands of
            other providers who use DIDX, generating increased ARPU.
          </Typography>

          {/* Section: CLEC Buys */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: "text.primary",
              mb: 2,
            }}
          >
            CLEC Buys Scenario
          </Typography>
          <Divider sx={{ mb: 3, maxWidth: 200 }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 4,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            CLECs can also operate as buyers of USA and international DID phone
            numbers on DIDX and resell to the CLECs’ direct user base. They can
            offer their own direct customer base both USA and international phone
            numbers in an instant without any investment, thereby not only
            satisfying current users but also increasing customer sales and
            retention.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 4,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            DIDX provides full API/web services to integrate its database with the
            CLEC’s front end engine, whether sharing the CLEC’s DID phone numbers
            for sale on DIDX OR displaying all DIDX available numbers from 60+
            countries to the CLEC’s customers on the CLEC’s website. DIDX is not
            visible to the CLEC’s customers. The CLEC’s customer selects a number
            via the API on the CLEC’s website or app, and it is instantly routed
            to the CLEC’s switch and then delivered to its customer over the IP
            network. CLECs control the billing price of the phone number being
            sold to its customer. DIDX charges only the wholesale price to the
            CLEC.
          </Typography>
        </Box>
      </Container>
      <Contact />
    </>
  );
}
