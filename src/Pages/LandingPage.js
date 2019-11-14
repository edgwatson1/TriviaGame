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
        <div class="footer">
          <Link to="CategoryWheel">
            <button class="btn" id="playnow">
              <a href="#">Play!</a>
            </button>
          </Link>
        </div>
        <div class="madebyfooterwrapper">
          <div class="madebyfooter">
            <div class="david">
              <img src="avatardavid.png" height="80px"></img>
              <p id="name">
                <br></br>David
                <br></br>Saiote
              </p>
            </div>
            <div class="alex">
              <img src="avataralex.png" height="80px"></img>
              <p id="name">
                {" "}
                <br />
                Alex <br />
                Lawry-White
              </p>
            </div>
            <div class="edward">
              <img src="avataredward.png" height="80px"></img>{" "}
              <p id="name">
                <br />
                Edward
                <br />
                Watson
                <br /> <br />
              </p>
            </div>
            <div class="madebymessage">
              Made with <img src="8bit-heart.png" height="25px"></img> by:
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
