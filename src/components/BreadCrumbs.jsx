import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BreadCrumb({ title }) {
  const breadcrumbRef = useRef(null);

  // Animate breadcrumbs on load
  useGSAP(() => {
    gsap.from(breadcrumbRef.current?.children, {
      opacity: 0,
      y: -10,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  });

  // Get current path
  const path = window.location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb-container" ref={breadcrumbRef}>
      <div className="breadcrumb-content">
        {/* Title */}
        <h1 className="breadcrumb-title">
          {title.split("|")[0]}
        </h1>

        {/* Breadcrumb navigation */}
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <div className="breadcrumb-list">
            {/* Home link */}
            <Link to="/" className="breadcrumb-item breadcrumb-item--home">
              <FaHome className="breadcrumb-icon" />
              <span>Home</span>
            </Link>

            {/* Dynamic path */}
            {path.map((item, index) => {
              const isLast = index === path.length - 1;
              const formatted = item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, ' ');

              return (
                <React.Fragment key={index}>
                  <FaChevronRight className="breadcrumb-separator" />
                  {isLast ? (
                    <span className="breadcrumb-item breadcrumb-item--current">
                      {formatted}
                    </span>
                  ) : (
                    <Link to={`/${item}`} className="breadcrumb-item breadcrumb-item--link">
                      {formatted}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
