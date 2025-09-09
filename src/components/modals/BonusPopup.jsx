import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.7)",
          p: 2,
          zIndex: 1300,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 6,
            position: "relative",
            borderRadius: 3,
            width: "100%",
            maxWidth: { xs: 320, sm: 400, md: 480 },
            textAlign: "center",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 12, right: 12, color: "grey.600" }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>

          {/* Logo */}
          <Box mb={2}>
            <Box
              component="img"
              src="/img/didx-logo.png"
              alt="DIDx.net"
              sx={{ mx: "auto", height: 100 }}
            />
            <Typography
              variant="h4"
              sx={{ mt: -1, display: "block", color: "text.primary" }}
            >
              Wholesale VoIP Phone Number Service Provider
            </Typography>
          </Box>

          {/* Bonus Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              color: "#28294dff",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
            }}
          >
            $10 Bonus!
          </Typography>

          <Typography variant="h4" sx={{ mb: 1 }}>
            Share your email for
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontStyle: "italic",
              color: "#be4385ff",
            }}
          >
            Exclusive Deals!
          </Typography>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              type="email"
              label="Your Email Address"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" size="large">
              Subscribe
            </Button>
          </Box>

          {/* Footer Text */}
          <Typography
            variant="body1"
            sx={{ display: "block", mt: 2, color: "text.secondary" }}
          >
            By sharing your email address, you agree to receive marketing emails
            and consent to our Terms & Conditions and Privacy Policy.
          </Typography>

          {/* Status Message */}
          {status && (
            <Typography
              variant="body1"
              sx={{ mt: 2, fontWeight: 500, color: "success.main" }}
            >
              {status}
            </Typography>
          )}
        </Paper>
      </Box>
    </Modal>
  );
}
