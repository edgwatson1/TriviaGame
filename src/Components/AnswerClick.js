import React from 'react'

const AnswerClick = ({ answer, onClickAnswer, questionPackage }) => {
  return (
    <div className='column'>
      <button
        disabled={!!questionPackage.user_answer}
        onClick={() => onClickAnswer(answer)}
        className={`ui ${
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
    }`}
      >
        {answer}
      </button>
    </div>
  )
}

export default AnswerClick
