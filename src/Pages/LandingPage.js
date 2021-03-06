import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage({ startOverallTimer }) {

  return (
    <>
      <div className='container'>
        <h1 className='logo'>
          SUPER
          <br />
          TRIVIA
          <br />
          GAME
        </h1>

        {/* landing page theme song */}
        <audio src='/landing.mp3' autoPlay loop />

        <Link to='CategoryWheel'>
          <button
            className='btn'
            onClick={startOverallTimer}
          >
            <a href='#'>Play Now!</a>
          </button>
        </Link>

        <div className='madebyfooter'>

          <div className='madebymessage'>Made with love by:</div>

          <div className='alex'>
            <img src='avataralex.png' height='80px' /> <br />
          </div>

          <div className='david'>
            <img src='avatardavid.png' height='80px' /> <br />
          </div>

          <div className='edward'>
            <img src='avataredward.png' height='80px' /> <br />
          </div>

          <div>
            Alex Lawry-White
          </div>

          <div>
            David Saiote
          </div>

          <div>
            Edward Watson
          </div>

        </div>
      </div>
    </>
  )
}

export default LandingPage
