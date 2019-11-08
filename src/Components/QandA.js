import React from "react";
import { shuffle } from "lodash";
import QuestionBox from "./QuestionBox";
import AnswerButs from "./AnswerButs";

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledAnswers: shuffle([
        props.questionPackage.correct_answer,
        ...props.questionPackage.incorrect_answers
      ])
    };
  }

  render() {
    const {
      questionPackage,
      onNextStep,
      isVisible,
      onClickAnswer
    } = this.props;
    if (!isVisible) return null;

    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">...</div>
            <div className="question">
              <QuestionBox questionStr={questionPackage.question} />
              <AnswerButs
                questionPackage={questionPackage}
                answerOptions={this.state.shuffledAnswers}
                onClickAnswer={onClickAnswer}
              />
                  {questionPackage.user_answer && (
                  <button onClick={onNextStep}>Next Question</button>
                  )}
              {/* you call a function in the parent using the name of the props, not the name of the function in App */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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


//nothing