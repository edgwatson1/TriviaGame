// SCOREBOARD IS A DIRECT CHILD OF APP.JS

import React from "react";
import { Link } from "react-router-dom";
import AddLeader from "../Components/add-leader"

class Scoreboard extends React.Component {
  componentDidMount() {
    this.props.updateLevel();
  }

  /* Character sprites change according to "level" number (0-4).
  Chage "level" to change both image, bar height and character name. */

  state = {
    images: [
      {
        id: 1,
        img: "/level1.png",
        charname: "Toad"
      },
      {
        id: 2,
        img: "/level2.png",
        charname: "Yoshi"
      },
      {
        id: 3,
        img: "/level3.png",
        charname: "Bowser"
      },
      {
        id: 4,
        img: "/level4.png",
        charname: "Princess"
      },
      {
        id: 5,
        img: "/level5.png",
        charname: "Mario"
      }
    ],
    /* Score input goes here. */
    level: this.props.level
  };

  qnsToProgressMessage = () => {
    const scoreLine = [0, 11250000, 33750000, 71250000, 100000000];
    const sum = Math.ceil(
      (scoreLine[this.props.level] - this.props.globalScore) / 3750000
    );
    return (
      this.props.level < 5 &&
      `Only ${sum} more correct answers to level up to ${
      this.state.images[this.props.level]["charname"]
      }!!`
    );
  };

  congratsMessage = () => {
    if (this.props.level === 1) {
      return "You Are Now Toad!";
    } else if (this.props.level === 2) {
      return "Yes, Yoshi! Stay On The Brain-Train!";
    } else if (this.props.level === 3) {
      return "Big Boss Bowser! The Architect Of Intellect.";
    } else if (this.props.level === 4) {
      return "You've Become Royalty, Princess! You're A Quiz-Queen!";
    } else {
      return "Keep Flexing That Intellect To Level Up!";
    }
  };

  whoIsBig = () => {
    if (this.props.level === 1) {
      return "/level1-cropped.png";
    } else if (this.props.level === 2) {
      return "/level2-cropped.png";
    } else if (this.props.level === 3) {
      return "/level3-cropped.png";
    } else if (this.props.level === 4) {
      return "/level4-cropped.png";
    } else if (this.props.level === 5) {
      return "/level5-cropped.png";
    }
  };

  render = () => {
    /* this creates an array with all other levels other than the level value */
    const otherids = this.state.images.filter(
      retfil => retfil.id !== this.state.level + 1
    );
    const { globalScore, level, overallTime } = this.props;

    if (this.props.level === 5) {

      return (
        <div className="container">

          <h1 className="spinner-message">
            
        
            <audio src='/score.mp3' autoPlay loop />
            <div>
              <img
                className="rotatingstar"
                src="./rotatingstar.gif"
                alt="rotating star"
              />
              <img
                className="rotatingstar"
                src="./rotatingstar.gif"
                alt="rotating star"
              />
              <img
                className="rotatingstar"
                src="./rotatingstar.gif"
                alt="rotating star"
              />
            </div>
            <h2>
              You've Completed The Game!
              Mario Wants You On The Leaderboard!
            </h2>

            <div>
              <img
                className="spinnergif"
                src="./mariodance.gif"
                alt="category spinner wheel"
              />
            </div>
              <footer>
                <AddLeader overallTime={overallTime} />
              </footer>
            </h1>
        </div>
          );
    } else {
      return (
        <>
            <div className="container">

            <audio src='/score.mp3' autoPlay loop />

              <table className="table-head">
                <tbody>
                  <tr>
                    <td>
                      <img src="./mariocoin.png" height="40vmin" />
                    </td>

                    <td>
                      <h2>TOTAL SCORE: {globalScore}</h2>
                    </td>
                    <td>
                      <img src="./mariocoin.png" height="40vmin" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="spinner-message">
                {/* <audio src="/score.mp3" autoPlay loop /> */}
                <div>
                  <h2>{this.congratsMessage()}</h2>
                </div>

                <div className="char-grid">
                  {/* big character */}
                  <div className="big-pic big-char-row">
                    <img
                      className="big-pic-style"
                      src={this.whoIsBig()}
                      alt="current character"
                    />
                  </div>
                  {/* small characters */}
                  <div
                    className={
                      this.props.level === 1
                        ? "toad small-char-row-invisible"
                        : "toad small-char-row-faded"
                    }
                  >
                    <img src="/level1-cropped.png" alt="toad" height="75vmin" />
                  </div>
                  <div
                    className={
                      this.props.level === 2
                        ? "yoshi small-char-row-invisible"
                        : "yoshi small-char-row-faded"
                    }
                  >
                    <img src="/level2-cropped.png" alt="yoshi" height="75vmin" />
                  </div>
                  <div
                    className={
                      this.props.level === 3
                        ? "bowser small-char-row-invisible"
                        : "bowser small-char-row-faded"
                    }
                  >
                    <img src="/level3-cropped.png" alt="bowser" height="75vmin" />
                  </div>
                  <div
                    className={
                      this.props.level === 4
                        ? "princess small-char-row-invisible"
                        : "princess small-char-row-faded"
                    }
                  >
                    <img src="/level4-cropped.png" alt="princess" height="75vmin" />
                  </div>
                  <div
                    className={
                      this.props.level === 5
                        ? "mario small-char-row-invisible"
                        : "mario small-char-row-faded"
                    }
                  >
                    <img src="/level5-cropped.png" alt="mario" height="75vmin" />
                  </div>
                </div>

                <div>
                  <h2 className="qns-to-progress">
                    {this.qnsToProgressMessage()}
                  </h2>
                </div>
              </div>

              <div className="footer">
                <Link to="/CategoryWheel">
                  <button className="btn">
                    <a href="/CategoryWheel">
                      {" "}
                      Play Again!
                    </a>
                  </button>
                </Link>
              </div>
            </div>
          </>
          );
        }
      };
    }
    
    export default Scoreboard;
