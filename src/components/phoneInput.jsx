import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import countries from "../data/countries.json";

export default function PhoneInput({ title, name, required = true }) {
  const [countryCode, setCountryCode] = useState(
    countries[0]?.mobile_code || ""
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    const code = e.target.value; // ✅ keep the "+"
    setCountryCode(code);
    updateCombinedPhoneNumber(code, phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    let number = e.target.value;

    // ✅ Display formatted number
    const formatted = formatPhoneNumber(number);

    setPhoneNumber(formatted);
    updateCombinedPhoneNumber(countryCode, formatted);
  };

  const formatPhoneNumber = (number) => {
    // Remove non-digit characters
    number = number.replace(/\D/g, "");

    // If length is greater than 3, insert hyphen after area code
    if (number.length > 3) {
      number = `${number.slice(0, 3)}-${number.slice(3)}`;
    }

    return number;
  };

  const updateCombinedPhoneNumber = (code, number) => {
    // Remove hyphen for hidden field (E.164 format)
    const cleanNumber = number.replace(/\D/g, "");
    const combined = `${code}${cleanNumber}`; // e.g. "+97312345678"

    const hiddenInput = document.getElementById(`combined-${name}`);
    if (hiddenInput) hiddenInput.value = combined;
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        {title} {required ? "*" : null}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Country Code */}
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel>Code</InputLabel>
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            label="Code"
            size="small"
          >
            {countries.map((country) => (
              <MenuItem key={country.iso_code} value={country.mobile_code}>
                {country.flag_emoji} {country.mobile_code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Phone Number */}
        <TextField
          fullWidth
          size="small"
          type="tel"
          placeholder="234567890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          inputProps={{ maxLength: 14 }}
          required={required}
          color="primary"
        />
      </Box>

      {/* Hidden combined field (E.164 format) */}
      <input type="hidden" id={`combined-${name}`} name={name} />
    </Box>
  );
}
