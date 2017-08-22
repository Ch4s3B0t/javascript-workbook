'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function generateHint(guess) {
  // your code here
  const guessArr = guess.split('');
  const solutionArr = solution.split('');
  //console.log(guessArr,solutionArr);
  //console.log(guessArr)
  const correctLetter = []
  const correctPlace =[]
  for(let i =0 ; i < guessArr.length; i++){
    const letter = guessArr[i];
    //console.log(letter);
    if (solutionArr.indexOf(letter) !== -1){
      if(guessArr.indexOf(letter) === solutionArr.indexOf(letter)){
        // right letter and right location
        correctPlace.push(letter);
      }else{
        //right letter
        correctLetter.push(letter);
      }
      
    }
    //console.log(solution);
    //console.log(correctLetter);
    console.log(`You got ${correctLetter.length} correct letters`);
    return `You got ${correctLetter.length} correct`
  }

}

function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess === solution){
    return 'You guessed it!';
  }else {
    return generateHint(guess);
  }
  //console.log(guess ,solution);
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
