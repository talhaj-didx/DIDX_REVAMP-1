import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = ({data}) => {
  
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

   const {
    title = "",
    data: { testimonials = [] } = {},
  } = data?.[0] || {};

  useGSAP(
    (context, contextSafe) => {
      if (!sectionRef.current) return;

      // Animate cards on scroll
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Hover animations (contextSafe ensures cleanup on unmount)
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const handleEnter = contextSafe(() => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          });
        });

        const handleLeave = contextSafe(() => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          });
        });

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
      });
    },
    { dependencies: [testimonials], scope: sectionRef } // ✅ keeps it scoped + re-runs when data changes
  );

  return (
    <div id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-title text-center">
          <h2>{title || "What our clients say"}</h2>
        </div>
        <div className="row">
          {testimonials
            ? testimonials.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  ref={(el) => (cardsRef.current[i] = el)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.avatar} alt={d.name} />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.content}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
