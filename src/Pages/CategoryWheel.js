import React from "react";
import { Link } from "react-router-dom";

function CategoryWheel({ fetchQuestions, categoryName }) {
  return (
    <div>
      <h2>Click to spin the wheel!</h2>

      <Link to="/Challenge">
        <button className="ui button" onClick={fetchQuestions}>
          You spin me right round baby right round
        </button>
      </Link>
      <div>
        <h1>Welcome to the {categoryName} round!</h1>
      </div>
    </div>
  );
}

export default CategoryWheel;
