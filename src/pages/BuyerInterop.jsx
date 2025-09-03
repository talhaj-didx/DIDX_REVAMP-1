import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Breadcrumbs,
} from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";

export default function BuyerInterop() {
  const contentRef = useRef();

  useGSAP(() => {
    gsap.from(contentRef.current.querySelectorAll("h2, h3, p, a"), {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <HeroSection
        titleA={"Buyer Interoperability Process"}
        img={"/img/globe.png"}
      />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Breadcrumb */}
        {/* <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">
          Buyer Interoperability Process
        </Typography>
      </Breadcrumbs> */}


        {/* Page Title */}
        {/* <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Buyer Interoperability Process | DIDX
      </Typography> */}

        {/* Main Content */}
        <Box ref={contentRef}>
          {/* Section 1 */}
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            DIDX Interoperability Test
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Interop (interoperability) enables you to test between your and DIDX
            networks before activating business with DIDxchange.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            See how DIDX works now; we offer each DIDX member 2 free DID numbers,
            one UK DID and one USA DID, temporarily for testing.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            These DIDs test successfully. They are pointed at{" "}
            <Link href="#" underline="hover" color="primary">
              radio@us1.didx.net
            </Link>{" "}
            that plays an IVR when called. Check the numbers by calling them to
            see they are alive and reachable from your telephone.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Browse a copy of the DIDX member{" "}
            <Link href="/member-manual.pdf" underline="hover" color="primary">
              manual
            </Link>{" "}
            in PDF. Watch the DIDX demo{" "}
            <Link
              href="https://www.youtube.com/user/didexchange"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="primary"
            >
              videos
            </Link>{" "}
            and search the{" "}
            <Link
              href="https://kb.didx.net"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="primary"
            >
              knowledge base
            </Link>
            .
          </Typography>

          {/* Requirements */}
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            Requirements
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            1. A SIP or IAX2 server / Switch.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            2. A SIP or IAX2 account working on your desktop or IP Soft Phone.
          </Typography>

          {/* Steps Section */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            Summary Of Testing Steps:
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Interop Test process consists of 5-steps.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Step 1: Get the FREE numbers.<br />
            Step 2: Check the numbers on your server.<br />
            Step 3: DTMF and ECHO Test.<br />
            Step 4: Fax or scan and Upload the DIDX service agreement and credit
            card agreement with copies of related documents.<br />
            Step 5: Activation call and then your account is activated. See below
            more details of each step.
          </Typography>

          {/* Step 1 */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            Step First: Getting Free Numbers
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2, mb: 2, color: "text.secondary" }}
          >
            Aim: To learn the process to buy numbers via DIDX.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            A. Login to your account.<br />
            B. Click on Tool Box button on the left Menu Bar.<br />
            C. Click on Get Free DID button.<br />
            D. Two DIDs will then be allocated on your account.<br />
            E. Click on My Purchased DIDs button in the left panel to see the two
            free numbers.
          </Typography>

          {/* Step 2 */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            Step 2: Checking the free phone numbers on your server
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2, mb: 2, color: "text.secondary" }}
          >
            AIM: To make sure DIDX numbers are working with your SIP/IAX Server.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            A. Click on My Purchased Numbers.<br />
            B. See your free DID’s listed.<br />
            C. Call the numbers. Hear a music or IVR sound. The demonstrates the
            numbers work fine.<br />
            D. Click in the row of the first number where it says{" "}
            <Link href="#" underline="hover" color="primary">
              radio@us1.didx.net
            </Link>{" "}
            Re-point it to the SIP or IAX2 address of your server.<br />
            E. If you have a firewall, please allow all of our IPs before moving
            to the next step. You can find the IPs{" "}
            <Link href="/asterisk" underline="hover" color="primary">
              here
            </Link>
            .<br />
            F. Call the phone number and talk on it for 5 minutes. Then, follow
            points A and F. under this Step 2 before going to point G.<br />
            G. Keep at least one of the FREE DID pointed to your office SIP/IAX
            system, so we can make test call on it and reach you if needed.
          </Typography>

          {/* Step 3 */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            STEP 3: DTMF and Echo Test
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2, mb: 2, color: "text.secondary" }}
          >
            AIM: To make sure that DTMF works on DIDX phone numbers for you.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            A. Point the DID’s on{" "}
            <Link href="#" underline="hover" color="primary">
              dtmftest@us1.didx.net
            </Link>
            <br />
            B. Call your free DID numbers. Hear the greeting, which will explain
            the reason for this test, followed by a beep.<br />
            C. Use the keypad of your touch tone phone to dial each number. You
            will hear the IVR repeat each number you press, if the DTMF is passing
            correctly on the DID number.
          </Typography>

          {/* Step 4 */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            STEP 4: Documentation
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            A. Download the Service Agreement.{" "}
            <Link
              target="_blank"
              href="/terms-of-service-agreement.pdf"
              underline="hover"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Click Here to Download Newest Version to Buy
            </Link>
            <br />
            B. Login to your DIDX account, and click on Profile button on the left
            menu bar.<br />
            C. Upload the agreement, filled, signed, and initialed on each page,
            via the Upload document section in the PROFILE section of your DIDX
            account.
          </Typography>

          {/* Step 5 */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            STEP 5: Activation Call
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2, mb: 2, color: "text.secondary" }}
          >
            AIM: To make sure you understand how DIDX works and to participate in
            a brief survey.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            A. Make sure to complete the profile section of your DIDx.net
            account.<br />
            B. Use the Contact Us/Email Us button under your account and let us
            know your phone number and convenient dates/times for us to call you
            to get your account activated.<br />
            C. Be sure to include your DIDX account number in your message. We
            will verify your account, discuss your DID needs and activate your
            account.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            As an active member of DIDX, you can{" "}
            <Link href="/contact-us" underline="hover" color="primary">
              contact us
            </Link>{" "}
            assistance regarding buying and/or selling DID phone numbers on DIDX.
          </Typography>

          <Typography paragraph sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            Your account should now be active, and you will be able to purchase
            and sell DIDs from the DIDX network.
            <br />
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Welcome aboard happy trading.
            </Box>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

