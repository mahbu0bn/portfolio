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
      className="relative flex flex-col items-center justify-center w-screen h-screen mx-20 overflow-hidden"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.2, ease: "easeOut"}}
    >
      <div className="relative flex items-center justify-center w-full overflow-hidden h-max">
        {/* Text */}
        <div
          className="z-50 flex flex-col items-end justify-center w-3/5 min-h-[60vh] overflow-hidden bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/images/homepage.png')",
          }}
        >
          {/* Background Image */}
          {/* <img
            src="/images/homepage.png"
            alt="Background"
            className="fixed w-[75%] rotate-90 -left-[100px] top-1/2 -translate-y-1/2"
          /> */}
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
        <div className="w-1/5">
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
        className="text-base md:text-xl tracking-[0.3em] mt-2 md:mt-4 font-normal text-black w-4/5 text-end"
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
