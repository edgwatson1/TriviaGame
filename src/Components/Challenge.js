import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const questionsPackages = this.props.questionsPackages;
    const questionPackage =
      questionsPackages[Math.floor(Math.random() * Math.floor(50))];

    return (
      <>
        <p>This is the challenge container</p>
        <p>{this.props.Information}</p>
        <div className="ui cards">
          <div className="card">
            <div className="content"></div>
            <QandA questionPackage={questionPackage} />
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
