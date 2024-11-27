import { projects } from "@/data/projects";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGithub } from "react-icons/fa";
// import { div } from "framer-motion/client";

const Projects: React.FC = () => {
  return (
    <>
      <div className=" py-20 relative flex  items-center justify-center  text-center max-w-4xl mx-auto px-4">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-40 ">
          Projects
        </h3>
        <div className="flex flex-wrap flex-col items-center justify-center p-4 gap-x-24 gap-y-8  mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] h-[20vh]   mb-10">
                  <div className="relative full h-full overflow-hidden lg:rounded-3xl dark:bg-[#13162d]]">
                    <img src="" alt="" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 dark:text-gray-300 ">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 dark:text-gray-300">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      >
                        <img src={icon} alt={icon} className="p-2 text-white" />
                      </div>
                    ))}
                  </div>
                  <a href={link}>
                    <FaGithub className="text-3xl" />
                  </a>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
