const checkCharacter = globScore => {
  const globalScoreCharacterBuckets = [
    {
      Toad: [0, 19999999]
    },
    {
      Bowser: [20000000, 39999999]
    },
    {
      Luigi: [40000000, 59999999]
    },
    {
      Princess: [60000000, 79999999]
    },
    {
      Yoshi: [80000000, 99999999]
    },
    {
      Mario: [100000000, 999999999999999999999999]
    }
  ];

  const res = globalScoreCharacterBuckets.filter(function(el) {
    var key = el[Object.keys(el)];
    return globScore >= key[0] && globScore <= key[1];
  });

  const resAsString = Object.keys(res[0]).join();

  return resAsString;
};

export default checkCharacter;
