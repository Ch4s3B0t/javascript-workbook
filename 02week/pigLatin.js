'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let inputArray = word.split('');
  let vowelArray = ['a','e','i','o','u'];
  for(let i =0; i<inputArray.length;i++){
    //console.log(i);
    const letter = inputArray[i];
    if(vowelArray.indexOf(letter)!== -1){
      const cutPiece = inputArray.slice(0,i)
      const remainingArr = inputArray.slice(i)
      const theEnd = remainingArr.concat(cutPiece);
      console.log(theEnd.join('') + 'ay');

      //console.log(cutPiece, inputArray);
          //return finalStr
          break;
    }
  }
  }

function getPrompt() {
  rl.question('word ', (answer) => {
    pigLatin(answer)
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
