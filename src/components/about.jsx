import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagicBento from "./animations/magicBento";
import FeatureBoxes from "./featuresBoxes";

export const About = (props) => {
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   // Entrance animation
  //   gsap.fromTo(
  //     imageRef.current,
  //     { x: -80, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
  //   );

  //   // Hover animations
  //   const img = imageRef.current;

  //   const handleMouseEnter = () => {
  //     gsap.to(img, {
  //       scale: 1.05,
  //       rotate: 2,
  //       duration: 0.4,
  //       ease: "power2.out",
  //       boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to(img, {
  //       scale: 1,
  //       rotate: 0,
  //       duration: 0.4,
  //       ease: "power2.out",
  //       boxShadow: "0 0px 0px rgba(0,0,0,0)",
  //     });
  //   };

  //   img.addEventListener("mouseenter", handleMouseEnter);
  //   img.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     img.removeEventListener("mouseenter", handleMouseEnter);
  //     img.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <div id="about">
      <div className="container">
      <div className="section-title text-center">
          <h2>Why Choose DIDX?</h2>
        </div>
      <>
      <FeatureBoxes />
      </>
      {/* <div className="row">
      
          <div className="col-xs-12 col-md-6">
            <img
              ref={imageRef}
              src="img/47630.jpg"
              className="img-responsive"
              alt="About us"
              style={{ cursor: "pointer" }}
            />
          </div>

     
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
