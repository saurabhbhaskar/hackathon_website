"use client"

import Link from "next/link"
import { Separator } from "../ui/separator"
import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Twitter } from "lucide-react"


const customStyle = "bg-clip-text hover:text-transparent bg-gradient-to-r from-cpurple via-cpink  to-cpinkx transition-colors duration-300 active:text-transparent"

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-[40px] text-[10px] md:text-[12px] lg:text-[14px] mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px]">

      <div className="grid grid-cols-3 gap-y-[50px] ">
        <div className="flex flex-col md:col-span-1 gap-y-[40px] md:gap-y-0 justify-between col-span-3">
          <div className="flex flex-col">
             <div className="lg:text-[36px] text-[24px] font-bold clash-display">
              <Link href="/">
                Artiset<span className="text-cpink">Hackathon</span>
              </Link>
            </div>
            <p>
              Artiset Tech Hackathon is a technology innovative program established by a group of
              organizations with the aim of showcasing young and talented individuals in the field 
              of technology
            </p>
          </div>
          <div className="">
            <div className="flex h-5 text-[10px] items-center space-x-4 text-sm">
              <div className="flex cursor-pointer text-[12px] lg:text-[14px]">Term of Use</div>
              <Separator className='bg-cpink ' orientation="vertical" />
              <div className="flex cursor-pointer text-[12px] lg:text-[14px]">Privacy Policy</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:mx-auto mt-[16px] gap-y-[20px] md:col-span-1 col-span-3">
          <div className="flex cursor-pointer text-[16px] text-cpink">
            Useful Links
          </div>
          <div className="flex cursor-pointer ">
            Overview
          </div>
          <div className="flex cursor-pointer ">
            Timeline
          </div>
          <div className="flex cursor-pointer ">
            FAQs
          </div>
          <div className="flex cursor-pointer ">
            Register
          </div>
          <div className="flex gap-y-[20px] gap-x-[10px] flex-col md:flex-row ">
            <div className="text-cpink text-[10px] md:text-[12px] lg:text-[14px]">
              Follow us
            </div>
            <div className="flex gap-x-[10px]">
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Instagram className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Twitter className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Facebook className="h-17 w-17" />
              </div>
              <div className="relative hover:text-cpink transition cursor-pointer">
                <Linkedin className="h-17 w-17" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:mx-auto mt-[16px] gap-y-[10px] md:col-span-1 col-span-3">
          <div className="flex  text-[16px] text-cpink">
            Contact Us
          </div>
          <div className="flex flex-row mt-[20px]">
            <div className="relative">
              <PhoneCall className="h-17 w-17" />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
            +91-8600735433
            </div>
          </div>
          <div className="flex  flex-row mt-[20px]">
            <div className="relative">
              <MapPin className="h-17 w-17" />
            </div>
            <div className="ml-[10px]  text-[10px] md:text-[12px] lg:text-[14px]">
            188/822, Sant Tukaram Nagar Pimpri-Chianchwad, Pune (MH) 411018 
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto">
        All rights reserved. &copy; Artiset Ltd.
      </div>
    </div>
  )
}

export default Footer
