import React, { useRef } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function DidxRatesSection() {
  const rootRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(rootRef.current, { opacity: 0, y: 24, duration: 0.6 });
    tl.from(leftColRef.current, { x: -20, opacity: 0, duration: 0.6 }, "-=");
    tl.from(cardsRef.current.querySelectorAll('.card'), { y: 16, opacity: 0, stagger: 0.08, duration: 0.45 }, "-=");
  });

  return (
    <Box
      ref={rootRef}
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 12 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // background: 'linear-gradient(180deg,#f7fafc, #ffffff)'
      }}
    >
      <Paper elevation={0} sx={{ borderRadius: 3, p: { xs: 3, md: 6 }, width: "100%" }}>
        <Grid container spacing={8} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box ref={leftColRef}>
              <List disablePadding>
                <ListItem
                  sx={{
                    alignItems: "flex-start",
                    mb: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 3,
                      borderRadius: 2,
                    },
                     padding: "35px"
                  }}
                >
                  <InfoIcon sx={{ mr: 2, mt: 0.5, fontSize: 36, color: 'primary.main' }} />
                  <ListItemText
                    primary={
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Basic Membership
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mt: 1, lineHeight: 1.6 }}
                      >
                        Basic membership on DIDX is free. Member gets 2 free DIDs for 30
                        days to explore services. Accounts must be activated to buy/sell.
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider component="li" sx={{ my: 3 }} />

                <ListItem
                  sx={{
                    alignItems: "flex-start",
                    mb: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 3,
                      borderRadius: 2,
                    },
                     padding: "35px"
                  }}
                >
                  <AccountCircleIcon sx={{ mr: 2, mt: 0.5, fontSize: 36, color: 'primary.main' }} />
                  <ListItemText
                    primary={
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Regular Membership
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mt: 1, lineHeight: 1.6 }}
                      >
                        Zero setup charge · Zero monthly charge. Sellers do not pay listing
                        or brokerage fees. A monthly minimum quantity charge of $50 applies
                        when buyers do not have at least 50 purchased numbers OR domestic
                        USA sellers have at least 500 numbers OR international sellers have
                        at least 50 numbers for sale on DIDX.
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider component="li" sx={{ my: 3 }} />

                <ListItem
                  sx={{
                    alignItems: "flex-start",
                    mb: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 3,
                      borderRadius: 2,
                    },
                     padding: "35px"
                  }}
                >
                  <MonetizationOnIcon sx={{ mr: 2, mt: 0.5, fontSize: 36, color: 'primary.main' }} />
                  <ListItemText
                    primary={
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Listing Charges
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mt: 1, lineHeight: 1.6 }}
                      >
                        There is NO CHARGE to list your numbers on DIDX to sell them. DIDX
                        is for wholesale customers only. If you need fewer than 50 numbers
                        please visit virtualphoneline.com.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>

              <Box sx={{ mt: 6,justifySelf:'center', gap: 10 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CreditCardIcon />}
                  sx={{
                    mr: 2,
                    fontSize: "1.1rem",
                    py: 1.5,
                    px: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: 6,
                    },
                  }}
                >
                  Log in to view rates
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    fontSize: "1.1rem",
                    py: 1.5,
                    px: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: 6,
                    },
                  }}
                >
                  Contact Support
                </Button>
              </Box>

            </Box>
          </Grid>

          <Grid item xs={12} md={6}  sx={{marginLeft: 30,marginRight: 30, flex:1, justifyContent:'center', alignItems:"center"}}>
            <Box ref={cardsRef} sx={{ display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
              <Paper className="card" elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                  <Chip icon={<AccountCircleIcon />} label="Basic" size="medium" />
                  Free Trial
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                  2 free DIDs for 30 days. Activation required to transact.
                </Typography>
              </Paper>

              <Paper className="card" elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                  <Chip icon={<MonetizationOnIcon />} label="Regular" size="medium" />
                  Wholesale
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                  No setup or monthly charge. Sellers keep control of pricing. Minimum charges apply in certain low-volume scenarios.
                </Typography>
              </Paper>

              <Paper className="card" elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                  <Chip icon={<InfoIcon />} label="Listing" size="medium" />
                  No Listing Fee
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                  List your DIDs for sale without charge. DIDX is targeted at wholesale customers.
                </Typography>
              </Paper>

              <Paper className="card" elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                  <Chip icon={<CreditCardIcon />} label="Note" size="medium" />
                  How to view rates
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                  Vendor/Seller sets each DID price — log in to your DIDX account to view live rates for specific numbers.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
