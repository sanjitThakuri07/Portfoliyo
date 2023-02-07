import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FAQSection from "../components/FAQSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
      <FAQSection></FAQSection>
    </motion.div>
  );
};

export default AboutUs;
