import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import YoutubeEmbed from "./others/youtubeEmbed"

export const Features = (props) => {
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
    <div id="features" className="text-center" style={{ paddingBottom: "10px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "40px", marginTop: "60px" }}>
          <h2>Features</h2>
        </div>

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
      </div>
       {/* YouTube Videos Section */}
         <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "60px",
          padding: "0 20px", // ✅ responsive padding instead of fixed 100px
          maxWidth: "1200px",
          margin: "60px auto 0",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "15px" }}>Features for DID Buyers</h3>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <YoutubeEmbed url="https://youtu.be/F0nW-qDuwNE" />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: "15px" }}>Features for DID Sellers</h3>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <YoutubeEmbed url="https://youtu.be/htC6S598onQ" />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};


// Features.js
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import YoutubeEmbed from "./others/youtubeEmbed"
// import { FaArrowRight } from "react-icons/fa";
// import ArrowIcon from "../icons/arrowIcon";

// gsap.registerPlugin(ScrollTrigger);

// const buyers = [
//   "Free API",
//   "No membership fee",
//   "Money back guarantee",
//   "Low monthly rates",
//   "Buy numbers for your VoIP service",
//   "Be a global service provider instantly",
//   "Automatic DID provisioning",
//   "36 hours free DID trial",
//   "Phone numbers from 1000s of cities worldwide",
//   "Regulatory management",
// ];

// const sellers = [
//   "Free API",
//   "No membership fee",
//   "No listing charges",
//   "We do your customer service",
//   "We do your provisioning",
//   "Your payment guaranteed",
//   "Only one interop",
//   "CLECs sell phone numbers",
//   "Regulatory management",
//   "Sell phone numbers to over 25,000 DIDX members",
// ];

// export const Features = (props) => {
//   const buyersRef = useRef([]);
//   const sellersRef = useRef([]);
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     // Animate Buyers Section
//     gsap.from(buyersRef.current, {
//       scrollTrigger: {
//         trigger: "#buyers-section",
//         start: "top 80%", // when top of section is 80% from top of viewport
//         toggleActions: "play none none none", // only play once
//       },
//       opacity: 0,
//       x: -40,
//       stagger: 0.12,
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     gsap.from(videoRefs.current[0], {
//       scrollTrigger: {
//         trigger: "#buyers-section",
//         start: "top 80%",
//       },
//       opacity: 0,
//       scale: 0.9,
//       duration: 0.7,
//       ease: "back.out(1.6)",
//     });

//     // Animate Sellers Section
//     gsap.from(sellersRef.current, {
//       scrollTrigger: {
//         trigger: "#sellers-section",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//       opacity: 0,
//       x: 40,
//       stagger: 0.12,
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     gsap.from(videoRefs.current[1], {
//       scrollTrigger: {
//         trigger: "#sellers-section",
//         start: "top 80%",
//       },
//       opacity: 0,
//       scale: 0.9,
//       duration: 0.7,
//       ease: "back.out(1.6)",
//     });
//   }, []);

//   const container = { maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" };
//   const section = { display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "center", marginBottom: "80px" };
//   const col = { flex: 1, minWidth: "300px" };
//   const h2 = { fontSize: 24, marginBottom: 20 };
//   const li = { marginBottom: 10, fontSize: 16, display: "flex", alignItems: "center" };

//   return (
//     <div style={{ background: "#f9f9f9" }}>
//       <div style={container}>
//         {/* Buyers */}
//         <div id="buyers-section" style={section}>
//           <div style={col}>
//             <h2 style={h2}>Features for DID Buyers</h2>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               {buyers.map((text, i) => (
//                 <li
//                   key={i}
//                   ref={(el) => (buyersRef.current[i] = el)}
//                   style={li}
//                 >
//                   <ArrowIcon />
//                   <span style={{ marginLeft: 8 }}>{text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div style={col} ref={(el) => (videoRefs.current[0] = el)}>
//             <YoutubeEmbed url="https://youtu.be/F0nW-qDuwNE" title="Features for DID Buyers" />
//           </div>
//         </div>

//         {/* Sellers */}
//         <div id="sellers-section" style={section}>
//           <div style={col} ref={(el) => (videoRefs.current[1] = el)}>
//             <YoutubeEmbed url="https://youtu.be/htC6S598onQ" title="Features for DID Sellers" />
//           </div>
//           <div style={col}>
//             <h2 style={h2}>Features for DID Sellers</h2>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               {sellers.map((text, i) => (
//                 <li key={i} ref={(el) => (sellersRef.current[i] = el)} style={li}>
//                   <ArrowIcon />  <span style={{ marginLeft: 8 }}>{text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }