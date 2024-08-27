import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl text-neutral-100">
          Experience
        </motion.h1>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-neutral-200">
                  {experience.role}-{" "}
                  <span className="text-sm text-cyan-500">
                    {experience.company}
                  </span>{" "}
                </h6>
                <div className="font-normal text-neutral-400 tracking-tight">
                  {experience.description}
                </div>
                {experience.technologies.map((tech,  index)=>(
                  <span className="mr-2 mt-4 rounded bg-neutral-900 py-1 px-2 text-sm text-purple-400" key={index}>{tech}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
