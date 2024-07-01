"use client"

import Image from 'next/image'
import Button from '@/components/button'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Terms = () => {

  useEffect(() => {
          AOS.init()
      }, [])

  return (
    <div className="flex relative flex-col gap-y-[20px] md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      
      <div className="absolute w-[250px] h-[200px] md:h-[320px] bg-cpurple
        rounded-full md:-left-[80px] -bottom-[20px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="flex flex-col mt-[40px] md:my-auto z-50">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 data-aos-easing='ease-in-sine' data-aos='fade-right' className="font-bold text-center md:text-start">Privacy Policy and</h2>
          <h2 data-aos-easing='ease-in-sine' data-aos='fade-right' className="font-bold text-center md:text-start text-cpink">Terms</h2>
        </div>
        <div data-aos-easing='ease-in-sine' data-aos='fade-right' className="flex leading-loose font-light mt-[4px] max-w-[535px] 2xl:max-w-[1200px] justify-center items-center md:justify-start md:items-start text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          Last updated on June 20, 2024
        </div>
        <div data-aos-easing='ease-in-sine' data-aos='fade-right' className="flex mt-[18px] leading-loose max-w-[535px mb-[40px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          Below are our privacy & policy which outline a lot of goodies. It&#39;s our aim to always take care of our participants
        </div>

        <div data-aos-easing='ease-in-sine' data-aos='zoom-in-up' className="flex flex-col max-w-[569px] max-h-[635px] bg-[#1E1E1E]/20 border border-cpink border-solid rounded-[8px] p-[20px] md:p-[40px] lg:p-[80px] xl:p-[50px] mx-auto">
          <p className=" text-[10px] md:text-[12px] text-center md:text-start lg:text-[14px] mb-[30px]">
            A Artiset tech Hackathon, we value or privacy and are committed to protecting your
            personal information. This Privacy Policy outlines how we collect, use, disclose, and 
            safeguard your data when you participate in our tech hackathon event. By participating
            in our event, you consent to the practices described in this policy.
          </p>

          {/* <h2 className="font-bold  text-[12px] md:text-[14px] lg:text-[16px] text-cpink">Licensing Policy</h2>
          <h2 className="font-bold leading-loose  text-[10px] md:text-[12px] lg:text-[14px] ">Here are terms of our Standard Licence:</h2> */}

          {/* <div className="flex flex-row mt-[20px]">
            <div className="relative mt-[4px]">
              <Image
                src="/check.png"
                alt="menu"
                width={25}
                height={25}
                draggable={false}
              />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
              The Standard Licence grants you a non-exclusive right to navigate and register for our event
            </div>
          </div> */}
          {/* <div className="flex flex-row mt-[20px]">
            <div className="relative mt-[4px]">
              <Image
                src="/check.png"
                alt="menu"
                width={25}
                height={25}
                draggable={false}
              />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
              The Standard Licence grants you a non-exclusive right to navigate and register for our event
            </div>
          </div> */}

          {/* <div className="flex items-center justify-center mt-[20px] ">
            <Button content="Read More" />
          </div> */}
        
        </div>
      </div>

      <div className="flex my-auto 2xl:ml-[400px]">
        <Image
          src="/privacy.png"
          alt="menu"
          width={583}
          height={952}
          draggable={false}
        />
      </div>
    </div>
  )
}

export default Terms