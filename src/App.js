import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Challenge from "./Components/Challenge";
import LandingPage from "./Pages/LandingPage";
import CategoryWheel from "./Pages/CategoryWheel";
import Scoreboard from "./Pages/Scoreboard";

// App component

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: "",
      questionPackages: placeholderData,
      //see placeholderData at the bottom of the page
    }
  }


  fetchQuestions = () => {
    const randomCategory = (Math.floor(Math.random() * Math.floor(24)) + 9);
    console.log(randomCategory);
  
    fetch(`https://opentdb.com/api.php?amount=10&category=${randomCategory}`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          questionPackages: results.results,
          category: results.results[0].category
        });
      })
    };


  render() { 
    // console.log(this.state.questionPackages);
    // console.log(this.state.category);
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
            <CategoryWheel fetchQuestions={this.fetchQuestions} categoryName={this.state.category}/>
          </Route>
          <Route exact path="/Challenge">
          <Challenge
            questionPackages={this.state.questionPackages}
          />
          </Route>
          <Route exact path="/Scoreboard">
            <Scoreboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
 }
}


const placeholderData = [{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Rolex is a company that specializes in what type of product?","correct_answer":"Watches","incorrect_answers":["Cars","Computers","Sports equipment"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ","correct_answer":"Subscriber","incorrect_answers":["Single","Secure","Solid"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?","correct_answer":"Shiatsu","incorrect_answers":["Ukiyo","Majime","Ikigai"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?","correct_answer":"Spruce Goose","incorrect_answers":["Noah&#039;s Ark","Fat Man","Trojan Horse"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which American-owned brewery led the country in sales by volume in 2015?","correct_answer":"D. G. Yuengling and Son, Inc","incorrect_answers":["Anheuser Busch","Boston Beer Company","Miller Coors"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?","correct_answer":"Hewlett-Packard","incorrect_answers":["Toshiba","Asus","Dell"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which country, not including Japan, has the most people of japanese decent?","correct_answer":"Brazil","incorrect_answers":["China","South Korea","United States of America"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Which company&#039;s original slogan was &quot;Don&#039;t be evil&quot;?","correct_answer":"Google","incorrect_answers":["Apple","Yahoo","Microsoft"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the Zodiac symbol for Gemini?","correct_answer":"Twins","incorrect_answers":["Fish","Scales","Maiden"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What nuts are used in the production of marzipan?","correct_answer":"Almonds","incorrect_answers":["Peanuts","Walnuts","Pistachios"]}]

export default App
