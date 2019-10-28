import React from "react";

const AnswerButs = props => {
  const success = butId => {
    if (butId == 122) {
      alert("well done!");
    } else {
      alert("bad luck!");
    }
  };

  return (
    <>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">
              <div className="ui four column grid">
                <div className="row">
                  <div className="column">
                    <button onClick={success(123)} className="ui button">
                      {props.mixedAnswers[0]}
                    </button>
                  </div>
                  <div className="column">
                    <button className="ui button">
                      {props.mixedAnswers[1]}
                    </button>
                  </div>
                </div>
                <div className="column">
                  <button className="ui button">{props.mixedAnswers[2]}</button>
                </div>
                <div className="column">
                  <button className="ui button">{props.mixedAnswers[3]}</button>
                </div>
              </div>
            </div>
            <div className="description" />
            {props.QuestionFromAPI}
          </div>
        </div>
      </div>
      <h1>{success}</h1>
    </>
  );
};

export default AnswerButs;
