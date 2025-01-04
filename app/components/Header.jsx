import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-6 px-4 sm:px-8">
      <motion.div  initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8, type:"spring", stiffness:100}}>
        <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32 sm:w-40 mt-10" />
      </motion.div>
      <motion.h3 
       initial={{y:-20,opacity:0}} 
       whileInView={{y:0,opacity:1}} 
       transition={{duration:0.6, delay:0.3}}
      className="flex items-end justify-center gap-2 text-xl sm:text-2xl mb-3 font-Ovo">
        Hi! I'm Kajanthan
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6 sm:w-8" />
      </motion.h3>
      <motion.h1
      initial={{y:-30,opacity:0}} 
      whileInView={{y:0,opacity:1}} 
      transition={{duration:0.8, delay:0.5}} 
       className="text-3xl sm:text-4xl lg:text-6xl font-Ovo">
        Full-Stack Developer | Undergraduate at SLIIT
      </motion.h1>
      <motion.p 
      initial={{opacity:0}} 
      whileInView={{opacity:1}} 
      transition={{duration:0.6, delay:0.7}}
      
      className="max-w-3xl mx-auto text-lg sm:text-xl font-Ovo">
        I'm a full-stack developer from Sri Lanka, currently in my 3rd year of
        Software Engineering. I specialize in building responsive web
        applications and am seeking an internship opportunity to apply my skills
        in frontend and backend technologies, while gaining hands-on experience
        in a dynamic team environment.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center mt-6">
        <motion.a 
        initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.6, delay:1}}
          href="#contact" 
          className="px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 text-lg sm:text-xl dark:bg-transparent "
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow Icon" className="w-4 sm:w-5" />
        </motion.a>
        <motion.a
        initial={{y:30,opacity:0}} 
        whileInView={{y:0,opacity:1}} 
        transition={{duration:0.6, delay:1.2}} 
          href="/sample-resume.pdf" 
          download 
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-lg sm:text-xl bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4 sm:w-5" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
