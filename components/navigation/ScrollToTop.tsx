'use client'

import React, { useState, useEffect } from 'react';
import { VideoArrow } from '../svg';
import { CSSTransition } from 'react-transition-group';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CSSTransition
    in={isVisible}
    timeout={{ enter: 0, exit: 150 }}
    unmountOnExit
  >
    {(state) => (
      <div className={`fixed z-30 bottom-12 right-14 max-sm:right-[30px] duration-[300ms] ${state === "entered" ? "opacity-100 ": "opacity-0 "}`}>
      <div className={`duration-[150ms] w-10 h-10`}>
        <button
          aria-label={`Zpět nahoru`}
          onClick={scrollToTop}
          className="group/button -translate-x-1/2 left-1/2 w-[48px] h-[48px] relative flex items-center justify-center border-[1px] rounded-full opacity-100 bg-white border-[#9F9F9F]"
        >
          <VideoArrow
            width="48px"
            arrowAdditionalClasses="fill-black"
            additionalClasses="rotate-[-90deg]"
          />
        </button>
      </div>
    </div>
    )}
  </CSSTransition>
    
  );
}
