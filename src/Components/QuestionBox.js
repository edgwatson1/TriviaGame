import React from "react";

const QuestionBox = props => {
  return <p>{decodeURIComponent(props.questionStr)} </p>;
};

export default QuestionBox;
