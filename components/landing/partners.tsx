"use client"

import Image from "next/image"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Partners = () => {

  useEffect(() => {
          AOS.init()
      }, [])

  return (
    <div className="flex relative flex-col mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="flex justify-center items-center flex-col mb-[40px] md:mb-[60px] mt-[20px]">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 className="font-bold text-center md:text-start">Partners and Sponsors</h2>
        </div>
        <div data-aos='zoom-in-down' data-aos-easing='ease-in-sine' className="flex mt-[14px] leading-loose max-w-[405px] 2xl:max-w-[1200px] text-center text-[10px] md:text-[12px] lg:text-[14px]">
          Getlinked Hackathon 1.0 is honoured to have the following major companies as its partners and sponsors
        </div>
      </div>

      <div data-aos='zoom-in-down' data-aos-easing='ease-in-sine' className="flex max-w-[1255px] max-h-[560pxx] border border-cpink border-solid rounded-[8px] p-[20px] md:p-[40px] lg:p-[80px] xl:p-[120px] mx-auto z-50">
        
        <Image
          src="/Partner and Sponsors.png"
          alt="menu"
          width={1255}
          height={560}
          draggable={false}
        />
      </div>

      <div className="absolute w-[250px] h-[200px] md:h-[320px] bg-cpurple
        rounded-full md:-left-[60px] top-[150px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:-right-[160px] -bottom-[80px] 2xl:left-[700px] custom-blur z-0 " />


    </div>
  )
}

export default Partners