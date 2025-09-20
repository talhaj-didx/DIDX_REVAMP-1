// Event.jsx
import React, { useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BreadCrumb from "../components/BreadCrumbs";
import { useApi } from "../hooks/useApi";
import { eventsSection } from "../services/dataServices";

const metadata = {
  title: "DIDX Events",
};

export default function Events() {
  const containerRef = useRef(null);

  const { data } = useApi({
    queryKey: "events",
    queryFn: eventsSection
  })

  const { data: events } = data ?? {}

  useGSAP(() => {
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <BreadCrumb title={metadata.title} />

      <Container maxWidth="lg" sx={{ py: 8 }} ref={containerRef}>
        <Grid container spacing={4}>
          {events?.map((event, index) => (
            <Grid item xs={12} key={index} className="event-card">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: 4,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: 320 },
                    height: 200,              // fixed height
                    objectFit: "contain",       // fills the box and crops if needed
                    borderRadius: 2           // optional, for smooth corners
                  }}
                  image={event.image}
                  alt={event.title}
                />

                <CardContent sx={{
                  width: { xs: "100%", md: 800 },  // 👈 fixed width on larger screens
                  flexShrink: 0,            // prevents shrinking
                  overflowWrap: "break-word",     // 👈 ensures long words wrap
                  wordBreak: "break-word",
                }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {event.title}
                  </Typography>

                  <Box display="flex" alignItems="center" mb={1}>
                    <FaClock style={{ marginRight: 8, color: "#666" }} />
                    <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
                      {event.date}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={2}>
                    <FaMapMarkerAlt style={{ marginRight: 8, color: "#666" }} />
                    <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
                      {event.location}
                    </Typography>
                  </Box>

                  <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8, fontWeight: "bold" }}>
                    Booth#: {event.booth}
                  </Typography>

                  <Typography color="text.secondary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8 }}>
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container >
    </>
  );
}
