import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconvarients = (duration) => ({
  initial: { y: -10 },

  animate: {
    y: [10, -10],

    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technology() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:50}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl text-neutral-100">
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconvarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <FaReact className="text-6xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconvarients(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <FaNode className="text-6xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconvarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <DiMongodb className="text-6xl text-green-400" />
          </motion.div>

          <motion.div
            variants={iconvarients(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <FaJs className="text-6xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={iconvarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <TbBrandCpp className="text-6xl text-neutral-200" />
          </motion.div>
          <motion.div
            variants={iconvarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <FaPython className="text-6xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={iconvarients(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-500 p-3"
          >
            <SiTypescript className="text-6xl text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
