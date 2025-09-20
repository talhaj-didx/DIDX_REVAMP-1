import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { 
  FaGlobe, 
  FaHeadphones, 
  FaShieldAlt, 
  FaDollarSign, 
  FaCode, 
  FaChartBar 
} from 'react-icons/fa';

const getIconComponent = (iconName) => {
  const iconMap = {
    'globe': FaGlobe,
    'headphones': FaHeadphones,
    'shield': FaShieldAlt,
    'dollar-sign': FaDollarSign,
    'code': FaCode,
    'chart-bar': FaChartBar
  };
  
  return iconMap[iconName] || FaGlobe; // Default to FaGlobe if icon not found
};

const GridCard = ({features}) => {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((el) => {
            if (!el) return;

            const handleMouseEnter = () => {
                gsap.to(el, {
                    scale: 1.08,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                });
            };

            const handleMouseLeave = () => {
                gsap.to(el, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "0 0px 0px rgba(0,0,0,0)",
                });
            };

            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, [features]);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
            }}
        >
            {features
                ? features.map((d, i) => {
                    const IconComponent = getIconComponent(d.icon);
                    return (
                        <div
                            key={`${d.title}-${i}`}
                            ref={(el) => (itemsRef.current[i] = el)}
                            style={{
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                padding: "25px",
                                borderRadius: "12px",
                                background: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // ✅ centers icon & text
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "48px",
                                    marginBottom: "15px",
                                    color: d.color || "#007bff", // Use color from API data
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <IconComponent />
                            </div>
                            <h3 style={{ marginBottom: "10px" }}>{d.title}</h3>
                            <p style={{ fontSize: "15px", color: "#555" }}>{d.description}</p>
                        </div>
                    );
                })
                : "Loading..."}
        </div>
    )
}

export default GridCard
