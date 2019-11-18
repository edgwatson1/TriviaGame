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
          ? 'incorrectbtn'
          : ''
      } 
      ${
    questionPackage.user_answer && answer === questionPackage.correct_answer
      ? 'correctbtn'
      : ''
    } answersbtn`}
    ><a href='#'>
      {answer}
      </a></button>
  )
}

export default AnswerClick
