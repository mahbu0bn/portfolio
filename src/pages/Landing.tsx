import React from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const navigateOnClick = () => {
    navigate("/selected");
  };
  return (
    <motion.div
      className="relative flex flex-col justify-center w-screen h-screen overflow-hidden md:items-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.2, ease: "easeOut"}}
    >
      <div className="relative flex items-center justify-center w-full overflow-hidden h-max">
        {/* Text */}
        <div
          className="z-50 flex flex-col items-end justify-center w-full md:w-3/5 min-h-[60vh] overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/homepage.png')",
          }}
        >
          <motion.h1
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
            onClick={navigateOnClick}
            className="z-20 flex flex-col gap-2 text-4xl font-bold text-white cursor-pointer text-start md:text-6xl"
          >
            <span>MAHB</span>
            <span>ART</span>
          </motion.h1>
        </div>
        <div className="md:w-1/5">
          <motion.h1
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
            onClick={navigateOnClick}
            className="z-20 flex flex-col gap-2 text-4xl font-bold text-black cursor-pointer text-start md:text-6xl"
          >
            <span className="text-black">OUBE</span>
            <span className="text-black">STUDIO</span>
          </motion.h1>
        </div>
      </div>
      <motion.p
        className="text-base md:text-xl tracking-[0.3em] mt-2 md:mt-4 font-normal text-black md:w-4/5 md:text-end text-center"
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
      >
        CONTEMPORARY CALLIGRAPHY
      </motion.p>
    </motion.div>
  );
};

export default Landing;
