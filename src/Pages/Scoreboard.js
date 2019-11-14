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
    const sum = Math.ceil(
      (scoreLine[this.props.level] - this.props.globalScore) / 3750000
    )
    return (
      this.props.level < 5 &&
      `Only ${sum} more correct answers to level up to ${
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
      return "You've become royalty, Princess! You're the Quiz-Queen!!"
    } else if (this.props.level === 5) {
      return "AAaaahhh YOU COMPLETED IT!! You're Mario! You know everything!! AAAAHHHHHHhhhhhhhh!!!"
    } else {
      return 'Keep flexing that intellect to level up!'
    }
  }

  whoIsBig = () => {
    if (this.state.level === 1) {
      return '/level1-cropped.png'
    } else if (this.state.level === 2) {
      return '/level2-cropped.png'
    } else if (this.state.level === 3) {
      return '/level3-cropped.png'
    } else if (this.state.level === 4) {
      return '/level4-cropped.png'
    } else if (this.state.level === 5) {
      return '/level5-cropped.png'
    } else {
      return '/level1-cropped.png'
    }
  }

  render = () => {
    /* this creates an array with all other levels other than the level value */
    const otherids = this.state.images.filter(
      retfil => retfil.id !== this.state.level + 1
    )
    const { globalScore, level } = this.props

    return (
      <>
        <table className='table-head'>
          <tbody>
            <tr>
              <td>
                <img src='./mariocoin.png' height='40px' />
              </td>

              <td>
                <h3>TOTAL SCORE: {globalScore}</h3>
              </td>
              <td>
                <img src='./mariocoin.png' height='40px' />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='content2'>
          <audio src='/score.mp3' autoPlay loop />
          <h1 className='char-announcement'>{this.congratsMessage()}</h1>

          <div className='char-grid'>
            {/* big character */}
            <div className='big-pic big-char-row'>
              <img
                className='big-pic-style'
                src={this.whoIsBig()}
                alt='current character'
              />
            </div>
            {/* small characters */}
            <div
              className={
                this.state.level === 1
                  ? 'toad small-char-row-invisible'
                  : 'toad small-char-row-faded'
              }
            >
              <img src='/level1-cropped.png' alt='toad' height='75vh' />
            </div>
            <div
              className={
                this.state.level === 2
                  ? 'yoshi small-char-row-invisible'
                  : 'yoshi small-char-row-faded'
              }
            >
              <img src='/level2-cropped.png' alt='yoshi' height='75vh' />
            </div>
            <div
              className={
                this.state.level === 3
                  ? 'bowser small-char-row-invisible'
                  : 'bowser small-char-row-faded'
              }
            >
              <img src='/level3-cropped.png' alt='bowser' height='75vh' />
            </div>
            <div
              className={
                this.state.level === 4
                  ? 'princess small-char-row-invisible'
                  : 'princess small-char-row-faded'
              }
            >
              <img src='/level4-cropped.png' alt='princess' height='75vh' />
            </div>
            <div
              className={
                this.state.level === 5
                  ? 'mario small-char-row-invisible'
                  : 'mario small-char-row-faded'
              }
            >
              <img src='/level5-cropped.png' alt='mario' height='75vh' />
            </div>
          </div>
          <h2 className='qns-to-progress'>{this.qnsToProgressMessage()}</h2>
        </div>
        <div className='footer'>
          <Link to='/CategoryWheel'>
            <button className='btn'>
              <a href='/CategoryWheel'> Continue...</a>
            </button>
          </Link>
        </div>
      </>
    )
  }
}
export default Scoreboard
