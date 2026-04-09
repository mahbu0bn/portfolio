import React from "react";
import {motion} from "framer-motion";
import Form from "../components/Form";
import Copyright from "../components/Copyright";

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
              <p className="text-neutral-600">Based in Italy</p>
            </div>
          </motion.div>
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
            <Form />
          </motion.div>
        </div>
      </div>
      <Copyright />
    </motion.div>
  );
};

export default Contact;
