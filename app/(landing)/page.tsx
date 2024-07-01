"use client";

import { useEffect, useState, useRef } from 'react';

import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/navbar';
import Introduction from '@/components/landing/introduction';
import Rules from '@/components/landing/rules';
import Attributes from '@/components/landing/attributes';
import FAQ from '@/components/landing/faq';
import { Separator } from "@/components/ui/separator";
import Timeline from '@/components/landing/timeline';
import Rewards from '@/components/landing/rewards';
import Partners from '@/components/landing/partners';
import Terms from '@/components/landing/terms';
import Footer from '@/components/landing/footer';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  const timelineRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "timeline" && timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "overview" && overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "faqs" && faqsRef.current) {
      faqsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex relative flex-col bg-bkg text-white overflow-hidden">
      <div className="star-layers fixed h-[100vh] w-[100vw] 2xl:translate-x-[10%]">
        <div id="stars" className="max-md:invisible" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className="absolute w-[200px] h-[150px] md:h-[200px] top-[120px] bg-cpurple
      rounded-full md:left-[240px] 2xl:left-[700px] custom-blur z-0 " />
      <div className=" hidden md:flex
      absolute w-[200px] h-[200px] top-[240px] bg-cpurple
      right-[40px] 2xl:right-[340px] custom-blur2 z-50 " />

      <section className="2xl:mx-[300px] z-[100]">
        <Navbar scrollToSection={scrollToSection} />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Hero />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]" ref={overviewRef}>
        <Introduction />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Rules />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Attributes />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]" ref={faqsRef}>
        <FAQ />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]" ref={timelineRef}>
        <Timeline />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px] bg-cdark">
        <Rewards />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      {/* <section className="2xl:mx-[300px]">
        <Partners />
      </section> */}
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px]">
        <Terms />
      </section>
        <Separator className='bg-[#1E1E1E] h-[0.8px]' />
      <section className="2xl:mx-[300px] bg-cdark z-[80]" ref={contactRef}>
        <Footer />
      </section>
    </div>
  );
}
