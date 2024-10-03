"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // Create refs for sections and navigation links
  const sectionsRef: any = useRef([]);
  const navLinksRef: any = useRef([]);

  useEffect(() => {
    // Get all sections and nav links on component mount
    sectionsRef.current = document.querySelectorAll('section[id]');
    navLinksRef.current = document.querySelectorAll('.nav-link-holder');

    // Set up GSAP ScrollTrigger for each section
    sectionsRef.current.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => updateNavLink(section.id),
        onEnterBack: () => updateNavLink(section.id),
      });
    });

    // Function to update active nav link
    const updateNavLink = (id: any) => {
      // Remove `w--current` from all links
      navLinksRef.current.forEach((link: any) =>
        link.classList.remove('w--current')
      );
      // Add `w--current` to the current section link
      const navLink = document.querySelector(`a[href="/#${id}"]`);
      if (navLink) navLink.classList.add('w--current');
    };

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header style={{ display: 'unset' }}>
      <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="500"
        data-doc-height="1"
      >
        <div className="container nav-container">
          <div className="nav-menu-container">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
              aria-label="home"
            >
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aef0ca917c0c177c433ef9_Black%20Logotype.svg"
                loading="lazy"
                alt=""
                className="brand-image"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-link">
                <div className="nav-link-active-holder">
                  <a
                    href="/#experince"
                    className="nav-link-holder w-inline-block"
                  >
                    <div className="nav-link-text-holder">
                      <div className="nav-link-text">Experience</div>
                    </div>
                  </a>
                </div>
                <div className="nav-link-active-holder">
                  <a
                    href="/#integration"
                    className="nav-link-holder w-inline-block"
                  >
                    <div className="nav-link-text-holder">
                      <div className="nav-link-text">Integration</div>
                    </div>
                  </a>
                </div>
                <div className="nav-link-active-holder">
                  <a
                    href="/#features"
                    className="nav-link-holder w-inline-block"
                  >
                    <div className="nav-link-text-holder">
                      <div className="nav-link-text">Features</div>
                    </div>
                  </a>
                </div>
                <div className="nav-link-active-holder">
                  <a
                    href="/#download"
                    className="nav-link-holder w-inline-block"
                  >
                    <div className="nav-link-text-holder">
                      <div className="nav-link-text">Download</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-button-holder">
                <a href="/#sign-up" className="button navbar-button w-button">
                  Sign up
                </a>
              </div>
            </nav>
            <div
              className="menu-button w-nav-button"
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="center-box">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aee5793ca698aa19fe7f75_menu.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
        ></div>
      </div>
    </header>
  );
};

export default Header;
