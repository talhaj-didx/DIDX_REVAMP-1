import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FeaturesCard = ({data}) => {
    const blocksRef = useRef([]);
    const [activeModal, setActiveModal] = useState(null);

    useGSAP(() => {

        // CONTENT CARDS animation
        blocksRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 85%" },
                opacity: 0,
                x: i % 2 === 0 ? -60 : 60,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out"
            });

            // Icon entrance
            const icon = el.querySelector(".about-card__icon");
            if (icon) {
                gsap.from(icon, {
                    scrollTrigger: { trigger: el, start: "top 85%" },
                    scale: 0,
                    rotate: -90,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });

                // Hover effect (zoom out icon)
                el.addEventListener("mouseenter", () => {
                    gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "power2.out" });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.inOut" });
                });
            }
        });

    }, []);
    
    return (
        <>
            <section className="about-sections container">
                {data.map((card, i) => (
                    <article
                        className="about-card"
                        key={i}
                        ref={(el) => (blocksRef.current[i] = el)}
                        onClick={() => setActiveModal(card)} // open modal
                    >
                        <div className="about-card__icon">{card.icon}</div>
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                    </article>
                ))}

            </section>
            {/* MODAL */}
            {activeModal && (
                <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={() => setActiveModal(null)}>✖</button>
                        <div className="modal-icon">{activeModal.icon}</div>
                        <h2>{activeModal.title}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            facilisis, nunc et feugiat tempus, ligula felis faucibus lectus,
                            in ullamcorper sapien nisi vitae sapien. (Replace with real content later)
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default FeaturesCard
