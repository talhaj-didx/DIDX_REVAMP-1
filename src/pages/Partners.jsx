import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Container,
  Paper,
} from "@mui/material";
import { gsap } from "gsap";

import { FaTrophy } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

export default function Partners() {
  const sectionRef = useRef([]);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  const partners = [
    {
      name: "TELINTA",
      img: "https://via.placeholder.com/300x200?text=Telinta",
      desc: "Founded in 2002, Telinta offers highly reliable cloud-based Switching and Billing solutions for VoIP service providers...",
      link: "https://www.telinta.com/",
    },
    {
      name: "NEW CONCEPT TECHNOLOGIES (NCT)",
      img: "https://via.placeholder.com/300x200?text=NCT",
      desc: "New Concept Technologies (NCT) is a leading application development and telecommunication company...",
      link: "https://newconcepttechnologies.com/",
    },
    {
      name: "CX INNOVATING COMMUNICATIONS",
      img: "https://via.placeholder.com/300x200?text=CX",
      desc: "CX maintains a global presence with offices worldwide in the US, the UK, Germany, France, Japan, and more...",
      link: "https://www.3cx.com/",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
      >
        Our Partners
      </Typography>

      {partners.map((partner, index) => (
        <Box key={index} ref={(el) => (sectionRef.current[index] = el)} mb={8}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              {/* Image */}
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={partner.img}
                  alt={partner.name}
                  sx={{
                    width: "100%",
                    height: { xs: 200, md: 250 },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Grid>

              {/* Content */}
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  {partner.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                  }}
                >
                  {partner.desc}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={partner.link}
                  target="_blank"
                  sx={{ textTransform: "none", fontSize: "1rem" }}
                >
                  Visit
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* Divider with Trophy */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={6}
          >
            <Divider sx={{ flex: 1 }} />
            {/* <FontAwesomeIcon
              icon={FaTrophy}
              style={{
                margin: "0 16px",
                fontSize: "24px",
                color: "#9e9e9e",
              }}
            /> */}

            <FaTrophy
              style={{
                margin: "0 16px",
                fontSize: "24px",
                color: "#9e9e9e",
              }}
            />
            <Divider sx={{ flex: 1 }} />
          </Box>
        </Box>
      ))}
    </Container>
  );
}
