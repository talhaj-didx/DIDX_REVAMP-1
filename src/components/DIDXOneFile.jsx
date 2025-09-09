import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Button,
  Avatar,
} from "@mui/material";

// --- THEME (larger, legible typography) ---
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563eb" },
    secondary: { main: "#7c3aed" },
    background: { default: "#f7f8fb", paper: "#ffffff" },
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
    h1: { fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 },
    h2: { fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 },
    h3: { fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 },
    body1: { fontSize: "clamp(1.05rem, 1.2vw, 1.5rem)", lineHeight: 1.8 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 18 },
  shadows: [
    "none",
    "0 2px 10px rgba(0,0,0,.06)",
    ...Array(23).fill("0 10px 30px rgba(0,0,0,.08)"),
  ],
});

export default function DIDXOneFile() {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");

      gsap.utils.toArray(".reveal").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    },
    { scope: root }
  );

  // Image URLs (replace later with local assets)
  const heroImage =
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2100&auto=format&fit=crop"; // network fiber
  const sectionImg1 =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"; // servers
  const sectionImg2 =
    "/img/who.jpg"; // phone grid

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box ref={root}>
        {/* HERO */}
        {/* <Box
          sx={{
            position: "relative",
            minHeight: { xs: 520, md: 640 },
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", color: "#fff" }}>
              <Typography className="hero-title" variant="h1">
                DIDX — Global DID Number Marketplace
              </Typography>
              <Typography className="hero-sub" sx={{ mt: 2, opacity: 0.95 }}>
                Incorporated in Delaware since 2005. Built by Super Technologies —
                connecting carriers, operators, and platforms to a single exchange
                for phone numbers worldwide.
              </Typography>
              <Stack className="hero-cta" direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4, justifyContent: "center" }}>
                <Button size="large" variant="contained">Get Started</Button>
                <Button size="large" variant="outlined">Learn More</Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 4, justifyContent: "center" }}>
                {["Google", "IBM", "Microsoft"].map((p) => (
                  <Chip key={p} color="secondary" label={p} sx={{ fontWeight: 700 }} />
                ))}
              </Stack>
            </Box>
          </Container>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(60rem 20rem at 50% 120%, rgba(37,99,235,.35), transparent)",
              pointerEvents: "none",
            }}
          />
        </Box> */}

        {/* WHO WE ARE */}
        {/* <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} className="reveal">
              <Box
                component="img"
                src={sectionImg1}
                alt="Data center and telecom infrastructure"
                sx={{ width: "100%", borderRadius: 3, boxShadow: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6} className="reveal">
              <Typography variant="h2" gutterBottom>
                Who Are We?
              </Typography>
              <Typography>
                DIDX, incorporated in Delaware since 2005, has been working in the field of telecom solutions. More information on Super Technologies can be found at <b>supertec.com</b>.
              </Typography>
            </Grid>
          </Grid>
        </Container> */}

        {/* WHY WE DO */}
        <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
          <Card elevation={1} className="reveal" sx={{ p: { xs: 2, md: 3 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h1" gutterBottom>
                  Why Do We Do?
                </Typography>
                <Typography  variant="body1" sx={{ mb: 2 }}>
                  DIDX was created initially because we needed to buy phone numbers for our own services like <b>virtualphoneline.com</b> but when we went out there to look for numbers, no one was willing to sell in small quantities and being a small company we needed smaller quantities.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  One of the vendors told us they couldn’t sell fewer numbers because they didn’t have a billing system for small quantities. Our answer was: <b>Can we build something for you to bill us with?</b>
                </Typography>
                <Typography>
                  We thought if we solved this for them, a few dozen other companies might want to use us for billing—and perhaps 50 or so more could use DIDX. Little did we know that within a few years, over <b>30,000</b> phone companies would use it, and great names like Google, IBM, and Microsoft became our partners and customers.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={sectionImg2}
                  alt="Phones and telecom connectivity"
                  sx={{ width: "100%", borderRadius: 3, boxShadow: 2 }}
                />
              </Grid>
            </Grid>
          </Card>
        </Container>

        {/* WHAT WE DO */}
        {/* <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} className="reveal">
              <Typography variant="h2" gutterBottom>
                What Do We Do?
              </Typography>
              <Typography>
                DID Exchange is a VOIP-based wholesale DID Phone Number marketplace which can and is used by Mobile Operators, LECs, CLECs, IXCs, or other telecommunications service providers who offer or use any kind of <b>phone numbers</b> in their network.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
                {["Mobile Operators", "LECs", "CLECs", "IXCs", "Carriers", "Platforms"].map((t) => (
                  <Chip key={t} label={t} variant="outlined" sx={{ fontWeight: 700, mr: 1, mb: 1 }} />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} className="reveal">
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h3" gutterBottom>
                    Highlights
                  </Typography>
                  <Stack spacing={1.2}>
                    {[
                      "Wholesale DID number marketplace",
                      "Single integration to buy/sell numbers",
                      "Robust billing for small to massive qty",
                      "Trusted by 25,000+ telecom companies",
                    ].map((point, i) => (
                      <Stack key={i} direction="row" spacing={1} alignItems="center">
                        <Avatar sx={{ width: 28, height: 28 }}>✓</Avatar>
                        <Typography>{point}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container> */}

        {/* SINCE WHEN */}
        {/* <Box sx={{ background: "linear-gradient(180deg,#eef2ff, #ffffff)", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} className="reveal">
                <Typography variant="h2" gutterBottom>
                  Since When Are We Doing This?
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Our Founder <b>Rehan Allahwala</b>, who beta tested for Net2Phone in 1997 and worked with Jeff Pulver’s Free World Project #1, has been around since the birth of Voice over the Internet.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  He has invented services like <b>virtualphoneline.com</b>, <b>super-phone.com</b>, and <b>ip-pabx.com</b>. In 2005 he came up with the idea of <b>DID Exchange</b>, which eventually became <b>DIDX</b> and the most successful of them all.
                </Typography>
                <Typography>
                  DIDX was started in 2005 and formally launched in 2006 as a side project and now has over <b>25,000</b> telecom companies as members.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className="reveal">
                <Card>
                  <CardContent>
                    <Typography variant="h3" gutterBottom>
                      Timeline
                    </Typography>
                    <Stack spacing={2.5}>
                      {[
                        { year: "1997", text: "Beta tested for Net2Phone" },
                        { year: "2005", text: "Idea of DID Exchange — became DIDX" },
                        { year: "2006", text: "Formal launch of DIDX" },
                        { year: "Today", text: "25k+ member telecom companies" },
                      ].map((item) => (
                        <Stack key={item.year} direction="row" spacing={2} alignItems="center">
                          <Chip color="primary" label={item.year} />
                          <Typography>{item.text}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box> */}

        {/* RECOGNITION & TEAM */}
        {/* <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="reveal">
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h2" gutterBottom>
                    Recognition
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    DIDX has been honoured with many awards over the years from many countries.
                  </Typography>
                  <Button variant="contained" size="large" href="#" onClick={(e)=>e.preventDefault()}>
                    View Awards
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className="reveal">
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h2" gutterBottom>
                    Team
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Our founder Rehan Allahwala calls DIDX an ACCIDENT; many people were behind the entire system like <b>Mr Khurram Shafi</b>, <b>Umair Bari</b>, <b>Danish Moosa</b>, and <b>Sajid</b> who wrote DIDX as his internship project.
                  </Typography>
                  <Typography>
                    Since then, the system has been re-created, written, and evolved over the years to become one of the largest phone number networks in the world.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container> */}

        {/* CTA FOOTER */}
        {/* <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#0b1220", color: "#cbd5e1" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8} className="reveal">
                <Typography variant="h2" sx={{ color: "#fff" }} gutterBottom>
                  Ready to explore, buy, or sell DID numbers?
                </Typography>
                <Typography>
                  Join carriers and platforms using DIDX to streamline DID procurement and monetization with powerful billing and global reach.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className="reveal">
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button size="large" variant="contained" color="secondary">
                    Create Account
                  </Button>
                  <Button size="large" variant="outlined" sx={{ borderColor: "#94a3b8", color: "#e2e8f0" }}>
                    Talk to Sales
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,.12)" }} />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }}>
              <Typography sx={{ fontSize: "1rem", color: "#94a3b8" }}>
                © {new Date().getFullYear()} DIDX / Super Technologies
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  "Wholesale",
                  "API",
                  "Docs",
                  "Status",
                  "Contact",
                ].map((item) => (
                  <Chip key={item} label={item} variant="outlined" sx={{ color: "#cbd5e1", borderColor: "rgba(255,255,255,.2)" }} />
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box> */}
      </Box>
    </ThemeProvider>
  );
}