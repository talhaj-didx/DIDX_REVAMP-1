import React, { useRef } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoSection = ({ title, description, imageUrl, imageAlt, imagePosition }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    // Animate from left or right based on imagePosition
    gsap.fromTo(
      el,
      { 
        opacity: 0, 
        x: imagePosition === "left" ? -100 : 100 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // when section enters viewport
          toggleActions: "play none none none",
        }
      }
    );
  }, [imagePosition]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: imagePosition === "left" ? "row" : "row-reverse",
        },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        py: 8,
        px: { xs: 2, md: 1 },
        maxWidth: "1200px",
        mx: "auto",
        background: imagePosition === "left" ? "#FBFBFB" : "transparent",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={imageUrl}
        alt={imageAlt}
        sx={{
          width: "100%",
          maxWidth: 500,
          borderRadius: 2,
          boxShadow: 3,
        }}
      />

      {/* Text */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {title}
        </Typography>
        <Typography
          color="text.primary"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: "#8A1538",
            color: "#8A1538",
            "&:hover": { backgroundColor: "#8A1538", color: "#fff" },
          }}
        >
          Learn more
        </Button>
      </Box>
    </Box>
  );
};

export default InfoSection;
