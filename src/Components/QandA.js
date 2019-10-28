import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

const QandA = props => {
  const questionPackage = props.questionPackage;

  const correctAnswerPosition1 = Math.floor(Math.random() * Math.floor(4));
  const answersArray = questionPackage.incorrect_answers;
  const emptyMixer = answersArray.splice(
    correctAnswerPosition1,
    0,
    questionPackage.correct_answer
  );

  return (
    <div>
      <p>This is the Q&A container</p>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">...</div>
            <div className="question">
              <QuestionBox questionStr={questionPackage.question} />
              <AnswerButs mixedAnswers={answersArray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
