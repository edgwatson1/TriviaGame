import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Scoreboard() {
    return (
      <div>
        <h1>Scoreboard</h1>
        <p>some writing</p>
        <p>You scored 800 points, you are Bowser. Keep going to be Mario!</p>
        <Link to="/CategoryWheel">
          <button className="ui button">Continue</button>
        </Link>
      </div>
    );
  }

export default Scoreboard