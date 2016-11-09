const assert = require('chai').assert;
const scoreWord = require('../lib/score-word');

describe('scoreWord', () => {
  it('it is a function', () => {
    assert.isFunction(scoreWord);
  });

  it('should return 0 if the word is a blank string', () =>{
    let score = scoreWord('');
    assert.equal(score, 0);
  });

  it('should return 0 if the function is passed a null value', () =>{
    let score = scoreWord(null);
    assert.equal(score, 0);
  });

  it('should return a score for the word', () =>{
    let word = scoreWord('Hello', 1);
    assert.equal(8, word);
  });

  it('should ignore whitespace and return 8', () => {
    let word = scoreWord(' Hello ', 1);
    assert.equal(word, 8);
  });

  it('should take into account the multiplier', () => {
    let word = scoreWord(' Hello ', 2);
    assert.equal(word, 16);
  });

});
