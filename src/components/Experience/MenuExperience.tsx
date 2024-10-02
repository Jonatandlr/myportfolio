"use client";
import React from "react";
import { motion } from "framer-motion";

interface MenuExperienceProps {
  items: {
    id: string;
    name: string;
  }[];
  activeMenu: (item: string) => void;
}

export default function MenuExperience({
  items,
  activeMenu,
}: MenuExperienceProps) {
  const [active, setActive] = React.useState(items[0].id);
  return (
    <div className="mb-3 md:pb-0 flex justify-center md:justify-start">
      <div className="w-fit h-fit flex md:flex-row flex-col relative">
        <div className="md:w-2 w-full h-2 md:h-auto bg-black rounded-full "></div>
        <div className="flex md:flex-col flex-row ">
          {items.map((element) => (
            <motion.div
              key={element.id}
              onClick={() => {
                activeMenu(element.id);
                setActive(element.id);
              }}
              className={`font-medium text-[20px] cursor-pointer  px-5 py-2 relative `}
            >
              <div>
                {active === element.id && (
                  <motion.div
                    layoutId="experiencebuble"
                    transition={{
                      type: "spring",
                      bounce: "0.5",
                      duration: 0.6,
                    }}
                    className="z-10 absolute md:top-0 top-[-8px] md:left-[-8px] left-0  md:w-2 w-full h-2 md:h-full bg-Custom-red rounded-full"
                  ></motion.div>
                )}

                <motion.span
                  initial={{ color: "#FFFF", opacity: 0.5 }}
                  animate={{
                    color: active === element.id ? "#F80040" : "#FFFF",
                    opacity: active === element.id ? 1 : 0.5,
                  }}
                  className="relative "
                >
                  {element.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ${active === item.id ? "border-l-4 border-Custom-red" : "border-l-4 border-black"}
