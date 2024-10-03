"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

// Hero Section
const Hero = () => {
  useEffect(() => {
    const heroSticky: any = document.querySelector(".scroll");

  // Check if there's a saved scroll position in localStorage
  const savedScrollPosition = localStorage.getItem("scrollPosition");
  if (savedScrollPosition) {
    // Scroll to saved position
    window.scrollTo({
      top: parseInt(savedScrollPosition),
    });
  } else {
    // Fallback to scrolling to heroSticky if no saved position
    window.scrollTo({
      top: heroSticky.offsetTop,
    });
  }

  // Function to update scroll position in localStorage on scroll
  const updateScrollPosition = () => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  // Add scroll event listener to save position on scroll
  window.addEventListener("scroll", updateScrollPosition);
    const tl = gsap.timeline();

    // Initial tilt effect from 90 degrees to 0 degrees
    tl.fromTo(
      ".hero-text-wrapper._01",
      {
        transform: "perspective(500px) rotateX(86deg)", // Flat facing downward
        opacity: 0,
        transformOrigin: "center",
      },
      {
        transform: "perspective(500px) rotateX(0deg)", // Upright facing viewer
        opacity: 1,
        transformOrigin: "center",
        duration: 1,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      ".hero-text-wrapper._02",
      {
        transform: "perspective(500px) rotateX(86deg)",
        opacity: 0,
        transformOrigin: "center",
      },
      {
        transform: "perspective(500px) rotateX(0deg)",
        transformOrigin: "center",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5" // Start slightly earlier for smooth transition
    );

    // Shrink text and animate phone image
    tl.fromTo(
      ".hero-section-text-holder",
      {
        scaleX: 1.1,
        scaleY: 1.1,
        scaleZ: 1, // Default to 1 as `scaleZ` is often 1 for 2D effects
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        willChange: "transform",
        y: "-5%",
      },
      {
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        y: "0%",
        duration: 1,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      ".iphone-holder",
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    ).to(".navbar", { opacity: 1, duration: 1, ease: "power2.out" });

    // Delay mouse movement effect until animations complete
    tl.add((): any => {
      // Mouse movement effect (text repels, image attracts along x-axis)
      const handleMouseMove = (e: any) => {
        const heroSection: any = document.querySelector(".hero-container");
        const centerX = heroSection.offsetWidth / 2;
        const mouseX = e.clientX - heroSection.offsetLeft;

        // Image moves slightly toward mouse position
        const imageTranslateX = (mouseX - centerX) / 60; // Reduced sensitivity for subtle effect

        // Text moves slightly away from mouse position
        const textTranslateX = -(mouseX - centerX) / 80; // Reduced and inverted for repulsion

        gsap.to(".iphone-holder", {
          x: imageTranslateX,
          duration: 0.6, // Slower movement
          ease: "power2.out",
        });

        gsap.to(".hero-text-wrapper", {
          x: textTranslateX,
          duration: 0.6, // Slower movement
          ease: "power2.out",
        });
      };

      // Reset position on mouse leave
      const handleMouseLeave = () => {
        gsap.to(".iphone-holder, .hero-text-wrapper", {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      // Add mousemove and mouseleave event listeners
      const heroSection: any = document.querySelector(".hero-container");
      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup on unmount
      return () => {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section
      data-w-id="bbb1681c-62a0-7375-a529-1c7bec5a4a0e"
      className="section"
    >
      <div className="hero-container">
        <div className="container no-paddings">
          <div className="hero-section">
            <div className="hero-section-text-holder">
              <div className="hero-section-sticky">
                <div className="hero-sticky-holder">
                  <div className="hero-text-holder">
                    <div className="hero-text-wrapper _01">
                      <div className="hero-text">Meet</div>
                      <div className="hero-text-blur">Meet</div>
                    </div>
                    <div className="hero-text-wrapper _02">
                      <div className="hero-text _02">Black</div>
                      <div className="hero-text-blur">Black</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="iphone-holder">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 196.6796875px, 295.015625px"
                  srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
                  alt=""
                  className="iphone-image"
                />
                <div className="iphone-screen">
                  <img
                    src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 80vw, 267.875px"
                    srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp 729w"
                    className="iphone-screen-image"
                  />
                </div>
                <div className="iphone-drop-shadow"></div>
              </div>
              <div className="scroll"></div>
            </div>

            <div className="hero-section-paragraph-holder">
              <div className="hero-paragraph-holder">
                <p>
                  Effortlessly track and manage your time with Black.
                  Customizable reports, invoicing, and integrations make it the
                  perfect tool for freelancers and professionals.
                </p>
              </div>
              <div className="from-wra-er">
                <div className="form-block w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    data-wf-page-id="63aee5793ca698e95ffe7f77"
                    data-wf-element-id="5ea415ca-a921-34a0-1f6c-2725653f3203"
                    aria-label="Email Form"
                  >
                    <div className="from-holder">
                      <input
                        className="text-field-form w-input"
                        maxLength="256"
                        name="email-2"
                        data-name="Email 2"
                        placeholder="Enter Your Email"
                        type="email"
                        id="email-2"
                        required=""
                      />
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="button from w-button"
                        value="Start Free Trial"
                      />
                    </div>
                  </form>
                  <div
                    className="success-message w-form-done"
                    tabIndex="-1"
                    role="region"
                    aria-label="Email Form success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="error-message w-form-fail"
                    tabIndex="-1"
                    role="region"
                    aria-label="Email Form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logo-grid-holder">
            <div className="w-layout-grid logo-grid">
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcd8-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dceb85a1104ee0c8f5_Logo01.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcda-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc67bbed2fe0724574_Logo02.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcdc-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dccee58c6ac31a1ff8_Logo03.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcde-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc892ff685649d683b_Logo04.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce0-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc3ca6982d5900e42a_Logo05.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce2-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc0e332ae5dc9fe5e4_Logo06.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce4-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dcf706a1a426eb3608_Logo07.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce6-5ffe7f77"
                className="logo-small-container"
              >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc7013f86c8f8ee7f0_Logo08.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
            </div>

            <div className="fade-in-move-on-scroll">
              <p>Trusted by Top-tier product campanies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
