import React from "react";
import logo from "../assets/ab.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center px-3 py-2 mt-4">
          <img className="size-[7rem] " src={logo} alt="logo" />
        </div>
        <div className="flex justify-center gap-2 px-4 text-3xl">
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
          <FaGithubSquare />
        </div>
      </nav>
    </>
  );
}
