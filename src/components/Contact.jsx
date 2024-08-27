import React from "react";
import {CONTACT} from "../constants/index"
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-5xl text-neutral-100">
          Get In Touch
        </motion.h1>
        <motion.div
        
        className="text-center tracking-tighter text-neutral-300 text-2xl">
      <motion.p
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}
      className="my-4">{CONTACT.address}</motion.p>
      <motion.p
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:0.5}}
      className="my-4">{CONTACT.phoneNo}</motion.p>
      <motion.a
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}
      href="#" className="border-b">{CONTACT.email}</motion.a>


        </motion.div>
      </div>
    </>
  );
}
