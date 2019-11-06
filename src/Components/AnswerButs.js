import React from "react";
import AnswerClick from "./AnswerClick";

const AnswerButs = ({ answerOptions, onClickAnswer, questionPackage }) => {
  return (
    <>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">
              <div className="ui four column grid">
                <div className="row">
                  {answerOptions.map(answer => {
                    return (
                      <AnswerClick
                        answer={answer}
                        onClickAnswer={onClickAnswer}
                        key={answer}
                      />
                    );
                  })}
                  {questionPackage.user_answer && (
                    <h1>
                      {questionPackage.user_answer ===
                      questionPackage.correct_answer
                        ? "well done"
                        : "bad luck"}
                    </h1>
                  )}
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
