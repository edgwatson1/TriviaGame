import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage () {
  return (
    <>
      <div class='container'>
        <h1 class='logo'>
          SUPER
          <br />
          TRIVIA
          <br />
          GAME
        </h1>
        {/* landing page theme song */}
        <audio src='/landing.mp3' autoPlay loop hidden />

        <div class='footer'>
          <Link to='CategoryWheel'>
            <button class='btn'>
              <a href='#'>Play Now!</a>
            </button>
          </Link>
        </div>

        <div class='madebyfooter'>
          <div class='david'>
            <img src='avatardavid.png' height='80px' /> <br />
            David
            <br />
            Saiote
          </div>
          <div class='alex'>
            <img src='avataralex.png' height='80px' /> <br />
            Alex <br />
            Lawry-White
          </div>
          <div class='edward'>
            <img src='avataredward.png' height='80px' /> <br />
            Edward
            <br />
            Watson
            <br /> <br />
          </div>
          <div class='madebymessage'>Made with love by:</div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
