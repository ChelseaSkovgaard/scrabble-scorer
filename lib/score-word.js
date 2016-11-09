const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
};


module.exports = function scoreWord(word, multiplier){
  if (word === '' || !word) {
    return 0;
  }
  let formattedWord = word.trim().toUpperCase();
  let score = [];

  for (let i = 0; i < formattedWord.length; i++) {
    score.push(letterScores[formattedWord[i]]);
  }

  let total = score.reduce((a,b) => a + b, 0);

  return (total * multiplier);
};
