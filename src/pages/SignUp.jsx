import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Paper,
    MenuItem,
    InputAdornment,
    Checkbox,
    FormControlLabel,
    Select,
} from "@mui/material";
import countries from "../data/countries.json";

import ReferralCodeFromURL from "../components/ReferralCodeFromURL";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PhoneInput from "../components/phoneInput";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

export default function Signup() {
    const formRef = useRef(null);
    const landingPageData = JsonData;

    useEffect(() => {
        const loadReCaptcha = () => {
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };
        loadReCaptcha();
    }, []);

    useGSAP(() => {
        gsap.from(formRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    });

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    py: 24
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        ref={formRef}
                        elevation={6}
                        sx={{
                            p: { xs: 3, sm: 5 },
                            borderRadius: 3,
                        }}
                    >

                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 600, color: "text.primary", mb: 2, justifySelf: 'center' }}
                        >
                            Sign up to create your account
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary", fontSize: 15, justifySelf: 'center' }}>
                            Or{" "}
                            <Link
                                to="/login-page"
                                style={{ color: "linear-gradient(135deg, #0083A0, #5ca9fb", fontWeight: 500, textDecoration: "none" }}
                            >
                                login if you have an account
                            </Link>
                        </Typography>

                        {/* Form */}
                        <Box
                            component="form"
                            action="https://admin.didx.net/signup/NewSignupConfirm.php"
                            method="POST"
                            noValidate
                        >
                            {/* Email */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email *"
                                name="CEmail"
                                type="email"
                                placeholder="business emails only"
                                required
                                
                            />

                            {/* First Name */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="First Name *"
                                name="CFName"
                                placeholder="John"
                                required
                            />

                            {/* Last Name */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Last Name *"
                                name="CLName"
                                placeholder="Doe"
                                required
                            />

                            {/* I want to */}
                            <TextField
                                select
                                fullWidth
                                margin="normal"
                                label="I want to *"
                                name="custype"
                                defaultValue="0"
                                required
                            >
                                <MenuItem value="0">Buy DIDS on DIDX</MenuItem>
                                <MenuItem value="1">Sell DIDS on DIDX</MenuItem>
                            </TextField>

                            {/* Company Name */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Company Name *"
                                name="CCompany"
                                placeholder="John Cyber Inc"
                                required
                            />

                            {/* Company Website */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Company Website"
                                name="company-website"
                                placeholder="john-cyber.com"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">https://</InputAdornment>
                                    ),
                                }}
                            />

                            {/* Country */}
                            <TextField
                                select
                                fullWidth
                                margin="normal"
                                label="Country *"
                                name="CCountry"
                                defaultValue="AF"
                                required
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.iso_code} value={country.iso_code}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Phone Inputs */}
                            <PhoneInput title="Company Phone" name="HTel1" />
                            <PhoneInput title="Personal Phone" name="mobileno" />

                            {/* Referral Code */}
                            <ReferralCodeFromURL />

                            {/* Checkboxes */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
                                <FormControlLabel
                                    control={<Checkbox required name="agree1" />}
                                    label="I am or will be an Internet telephone service provider."
                                />
                                <FormControlLabel
                                    control={<Checkbox required name="agree2" />}
                                    label={
                                        <span>
                                            I have read the{" "}
                                            <Link to="/terms" style={{ fontWeight: 600, color: "#1976d2" }}>
                                                (terms)
                                            </Link>{" "}
                                            of service and fully agree to this.
                                        </span>
                                    }
                                />
                            </Box>

                            {/* Captcha */}
                            <Typography variant="body1" sx={{ mt: 2, fontWeight: 600 }}>
                                Captcha *
                            </Typography>
                            <Box
                                sx={{
                                    my: 3,
                                    display: "block",   // ✅ ensures captcha sits below checkboxes
                                    width: "100%",       // ✅ aligns properly in form
                                    "& .g-recaptcha": {
                                        transform: "scale(1)",
                                        transformOrigin: "center",
                                    },
                                    "@media (max-width: 400px)": {
                                        "& .g-recaptcha": { transform: "scale(0.85)" },
                                    },
                                }}
                            >
                                <Box
                                    className="g-recaptcha"
                                    data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"
                                />
                            </Box>

                            {/* Submit */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{
                                    py: 1.2,
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    textTransform: "none",
                                    background: "linear-gradient(135deg, #0083A0, #5ca9fb)",
                                }}
                            >
                                Sign up
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
            <Contact data={landingPageData.Contact} />
        </>
    );
}
