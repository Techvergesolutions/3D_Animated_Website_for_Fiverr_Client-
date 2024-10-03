"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Download = () => {
  useEffect(() => {
    const whiteModeHolder = document.querySelector('.white-mode-holder');
    const container = document.querySelector('.dark-and-light-mode-container');

    if (whiteModeHolder && container) {
      // Adjust ScrollTrigger to map scroll to height change based on container
      ScrollTrigger.create({
        trigger: container, // Use the container as the trigger for the scroll
        start: 'top top', // Start when container reaches top of the viewport
        end: 'bottom top', // End when container is scrolled fully
        scrub: true, // Smoothly animate height change
        onUpdate: (self) => {
          // Calculate the height in vh based on the scroll progress
          const newHeight = self.progress * 100; // Progress is between 0 and 1
          gsap.to(whiteModeHolder, { height: `${newHeight}vh`, duration: 0 });
        },
      });
    }
  }, []);
  return (
    <section id="download" className="section">

      <div className="container">
        <div className="effortlessly-integration-container">
          <div className="center-title">
            <div className="title-holder">
              <div className="fade-in-move-on-scroll">
                <h1 className="title">Start using Black now</h1>
              </div>
              <div className="fade-in-move-on-scroll">
                <div className="experience-paragraph-holder">
                  <p>Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="download-badge-holder">
            <div className="download-badge-container">
              <a href="http://applestore.com" target="_blank" className="download-badge-button w-inline-block">
                <img 
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b55c334fd227405569f74b_App%20Store%20badge.svg" 
                  loading="lazy" 
                  alt="" 
                  className="download-badge-image" 
                />
              </a>
              <a href="http://googleplay.com" target="_blank" className="download-badge-button w-inline-block">
                <img 
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b55c347e2c7082fffff214_Mobile%20App%20Store%20Badge.svg" 
                  loading="lazy" 
                  alt="" 
                  className="download-badge-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-w-id="d95b58db-0fc5-f212-3174-acbf7385172b" className="dark-and-light-mode-holder">
        <div className="dark-and-light-mode-container">
          <div className="dark-and-light-mode-sticky">
            <div className="dark-mode-holder">
              <div className="center-iphone">
                <div className="dark-mode-hand-holder">
                  <img 
                    src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp" 
                    loading="eager" 
                    sizes="(max-width: 479px) 300px, 400px" 
                    srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w" 
                    alt="" 
                    className="dark-mode-hand" 
                  />
                  <div className="dark-mode-app-holder">
                    <img 
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp" 
                      loading="eager" 
                      alt="" 
                      sizes="232px" 
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp 1035w" 
                      className="dark-mode-app"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="white-mode-holder">
              <div className="center-iphone">
                <div className="dark-mode-hand-holder">
                  <img 
                    src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp" 
                    loading="eager" 
                    sizes="(max-width: 479px) 300px, 400px" 
                    srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w" 
                    alt="" 
                    className="dark-mode-hand" 
                  />
                  <div className="dark-mode-app-holder">
                    <img 
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp" 
                      loading="eager" 
                      alt="" 
                      sizes="232px" 
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp 1036w" 
                      className="dark-mode-app" 
                    />
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

export default Download
