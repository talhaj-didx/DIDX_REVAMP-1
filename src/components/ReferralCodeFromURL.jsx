import { useEffect, useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

export default function ReferralCodeFromQuery() {
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("referral");
    if (code) {
      setReferralCode(code);
    }
  }, []);

  const handleReferralChange = (e) => {
    const value = e.target.value;
    // Allow any length, no character limit
    setReferralCode(value);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
      >
        Referral Code
      </Typography>
      <TextField
        id="referral"
        name="AffiliationCode"
        type="text"
        fullWidth
        autoComplete="off"
        value={referralCode}
        onChange={handleReferralChange}
        InputProps={{
          readOnly: false, // Allow editing
        }}
        placeholder="Enter referral code and get free $20"
        inputProps={{
          maxLength: 50, // Set a reasonable max length if needed
        }}
      />
    </Box>
  );
}
