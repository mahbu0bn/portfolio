import React from "react";
import {motion} from "framer-motion";
import Copyright from "../components/Copyright";

const About: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0] justify-between flex flex-col"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
    >
      <div className="max-w-4xl p-8 pt-24 md:pt-8">
        <h1 className="mb-8 text-3xl font-light text-neutral-800">About</h1>

        <div className="space-y-12">
          {/* Profile Section */}
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
            className="flex flex-col items-start gap-8 md:flex-row"
          >
            <img
              src="/images/profile.jpg"
              alt="Mahboube Najafi"
              className="object-cover w-72 h-72"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-neutral-800">
                Mahboube Najafi
              </h2>
              <p className="leading-relaxed text-neutral-600">
                As a contemporary calligrapher, I explore the dialogue between
                words and form, shaping a visual language that connects and
                invites curiosity. Each piece is open to interpretation,
                offering multiple ways to be seen and understood.
              </p>
              <p>
                In my work, imperfection is embraced as something natural-just
                as no two trees are ever the same, no stroke or letter can be
                identical. A single concept can be expressed through many words,
                yet it is always the viewer's perspective that ultimately shapes
                its meaning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Copyright />
    </motion.div>
  );
};

export default About;
