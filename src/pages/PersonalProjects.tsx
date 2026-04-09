import React from "react";
import {motion} from "framer-motion";
import Masonry from "react-masonry-css";

const images = [
  {
    src: "/images/01.jpg",
    alt: "Personal project 1",
    aspectRatio: 0.95,
    title: "Beyond the Journey",
    description: "Where the path becomes discovery and transformation",
  },
  {
    src: "/images/02.jpg",
    alt: "Personal project 2",
    aspectRatio: 0.8,
    title: "Love in motion",
    description: "An expression of love’s endless flow",
  },
  {
    src: "/images/03.jpg",
    alt: "Personal project 3",
    aspectRatio: 0.67,
    title: "Harmony and Love in Evolution",
    description: "",
  },
  {
    src: "/images/04.jpg",
    alt: "Personal project 4",
    aspectRatio: 0.67,
    title: "Love In Sé",
    description: "",
  },
  {
    src: "/images/05.jpg",
    alt: "Personal project 5",
    aspectRatio: 0.69,
    title: "Journey in Exploration",
    description: "",
  },
  {
    src: "/images/06.jpg",
    alt: "Personal project 6",
    aspectRatio: 0.91,
    title: "The Root of All",
    description:
      "Exploring the roots of all things and the hidden connections within",
  },
];

const breakpointColumns = {
  default: 3,
  1500: 2,
  1000: 1,
};

const PersonalProjects: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
    >
      <div className="p-8 pt-24 md:pt-8">
        <h1 className="mb-8 text-3xl font-light text-neutral-800">
          Selected Works
        </h1>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-8"
          columnClassName="pl-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative mb-8 overflow-hidden cursor-pointer group"
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
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <div
                className="relative"
                style={{
                  paddingBottom: `${(1 / image.aspectRatio) * 100}%`,
                }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 object-cover w-full h-full"
                  loading="lazy"
                  whileHover={{
                    scale: 1.05,
                    transition: {duration: 0.4, ease: [0.215, 0.61, 0.355, 1]},
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-light">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default PersonalProjects;
