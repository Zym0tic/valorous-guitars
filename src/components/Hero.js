import React from "react";
import { heroData } from "../data.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import { FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { subtitle, btnText, logo } = heroData;
  return (
    <section className="bg-hero bg-cover min-h-[100vh] bg-center lg:h-[100vh] bg-no-repeat lg:bg-top flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end"
      >
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <motion.div variants={fadeIn("down")} className="pt-10">
          <img className="w-[388px]" src={logo} alt="Valorous logo" />
          </motion.div>
          <motion.p
            variants={fadeIn("up")}
            className="hero-p mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down")}>
            <Link to="/main" className="active">
              <button className="btn btn-sm rounded-lg bg-black bg-opacity-50 lg:btn-lg btn-outline mx-auto lg:mx-0">
                {btnText}
              </button>
            </Link>
          </motion.div>
          {/* Social media icons */}
          <motion.div variants={fadeIn("up")} className="flex justify-center lg:justify-start mt-8">
            <a href="https://www.instagram.com/valorous_guitars/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaInstagram size={56} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
