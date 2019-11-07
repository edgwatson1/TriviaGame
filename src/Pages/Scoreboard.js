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
    return (
      <>
      <div class="content">
        Current Level = {this.state.level+1}
        
        <div class="scoreboard">
          <div class="half">
            <div class="scoreboard_bar">
              <div class="scoreboard_bar_fill" style={{ height: `${this.state.level * 20 + 20}%` }}>
              </div>
            </div>
          </div>
          <div class="half">
            You are now<br></br>{this.state.images[this.state.level]["charname"]}!
            <img src={this.state.images[this.state.level]["img"]}  alt="Sprite"/>
          </div>
        </div>
      </div> 

      <div class="footer">
        <Link to="/CategoryWheel">
        <button class="btn">Play Again!</button>
        </Link> 
        <Link to="/">
        <button class="btn">Landing Page</button>
        </Link> 
      </div>
      </>
    );
  };

}

export default Scoreboard
