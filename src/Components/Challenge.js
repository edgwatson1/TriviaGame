import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const questionsPackages = this.props.questionsPackages;
    const questionPackage1 =
      questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage2 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage3 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage4 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage5 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage6 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage7 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage8 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage9 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];
    // const questionPackage10 =
    //   questionsPackages[Math.floor(Math.random() * Math.floor(51))];

    const correctAnswerPosition1 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition2 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition3 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition4 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition5 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition6 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition7 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition8 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition9 = Math.floor(Math.random() * Math.floor(4));
    // const correctAnswerPosition10 = Math.floor(Math.random() * Math.floor(4));

    const allFourAnswers1 = questionPackage1.incorrect_answers;
    const splicer1 = allFourAnswers1.splice(
      correctAnswerPosition1,
      0,
      questionPackage1.correct_answer
    );

    return (
      <>
        <p>This is the challenge container</p>
        <p>{this.props.Information}</p>
        <div className="ui cards">
          <div className="card">
            <div className="content"></div>
            <QandA questionPackage={questionPackage1} />
            <br />
            <button style={{ color: "red" }}>Next Question</button>
            <br />
          </div>
        </div>
      </>
    );
  };
}

export default Challenge;
