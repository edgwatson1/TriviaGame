import React from "react";

const AnswerClick = ({ answer, onClickAnswer }) => {
  return (
    <div className="column">
      <button onClick={() => onClickAnswer(answer)} className="ui button">
        {answer}
      </button>
    </div>
  );
};

export default AnswerClick;
