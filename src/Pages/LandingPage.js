import React from "react";
import {Link} from "react-router-dom";



function LandingPage() {
    return (
      <>
      <div class="content">
         <h1 class="logo">SUPER<br></br>TRIVIA<br></br>GAME</h1>
         <audio src="/landing.mp3" autoPlay loop  hidden></audio>
         </div>
     
      <div class="footer">
        <Link to="CategoryWheel">
        <button class="btn"><a href="#">Play The<br></br>Trivia Game!</a></button>
        </Link>
      </div>
      </>
    );
  }

export default LandingPage