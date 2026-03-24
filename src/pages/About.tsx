import React from "react";
import {motion} from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
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
              className="object-cover w-64 h-64"
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
              <p className="leading-relaxed text-neutral-600">
                Imperfection is part of the process—no two trees are alike, just
                as no stroke or letter can ever be repeated in the same way. A
                single idea can take many forms, yet its meaning is always
                shaped by the viewer’s perspective.
              </p>
              <p className="leading-relaxed text-neutral-600">
                My work is not complete until it is experienced. It exists in
                the space between the piece and the person who engages with it.
              </p>
            </div>
          </motion.div>

          {/* Philosophy Section */}
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
            className="space-y-4"
          >
            {/* <h2 className="text-2xl font-light text-neutral-800">
              Artistic Philosophy
            </h2> */}
            <p className="leading-relaxed text-neutral-600">
              In my work, imperfection is natural-just as no two trees are the
              same, no stroke or letter is identical. Many words can describe a
              single concept, yet each viewer's perspective shapes its meaning.
              My art is never solitary; it comes alive only through those who
              engage with it.
            </p>
          </motion.div>

          {/* Process Section */}
          {/* <motion.div
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
              delay: 0.45,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">
              Creative Process
            </h2>
            <p className="leading-relaxed text-neutral-600">
              My creative process combines traditional photographic techniques
              with innovative digital manipulation, allowing me to construct
              surreal narratives that challenge the boundaries of conventional
              photography. Each project begins with a concept that evolves
              through experimentation and intuitive exploration.
            </p>
          </motion.div> */}

          {/* Contact Section */}
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
            {/* <h2 className="text-2xl font-light text-neutral-800">
              Get in Touch
            </h2> */}
            <p className="leading-relaxed text-neutral-600">
              For collaborations, commissions, or inquiries:
            </p>
            <div className="space-y-2">
              <p className="text-neutral-600">
                Email:{" "}
                <a
                  href="mailto:mahboube_najafi@yahoo.com"
                  className="duration-200 hover:text-blue-600"
                >
                  mahboube_najafi@yahoo.com
                </a>
              </p>
              {/* <p className="text-neutral-600">Instagram: @sebastiandenovak</p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
