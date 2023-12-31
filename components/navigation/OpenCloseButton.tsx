"use client";

import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { MobileNavigation } from ".";

interface OpenCloseButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  additionalClasses?: string;
}

export default function OpenCloseButton({
  isOpen,
  setIsOpen,
  additionalClasses,
}: OpenCloseButtonProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div className={`${additionalClasses} `}>
      <button
        className="relative z-20 w-8 h-8 translate-y-[-20%]"
        onClick={() => setIsOpen((prevState) => !prevState)}
        aria-label='Menu'
      >
        <div
          className={`hamburger-menu w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isOpen
              ? " rotate-[45deg] top-1/2 "
              : "rotate-[0deg] top-[calc(50%-4px)] "
          }`}
        />
        <div
          className={`hamburger-menu w-[27px] h-[4px] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isOpen
              ? "rotate-[-45deg] top-1/2 "
              : "rotate-[0deg] top-[calc(50%+4px)] "
          }`}
        />
      </button>

      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
      >
        {(state) => (
          <MobileNavigation
            setIsOpen={setIsOpen}
            additionalClasses={` duration-[300ms] ${
              state === "entered"
                ? "opacity-100 transform-translate-y-0"
                : "opacity-0 transform-translate-y-[-100%]"
            }`}
          />
        )}
      </CSSTransition>
    </div>
  );
}
