import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
      {/* Heading */}
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-40 sm:text-xl">
        About
      </h3>

      {/* Content */}
      <div className="space-y-12">
        {/* Paragraphs */}
        <p className="text-lg sm:text-base dark:text-gray-300 leading-relaxed">
          Hello! I&apos;m Prija Shrestha, a passionate Front-End Developer with
          a love for crafting beautiful and functional user experiences. I
          specialize in HTML, CSS, React, and JavaScript.
        </p>
        <p className="text-lg sm:text-base dark:text-gray-300 leading-relaxed">
          Feel free to{" "}
          <a href="/contact" className="text-orange-700 underline">
            reach out
          </a>{" "}
          or explore my work!
        </p>

        {/* Resume Button */}
        <div className="flex justify-center">
          <a
            href="/Prija_Shrestha_CV.pdf"
            className="dark:bg-white bg-gray-400 text-zinc-900 font-semibold border py-3 px-6 rounded-full dark:hover:bg-orange-700 hover:bg-orange-700 transition-colors duration-300 sm:text-sm"
          >
            Resume
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-6 text-gray-400 mt-6">
          <FaHtml5 className="hover:text-orange-700 text-5xl sm:text-4xl" />
          <FaCss3Alt className="hover:text-orange-700 text-5xl sm:text-4xl" />
          <IoLogoJavascript className="hover:text-orange-700 text-5xl sm:text-4xl" />
          <FaReact className="hover:text-orange-700 text-5xl sm:text-4xl" />
          <RiTailwindCssFill className="hover:text-orange-700 text-5xl sm:text-4xl" />
          <RiNextjsFill className="hover:text-orange-700 text-5xl sm:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
