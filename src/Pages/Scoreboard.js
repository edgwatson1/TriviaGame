import React from "react";
import {Link} from "react-router-dom";

class Scoreboard extends React.Component {

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
    level: 2
	}

  

  render = () => {
    /* this creates an array with all other levels other than the level value */
    const otherids = this.state.images.filter(retfil => retfil.id !== this.state.level+1);

    return (
      <>
      
      <div class="content">
        {/* prints current level  using level (array position) + 1 */}
        Current Level = {this.state.level+1}
        {/* scoreboard theme song */}
        <audio src="/score.mp3" autoPlay loop></audio>
        <div class="scoreboard">
          <div class="half">
            {/* scoreboard bar */}
            <div class="scoreboard_bar">
              <div class="scoreboard_bar_fill" style={{ height: `${this.state.level * 20 + 20}%` }}>
              </div>
            </div>
          </div>
          <div class="half">
            {/* character name and image */}
            You are now<br></br>{this.state.images[this.state.level]["charname"]}!<p></p><p></p>
            <img src={this.state.images[this.state.level]["img"]}  alt="Sprite"/>
          </div>
          <div class="faded">

          {/* these 4 characters are the filtered out ones, 50% transparent */}
            <img src={otherids[0].img}  alt="Sprite"/>
            <img src={otherids[1].img}  alt="Sprite"/>

          </div>
          <div class="faded">
            <img src={otherids[2].img}  alt="Sprite"/>
            <img src={otherids[3].img}  alt="Sprite"/>
          </div>
        </div>
      </div>

      <div class="footer">
        <Link to="/CategoryWheel">
        <button class="btn"><a href="#">Play Again!</a></button>
        </Link> 
        <Link to="/">
        <button class="btn"><a href="#">Landing Page</a></button>
        </Link> 
      </div>
      </>
    );
  };

}

export default Scoreboard
