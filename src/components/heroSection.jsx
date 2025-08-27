import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroSection = ({ titleA, titleB, description, img }) => {
    const heroRef = useRef(null);


    useGSAP(() => {
        // HERO animations
        const heroTl = gsap.timeline();
        heroTl.from(heroRef.current.querySelectorAll("h1 span"), {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out"
        })
            .from(heroRef.current.querySelector("p"), {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .from(heroRef.current.querySelector("img"), {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.4");

        // Background glow subtle pulse
        gsap.to(".about-hero__glow", {
            scale: 1.1,
            opacity: 0.7,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Globe Spin Animation
       if (img) { gsap.to(heroRef.current.querySelector("img"), {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "linear"
        });
        }

    }, []);

    return (
        <>
            {/* HERO */}
            <section ref={heroRef} className="about-hero">
                <div className="about-hero__content container">
                    {img ? <div className="about-hero__art">
                        <img src={img} alt="Team collaborating" loading="eager" />
                    </div>
                    : <></>
                    }
                    <div className="about-hero__text">
                        <h1>
                            {titleA ?? ''} {titleB ? <span>{titleB}</span> : ''}
                        </h1>
                        <p>
                            {description ?? ''}
                        </p>
                    </div>
                </div>
                <div className="about-hero__glow" />
            </section>

        </>
    )
}

export default HeroSection
