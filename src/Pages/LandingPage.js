import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div class="content">
        <h1 class="logo">
          SUPER<br></br>TRIVIA<br></br>GAME
        </h1>
        {/* landing page theme song */}
        <audio src="/landing.mp3" autoPlay loop hidden></audio>
      </div>

      <div class="footer">
        <Link to="CategoryWheel">
          <button class="btn">
            <a href="#">Play Now!</a>
          </button>
        </Link>
      </div>

      <div class="madebyfooter">
        <div class="david">
          <img src="avatardavid.png" height="80px"></img> <br></br>David
          <br></br>Saiote
        </div>
        <div class="alex">
          <img src="avataralex.png" height="80px"></img> <br />
          Alex <br />
          Lawry-White
        </div>
        <div class="edward">
          <img src="avataredward.png" height="80px"></img> <br />
          Edward
          <br />
          Watson
          <br /> <br />
        </div>
        <div class="madebymessage">Made with love by:</div>
      </div>
    </>
  );
}

export default LandingPage;
