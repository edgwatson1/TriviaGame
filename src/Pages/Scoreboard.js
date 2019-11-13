// SCOREBOARD IS A DIRECT CHILD OF APP.JS

import React from "react";
import { Link } from "react-router-dom";

// const Scoreboard = ({ globalScore, checkCharacter, character }) => {
//   ComponentDidMount = () => {
//   };

//   return (
//     <div>
//       <button onClick={checkCharacter}>check character</button>
//       <h1>Scoreboard</h1>
//       <h2>Global Score: {globalScore}</h2>

//       <p>
//         You scored {globalScore} points, you are {character}!
//       </p>
//       <Link to="/CategoryWheel">
//         <button className="ui button">Next round</button>
//       </Link>
//     </div>
//   );
// };

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateLevel();
  }

  render() {
    const { globalScore, level } = this.props;

    return (
      <div>
        <h1>Scoreboard</h1>
        <h2>Global Score: {globalScore}</h2>

        <p>
          You scored {globalScore} points. You are at level {level}!
        </p>
        <Link to="/CategoryWheel">
          <button className="ui button">Next round</button>
        </Link>
      </div>
    );
  }
}

export default Scoreboard;
