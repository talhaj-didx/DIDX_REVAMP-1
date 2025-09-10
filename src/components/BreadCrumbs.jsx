import React, { useRef } from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaHome } from "react-icons/fa";

export default function BreadCrumb({ title }) {
  const breadcrumbRef = useRef(null);

  // Animate breadcrumbs on load
  useGSAP(() => {
    gsap.from(breadcrumbRef.current.children, {
      opacity: 0,
      y: -10,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  // ✅ Simulate path (in plain React, you can pass currentPath as prop or use react-router-dom)
  const path = window.location.pathname.split("/").filter(Boolean);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 64,
        // bgcolor: "#000000",
        background: "#3f6ab0",
        background: "linear-gradient(90deg, #0a4a75ff 0%, rgba(29, 34, 36, 1) 98%)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 6, xl: 12 },
        py: 2,
        mt: 10,
        gap: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" color="#ffffff">
        {title.split("|")[0]}
      </Typography>

      {/* Breadcrumb navigation */}
      <Breadcrumbs
        aria-label="breadcrumb"
        ref={breadcrumbRef}
        sx={{ fontSize: "1rem", fontWeight: 500, color: "#ffffff" }}
      >
        {/* Home link */}
        <Link
          href="/"
          underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#ffffff" }}
        >
          <FaHome size={14} /> Home
        </Link>

        {/* Dynamic path */}
        {path.map((item, index) => {
          const isLast = index === path.length - 1;
          const formatted = item.charAt(0).toUpperCase() + item.slice(1);

          return isLast ? (
            <Typography key={index} sx={{ fontSize: "1rem", color: "#ffffff" }} color="text.primary" fontWeight="bold">
              {formatted}
            </Typography>
          ) : (
            <Link
              key={index}
              href={`/${item}`}
              underline="hover"
              color="inherit"
            >
              {formatted}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
