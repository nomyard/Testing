const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 0. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen(num)`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number multiplied by Ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(10)).to.equal(100);
      expect(multiplyByTen(1)).to.equal(10);
    });
  });

  describe('`subtractFive(num)`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number reduced by 5', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(10)).to.equal(5);
      expect(subtractFive(5)).to.equal(0);
    });
  });

  describe('`areSameLength(str1, str2)`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should equal the same length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('string', 'string')).to.equal(true);
      expect(areSameLength('string', 'no')).to.equal(false);
    });
  });

  describe('`areEqual(x, y)`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be equal', () => {
      const areEqual = funcs.areEqual;
      expect(12).to.equal(12);
      expect(14).to.equal(14);
    });
  });

  describe('`lessThanNinety(num)`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be less than Ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(80)).to.equal(true);
      expect(lessThanNinety(90)).to.equal(false);
      expect(lessThanNinety(100)).to.equal(false);
      expect(lessThanNinety(10)).to.equal(true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be greater than Fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(100)).to.equal(true);
      expect(greaterThanFifty(50)).to.equal(false);
      expect(greaterThanFifty(10)).to.equal(false);
    });
  });

  describe('`add(x, y)`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add each number', () => {
      const add = funcs.add;
      expect(add(12, 5)).to.equal(17);
      expect(add(4, 2)).to.not.equal(7);
    });
  });

  describe('`subtract(x, y)`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract each number', () => {
      const subtract = funcs.subtract;
      expect(subtract(4, 2)).to.equal(2);
      expect(subtract(7, 2)).to.not.equal(9);
    });
  });

  describe('`divide(x, y)`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide each number to the proper value', () => {
      const divide = funcs.divide;
      expect(divide(12, 2)).to.equal(6);
      expect(divide(12, 3)).to.not.equal(9);
    });
  });

  describe('`multiply(x, y)`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply each number to get the resulting value', () => {
      const multiply = funcs.multiply;
      expect(multiply(4, 2)).to.equal(8);
      expect(multiply(2, 6)).to.not.equal(13);
    });
  });

  describe('`getRemainder(x, y)`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a remainder', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(5, 2)).to.equal(1);
      expect(getRemainder(12, 4)).to.equal(0);
    });
  });

  describe('`isEven(num)`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if even', () => {
      const isEven = funcs.isEven;
      expect(isEven(2)).to.equal(true);
      expect(isEven(3)).to.equal(false);
    });
  });

  describe('`isOdd(num)`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if false', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(2)).to.equal(false);
      expect(isOdd(3)).to.equal(true);
    });
  });

  describe('`square(num)`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the number squared', () => {
      const square = funcs.square;
      expect(square(2)).to.equal(4);
      expect(square(2)).to.not.equal(6);
    });
  });

  describe('`cube(num)`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number cubed', () => {
      const cube = funcs.cube;
      expect(cube(2)).to.equal(8);
      expect(cube(3)).to.not.equal(9);
    });
  });

  describe('`raiseToPower(num, exponent)`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should equal the correct value when raised to a certain exponent', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(2, 2)).to.equal(4);
      expect(raiseToPower(3, 3)).to.equal(27);
    });
  });

  describe('`roundNumber(num)`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a rounded number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(20.49)).to.equal(20);
      expect(roundNumber(20.5)).to.not.equal(20);
    });
  });

  describe('`roundUp(num)`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number that is rounded up', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(0.95)).to.equal(1);
      expect(roundUp(4)).to.not.equal(5);
    });
  });

  describe('`addExclamationPoint(str)`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string with an exclamation point', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Hello')).to.equal('Hello!');
      expect(addExclamationPoint('Hello!')).to.not.equal('Hello!');
    });
  });

  describe('`combineNames(firstName, lastName)`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a combined string', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Ray', 'Rosario')).to.equal('Ray Rosario');
      expect(combineNames('Kendrick', 'Lamar')).to.not.equal('Kendrick', 'Lamar');
    });
  });

  describe('`getGreeting(name)`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a greeting with the name', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Jay-Z')).to.equal('Hello Jay-Z!');
      expect(getGreeting('Lil Wayne')).to.not.equal('Hello Lil Wayne');
    });
  });

  describe('`getRectangleArea(length, width)`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the rectangle area', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(5, 6)).to.equal(30);
      expect(getRectangleArea(2, 4)).to.not.equal(9);
    });
  });

  describe('`getTriangleArea(base, height)`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the Triangle area', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(5, 6)).to.equal(15);
      expect(getTriangleArea(2, 4)).to.not.equal(3);
    });
  });

  describe('`getCircleArea(radius)`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the radius', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(2)).to.equal(12.566370614359172);
      expect(getCircleArea(2)).to.not.equal(4);
    });
  });

  describe('`getRectangularPrismVolume(length, width, height)`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the Rectangular Prism Volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(8, 9, 10)).to.equal(720);
      expect(getRectangularPrismVolume(10, 20, 30)).to.not.equal(5000);
    });
  });
});
