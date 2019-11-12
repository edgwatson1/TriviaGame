import React from "react";
import {Link} from "react-router-dom";

function CategoryWheel({fetchQuestions, categoryName}) {

  return (
    <>
      <div class="content">
        <div class="question">
        Click The Button<br></br>To Spin The<br></br>Category Wheel!
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
      <button className="btn" onClick={fetchQuestions}><a href="#">Click Me To<br></br>Spin The Wheel!</a></button>
      </div>
    </>
  );
}

export default CategoryWheel
