import React from "react";
import QandA from "./QandA";

class Challenge extends React.Component {
  render() {
    const {
      questionPackages,
      step,
      onNextStep,
      onClickAnswer,
      isLoaded,
      characters,
      level,
      totalScore,
      category
    } = this.props;
    // this is how you destructure in class component - then you don't need this.props

    // This IF statement says: if the state isLoading is false, return 'PLEASE WAIT' (which then stops the 2nd return running). If not, then the 2nd return will run and the information trickles down to QandA. Basically, if the API fetch hasn't come back in yet, don't pass the info down to the child component. In order to make this work I had to add another setState (in the App component) to the ADP fetch to always reset isLoading back to false prior to a fetch occuring, and then set the isLoading back to true once the fetch had completed.
    if (!isLoaded) {
      return <p>PLEASE WAIT</p>;
    }
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={characters[level].img}></img>
              </td>
              <td rowspan="2" id="category">
                {category} ROUND
              </td>
              <td>
                <img src="./mariocoin.png" height="40px"></img>
              </td>
            </tr>
            <tr>
              <td>{step}/10</td>
              <td>{totalScore()}</td>
            </tr>
          </tbody>
        </table>
        <div className="ui cards" key="ui_cards-sui">
          <div className="card" key="card-sui">
            <h1>step: {step}</h1>
            {questionPackages.map((questionPackage, i) => (
              <QandA
                questionPackage={questionPackage}
                onNextStep={onNextStep}
                isVisible={step === i}
                onClickAnswer={onClickAnswer}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
