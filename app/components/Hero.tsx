import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaFacebook } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative  dark:bg-black bg-gray-300 dark:text-white text-black-700 h-screen flex items-center justify-center">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md-top-20 h-screen"
        fill="gray"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="gray" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="gray" />

      {/* Background */}

      <div className="absolute inset-0 bg-opacity-50">
        <div className="absolute w-full h-full bg-cover bg-center opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="uppercase tracking-widest text-xs mx-auto mb-4 dark:text-gray-400 text-black-700 max-w-80">
          Let&apos;s bring your ideas to life!
        </h2>

        <h1 className="text-5xl font-bold sm:text-7xl">
          FRONTEND <br />
          <span className="dark:text-white">DEVELOPER</span>
        </h1>
        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl dark:text-gray-400 text-black-700">
          Hello there, I&apos;m Prija Shrestha — I develop web apps that are
          user-friendly, beautiful &amp; responsive with the technologies like
          React, Next.js, and TailwindCSS.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ">
          <div className="flex items-center gap-6 text-gray-400 mt-4 sm:mt-0 mr-10">
            <a href="#" className="hover:text-white">
              SAY HELLO
            </a>
            <a
              href="https://www.linkedin.com/in/prija-shrestha-a70634218/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Prijastha"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/prija.shrestha.3"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/prijashrestha__/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          <div>
            <a
              href="#contact"
              className="bg-white   text-zinc-900 font-semibold border py-3 px-6 rounded-full hover:bg-orange-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
