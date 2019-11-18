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
      <>
        <div className='content'>
          <div className='question-box'>
              <QuestionBox questionStr={questionPackage.question} />
            </div>

            <AnswerButs
              questionPackage={questionPackage}
              answerOptions={this.state.shuffledAnswers}
              onClickAnswer={onClickAnswer}
            />
          </div>
          <div className="footer">
        {questionPackage.user_answer && (
          
            <button className='btn' onClick={onNextStep}>
            <a href='#'>
            Next<br></br> 
            Question</a>
            </button>
          
        )}
        </div>
        {/* you call a function in the parent using the name of the props, not the name of the function in App */}
      </>
    )
  }
}

export default QandA
