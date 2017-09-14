const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;

// whoops.. there is no test suite for this file. You'll simply just have to create one :

describe('Project-2 Functions', () => {
  describe('`getBiggest(x, y)`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the biggest integer', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(24, 12)).to.equal(24);
      expect(getBiggest(23, 13)).to.not.equal(13);
    });
  });
  describe('`greeting(language)`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return the proper greetings', () => {
      const greeting = funcs.greeting;
      expect(greeting('German')).to.equal('Guten Tag!');
      expect(greeting('Spanish')).to.equal('Hola!');
      expect(greeting()).to.equal('Hello!');
    });
  });
  describe('`isTenOrFive(num)`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a number that equals ten or five', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive(10)).to.equal(true);
      expect(isTenOrFive(5)).to.equal(true);
      expect(isTenOrFive(15)).to.equal(false);
    });
  });
  describe('`isInRange(num)`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a number less than 50 and greater than 20', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange(100)).to.equal(false);
      expect(isInRange(49)).to.equal(true);
      expect(isInRange(19)).to.equal(false);
    });
  });
  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return an integer', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger('what up')).to.equal(false);
      expect(isInteger(0.02)).to.equal(false);
      expect(isInteger(1)).to.equal(true);
    });
  });
  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz for multiples of 15, buzz for multiples of 5, and fizz for multiples of 3',() => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
      expect(fizzBuzz(5)).to.equal('buzz');
      expect(fizzBuzz(3)).to.equal('fizz');
    });
  });
  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a prime number', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(-1)).to.equal(false);
      expect(isPrime(1)).to.equal(false);
      expect(isPrime(0)).to.equal(false);
      expect(isPrime(3)).to.equal(true);
    });
  });
  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element in the array', () => {
      const returnFirst = funcs.returnFirst;
      expect(returnFirst(['hello', 'goodbye'])).to.equal('hello');
      expect(returnFirst(['hello', 'goodbye'])).to.not.equal('goodbye');
    });
  });
  describe('`returnLast`', () => {
    it('should be a function', () => { 
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element in the array', () => {
      const returnLast = funcs.returnLast;
      expect(returnLast(['what is up', 'how art thou', 'dost thou needeth me?'])).to.equal('dost thou needeth me?');
      expect(returnLast(['pink floyd', 'led zeppelin', 'black sabbath'])).to.not.equal('pink floyd');
    });
  });
  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the length of the array', () => {
      const getArrayLength = funcs.getArrayLength;
      expect(getArrayLength(['hello', 'bye', 'HAHA'])).to.equal(3);
      expect(getArrayLength(['no', 'just', 'go'])).to.not.equal(1);
    });
  });
  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array incremented by one', () => {
      const incrementByOne = funcs.incrementByOne;
      expect(incrementByOne()).to.increase(incrementByOne()).by(1);
    });
  });
});
