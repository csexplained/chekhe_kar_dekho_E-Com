"use client";

import { motion } from "framer-motion";

const MovingBanner = () => {
  return (
    <div className="bg-[#0A483B] py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {Array(16)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex items-center gap-4 mx-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z"
                    fill="#FEC136"
                  />
                </svg>
                <p className="text-white text-xl md:text-2xl py-2 md:py-4">
                  EVERY JAR HAS A STORY
                </p>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MovingBanner;
