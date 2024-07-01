"use client"

import Image from 'next/image'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Rules = () => {

  useEffect(() => {
        AOS.init()
    }, [])

  return (
    <div className="flex relative flex-col md:flex-row-reverse mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div data-aos='zoom-in-down' data-aos-easing='ease-in-sine' className="flex my-auto 2xl:mr-[400px] z-50">
        <Image
          src="/rules.png"
          alt="menu"
          width={550}
          height={557}
          draggable={false}
        />
      </div>

      <div className="hidden md:absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
      rounded-full md:left-[120px] top-[7px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
       md:-right-[190px] top-[250px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="flex flex-col mt-[40px] md:my-auto z-50">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start">Rules and</h2>
          <h2 data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start text-cpink">Guidlines </h2>
        </div>
        <div data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="flex mt-[14px] leading-loose max-w-[535px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day;
          to shape the future. Whether you&#39;re a coding genius, a design maverick, or a concept wizard
          you&#39;ll have the chance to transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can change the world, that&#39;s
          what we&#39;re all about!
        </div>
      </div>
    </div>
  )
}

export default Rules