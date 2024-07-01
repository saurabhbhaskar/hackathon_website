"use client"

import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const accordionObject = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    question: "What happens after the hackathon ends?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    question: "Can I work on a project I started berore the hackathon?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
]

const FAQ = () => {

  useEffect(() => {
        AOS.init()
    }, [])

  return (
    <div className="flex relative flex-col-reverse md:flex-row mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      
      <div className="absolute w-[250px] h-[200px] md:h-[200px] bg-cpurple
        rounded-full md:-right-[60px] -top-[80px] 2xl:left-[700px] custom-blur z-0 " />

      <div className="flex flex-col mt-[40px] md:my-auto">
        <div className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 data-aos='fade-right' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start">Frequently Asked</h2>
          <h2 data-aos='fade-right' data-aos-easing='ease-in-sine' className="font-bold text-center md:text-start text-cpink">Questions </h2>
        </div>
        <div data-aos='fade-right' data-aos-easing='ease-in-sine' className="flex flex-col mb-[20px] mt-[14px] leading-loose max-w-[390px] 2xl:max-w-[1200px] text-center md:text-start text-[10px] md:text-[12px] lg:text-[14px]">
          <div>
            We got answers to the questions that you might want to ask about
            &nbsp;<span className="font-bold">Artiset Hackathon</span>
          </div>
        </div>
        <div className="flex max-w-[500px] flex-col">
          {
            accordionObject?.map((item) => (
              <Accordion  data-aos='zoom-in-up' data-aos-easing='ease-in-sine' type="single" collapsible key={item.question}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[10px] md:text-[12px] lg:text-[14px]">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-[10px] md:text-[12px] lg:text-[14px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))
          }
        </div>
      </div>
      <div data-aos-easing='ease-in-sine' data-aos='zoom-in-down' className="flex my-auto 2xl:mr-[400px] z-50">
        <Image
          src="/faq.png"
          alt="menu"
          width={490}
          height={477}
          draggable={false}
        />
      </div>
      
      </div>
  )
}

export default FAQ