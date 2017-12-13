const { assert } = require('chai');
const { computerPlay, singleRound } = require('./game');

suite('Tests for Game', () => {
  suite('computerPlay', () => {
    const result = computerPlay();
    test('should return value of type String', () => {
      assert.typeOf(result, 'String');
    });
    test('should should return either of these values [rock, paper, scissors]', () => {
      assert.include(['rock', 'paper', 'scissors'], result);
    });
  });

  suite('singleRound', () => {
    const result = singleRound('rock');
    test('should return value of type Object', () => {
      assert.typeOf(result, 'Object');
    });
    test('should return either of these values [-1, 0, 1, 2]', () => {
      assert.include([-1, 0, 1, 2], result.value);
    });
  });
});
