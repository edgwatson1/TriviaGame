import React from "react";

const AnswerButs = props => {
  return (
    <>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">
              <div className="ui four column grid">
                <div className="row">
                  <div className="column">
                    <button className="ui button">The King of England</button>
                  </div>
                  <div className="column">
                    <button className="ui button">The Princess Diaries</button>
                  </div>
                </div>
                <div className="column">
                  <button className="ui button">Royal Family Party</button>
                </div>
                <div className="column">
                  <button className="ui button">Kings of Leon</button>
                </div>
              </div>
            </div>
            <div className="description" />
            {props.QuestionFromAPI}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerButs;
