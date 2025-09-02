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
        onChange={(e) => setReferralCode(e.target.value)}
        InputProps={{
          readOnly: !!referralCode,
        }}
        placeholder="Enter referral code and get free $20"
      />
    </Box>
  );
}
