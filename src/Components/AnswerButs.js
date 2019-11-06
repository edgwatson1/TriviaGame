import React from "react";
import Answer from "./Answer";

const AnswerButs = ({ answers, onClickAnswer }) => {
  const success = butId => {
    if (butId == 122) {
      alert("well done!");
    } else {
      alert("bad luck!");
    }
  };

  return (
    <>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">
              <div className="ui four column grid">
                <div className="row">
                  {answers.map(answer => {
                    return (
                      <Answer
                        answer={answer}
                        onClickAnswer={onClickAnswer}
                        key={answer}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerButs;
