import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, TextField, Button, Container, Paper } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";

export default function Login() {
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
          bgcolor: "background.default",
          px: 2,
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
              Login to your account
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary", fontSize: 15, justifySelf: 'center' }}>
              Or{" "}
              <Link
                to="/signup"
                style={{ color: "linear-gradient(135deg, #0083A0, #5ca9fb", fontWeight: 500, textDecoration: "none" }}
              >
                signup if you don&apos;t have an account
              </Link>
            </Typography>

            <Box
              component="form"
              action="https://admin.didx.net/LoginAction.php"
              method="POST"
              noValidate
            >
              <TextField
                fullWidth
                margin="normal"
                label="UID *"
                name="UID"
                required
                variant="outlined"
              />

              <TextField
                fullWidth
                margin="normal"
                label="Password *"
                type="password"
                name="Pass"
                required
                variant="outlined"
              />

              <Box sx={{ my: 1 }}>
                <Link
                  to="/reset-password"
                  style={{ color: "linear-gradient(135deg, #0083A0, #5ca9fb)", fontWeight: 500, fontSize: "1.25rem" }}
                >
                  Forget Password?
                </Link>
              </Box>

              <Typography variant="body1" sx={{ fontWeight: 600, mt: 2, fontSize: "1.25rem" }}>
                Captcha *
              </Typography>

              <Box
                sx={{
                  my: 3,
                  width: "100%",
                  display: "flex",
                  // justifyContent: "center",
                  "& .g-recaptcha": {
                    transform: "scale(1)",
                    transformOrigin: "center",
                  },
                  // Responsive scaling
                  "@media (max-width: 400px)": {
                    "& .g-recaptcha": {
                      transform: "scale(0.85)",
                    },
                  },
                  "@media (max-width: 350px)": {
                    "& .g-recaptcha": {
                      transform: "scale(0.75)",
                    },
                  },
                }}
              >
                <Box
                  className="g-recaptcha"
                  data-sitekey="6Le4oD0UAAAAAC5rb6AJF6TQjUYXSo76OwzsQ1Vd"
                />
              </Box>


              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.2,
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  background: "linear-gradient(135deg, #0083A0, #5ca9fb)"
                }}
              >
                Sign in
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Contact data={landingPageData.Contact} />
    </>
  );
}
