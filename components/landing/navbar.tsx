"use client";

import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from 'next/font/google';
import Cookies from 'js-cookie';

import Button from "@/components/button";
import { cn } from "@/lib/utils";
import MenuItem from "@/components/menu-item";

import { IconSquareRoundedX } from "@tabler/icons-react";

const montserrat = Montserrat({ subsets: ['latin'] });

const constantClassName = "flex font-medium cursor-pointer bg-clip-text hover:text-transparent bg-gradient-to-r from-cpurple via-cpink to-cpinkx transition-colors duration-300 active:text-transparent";

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const pathname = usePathname();

  // useEffect(() => {
  //   const token = Cookies.get("accessToken");
  //   console.log("Access Token from Cookies:", token);
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  return (
    <>
    {/* <Loader loading={loading} /> */}
    <div className="flex lg:mt-[20px] mt-[10px] lg:mb-[20px] mb-[10px] lg:mx-[60px] xl:mx-[100px] 2xl:mx-[200px] mx-[30px] justify-between items-center overflow-hidden z-50">
      <div className="lg:text-[36px] md:text-[24px] sm:text-[15px] font-bold clash-display">
        <Link href="/" className="cursor-pointer">
          Artiset<span className="text-cpink">Hackathon</span>
        </Link>
      </div>

      <div className="hidden items-center gap-x-10 xl:gap-x-24 md:flex">
        <div className={cn("flex items-center md:gap-x-3 lg:gap-x-8 xl:gap-x-12", montserrat.className)}>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)} onClick={() => scrollToSection("timeline")}>
            Timeline
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)} onClick={() => scrollToSection("overview")}>
            Overview
          </div>
          <div className={cn("lg:text-[16px] md:text-sm", constantClassName)} onClick={() => scrollToSection("faqs")}>
            FAQs
          </div>
          {/* <Link> */}
            <div className={cn(constantClassName)} onClick={() => scrollToSection("contact")}>
              Contact
            </div>
          {/* </Link> */}
        </div>
        {!isAuthenticated && (
          <div>
            <Link href="/login">
              <Button content="Login" />
            </Link>
          </div>
        )}
      </div>
      <div className="md:hidden flex top-10 cursor-pointer z-50" onClick={toggleOpen}>
        <Image
          src="/menu.png"
          alt="menu"
          width={19}
          height={14}
          draggable={false}
          className="flex z-50"
        />
      </div>
      {isOpen && (
        <div className="absolute z-50 rounded-[8px] w-[60vw] md:w-3/4 bg-bkg overflow-hidden right-6 top-6 text-[14px] shadow-lg">
          <div className="flex flex-col ml-[20px] my-[40px] z-50">
            <>
              <MenuItem onClick={() => scrollToSection("timeline")} label="Timeline" />
              <MenuItem onClick={() => scrollToSection("overview")} label="Overview" />
              <MenuItem onClick={() => scrollToSection("faqs")} label="FAQs" />
              <MenuItem onClick={() => scrollToSection("contact")} label="Contact" />
            </>
            <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-cpink transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4 hover:cursor-pointer" onClick={toggleOpen} />
            </div>
          </div>
        </div>
      )}

{loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
    </>
  );
}

export default Navbar;
