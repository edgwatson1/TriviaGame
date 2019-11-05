import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

const QandA = props => {
  // const questionPackage = props.questionPackage;

  // const correctAnswerPosition1 = Math.floor(Math.random() * Math.floor(4));
  // const answersArray = questionPackage.incorrect_answers;
  // const emptyMixer = answersArray.splice(
  //   correctAnswerPosition1,
  //   0, //   questionPackage.correct_answer
  // );
  
;

// selecting one question from the question package in position [0]
const oneQuestion = props.questionPackages[0].question;
console.log(oneQuestion);

// generating one random number from 0, 1, 2, 3
const randomPosition = Math.floor(Math.random() * Math.floor(4));
console.log(randomPosition);

// correct answer from the question package in position [0]
const correctAnswer = props.questionPackages[0].correct_answer;
console.log(correctAnswer);


// takes the incorrect answers from the question package in position [0]
const answersArray = props.questionPackages[0].incorrect_answers
console.log(answersArray);

// manipulating answersArray to splice in the correct answer at a random position
const emptyMixer = answersArray.splice(randomPosition,0,correctAnswer);
console.log(answersArray);




  return (
    <div>
      <p>This is the Q&A container</p>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">...</div>
            <div className="question">
              <QuestionBox questionStr={props.questionPackages.question} />
              {/* <AnswerButs mixedAnswers={answersArray} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
