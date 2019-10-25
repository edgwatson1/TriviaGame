import React from "react";

const QuestionBox = props => {
  return (
    <div>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta">Question</div>
            <div className="description" />
            {props.QuestionFromAPI}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
