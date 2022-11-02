import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact for making your dream idea true through the help of software.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={require("../img/home1.png")} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
