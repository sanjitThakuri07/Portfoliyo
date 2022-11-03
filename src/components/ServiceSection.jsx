import React from "react";
import { About, Description, Image } from "../styled/styles.styled";
import styled from "styled-components";

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

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

const ServiceSection = () => {
  return (
    <>
      <Services>
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            {rawData?.map((item) => (
              <Card key={item?.id}>
                <div className="icon">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </Card>
            ))}
          </Cards>
        </Description>
        <Image>
          <img src={require("../img/home2.png")} alt="" />
        </Image>
      </Services>
    </>
  );
};

export default ServiceSection;
