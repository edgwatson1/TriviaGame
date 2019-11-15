import React from 'react'
import AnswerClick from './AnswerClick'

const AnswerButs = ({ answerOptions, onClickAnswer, questionPackage }) => {
  return (
    <>
      {answerOptions.map(answer => {
        return (
          <AnswerClick
            answer={answer}
            onClickAnswer={onClickAnswer}
            key={answer}
            questionPackage={questionPackage}
          />
        )
      })}
    </>
  )
}

export default AnswerButs
