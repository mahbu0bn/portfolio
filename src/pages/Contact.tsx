import React from "react";
import {motion} from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
    >
      <div className="max-w-4xl p-8 pt-24 md:pt-8">
        <h1 className="mb-8 text-3xl font-light text-neutral-800">Contact</h1>

        <div className="space-y-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">
              Get in Touch
            </h2>
            <p className="leading-relaxed text-neutral-600">
              Feel free to contact me via email for commissions, collaborations,
              or any questions.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-light text-neutral-800">Email</h3>
              <a
                href="mailto:mahboube_najafi@yahoo.com"
                className="duration-200 hover:text-blue-600"
              >
                mahboube_najafi@yahoo.com
              </a>{" "}
            </div>
            {/* <div className="space-y-2">
              <h3 className="text-xl font-light text-neutral-800">Phone</h3>
              <p className="text-neutral-600">+1 (555) 123-4567</p>
            </div> */}
          </motion.div>

          {/* Social Media */}
          {/* <motion.div
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Social Media</h2>
            <div className="flex space-x-8">
              <a 
                href="https://instagram.com/yeshaya_" 
                className="transition-colors duration-300 text-neutral-600 hover:text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/share/12C8wx5XrYM/?mibextid=wwXIfr" 
                className="transition-colors duration-300 text-neutral-600 hover:text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="transition-colors duration-300 text-neutral-600 hover:text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </motion.div> */}

          {/* Location */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Location</h2>
            <p className="leading-relaxed text-neutral-600">
              Based in Turin, Italy
              <br />
              Available for projects worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
