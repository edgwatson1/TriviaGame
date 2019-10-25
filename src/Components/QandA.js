import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

const QandA = props => {
  return (
    <div>
      <p>This is the Q&A container</p>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">...</div>

            <div className="question">
              <QuestionBox QuestionFromAPI="Did this question come from the API?" />
            </div>

            <AnswerButs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
