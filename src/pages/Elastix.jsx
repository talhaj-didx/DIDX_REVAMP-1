// Elastix.jsx
import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,

} from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


/**
 * Elastix configuration step-by-step page
 * - Material UI only (no Tailwind, no Next.js)
 * - GSAP animations on mount (staggered fade + slide)
 *
 * Put images in your public/static folder and ensure the paths below match.
 */

export const metadata = {
  title: "Elastix",
};

export default function Elastix() {
  const containerRef = useRef(null);


  // GSAP animation on mount
  useGSAP(() => {
    if (!containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(".fade-slide");
    gsap.from(targets, {
      opacity: 0,
      y: 18,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
    });
  }, []);

  // Shared text style (similar to your Paragraph util)
  const paragraphSx = {
    color: "text.primary",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.6,
    mb: 2.5,
  };

  const smallHeadingSx = {
    fontSize: { xs: "1.05rem", md: "1.15rem" },
    fontWeight: 700,
    color: "text.secondary",
    mt: 3.5,
    mb: 1,
  };

  const imageSx = {
    display: "block",
    width: "100%",
    maxWidth: 760,
    height: "auto",
    borderRadius: 2,
    boxShadow: 0,
    mx: "auto",
    my: 3,
  };



  return (
    <>
      <BreadCrumb title={metadata.title} />

      <Box component="main" sx={{ width: "100%", py: 6, px: { xs: 2, md: 4, xl: 10 } }}>
        {/* Simple breadcrumb (self-contained; not Next.js) */}
        {/* <Container maxWidth="lg" sx={{ mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <MuiLink underline="hover" color="inherit" href="/">
            Home
          </MuiLink>
          <Typography color="text.primary">Elastix</Typography>
        </Breadcrumbs>
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
          Elastix
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Container> */}

        <Container maxWidth="lg" ref={containerRef}>
          <section>

            {/* Step headings and paragraphs - each element has className "fade-slide" for GSAP */}
            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 1: Click on PBX
            </Typography>

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 2: Click on Trunks
            </Typography>

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 2: Click on add SIP Trunk
            </Typography>

            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step1.jpg" alt="Elastix step 1" />

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 4: Give the Trunk Name and Outbound Caller ID
            </Typography>

            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step2.jpg" alt="Elastix step 2" />

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 5: Set the Outgoing and Incoming Settings
            </Typography>

            <Typography className="fade-slide" sx={{ ...paragraphSx, fontWeight: 700, mb: 1 }}>
              Outgoing Settings:
            </Typography>

            <Typography className="fade-slide" sx={paragraphSx}>
              Trunk Name: <strong>DIDX</strong>
              <br />
              <strong>Peer Details:</strong>
              <br />
              Host: Ip Address
              <br />
              Type: Peer
            </Typography>

            <Typography className="fade-slide" sx={{ ...paragraphSx, fontWeight: 700, mb: 1 }}>
              Incoming Settings:
            </Typography>

            <Typography className="fade-slide" sx={paragraphSx}>
              User Context: <strong>DIDX</strong>
              <br />
              <strong>User Details:</strong>
              <br />
              Host: Ip Address
              <br />
              Type: Peer
            </Typography>

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 6: Set registration settings
            </Typography>

            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step3.jpg" alt="Elastix registration step" />

            <Typography className="fade-slide" sx={smallHeadingSx}>
              Step 7: Click on Inbound routes
            </Typography>

            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step4.jpg" alt="Elastix inbound routes 1" />
            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step5.jpg" alt="Elastix inbound routes 2" />
            <Box className="fade-slide" sx={imageSx} component="img" src="img/elastix-page-banners/step6.jpg" alt="Elastix inbound routes 3" />

          </section>
        </Container>
      </Box>
      <Contact />
    </>
  );
}
