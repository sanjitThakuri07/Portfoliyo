import React from "react";
import { About, Description, Image, Hide } from "../styled/styles.styled";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact for making your dream idea true through the help of software.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={require("../img/home1.png")} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
