import React from "react";

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

const FAQSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {rawData.map((item) => (
        <div className="question" key={item.id}>
          <h4>{item.question}</h4>
          <div className="answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
