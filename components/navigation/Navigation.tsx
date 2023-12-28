'use client'
import React, { useEffect, useState } from "react";
import { DesktopNavigation, OpenCloseButton } from ".";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <div className="absolute flex justify-center w-full px-[150px] max-xl:px-[90px] max-lg:px-[60px] max-sm:px-[30px] z-10">
      <div 
        id="navigation-container"
        className=" font-base flex justify-between items-start w-full max-w-[1200px] pt-10 text-[18px] "
        data-black-path={pathname === '/o-mne' || pathname === '/vybaveni' ? 'true' : 'false'}
        data-is-open={isOpen ? 'true' : 'false'}
      >
        <Link 
          id="vitek-petrzilek"
          href={"/"} 
          onClick={() => setIsOpen(false)} className="text-[16px] z-30  "
        >
          Vítek&nbsp;Petržílek
        </Link>

        <DesktopNavigation additionalClasses={"max-lg:hidden"} />
        <OpenCloseButton isOpen={isOpen} setIsOpen={setIsOpen} additionalClasses={"lg:hidden"} />
      </div>
    </div>
  );
}
