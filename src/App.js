import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import firebase from "./firebase.js";
import Challenge from "./Components/Challenge";
import Leaderboard from "./Components/leaderboard"
import LandingPage from "./Pages/LandingPage";
import CategoryWheel from "./Pages/CategoryWheel";
import Scoreboard from "./Pages/Scoreboard";
import LeaderboardOrig from "./Pages/LeaderboardOrig"
import countScore from "./Helpers/countScore";
import checkLevel from "./Helpers/checkLevel";
import "./App.css";


// App Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      questionPackages: placeholderData,
      step: 0,
      localScore: 0,
      globalScore: 0,
      totalScore: this.localScore + this.globalScore,
      isLoaded: false,
      level: 1,
      overallTime: 0
    };
    this.startOverallTimer = this.startOverallTimer.bind(this);
  }

  // THE API FETCH
  fetchQuestions = () => {
    const randomCategory = Math.floor(Math.random() * Math.floor(24)) + 9;

    this.setState({ isLoaded: false }, () => {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${randomCategory}&encode=url3986`
      )
        .then(res => res.json())
        .then(results => {
          this.setState({
            questionPackages: results.results,
            category: results.results[0].category,
            isLoaded: true
          });
        });
    });
  };



  // TIMES HOW LONG THE WHOLE GAME TOO TO ESTABLISH LEADERBOARD POSITION
  startOverallTimer() {
    if (this.state.level < 5) {
      this.timer = setInterval(
        () =>
          this.setState((prevState) => {
            return prevState.level < 5 ? {
              ...prevState,
              overallTime: this.state.overallTime + 1
            } : { ...prevState }
          }),
        1000
      )
    }
  }





  // REDIRECTION TO SCOREBOARD PAGE WHEN STATE REACHES 10
  renderRedirect = () => {
    if (this.state.step === 10) {
      return <Redirect to="/Scoreboard" />;
    }
  };

  // SUM THE LOCAL-SCORE INTO THE GLOBAL-SCORE WHEN STATE REACHES 10
  globalScoreAccumulator = () => {
    if (this.state.step === 10) {
      return this.setState({
        globalScore: this.state.globalScore + this.state.localScore,
        step: 0
      });

      // david> change popup css class to visible
      document.getElementsByClassName("popup")[0].style.visibility = "visible";
    }
  };

  // we want to ADD to tasks, not replace them
  // hence we need a FUNCTION, not an obj in setState()

  handleNextStep = () => {
    this.setState(state => {
      return {
        ...state,
        step: ++state.step
      };
    });
  };

  onClickAnswer = userAnswer => {
    this.setState(state => {
      const updatedQuestionPackages = state.questionPackages.map(
        (questionPackage, i) => {
          if (state.step === i) {
            questionPackage.user_answer = userAnswer;
          }
          return questionPackage;
        }
      );

      return {
        ...state,
        questionPackages: updatedQuestionPackages,
        localScore: countScore(updatedQuestionPackages)
      };
    });
  };

  // THIS CALLS THE HELPER METHOD UPDATELEVEL WHICH LOOKS AT GLOBAL SCORE AND RETURNS THE RIGHT LEVEL NAME AS A STRING WHICH WE THEN SET AS THE VALUE OF THE LEVEL STATE IN APP.
  updateLevel = () => {
    this.setState(state => {
      return {
        ...state,
        level: checkLevel(this.state.globalScore)
      };
    });
  };

  totalScore = () => {
    const res = this.state.localScore + this.state.globalScore;
    return res;
  };

  // inside class components your methods don't need a const

  render() {
    console.log(this.state.overallTime);

    return (
      <BrowserRouter>
        {this.renderRedirect()}
        {this.globalScoreAccumulator()}
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LandingPage startOverallTimer={this.startOverallTimer} />
          </Route>
          <Route path="/CategoryWheel">
            <CategoryWheel
              fetchQuestions={this.fetchQuestions}
              categoryName={this.state.category}
            />
          </Route>
          <Route path="/Challenge">
            <Challenge
              questionPackages={this.state.questionPackages}
              step={this.state.step}
              onNextStep={this.handleNextStep}
              onClickAnswer={this.onClickAnswer}
              isLoaded={this.state.isLoaded}
              characters={characters}
              level={this.state.level}
              totalScore={this.totalScore}
              category={this.state.category}
            />
          </Route>
          <Route path="/Scoreboard">
            <Scoreboard
              globalScore={this.state.globalScore}
              updateLevel={this.updateLevel}
              level={this.state.level}
              overallTime={this.state.overallTime}
            />
            {/* <AddLeader overallTime={this.state.overallTime} /> */}
          </Route>
          <Route path="/Leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const placeholderData = [
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Rolex is a company that specializes in what type of product?",
    correct_answer: "Watches",
    incorrect_answers: ["Cars", "Computers", "Sports equipment"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    correct_answer: "Subscriber",
    incorrect_answers: ["Single", "Secure", "Solid"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
    correct_answer: "Shiatsu",
    incorrect_answers: ["Ukiyo", "Majime", "Ikigai"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    correct_answer: "Spruce Goose",
    incorrect_answers: ["Noah&#039;s Ark", "Fat Man", "Trojan Horse"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which American-owned brewery led the country in sales by volume in 2015?",
    correct_answer: "D. G. Yuengling and Son, Inc",
    incorrect_answers: ["Anheuser Busch", "Boston Beer Company", "Miller Coors"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Toshiba", "Asus", "Dell"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    correct_answer: "Brazil",
    incorrect_answers: ["China", "South Korea", "United States of America"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which company&#039;s original slogan was &quot;Don&#039;t be evil&quot;?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Yahoo", "Microsoft"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Zodiac symbol for Gemini?",
    correct_answer: "Twins",
    incorrect_answers: ["Fish", "Scales", "Maiden"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What nuts are used in the production of marzipan?",
    correct_answer: "Almonds",
    incorrect_answers: ["Peanuts", "Walnuts", "Pistachios"]
  }
];

const characters = [
  {},
  {
    id: 1,
    img: "/level1-cropped.png",
    charname: "TOAD"
  },
  {
    id: 2,
    img: "/level2-cropped.png",
    charname: "YOSHI"
  },
  {
    id: 3,
    img: "/level3-cropped.png",
    charname: "BOWSER"
  },
  {
    id: 4,
    img: "/level4-cropped.png",
    charname: "PRINCESS"
  },
  {
    id: 5,
    img: "/level5-cropped.png",
    charname: "MARIO"
  }
];

export default App;
