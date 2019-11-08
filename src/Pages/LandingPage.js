import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
    return (
      <>
      <div class="content">
      <h1 class="logo">SUPER<br></br>TRIVIA<br></br>GAME</h1>
      </div>
      <div class="footer">
        <Link to="CategoryWheel">
        <button className="btn">Play The <br></br>Trivia Game!</button>
        </Link>
      </div>
      </>
    );
  }

export default LandingPage