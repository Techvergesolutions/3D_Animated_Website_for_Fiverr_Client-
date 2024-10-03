"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';

const Experience = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');

    cards.forEach((card) => {
      // Function to calculate tilt and effects based on mouse position
      const handleMouseMove = (e:any) => {
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;

        // Calculate the mouse position relative to the card
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Reduce the rotation sensitivity
        const rotateX = -(mouseY / cardHeight - 0.5) * 15; // Rotate on X axis (up and down tilt)
        const rotateY = (mouseX / cardWidth - 0.5) * 15; // Rotate on Y axis (left and right tilt)

        // Apply tilt effect to card
        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 1,
          ease: 'power2.out',
        });

        // Move inner content slightly towards mouse position
        gsap.to(card.querySelector('.experience-card-text-holder'), {
          x: (mouseX - cardWidth / 2) / 15, // Slight move on X axis
          y: (mouseY - cardHeight / 2) / 15, // Slight move on Y axis
          duration: 1,
          ease: 'power2.out',
        });

        // Make the light element visible and follow the mouse
        gsap.to(card.querySelector('.light-wrapper-in-front'), {
          display: 'flex', // Ensure light is visible
          x: mouseX - cardWidth / 2, // Center light on X axis
          y: mouseY - cardHeight / 2, // Center light on Y axis
          opacity: 1, // Adjust light visibility
          duration: 1, // Make the light movement faster and smooth
          ease: 'power2.out',
        });
      };

      // Function to reset tilt, inner content, and light when mouse leaves
      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power2.out',
        });

        gsap.to(card.querySelector('.experience-card-text-holder'), {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });

        gsap.to(card.querySelector('.light-wrapper-in-front'), {
          x: 0,
          y: 0,
          opacity: 0, // Hide the light effect
          display: 'none', // Hide light when mouse leaves
          duration: 1,
          ease: 'power2.out',
        });
      };

      // Add mousemove and mouseleave event listeners
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup on unmount
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);
  return (
    <section id="experince" className="section">

      <div className="container">
        <div className="experience-section">
          <div className="center-title">
            <div className="title-holder">
              <h1 className="title">Experience your product as you create it.</h1>
            </div>
          </div>

          <div className="experience-cards-holder">
            <div className="experience-grid">
              <div id="w-node-_1261dedf-b3c9-2162-53e7-29ae1d8c7955-5ffe7f77" className="experience-wrapper">
                <div id="w-node-c9a3eb7f-e26e-bb52-e19d-39f848eddb94-5ffe7f77" data-w-id="c9a3eb7f-e26e-bb52-e19d-39f848eddb94" className="experience-card">
                  <div data-w-id="3488554c-fe1a-ba8d-8eaa-2749383949b9" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af0aa87013f8781a8f8cbd_Card%20Image%202.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder">
                      <div className="card-title">Effortlessly tracking with Black</div>
                      <div className="experience-paragraph-holder">
                        <p>Designed for you, Black is the perfect solution for you and your teams tracking time."</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_8c828c4b-063f-f20f-6482-b138be2c6dbe-5ffe7f77" className="experience-wrapper">
                <div id="w-node-_7c769986-af35-2c7e-a088-51a92c6e6099-5ffe7f77" className="experience-card">
                  <div data-w-id="43b2a4ae-f934-5a3a-60ec-4eb6ab66fd07" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder _02">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b541a3408b585cc412150d_Level.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder _02">
                      <div className="card-title">Save time your time</div>
                      <div className="experience-paragraph-holder">
                        <p>Available on iOS and Android, Black is accessible from any device.</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_7c369291-b38e-0008-5e70-efcc18461d4c-5ffe7f77" className="experience-wrapper">
                <div id="w-node-_7c369291-b38e-0008-5e70-efcc18461d4d-5ffe7f77" className="experience-card">
                  <div data-w-id="7c369291-b38e-0008-5e70-efcc18461d4e" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                      <div className="experience-card-image-holder smaller">
                          <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5423d3c47704dd913aa4c_Level%2002.webp" loading="lazy" alt="" className="experience-card-image" />
                          <div className="experience-gradient _02"></div>
                      </div>
                      <div className="experience-card-text-holder _02">
                       <div className="card-title">Tracking</div>
                        <div className="experience-paragraph-holder">
                          <p>Comes with built-in workflows that create focus and routine.</p>
                        </div>
                      </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_7a405be8-0a26-057e-3bd3-7289f3f9886f-5ffe7f77" className="experience-wrapper">
                <div id="w-node-_7a405be8-0a26-057e-3bd3-7289f3f98870-5ffe7f77" className="experience-card">
                  <div data-w-id="7a405be8-0a26-057e-3bd3-7289f3f98871" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-text-holder padding">
                      <div className="card-title">Experience seamless tracking</div>
                      <div className="experience-paragraph-holder">
                        <p>Awarded App of the day, Black has been recognized as the top choice for teams and individuals."</p>
                      </div>
                    </div>
                    <div className="experience-card-image-holder">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b543268f521ea5abefbdfa_Visitor%20Insights%2002.webp" loading="lazy" alt="" className="experience-card-image" />
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience
