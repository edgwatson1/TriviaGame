const checkLevel = globScore => {
  const globalScoreLevelBuckets = [
    {
      1: [0, 11249999]
    },
    {
      2: [11250000, 33749999]
    },
    {
      3: [33750000, 71249999]
    },
    {
      4: [71250000, 99999999]
    },
    {
      5: [100000000, 999999999999999999999999]
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
