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
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://customer.didx.net/test/subscription.php",
        {
          method: "POST",
          body: formData,
          mode: "cors",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const contentType = response.headers.get("content-type") || "";

      if (response.ok) {
        const result = contentType.includes("application/json")
          ? await response.json()
          : { message: "Subscription successful!" };

        setStatus({ type: "success", message: result.message });
        localStorage.setItem("formSubmitted", "true");

        setTimeout(() => {
          handleClose();
          setStatus({ type: "", message: "" });
        }, 2000);
      } else {
        const errorContent = contentType.includes("application/json")
          ? await response.json()
          : { message: "Subscription failed. Please try again." };

        setStatus({ type: "error", message: errorContent.message });
      }
    } catch (error) {
      console.error("Error during fetch request:", error);
      setStatus({
        type: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
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
        },
      }}
    >
      <Fade in={open} timeout={500}>
        <Box
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
            elevation={24}
            sx={{
              position: "relative",
              borderRadius: { xs: 2, sm: 3, md: 4 },
              width: "100%",
              maxWidth: { xs: "95vw", sm: "80vw", md: 480, lg: 520, xl: 560 },
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

            {/* Header Section */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                p: { xs: 2, sm: 3, md: 4, lg: 5 },
                textAlign: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: { xs: 70, sm: 90 },
                    height: { xs: 70, sm: 90 },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(0, 131, 160, 0.3), rgba(92, 169, 251, 0.3))",
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

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  color: "#ffffff",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                $10 Bonus!
              </Typography>

              <Typography
                variant="h5"
                sx={{ mb: 1, color: "rgba(255, 255, 255, 0.95)" }}
              >
                Share your email for
              </Typography>

              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#ffffff", fontStyle: "italic" }}
              >
                Exclusive Deals!
              </Typography>
            </Box>

            {/* Form Section */}
            <Box sx={{ p: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 3 }}
              >
                <TextField
                  type="email"
                  name="email"
                  label="Your Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
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
                  disabled={submitting}
                  sx={{
                    background: "linear-gradient(135deg, #0083A0, #5ca9fb)",
                    borderRadius: 2,
                  }}
                >
                  {submitting ? "Submitting..." : "Get My $10 Bonus"}
                </Button>
              </Box>

              {/* Status Message */}
              {status.message && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    p: 2,
                    backgroundColor:
                      status.type === "success"
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                    borderRadius: 2,
                    border:
                      status.type === "success"
                        ? "1px solid rgba(76, 175, 80, 0.3)"
                        : "1px solid rgba(244, 67, 54, 0.3)",
                    mb: 3,
                  }}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle color="#4caf50" size={20} />
                  ) : (
                    <CloseIcon sx={{ color: "#f44336", fontSize: 20 }} />
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: status.type === "success" ? "#4caf50" : "#f44336",
                    }}
                  >
                    {status.message}
                  </Typography>
                </Box>
              )}

              {/* Footer */}
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#666",
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
                </Box>
                .
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
}
