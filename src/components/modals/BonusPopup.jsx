import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  TextField,
  Paper,
  Fade,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FaGift, FaEnvelope, FaCheckCircle } from "react-icons/fa";

export default function BonusPopup({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("🎉 Thanks for subscribing!");
    setEmail("");
  };

  return (
    <Modal 
      open={open} 
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(8px)",
        }
      }}
    >
      <Fade in={open} timeout={500}>
        <Box
          className="bonus-popup-container"
          sx={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 1, sm: 2, md: 3 },
            zIndex: 1300,
          }}
        >
          <Paper
            className="bonus-popup-modal"
            elevation={24}
                        sx={{
                          position: "relative",
                          borderRadius: { xs: 2, sm: 3, md: 4 },
                          width: "100%",
                          maxWidth: { xs: "100vw", sm: "90vw", md: 600, lg: 650, xl: 700 },
                          maxHeight: { xs: "98vh", sm: "95vh", md: "90vh", lg: "85vh" },
                          overflow: "hidden",
                          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                          border: "1px solid rgba(0, 131, 160, 0.2)",
                          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                        }}
          >
            {/* Close button */}
            <IconButton
              onClick={handleClose}
              className="bonus-popup-close"
              sx={{ 
                position: "absolute", 
                top: { xs: 6, sm: 8, md: 12, lg: 16 }, 
                right: { xs: 6, sm: 8, md: 12, lg: 16 }, 
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                color: "#666",
                width: { xs: 32, sm: 36, md: 40 },
                height: { xs: 32, sm: 36, md: 40 },
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  color: "#000",
                },
                transition: "all 0.3s ease",
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            {/* Header Section with Dark Gradient */}
            <Box
              className="bonus-popup-header"
              sx={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                p: { xs: 2, sm: 3, md: 4, lg: 5 },
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.05\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.05\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.05\"/><circle cx=\"10\" cy=\"60\" r=\"0.5\" fill=\"white\" opacity=\"0.05\"/><circle cx=\"90\" cy=\"40\" r=\"0.5\" fill=\"white\" opacity=\"0.05\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
                  opacity: 0.4,
                }
              }}
            >
              {/* Gift Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 70, sm: 90 },
                    height: { xs: 70, sm: 90 },
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(0, 131, 160, 0.3), rgba(92, 169, 251, 0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(0, 131, 160, 0.5)",
                    boxShadow: "0 8px 32px rgba(0, 131, 160, 0.3)",
                  }}
                >
                  <FaGift 
                    size={32} 
                    color="white" 
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                  />
                </Box>
              </Box>

              {/* Bonus Title */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  color: "#ffffff",
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  letterSpacing: "-0.02em",
                }}
              >
                $10 Bonus!
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 1, 
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: { xs: "1.375rem", sm: "1.5rem", md: "1.75rem" },
                  fontWeight: 600,
                }}
              >
                Share your email for
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  fontStyle: "italic",
                }}
              >
                Exclusive Deals!
              </Typography>
            </Box>

            {/* Content Section */}
            <Box
              className="bonus-popup-content"
              sx={{
                p: { xs: 2, sm: 3, md: 4, lg: 5 },
              }}
            >
              {/* Logo and Tagline */}
              <Box 
                sx={{ 
                  textAlign: "center", 
                  mb: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/img/didx-logo.png"
                  alt="DIDx.net"
                  sx={{ 
                    height: { xs: 40, sm: 50, md: 60 },
                    mb: 2,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ 
                    color: "#666",
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    fontWeight: 500,
                    maxWidth: 400,
                    lineHeight: 1.5,
                  }}
                >
                  Wholesale VoIP Phone Number Service Provider
                </Typography>
              </Box>

              {/* Form */}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 3,
                  mb: 3,
                }}
              >
                <TextField
                  type="email"
                  label="Your Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#0083A0",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#0083A0",
                        borderWidth: 2,
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{ mr: 1, color: "#0083A0" }}>
                        <FaEnvelope size={18} />
                      </Box>
                    ),
                  }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #0083A0, #5ca9fb)",
                    borderRadius: 2,
                    py: 1.5,
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 4px 12px rgba(0, 131, 160, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #006a85, #4a9cf0)",
                      boxShadow: "0 6px 16px rgba(0, 131, 160, 0.4)",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get My $10 Bonus
                </Button>
              </Box>

              {/* Status Message */}
              {status && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    p: 2,
                    backgroundColor: "rgba(76, 175, 80, 0.1)",
                    borderRadius: 2,
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                    mb: 3,
                  }}
                >
                  <FaCheckCircle color="#4caf50" size={20} />
                  <Typography
                    variant="body1"
                    sx={{ 
                      fontWeight: 600, 
                      color: "#4caf50",
                      fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    }}
                  >
                    {status}
                  </Typography>
                </Box>
              )}

              {/* Footer Text */}
              <Typography
                variant="body2"
                sx={{ 
                  textAlign: "center", 
                  color: "#666",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                  lineHeight: 1.5,
                }}
              >
                By sharing your email address, you agree to receive marketing emails
                and consent to our{" "}
                <Box component="span" sx={{ color: "#0083A0", fontWeight: 600 }}>
                  Terms & Conditions
                </Box>{" "}
                and{" "}
                <Box component="span" sx={{ color: "#0083A0", fontWeight: 600 }}>
                  Privacy Policy
                </Box>.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
}
