// SCOREBOARD IS A DIRECT CHILD OF APP.JS

import React from "react";
import { Link } from "react-router-dom";

const Scoreboard = ({ globalScore }) => {
  return (
    <div>
      <h1>Scoreboard</h1>
      <h2>Global Score: {globalScore}</h2>

      <p>some writing</p>
      <p>You scored 800 points, you are Bowser. Keep going to be Mario!</p>
      <Link to="/CategoryWheel">
        <button className="ui button">Next round</button>
      </Link>
    </div>
  );
};

export default Scoreboard;
