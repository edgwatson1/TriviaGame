import React from "react";

const AnswerButs = props => {
  return (
    <>
    <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="meta"><div class="ui four column grid">
      <div class="row">
        <div class="column">
          <button class="ui button">The King of England</button>
        </div>
        <div class="column">
          <button class="ui button">The Princess Diaries</button>
        </div>
      </div>

      <div class="column">
        <button class="ui button">Royal Family Party</button>
      </div>
      <div class="column">
        <button class="ui button">Kings of Leon</button>
      </div>
    </div></div>
            <div className="description" />
            {props.QuestionFromAPI}
          </div>
        </div>
      </div>
    
    
    
    
    
    
    
    
    </>
  );
};

export default AnswerButs;
