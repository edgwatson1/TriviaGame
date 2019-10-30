import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    // const questionPackage1 = questionsPackages[Math.floor(Math.random() * Math.floor(51))]; 

    // const correctAnswerPosition1 = Math.floor(Math.random() * Math.floor(4));
    
    // const allFourAnswers1 = questionPackage1.incorrect_answers;
    
    // const splicer1 = allFourAnswers1.splice(correctAnswerPosition1, 0, questionPackage1.correct_answer);

    return (
      <>
        <p>This is the challenge container</p>
        <div className="ui cards">
          <div className="card">
            <div className="content"></div>
            <QandA questionPackages={this.props.questionPackages} />
            <br />
            <button>Next Question</button>
            <br />
          </div>
        </div>
      </>
    );
  };
}

export default Challenge;
