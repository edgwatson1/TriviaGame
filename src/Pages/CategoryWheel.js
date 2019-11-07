import React from "react";
import {Link} from "react-router-dom";

function CategoryWheel({fetchQuestions, categoryName}) {

  return (
    <>
      <div class="content">
        <div class="question">
        Click to spin the wheel!
        </div>
        <div class="popup">
        Welcome to the<br></br>{categoryName} round!
        </div>

        {/* Temporary link. Just for testing purposes. */}
        <div>
          <Link to="/Challenge">GO> Challenge</Link>
        </div>
      </div>

      <div class="footer">
        <button className="btn" onClick={fetchQuestions}>Click Me To<br></br>Spin The Wheel!</button>
      </div>
    </>
  );
}

export default CategoryWheel
