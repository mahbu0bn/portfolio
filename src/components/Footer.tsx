import React from "react";
import {motion} from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-4 text-center text-gray-400 bg-neutral-900"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Mahboube Najafi. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
