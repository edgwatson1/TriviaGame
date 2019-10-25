import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Challenge from "./Components/Challenge";

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
            <ChallengeRenderer />
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
      <p>Here are somabout the game</p>
      <Link to="/CategoryWheel">
        <button class="ui button">Play!</button>
      </Link>
    </div>
  );
}

function CategoryWheel() {
  return (
    <>
      <h2>Click to spin the wheel!</h2>
      <Link to="/Challenge">
        <button class="ui button">Spin!</button>
      </Link>
    </>
  );
}

function ChallengeRenderer() {
  return (
    <>
      <Challenge Information="this is some info" /> 
    </>
  );
}

function Scoreboard() {
  return (
    <div>
      <h1>Scoreboard</h1>
      <p>{questionArray}</p>
    <p>You scored 800 points, you are Bowser. Keep going to be Mario!</p>
      <Link to="/CategoryWheel">
        <button class="ui button">Continue</button>
      </Link>
    </div>
  );
}

  const questionArray = [
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: ["Yorkshire Terrier", "Boxer", "Pug"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which river flows through the Scottish city of Glasgow?",
    correct_answer: "Clyde",
    incorrect_answers: ["Tay", "Dee", "Tweed"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the first book of the Old Testament?",
    correct_answer: "Genesis",
    incorrect_answers: ["Exodus", "Leviticus", "Numbers"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    correct_answer: "Cabbage Patch Kids",
    incorrect_answers: ["Transformers", "Care Bears", "Rubik&rsquo;s Cube"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What does a funambulist walk on?",
    correct_answer: "A Tight Rope",
    incorrect_answers: ["Broken Glass", "Balls", "The Moon"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In past times, what would a gentleman keep in his fob pocket?",
    correct_answer: "Watch",
    incorrect_answers: ["Money", "Keys", "Notebook"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How would one say goodbye in Spanish?",
    correct_answer: "Adi&oacute;s",
    incorrect_answers: [" Hola", "Au Revoir", "Salir"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the largest organ of the human body?",
    correct_answer: "Skin",
    incorrect_answers: ["Heart", "large Intestine", "Liver"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In the Morse code, which letter is indicated by 3 dots? ",
    correct_answer: "S",
    incorrect_answers: ["O", "A", "C"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
    correct_answer: "Tango",
    incorrect_answers: ["Target", "Taxi", "Turkey"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What geometric shape is generally used for stop signs?",
    correct_answer: "Octagon",
    incorrect_answers: ["Hexagon", "Circle", "Triangle"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is &quot;dabbing&quot;?",
    correct_answer: "A dance",
    incorrect_answers: ["A medical procedure", "A sport", "A language"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which one of the following rhythm games was made by Harmonix?",
    correct_answer: "Rock Band",
    incorrect_answers: [
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What year was Queen Elizabeth II born?",
    correct_answer: "1926",
    incorrect_answers: ["1923", "1929", "1930"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which film star has his statue in Leicester Square?",
    correct_answer: "Charlie Chaplin",
    incorrect_answers: ["Paul Newman", "Rowan Atkinson ", "Alfred Hitchcock"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these companies does NOT manufacture automobiles?",
    correct_answer: "Ducati",
    incorrect_answers: ["Nissan", "GMC", "Fiat"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
    correct_answer: "OCBC",
    incorrect_answers: ["HSBC", "Standard Chartered", "Bank of China"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
    correct_answer: "Bullfighting",
    incorrect_answers: ["Fiestas", "Flamenco", "Mariachi"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name given to Indian food cooked over charcoal in a clay oven?",
    correct_answer: "Tandoori",
    incorrect_answers: ["Biryani", "Pani puri", "Tiki masala"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the romanized Japanese word for &quot;university&quot;?",
    correct_answer: "Daigaku",
    incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Swedish word for &quot;window&quot;?",
    correct_answer: "F&ouml;nster",
    incorrect_answers: ["H&aring;l", "Sk&auml;rm", "Ruta"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Italian word for &quot;tomato&quot;?",
    correct_answer: "Pomodoro",
    incorrect_answers: ["Aglio", "Cipolla", "Peperoncino"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the romanized Russian word for &quot;winter&quot;?",
    correct_answer: "Zima",
    incorrect_answers: ["Leto", "Vesna", "Osen&#039;"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "The Swedish word &quot;Grunka&quot; means what in English?",
    correct_answer: "Thing",
    incorrect_answers: ["People", "Place", "Pineapple"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the last letter of the Greek alphabet?",
    correct_answer: "Omega",
    incorrect_answers: ["Mu", "Epsilon", "Kappa"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
    correct_answer: "1 Month",
    incorrect_answers: ["3 Weeks", "1 Week", "2 Months"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "What character was once considered to be the 27th letter of the alphabet?",
    correct_answer: "Ampersand",
    incorrect_answers: ["Interrobang", "Tilde", "Pilcrow"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following carbonated soft drinks were introduced first?",
    correct_answer: "Dr. Pepper",
    incorrect_answers: ["Coca-Cola", "Sprite", "Mountain Dew"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What direction does the Statue of Liberty face?",
    correct_answer: "Southeast",
    incorrect_answers: ["Southwest", "Northwest", "Northeast"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
    correct_answer: "Print",
    incorrect_answers: ["Digest", "Look", "Read"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was Mountain Dew&#039;s original slogan?",
    correct_answer: "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
    incorrect_answers: [
      "Give Me A Dew",
      "Do The Dew",
      "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?",
    correct_answer: "Twilight Zone Tower of Terror",
    incorrect_answers: [
      "The Haunted Mansion",
      "Pirates of the Caribbean",
      "Peter Pan&#039;s Flight"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was the soft drink Pepsi originally introduced as?",
    correct_answer: "Brad&#039;s Drink",
    incorrect_answers: ["Pepsin Pop", "Carolina Cola", "Pepsin Syrup"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Portuguese word for &quot;Brazil&quot;?",
    correct_answer: "Brasil",
    incorrect_answers: ["Brazil", "Brasilia", "Bras&iacute;l"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to Fair Works Australia, how long do you have to work to get Long Service Leave?",
    correct_answer: "7 years",
    incorrect_answers: ["2 years", "8 years", "6 months"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
    correct_answer: "28%",
    incorrect_answers: ["13%", "20%", "7%"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is a Burgee?",
    correct_answer: "A flag",
    incorrect_answers: ["A rope", "A window", "A type of food"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following presidents is not on Mount Rushmore?",
    correct_answer: "John F. Kennedy",
    incorrect_answers: [
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Earl Grey tea is black tea flavoured with what?",
    correct_answer: "Bergamot oil",
    incorrect_answers: ["Lavender", "Vanilla", "Honey"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which country drives on the left side of the road?",
    correct_answer: "Japan",
    incorrect_answers: ["Germany", "Russia", "China"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "In which fast food chain can you order a Jamocha Shake?",
    correct_answer: "Arby&#039;s",
    incorrect_answers: ["McDonald&#039;s", "Burger King", "Wendy&#039;s"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Quadrangularis Reversum is best described as which of the following?",
    correct_answer: "A percussion instrument",
    incorrect_answers: [
      "A building in Oxford University",
      "A chess move",
      "A geometric theorem"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Where is Apple Inc. headquartered?",
    correct_answer: "Cupertino, California",
    incorrect_answers: [
      "Redwood City, California",
      "Redmond, Washington",
      "Santa Monica, CA"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Terry Gilliam was an animator that worked with which British comedy group?",
    correct_answer: "Monty Python",
    incorrect_answers: [
      "The Goodies&lrm;",
      "The League of Gentlemen&lrm;",
      "The Penny Dreadfuls"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the star sign of someone born on Valentines day?",
    correct_answer: "Aquarius",
    incorrect_answers: ["Pisces", "Capricorn", "Scorpio"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Located in Chile, El Teniente is the world&#039;s largest underground mine for what metal?",
    correct_answer: "Copper",
    incorrect_answers: ["Iron", "Nickel", "Silver"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "When one is &quot;envious&quot;, they are said to be what color?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "When someone is cowardly, they are said to have what color belly?",
    correct_answer: "Yellow",
    incorrect_answers: ["Green", "Red", "Blue"]
  }

]


console.log(questionArray[Math.floor(Math.random() * Math.floor(50))].question);
