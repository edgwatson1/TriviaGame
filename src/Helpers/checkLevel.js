const checkLevel = globScore => {
  const globalScoreLevelBuckets = [
    {
      1: [0, 19999999]
    },
    {
      2: [20000000, 39999999]
    },
    {
      3: [40000000, 59999999]
    },
    {
      4: [60000000, 79999999]
    },
    {
      5: [80000000, 999999999999999999999999]
    }
  ];

  const res = globalScoreLevelBuckets.filter(function(el) {
    var key = el[Object.keys(el)];
    return globScore >= key[0] && globScore <= key[1];
  });

  const resAsString = Object.keys(res[0]).join();

  return resAsString;
};

export default checkLevel;
