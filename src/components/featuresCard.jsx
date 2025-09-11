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
                y: 50,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out"
            });

            // Icon entrance
            const icon = el.querySelector(".feature-card__icon");
            if (icon) {
                gsap.from(icon, {
                    scrollTrigger: { trigger: el, start: "top 85%" },
                    scale: 0,
                    rotate: -90,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });

                // Enhanced hover effects
                el.addEventListener("mouseenter", () => {
                    gsap.to(icon, { 
                        scale: 1.1, 
                        duration: 0.3, 
                        ease: "power2.out" 
                    });
                    gsap.to(el, { 
                        y: -8, 
                        duration: 0.3, 
                        ease: "power2.out" 
                    });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to(icon, { 
                        scale: 1, 
                        duration: 0.3, 
                        ease: "power2.inOut" 
                    });
                    gsap.to(el, { 
                        y: 0, 
                        duration: 0.3, 
                        ease: "power2.inOut" 
                    });
                });
            }
        });

    }, []);
    
    return (
        <>
            <section className="features-grid ">
                {data.map((card, i) => (
                    <article
                        className="feature-card"
                        key={i}
                        ref={(el) => (blocksRef.current[i] = el)}
                        onClick={() => setActiveModal(card)}
                    >
                        <div className="feature-card__header">
                            <div className="feature-card__icon">{card.icon}</div>
                            {/* <div className="feature-card__badge">
                                <span> {i + 1}</span>
                            </div> */}
                        </div>
                        
                        <div className="feature-card__content">
                            <h2 className="feature-card__title">{card.title}</h2>
                            <p className="feature-card__description">{card.text}</p>
                        </div>
                        
                        <div className="feature-card__footer">
                            <div className="feature-card__cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="feature-card__glow"></div>
                    </article>
                ))}

            </section>
            {/* Enhanced Modal */}
            {activeModal && (
                <div className="feature-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div
                        className="feature-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="feature-modal-close" onClick={() => setActiveModal(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <div className="feature-modal-header">
                            <div className="feature-modal-icon">{activeModal.icon}</div>
                            <h2 className="feature-modal-title">{activeModal.title}</h2>
                        </div>
                        
                        <div className="feature-modal-body">
                            <p className="feature-modal-description">
                                {activeModal.text}
                            </p>
                            <div className="feature-modal-features">
                                <div className="feature-modal-feature">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12"></polyline>
                                    </svg>
                                    <span>Professional Service</span>
                                </div>
                                <div className="feature-modal-feature">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12"></polyline>
                                    </svg>
                                    <span>24/7 Support</span>
                                </div>
                                <div className="feature-modal-feature">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12"></polyline>
                                    </svg>
                                    <span>Secure & Reliable</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="feature-modal-footer">
                            <button className="feature-modal-btn feature-modal-btn--primary">Get Started</button>
                            <button className="feature-modal-btn feature-modal-btn--secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FeaturesCard
