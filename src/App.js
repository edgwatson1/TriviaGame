import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">LandingPage</Link>
            </li>
            <li>
              <Link to="/CategoryWheel">CategoryWheel</Link>
            </li>
            <li>
              <Link to="/Challenge">Challenge</Link>
            </li>
            <li>
              <Link to="/Scoreboard">Scoreboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/CategoryWheel">
            <CategoryWheel />
          </Route>
          <Route exact path="/Challenge">
            <Challenge />
          </Route>
          <Route exact path="/Scoreboard">
            <Scoreboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LandingPage() {
  return (
    <div>
      <h2>Landing Page</h2>
      <p>Here are some instructions about the game</p>
      <Link to="/CategoryWheel">
        <button class="ui button">Play!</button>
      </Link>
    </div>
  );
}

function CategoryWheel() {
  return (
    <div>
      <h2>Click to spin the wheel!</h2>
      <Link to="/Challenge">
        <button class="ui button">Spin!</button>
      </Link>
    </div>
  );
}

function Challenge() {
  return (
    <div>
      <h2>Challenge</h2>
      <p>10 questions appear one after each other</p>
      <Link to="/Scoreboard">
        <button class="ui button">
          Check your level (automatic transition after 10th question)
        </button>
      </Link>
    </div>
  );
}

function Scoreboard() {
  return (
    <div>
      <h1>Scoreboard</h1>
      <p>You scored 800 points, you are Bowser. Keep going to be Mario!</p>
      <Link to="/CategoryWheel">
        <button class="ui button">Continue</button>
      </Link>
    </div>
  );
}
