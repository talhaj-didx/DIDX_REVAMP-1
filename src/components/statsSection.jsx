import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUsers,
  FaGlobe,
  FaPhone,
  FaMoneyBill,
  FaCode,
  FaDollarSign,
  FaCommentDots,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    // Create a GSAP context to cleanup on unmount
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return; // ensure element exists

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.15,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  const stats = [
    { icon: <FaUsers size={28} color="#0083A0" />, text: "25,000 Members" },
    { icon: <FaGlobe size={28} color="#0083A0" />, text: "90+ Nations" },
    { icon: <FaPhone size={28} color="#0083A0" />, text: "17+ Million Numbers" },
    { icon: <FaMoneyBill size={28} color="#0083A0" />, text: "No Membership Fee" },
    { icon: <FaCode size={28} color="#0083A0" />, text: "Free API" },
    { icon: <FaDollarSign size={28} color="#0083A0" />, text: "Low Monthly Rates" },
    { icon: <FaCommentDots size={28} color="#0083A0" />, text: "Short Code Inbound" },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        background: "linear-gradient(to right, #f9f9f9, #eef6ff)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "18px",
              fontWeight: "600",
              color: "#333",
              background: "white",
              padding: "18px 24px",
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                duration: 0.3,
              })
            }
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                duration: 0.3,
              })
            }
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
