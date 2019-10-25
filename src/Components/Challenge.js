import React from "react";
import QandA from "./QandA";


class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }


  render = () => {
    return (
      <>
      <p>This is the challenge container</p>
        <div className="ui cards" >
            <div className="card" >
                <div className="content"></div>
                <QandA />
            <br/>
            <button style={{color:"red"}}>Next Question</button>
            <br/>
            </div>
        </div>
      </>
    );
  };

}



export default Challenge;
