import React from 'react'
import { shuffle } from 'lodash'
import QuestionBox from './QuestionBox'
import AnswerButs from './AnswerButs'

class QandA extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shuffledAnswers: shuffle([
        props.questionPackage.correct_answer,
        ...props.questionPackage.incorrect_answers
      ])
    }
  }

  render () {
    const { questionPackage, onNextStep, isVisible, onClickAnswer } = this.props
    if (!isVisible) return null

    return (
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <div className='meta'>...</div>
            <div className='question'>
              <QuestionBox questionStr={questionPackage.question} />
              <AnswerButs
                questionPackage={questionPackage}
                answerOptions={this.state.shuffledAnswers}
                onClickAnswer={onClickAnswer}
              />
              {questionPackage.user_answer && (
                <button onClick={onNextStep}>Next Question</button>
              )}
              {/* you call a function in the parent using the name of the props, not the name of the function in App */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QandA
