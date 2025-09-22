import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Team = ({ data }) => {
  
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const {
    title = "",
    description = "",
    data: { team_members = [] } = {},
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

      // Hover effects (auto cleaned up by contextSafe)
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
    { dependencies: [team_members], scope: sectionRef } // ✅ re-run if data changes
  );

  return (
    <div id="team" className="text-center" ref={sectionRef}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{title || "Meet the Team"}</h2>
          <p>
            {description || ''}
          </p>
        </div>
        <div id="row">
          {team_members
            ? team_members.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-md-4 col-sm-6 team"
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ cursor: "pointer" }}
              >
                <div className="thumbnail">
                  <img src={`https://didxhub.com/${d.photo}`} alt={d.name} className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.position}</p>
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
