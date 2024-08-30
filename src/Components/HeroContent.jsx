import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="w-full h-[20rem] lg:h-[45rem] mx-auto overflow-hidden relative">
      <motion.div
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="Text lg:h-[20rem] top-[13rem] lg:w-[55rem] absolute z-50 flex flex-col bottom-0 lg:ml-[13rem] "
      >
        {/* <h2 className="heading my-2">We Believe ,</h2> */}
        <h1 className="maxHeading text-slate-800">
          "Adopting one pet won't change the world, but for that one pet, <br />{" "}
          the world will change forever.
        </h1>
        <p className="my-2 text-xs">
          "Welcome to our pet adoption website, where love finds a home. We
          connect you with pets in need of a forever family, offering a wide
          range of lovable companions waiting for someone like you. Every
          adoption is a new beginning, not just for the pet, but for you too.
          Explore, adopt, and make a difference in a pet's life today."
        </p>
        <button className="bg-red-300 lg:w-[6rem] lg:h-[2rem] my-6 rounded-full">
          Explore
        </button>
      </motion.div>
      <div className="relative left-[30rem] w-full mx-auto z-40">
        <motion.img
          src="/images/pug.png"
          initial={{ y: 200 }}
          animate={{ y: "5rem" }}
          transition={{
            duration: 1.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          alt=""
          srcset=""
          className="mx-auto w-[18rem] lg:w-[35rem]"
        />
      </div>
      <div className="red w-[10rem] h-[10rem] lg:w-[30rem] lg:h-[30rem] lg:absolute lg:-right-32 lg:-top-28 rounded-full bg-orange-500 z-20 absolute -right-8 -top-4"></div>
      <div className="cyan w-[25rem] h-[25rem] lg:w-[80rem] lg:h-[80rem] lg:absolute lg:-right-32 lg:-top-20 rounded-full bg-cyan-300 z-0 "></div>
    </div>
  );
};

export default HeroContent;
