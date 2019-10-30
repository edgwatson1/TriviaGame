import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function LandingPage() {
    return (
      <div>
        <h2>Landing Page</h2>
        <p>Here are somabout the game</p>
        <Link to="/CategoryWheel">
          <button className="ui button">Play!</button>
        </Link>
      </div>
    );
  }

export default LandingPage