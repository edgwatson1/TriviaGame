// SCOREBOARD IS A DIRECT CHILD OF APP.JS

import React from 'react'
import { Link } from 'react-router-dom'

class Scoreboard extends React.Component {
  componentDidMount () {
    this.props.updateLevel()
  }

  /* Character sprites change according to "level" number (0-4).
  Chage "level" to change both image, bar height and character name. */

  state = {
    images: [
      {
        id: 1,
        img: '/level1.png',
        charname: 'Toad'
      },
      {
        id: 2,
        img: '/level2.png',
        charname: 'Yoshi'
      },
      {
        id: 3,
        img: '/level3.png',
        charname: 'Bowser'
      },
      {
        id: 4,
        img: '/level4.png',
        charname: 'Princess'
      },
      {
        id: 5,
        img: '/level5.png',
        charname: 'Mario'
      }
    ],
    /* Score input goes here. */
    level: this.props.level
  }

  qnsToProgressMessage = () => {
    const scoreLine = [0, 11250000, 33750000, 71250000, 100000000]
    const sum = (scoreLine[this.props.level] - this.props.globalScore) / 3750000
    return (
      this.props.level < 5 &&
      `Only ${sum} more right answers to level up to ${
        this.state.images[this.props.level]['charname']
      }!!`
    )
  }

  congratsMessage = () => {
    if (this.props.level === 1) {
      return "You're now Toad!"
    } else if (this.props.level === 2) {
      return 'Yes, Yoshi!! Stay on the Brain-train!!'
    } else if (this.props.level === 3) {
      return 'Big Boss Bowser!! The Architect of Intellect.'
    } else if (this.props.level === 4) {
      return "You're officially Royalty! Keep this up and you'll become Mario. You're a Quiz-Monster!!!!"
    } else if (this.props.level === 5) {
      return "AAaaahhh YOU COMPLETED IT!! You're Mario! You know everything!! You've taken over the world!!!!! AAAAHHHHHHhhhhhhhh!!!"
    } else {
      return 'Keep flexing that intellect to level up!'
    }
  }

  render = () => {
    console.log(this.props.level)
    /* this creates an array with all other levels other than the level value */
    const otherids = this.state.images.filter(
      retfil => retfil.id !== this.state.level + 1
    )
    const { globalScore, level } = this.props

    return (
      <>
        <h1>Score: {globalScore}</h1>
        <div class='content'>
          <audio src='/score.mp3' autoPlay loop />
          <h1>{this.congratsMessage()}</h1>
          <h2>{this.qnsToProgressMessage()}</h2>
        </div>

        <div class='footer'>
          <Link to='/CategoryWheel'>
            <button class='btn'>
              <a href='#'>Play Again!</a>
            </button>
          </Link>
        </div>
      </>
    )
  }
}
export default Scoreboard
