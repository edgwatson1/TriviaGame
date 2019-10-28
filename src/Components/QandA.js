import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

const QandA = props => {
  const questionPackage = props.questionPackage;

  return (
    <div>
      <p>This is the Q&A container</p>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">...</div>

            <div className="question">
              <QuestionBox questionStr={questionPackage.question} />
            </div>

            <AnswerButs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
