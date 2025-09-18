import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useData } from "../hooks/useData";

export const Header = ({data}) => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);


  // ✅ Safely destructure the first item
  const headerData = data?.[0] || {};
  const {
    title,
    description : paragraph,
    settings = {},
    data: nestedData = {}
  } = headerData;

  const {
    background_image,
    text_color,
    button_color
  } = settings;

  const { cta_link, cta_text } = nestedData;


  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5,
    });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 })
      .fromTo(titleRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(paragraphRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, "-=0.4");
  }, []);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseEnter = () => gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    const handleMouseLeave = () => gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: `url(${background_image || ""})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay" ref={overlayRef}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 ref={titleRef} style={{ color: text_color }}>
                  {title || "Loading"}
                  <span></span>
                </h1>
                <p ref={paragraphRef} style={{ color: text_color }}>
                  {paragraph || "Loading"}
                </p>

                <Link
                  to={cta_link || "/signup"}
                  className="btn btn-custom btn-lg page-scroll"
                  ref={buttonRef}
                  style={{
                    backgroundColor: button_color,
                    backgroundImage: `linear-gradient(to right, ${button_color || "#000"}, transparent)`
                  }}
                >
                  {cta_text || "Sign Up"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
