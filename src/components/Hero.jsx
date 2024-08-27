import React from "react";
import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/dp.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ml-[3rem]">
              <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 lg:text-7xl md:text-4xl font-thin tracking-tight lg:mt-16">
                Arkapravo Biswas
              </motion.h1>
              <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-slate-300 to-purple-500 bg-clip-text md:text-3xl lg:text-5xl text-transparent font-normal">
                Full Stack Developer
              </motion.span>
              <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-2xl md:text-1xl ">
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1,delay:1.2}}
              
                className="size-[25rem] rounded-xl"
                src={ProfilePic}
                alt="Arka Biswas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
