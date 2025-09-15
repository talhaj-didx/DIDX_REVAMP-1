import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeadershipQuote = () => {
    useGSAP(() => {
        gsap.from(".quote-img", {
            scrollTrigger: {
                trigger: ".quote-section",
                start: "top 80%",
            },
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "back.out(1.7)",
        });

        gsap.from(".quote-text", {
            scrollTrigger: {
                trigger: ".quote-section",
                start: "top 80%",
            },
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
        });
    }, []);

    return (
        <section
            className="quote-section"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "50px 20px",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                pointerEvents:'none'
            }}
        >
            {/* Dark overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "1000px",
                    width: "100%",
                    gap: "25px",
                }}
            >
                {/* Profile Image */}
                <div className="quote-img" style={{ flexShrink: 0 }}>
                    <img
                        src="https://randomuser.me/api/portraits/men/47.jpg"
                        alt="Leader"
                        style={{
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            border: "4px solid white",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* Quote & Info */}
                <div className="quote-text" style={{ maxWidth: "600px" }}>
                    <p
                        style={{
                            fontSize: "16px",
                            lineHeight: 1.5,
                            fontStyle: "italic",
                            marginBottom: "20px",
                        }}
                    >
                        Our founder Rehan Allahwala calls DIDX as an ACCIDENT, many people were behind the entire System like Mr Khurram Shafi, Umair Bari, Danish Moosa and Sajid who wrote DIDX as his internship project.

                        Since then the system has been re-created, written and evolved over the years to become one of the largest Phone Number network of the world.
                    </p>
                    <p style={{ fontWeight: "600", marginBottom: "4px" }}>Rehan Allahwala</p>
                    <p
                        style={{
                            fontSize: "13px",
                            color: "#ccc",
                            marginBottom: "20px",
                        }}
                    >
                        President and Chief Executive Officer, Insight
                    </p>

                    <button
                        style={{
                            backgroundColor: "white",
                            color: "#C2185B",
                            fontWeight: "600",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#f8dce5")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                    >
                        Meet our leadership
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LeadershipQuote;
