import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Landing: React.FC = () => {
  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.2, ease: "easeOut"}}
    >
      {/* Background Image */}
      <div
        className="absolute rotate-90 inset-0 bg-cover bg-center brightness-[0.95] contrast-[1.05]"
        style={{
          backgroundImage: `url('/images/homepage.jpg')`,
        }}
      />
      {/* <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
        autoPlay
        muted
        playsInline
      >
        <source src="/images/animated.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay - Increased opacity for better contrast */}
      {/* <div className="absolute inset-0 bg-white/15" /> */}

      {/* Content Container - Adjusted for mobile */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <motion.h1
          className="mb-4 text-4xl font-light tracking-wider text-center md:text-8xl"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
          aria-label="Mahboube"
        >
          MAHBOUBE
        </motion.h1>

        <motion.p
          className="text-base md:text-xl tracking-[0.3em] mb-12 md:mb-16 font-normal text-white text-center"
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
        >
          CONTEMPORARY CALLIGRAPHY
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.7, ease: "easeOut"}}
        >
          <Link
            to="/selected"
            className="px-8 py-3 text-sm font-medium tracking-widest transition-all duration-300 border-2 border-neutral-600 md:px-16 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800"
            aria-label="Enter site"
          >
            ENTER
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
