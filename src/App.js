import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Challenge from './Components/Challenge'
import LandingPage from './Pages/LandingPage'
import CategoryWheel from './Pages/CategoryWheel'
import Scoreboard from './Pages/Scoreboard'
import countScore from './Helpers/countScore'

// App component

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      questionPackages: placeholderData,
      // see placeholderData at the bottom of the page
      step: 0,
      localScore: 0,
      globalScore: 0,
      isLoaded: false
      // redirect: false,
    }
  }

  // THE API FETCH
  fetchQuestions = () => {
    const randomCategory = Math.floor(Math.random() * Math.floor(24)) + 9

    this.setState({ isLoaded: false }, () => {
      fetch(`https://opentdb.com/api.php?amount=10&category=${randomCategory}`)
        .then(res => res.json())
        .then(results => {
          this.setState({
            questionPackages: results.results,
            category: results.results[0].category,
            isLoaded: true
          })
        })
    })
  }

  // REDIRECTION TO SCOREBOARD PAGE WHEN STATE REACHES 10
  renderRedirect = () => {
    if (this.state.step === 10) {
      return <Redirect to='/Scoreboard' />
    }
  }

  // SUM THE LOCAL-SCORE INTO THE GLOBAL-SCORE WHEN STATE REACHES 10
  // globalScoreAccumulator = () => {
  //   this.setState(state => {
  //     if (state.step === 10) {
  //       return (this.setState.globalScore =
  //         state.globalScore + state.localScore);
  //     }
  //     return state.globalScore;
  //   });
  // };

  globalScoreAccumulator = () => {
    if (this.state.step === 10) {
      return this.setState({
        globalScore: this.state.globalScore + this.state.localScore,
        step: 0
      })
      // return this.state.globalScore;
    }
  }

  // we want to ADD to tasks, not replace them
  // hence we need a FUNCTION, not an obj in setState()

  handleNextStep = () => {
    this.setState(state => {
      return {
        ...state,
        step: ++state.step
      }
    })
  }

  // if step === 10 redirect to another page
  // if step = 10
  // route --> scoreboard page
  // add local score to global score

  // WHEN AN ANSWER BUTTON IS CLICKED, CREATE A WHOLE NEW STATE OBJECT WHICH WILL NOW INCLUDE A NEW 'USER_STATE' PROPERTY, AND THEN RUN THE LOCAL-SCORE HELPER FUNCTION
  onClickAnswer = userAnswer => {
    this.setState(state => {
      const updatedQuestionPackages = state.questionPackages.map(
        (questionPackage, i) => {
          if (state.step === i) {
            questionPackage.user_answer = userAnswer
          }
          return questionPackage
        }
      )

      return {
        ...state,
        questionPackages: updatedQuestionPackages,
        localScore: countScore(updatedQuestionPackages)
      }
    })
  }

  // inside class components your methods don't need a const

  render () {
    return (
      <BrowserRouter>
        <div>{this.renderRedirect()}</div>
        <div>{this.globalScoreAccumulator()}</div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>LandingPage</Link>
              </li>

              <li>
                <Link to='/CategoryWheel'>CategoryWheel</Link>
              </li>
              <li>
                <Link to='/Challenge'>Challenge</Link>
              </li>
              <li>
                <Link to='/Scoreboard'>Scoreboard</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/CategoryWheel'>
              <CategoryWheel
                fetchQuestions={this.fetchQuestions}
                categoryName={this.state.category}
              />
            </Route>
            <Route path='/Challenge'>
              <h1>Global Score: {this.state.globalScore}</h1>
              <h2>Local Score: {this.state.localScore}</h2>
              <Challenge
                questionPackages={this.state.questionPackages}
                step={this.state.step}
                onNextStep={this.handleNextStep}
                onClickAnswer={this.onClickAnswer}
                isLoaded={this.state.isLoaded}
              />
            </Route>
            <Route path='/Scoreboard'>
              <Scoreboard globalScore={this.state.globalScore} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const placeholderData = [
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Rolex is a company that specializes in what type of product?',
    correct_answer: 'Watches',
    incorrect_answers: ['Cars', 'Computers', 'Sports equipment']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ',
    correct_answer: 'Subscriber',
    incorrect_answers: ['Single', 'Secure', 'Solid']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?',
    correct_answer: 'Shiatsu',
    incorrect_answers: ['Ukiyo', 'Majime', 'Ikigai']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?',
    correct_answer: 'Spruce Goose',
    incorrect_answers: ['Noah&#039;s Ark', 'Fat Man', 'Trojan Horse']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which American-owned brewery led the country in sales by volume in 2015?',
    correct_answer: 'D. G. Yuengling and Son, Inc',
    incorrect_answers: [
      'Anheuser Busch',
      'Boston Beer Company',
      'Miller Coors'
    ]
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?',
    correct_answer: 'Hewlett-Packard',
    incorrect_answers: ['Toshiba', 'Asus', 'Dell']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which country, not including Japan, has the most people of japanese decent?',
    correct_answer: 'Brazil',
    incorrect_answers: ['China', 'South Korea', 'United States of America']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'Which company&#039;s original slogan was &quot;Don&#039;t be evil&quot;?',
    correct_answer: 'Google',
    incorrect_answers: ['Apple', 'Yahoo', 'Microsoft']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is the Zodiac symbol for Gemini?',
    correct_answer: 'Twins',
    incorrect_answers: ['Fish', 'Scales', 'Maiden']
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What nuts are used in the production of marzipan?',
    correct_answer: 'Almonds',
    incorrect_answers: ['Peanuts', 'Walnuts', 'Pistachios']
  }
]

export default App
