import React from "react";
import abt from "../assets/about2.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-5xl">About
        <span className="text-neutral-500" > Me</span>
      </h2>
        <div className="flex flex-wrap">
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img
                className="rounded-3xl lg:w-[35rem] lg:h-[20rem] w-[17rem] h-[12rem]"
                src={abt}
                alt="about"
              />
            </div>
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
           className="w-full lg:w-1/2">
            <div className=" flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 lg:text-xl tracking-tight font-light">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
