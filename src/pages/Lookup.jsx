"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import BreadCrumb from "../components/BreadCrumbs";
import { Contact } from "../components/contact";


export const metadata = {
    title: "Local Number Portability (LNP) Lookup",
};

export default function Lookup() {
    const formRef = useRef(null);
    


    // Animate form on mount
    useGSAP(() => {
        gsap.from(formRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        });
    });

    return (
        <>
            <BreadCrumb title={metadata.title} />

            <Box
                component="main"
                sx={{
                    minHeight: "calc(100vh - 64px)",
                    px: { xs: 2, sm: 4, md: 8, lg: 16 },
                    py: { xs: 4, sm: 6, md: 8 },
                    bgcolor: "background.default",
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        ref={formRef}
                        elevation={3}
                        sx={{
                            p: { xs: 3, sm: 4 },
                            borderRadius: 3,
                            backgroundColor: "white",
                        }}
                    >
                        {/* Heading (converted from your Tailwind example) */}
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: "uppercase",
                                mb: 3,
                                mt: 5,
                                fontWeight: 600,
                                fontSize: "1.5rem", // ~text-2xl
                                color: "text.secondary",
                            }}
                        >
                            {metadata.title}
                        </Typography>

                        {/* Form title with icon */}
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="text.primary"
                            display="flex"
                            alignItems="center"
                            gap={1.5}
                            mb={4}
                        >
                            <FaPhoneAlt style={{ color: "#2563eb" }} /> LNP Lookup
                        </Typography>

                        {/* DID input */}
                        <Box mb={4}>
                            <Typography
                                component="label"
                                htmlFor="did"
                                fontWeight="600"
                                color="text.secondary"
                                fontSize="0.9rem"
                                display="block"
                                mb={1}
                            >
                                DID Number <span style={{ color: "red" }}>*</span>
                            </Typography>
                            <TextField
                                id="did"
                                name="did"
                                type="tel"
                                required
                                placeholder="+1-555-222-5566"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    sx: { borderRadius: 2 },
                                }}
                            />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mt={1}
                                fontSize="0.75rem"
                            >
                                Enter the full number with country code.
                            </Typography>
                        </Box>

                        {/* Submit button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                fontWeight: "600",
                                fontSize: "1rem",
                                textTransform: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <FaSearch /> Search
                        </Button>
                    </Paper>
                </Container>
            </Box>
            <Contact />
        </>
    );
}
