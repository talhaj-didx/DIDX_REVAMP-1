import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FeatureBoxes = () => {
  const boxesRef = useRef([]);

  // ✅ useGSAP instead of useLayoutEffect
  useGSAP(() => {
    boxesRef.current.forEach((box, i) => {
      if (!box) return;
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.6,
        delay: i * 0.15,
        ease: "back.out(1.7)",
      });
    });
  }, []); // 👈 runs once

  const features = [
    { title: "DIDX Awards", color: "#003366", link: "/awards" },
    { title: "DIDX Partners", color: "#E6FAFA", textColor: "#003366", link: "/partners" },
    { title: "DIDX Members", color: "#FF9966", link: "#" },
    { title: "DIDX Events", color: "#33A8FF", link: "/events" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "60px 20px",
        paddingTop: "0",
      }}
    >
      {features.map((item, index) => (
        <a
          key={index}
          href={item.link}
          ref={(el) => (boxesRef.current[index] = el)}
          style={{
            flex: "1 1 200px",
            maxWidth: "300px",
            minHeight: "170px",
            backgroundColor: item.color,
            color: item.textColor || "white",
            fontWeight: "bold",
            fontSize: "30px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "15px",
            padding: "50px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              duration: 0.3,
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              boxShadow: "0 0px 0px rgba(0,0,0,0)",
              duration: 0.3,
            });
          }}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default FeatureBoxes;
