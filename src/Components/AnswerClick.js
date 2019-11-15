import React from 'react'

const AnswerClick = ({ answer, onClickAnswer, questionPackage }) => {
  return (
    <button
      disabled={!!questionPackage.user_answer}
      onClick={() => onClickAnswer(answer)}
      className={`${
        questionPackage.user_answer &&
        answer !== questionPackage.correct_answer &&
        answer === questionPackage.user_answer
          ? 'btn-incorrect'
          : ''
      } 
      ${
    questionPackage.user_answer && answer === questionPackage.correct_answer
      ? 'btn-correct'
      : ''
    } ans-btn`}
    >
      {answer}
    </button>
  )
}

export default AnswerClick
