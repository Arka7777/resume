import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl text-neutral-50">
          My <span className="text-zinc-400">Projects</span>
        </motion.h1>
        <div className="">
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0,x:-100}}
              transition={{duration:1.5}}
              className="w-full lg:w-1/4 ">
                <img
                  src={project.image}
                  height={150}
                  width={150}
                  alt={project.title}
                  className="mb-6 rounded-lg"
                />
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              className="w-full lg:w-3/4 max-w-xl ">
                <h6 className="font-semibold text-neutral-100">{project.title}</h6>
                <p className="font-normal text-zinc-400 mt-2 mb-2">{project.description}</p>
                
                  {project.technologies.map((tech,index)=>(
                    <span className="mr-2 rounded bg-neutral-900 text-purple-400 text-sm font-medium px-2 py-1 " key={index}>{tech}</span>
                  ))}
                
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
