import { useRef } from "react";
import { Box, Typography, Button, Divider, Container, Grid, Paper } from "@mui/material";
import { FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BreadCrumb from "../components/BreadCrumbs";
import { useApi } from "../hooks/useApi";
import { awardsSection } from "../services/dataServices";

export const metadata = {
  title: "DIDX Awards | DIDX",
};

export default function Awards() {
  const containerRef = useRef(null);

  const { data } = useApi({
    queryKey: "awards",
    queryFn: awardsSection
  })

  const { data: awards } = data ?? {}

  useGSAP(() => {
    gsap.from(containerRef.current.querySelectorAll(".award-item"), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <BreadCrumb title={metadata.title} />
      <Container maxWidth="lg" sx={{ py: 6 }} ref={containerRef}>
        {awards?.map((award, index) => (
          <Box key={index} className="award-item" sx={{ mb: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: 3,
              }}
            >
              <Box
                component="img"
                src={award.img}
                alt={award.title}
                sx={{
                  width: { xs: "100%", sm: 160, md: 200 },
                  height: "auto",
                  border: "1px solid #ccc",
                  borderRadius: 2,
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "text.primary", mb: 1, fontWeight: 600 }}
                >
                  {award.title}
                </Typography>
                <Typography
                  color="text.primary" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, lineHeight: 1.8, mb: 1 }}
                >
                  {award.desc ?? ""}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={award.link}
                  target="_blank"
                >
                  View More
                </Button>
              </Box>
            </Paper>

            {/* Trophy Divider */}
            {index < awards.length - 1 && (
              <Divider sx={{ my: 6 }}>
                <FaTrophy
                  style={{
                    fontSize: "3rem",
                    color: "#9e9e9e",
                    background: "#f5f5f5",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                />
              </Divider>
            )}
          </Box>
        ))}
      </Container>
    </>
  );
}
