import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { questionPackages, step, onNextStep, onClickAnswer } = this.props;
    // this is how youdestructure in class component - get rid of this.props
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content"></div>
          <h1>step={step}</h1>
          {questionPackages.map((questionPackage, i) => (
            <QandA
              questionPackage={questionPackage}
              onNextStep={onNextStep}
              isVisible={step === i}
              onClickAnswer={onClickAnswer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Challenge;
