import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

const GridCard = ({props}) => {
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
    }, [props.data]);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
            }}
        >
            {props.data
                ? props.data.map((d, i) => (
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
                        <i
                            className={d.icon}
                            style={{
                                fontSize: "48px",
                                marginBottom: "15px",
                                color: "#FFFFFF" // 🎨 highlight color (change as needed)
                            }}
                        ></i>
                        <h3 style={{ marginBottom: "10px" }}>{d.title}</h3>
                        <p style={{ fontSize: "15px", color: "#555" }}>{d.text}</p>
                    </div>
                ))
                : "Loading..."}
        </div>
    )
}

export default GridCard
