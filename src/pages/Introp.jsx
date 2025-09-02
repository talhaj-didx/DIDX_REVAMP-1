import React, { useRef } from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/heroSection";

export default function BuyerSellerInteropPage() {
    const sectionRef = useRef();

    useGSAP(() => {
        gsap.from(sectionRef.current.querySelectorAll("h3, p, a"), {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
        });
    }, []);

    return (
        <>
            <HeroSection
                titleA={"Buyer And Seller Interoperability Process"}
                img={"/img/globe.png"}
            />

            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
                {/* Page Title */}
                {/* <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 6 }}
                >
                    Buyer And Seller Interoperability Process | DIDX
                </Typography> */}

                {/* Main Content */}
                <Box ref={sectionRef}>
                    {/* Buyer Interop Section */}
                    <Typography
                        variant="h2"
                        component="h3"
                        sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
                    >
                        Buyer Interop Process
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        Interop (interoperability) enables you and DIDX to test between your
                        and DIDX networks before activating business with DIDxchange.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        Please note that DIDX requires you to offer at least 500 number to the
                        Exchange in order to start selling. If you have a problem in that qty,
                        please contact us on{" "}
                        <Link href="mailto:care@didx.net" underline="hover" color="primary">
                            care@didx.net
                        </Link>{" "}
                        with the reason and we will try take it with our management.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        They are pointed to DIDX that plays an IVR when called. Check the
                        numbers by calling them to see they are alive and reachable from your
                        telephone.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
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

                    <Link
                        href="/buyer-interop"
                        underline="hover"
                        color="primary"
                        sx={{ display: "block", fontWeight: "bold", mb: 6 }}
                    >
                        Click here for more information
                    </Link>

                    {/* Seller Interop Section */}
                    <Typography
                        variant="h2"
                        component="h3"
                        sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
                    >
                        Seller Interop Process
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        Interop (interoperability) enables you and DIDX to test between your
                        and DIDX networks before activating business with DIDxchange.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        Please note that DIDX requires you to offer at least 500 number to the
                        Exchange in order to start selling. If you have a problem in that qty,
                        please contact us on{" "}
                        <Link href="mailto:care@didx.net" underline="hover" color="primary">
                            care@didx.net
                        </Link>{" "}
                        with the reason and we will try take it with our management.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
                        They are pointed to DIDX that plays an IVR when called. Check the
                        numbers by calling them to see they are alive and reachable from your
                        telephone.
                    </Typography>

                    <Typography paragraph color="text.primary"  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.8 }}>
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

                    <Link
                        href="/seller-interop"
                        underline="hover"
                        color="primary"
                        sx={{ display: "block", fontWeight: "bold" }}
                    >
                        Click here for more information
                    </Link>
                </Box>
            </Container>
        </>
    );

}
