import React from "react";
import styled from "styled-components";
import { About } from "../styled/styles.styled";

const rawData = [
  {
    id: 1,
    question: "How Do I Start?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    question: "Daily Schedule",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    question: "Payment Methods",
    answer: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    question: "What products we offer?",
    answer: "Lorem ipsum dolor sit amet.",
  },
];

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const FAQSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {rawData.map((item) => (
        <div className="question" key={item.id}>
          <h4>{item.question}</h4>
          <div className="answer">
            <p>{item.answer}</p>
          </div>
          <div className="faq-line"></div>
        </div>
      ))}
    </Faq>
  );
};

export default FAQSection;
