'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack) {
  // Your code here
  const startArray = getStackArrays(startStack)
  const endArray = getStackArrays(endStack)
  const targetPiece = startArray.pop()
  endArray.push(targetPiece);
  console.log(targetPiece);
  console.log(endArray)
}

function getStackArrays(targetStack){
  return stacks[targetStack]
}
function isLegal(startStack,endStack) {
  // Your code here

 // check if end stack is empty
 const startArray = getStackArrays(startStack)
 const endArray = getStackArrays(endStack)


 if (endArray.length === 0){
    return true
 }else{
   const startItem = startArray.pop()
   const endItem = endArray.pop()
   if (startItem < endItem){
     return true;
   }
 }
}

function checkForWin() {
  // Your code here


if (endArray === [4,3,2,1]){
  return 'Win';
}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack,endStack)){
    movePiece(startStack,endStack);

  }
  else {
    return "Try again.";
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
