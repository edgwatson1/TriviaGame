const countScore = questionPackages => {
  let localScore = 0;

  questionPackages.forEach(item => {
    const userAnswer = item.user_answer;
    const correctAnswer = item.correct_answer;

    if (userAnswer === correctAnswer) {
      localScore += 3750000;
    }
  });
  return localScore;
};

export default countScore;
