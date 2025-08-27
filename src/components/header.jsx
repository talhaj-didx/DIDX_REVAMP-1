import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Header = (props) => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      repeat: -1, // infinite loop
      yoyo: true, // reverse back
      repeatDelay: 1.5, // pause before restarting
    });

    // Background overlay fade-in
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    )

      // Title animation
      .fromTo(
        titleRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )

      // Paragraph animation
      .fromTo(
        paragraphRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )

      // Button animation
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  // Button hover effect (keeps working separately)
  useEffect(() => {
    const btn = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay" ref={overlayRef}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 ref={titleRef}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p ref={paragraphRef}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  ref={buttonRef}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
