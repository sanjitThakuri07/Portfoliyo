import React from "react";

const rawData = [
  {
    id: 1,
    img: require("../img/clock.svg"),
    title: "Efficient",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: require("../img/diaphragm.svg"),
    title: "Diaphragm",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: require("../img/money.svg"),
    title: "Money",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    img: require("../img/teamwork.svg"),
    title: "Teamwork",
    desc: "Lorem ipsum dolor sit amet.",
  },
];

const ServiceSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            High <span>quality</span> services
          </h2>
          <div className="cards">
            {rawData?.map((item) => (
              <div className="card" key={item?.id}>
                <div className="icon">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image">
          <img src={require("../img/home2.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
