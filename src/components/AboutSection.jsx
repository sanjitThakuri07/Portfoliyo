import React from "react";
import { About, Description, Image, Hide } from "../styled/styles.styled";
// framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact for making your dream idea true through the help of software.
        </motion.p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={require("../img/home1.png")}
          alt=""
        />
      </Image>
    </About>
  );
};

export default AboutSection;
