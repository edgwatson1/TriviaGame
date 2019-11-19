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
      <>
        <div className="container">
          <audio src="/q_a.mp3" autoPlay loop />
          <table className="challenge-header">
            <tbody>
              <tr>
                <td className="challenge-header-cell">
                  <img src={characters[level - 1].img} />
                </td>
                <td className="challenge-header-cell" rowspan="2" id="category">
                  {decodeURIComponent(category)} ROUND
                </td>
                <td>
                  <img src="./mariocoin.png" height="40px" />
                </td>
              </tr>
              <tr>
                <td className="challenge-header-cell">{step}/10</td>
                <td className="challenge-header-cell">{totalScore()}</td>
              </tr>
            </tbody>
          </table>

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
      </>
    );
  }
}

export default Challenge;
