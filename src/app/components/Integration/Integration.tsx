"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const LogoHolder = ({ src, srcBlurred }: any) => {
  // Use a ref to target the specific logo holder element
  const logoHolderRef = useRef(null);
  const blurredRef = useRef(null); // Use a ref for the blurred image

  useEffect(() => {
    // Make sure the ref is defined
    if (!logoHolderRef.current || !blurredRef.current) return;

    const logoHolder: any = logoHolderRef.current;
    const blurredImage: any = blurredRef.current;

    // Function to handle mouse movement for tilt effect
    const onMouseMove = (e: any) => {
      const rect = logoHolder.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2.8;
      const y = e.clientY - rect.top - rect.height / 2.8;

      // Apply tilt effect
      gsap.to(logoHolder, {
        x: x / 20,
        y: y / 20,
        rotateX: -y / 2, // Subtle tilt on X axis
        rotateY: x / 2, // Subtle tilt on Y axis
        transformPerspective: 1000,
        transformOrigin: 'center center', // Origin for the tilt effect
        transformStyle: 'preserve-3d',
        duration: 0.5,
        ease: 'power2.out',
      });

      // Make the blurred image visible
      gsap.to(blurredImage, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Function to reset the tilt and hide blurred image on mouse leave
    const onMouseLeave = () => {
      gsap.to(logoHolder, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        transformStyle: 'preserve-3d',
        ease: 'power2.out',
      });

      // Hide the blurred image
      gsap.to(blurredImage, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Attach event listeners to the logo holder element
    logoHolder.addEventListener('mousemove', onMouseMove);
    logoHolder.addEventListener('mouseleave', onMouseLeave);

    // Cleanup on unmount
    return () => {
      if (logoHolder) {
        logoHolder.removeEventListener('mousemove', onMouseMove);
        logoHolder.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={logoHolderRef} className="logo-holder">
      <img src={src} alt="" className="logo-image" />
      <img
        ref={blurredRef}
        src={srcBlurred}
        alt=""
        className="logo-image blured"
        style={{ opacity: 0 }} // Start with the blurred image hidden
      />
    </div>
  );
};


const Integration = () => {
  useEffect(() => {
    // Effect 1: Scroll up/down effect on iPhone image
    const iphoneImage = document.querySelector(
      ".iphone-holder-effortlessly-integration"
    );
    const initialPosition = window.innerHeight / 2; // Start half off-screen
    const targetPosition = window.innerHeight * 2.8; // Move up by 80% of screen height

    gsap.set(iphoneImage, { y: initialPosition }); // Set initial position

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollTarget = targetPosition - scrollPosition * 0.5; // Move up as you scroll down
      gsap.to(iphoneImage, {
        y: scrollTarget,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", onScroll);

    // Effect 2: Move logo-holder-effortlessly-integration based on mouse movement
    const logoHolderEffortlessly = document.querySelector(
      ".logo-holder-effortlessly-integration"
    );
    const onMouseMove = (e: any) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      // Correct the movement direction to make it intuitive
      const movementX = -(mouseX / windowWidth - 0.5) * 30; // Adjust 30 for sensitivity
      gsap.to(logoHolderEffortlessly, {
        x: movementX,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  useEffect(() => {
    // Select all elements with the class '.fade-in-move-on-scroll'
    const elements = document.querySelectorAll('.fade-in-move-on-scroll');

    elements.forEach((element) => {
      // Apply fade-in and move up effect
      gsap.fromTo(
        element,
        { opacity: 0, y: 20 }, // Initial state (faded out, slightly moved down)
        {
          opacity: 1,
          y: 0, // Move to original position
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Start animation when element is 80% from the top of the viewport
            toggleActions: 'play none none reverse', // Play animation on entering, reverse on leaving
          },
        }
      );
    });
  }, []);
  return (
    <section id="integration" className="section">
      <div
        data-w-id="c78f219d-acfe-cf0c-7273-cb7eb8df08a1"
        className="effortlessly-integration-section"
      >
        <div className="container">
          <div className="effortlessly-integration-container">
            <div className="center-title">
              <div className="title-holder">
                <div className="fade-in-move-on-scroll">
                  <h1 className="title">Effortlessly integration</h1>
                </div>
                <div className="fade-in-move-on-scroll">
                  <div className="experience-paragraph-holder">
                    <p>
                      Fly through your tasks with rapid-fire keyboard shortcuts
                      for everything. Literally everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="effortlessly-integration-wrapper">
          <div className="iphone-holder-effortlessly-integration">
            <div className="effortlessly-integration---iphone-holder">
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
                loading="eager"
                sizes="(max-width: 479px) 200px, (max-width: 991px) 319.9921875px, 429.9921875px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
                alt=""
                className="iphone-image"
              />
              <div className="iphone-screen">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp"
                  loading="eager"
                  alt=""
                  sizes="390.453125px"
                  srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp 729w"
                  className="iphone-screen-image"
                />
              </div>
              <div className="iphone-drop-shadow low"></div>
            </div>
          </div>
          <div className="logo-holder-effortlessly-integration">
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b111e716be949163b3_Logo%2002.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b111e716be949163b3_Logo%2002.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b03a6a5b6b9ad808b9_Logo%2004.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b03a6a5b6b9ad808b9_Logo%2004.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0ef6aafb872f476c0_Logo%2003.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0ef6aafb872f476c0_Logo%2003.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0fcbe5256623e55f9_Logo%2005.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0fcbe5256623e55f9_Logo%2005.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
            />
            <LogoHolder
              src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b1077974fadc0c776c_Logo%2006.svg"
              srcBlurred="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b1077974fadc0c776c_Logo%2006.svg"
            />
          </div>
          <div className="light-holder"></div>
          <div className="workflow-section">
            <div className="fade-in-move-on-scroll">
              <div className="card-title">
                Integrates with your workflow do need to change
              </div>
            </div>
            <div className="fade-in-move-on-scroll">
              <div className="experience-paragraph-holder">
                <p>
                  Fly through your tasks with rapid-fire keyboard shortcuts for
                  everything. Literally everything.
                </p>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
