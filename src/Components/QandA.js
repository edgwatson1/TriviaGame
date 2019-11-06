import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

const QandA = ({ questionPackage, onNextStep, isVisible, onClickAnswer }) => {
  if (!isVisible) return null;
  // one-liner if statements can be written like this

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="meta">...</div>
          <div className="question">
            <QuestionBox questionStr={questionPackage.question} />
            <AnswerButs
              answers={[
                questionPackage.correct_answer,
                ...questionPackage.incorrect_answers
              ]}
              onClickAnswer={onClickAnswer}
            />
            <button onClick={onNextStep}>Next Question</button>
            {/* you call a function in the parent using the name of the props, not the name of the function in App */}
            <h1>{}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;

// // selecting one question from the question package in position [0]
// const oneQuestion = props.questionPackages[0].question;
// console.log(oneQuestion);

// // generating one random number from 0, 1, 2, 3
// const randomPosition = Math.floor(Math.random() * Math.floor(4));
// console.log(randomPosition);

// // correct answer from the question package in position [0]
// const correctAnswer = props.questionPackages[0].correct_answer;
// console.log(correctAnswer);

// // takes the incorrect answers from the question package in position [0]
// const answersArray = props.questionPackages[0].incorrect_answers;
// console.log(answersArray);

// // manipulating answersArray to splice in the correct answer at a random position
// const emptyMixer = answersArray.splice(randomPosition, 0, correctAnswer);
// console.log(answersArray);
