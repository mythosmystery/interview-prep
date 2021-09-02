//reverse a string
//my first attempt with no google
function reverseString(str) {
   let reversedStr = '';
   for (let i = str.length - 1; i >= 0; i--) {
      reversedStr = reversedStr + str[i];
   }
   return reversedStr;
}
//optimized version with googling some array methods
//const reverseString = str => str.split('').reverse().join('');

//my favorite after watching the video
//const reverseString = str => str.split('').reduce((revString, char) => char + revString, '');

//console.log(reverseString('hello'));

////////////////////////////////////////////////////

//validate a palindrome
//my first attempt
// function isPalindrome(str) {
//    return str === str.split('').reverse().join('');
// }
//without .reverse()
function isPalindrome(str) {
   let reversedStr = '';
   for (let char of str) {
      reversedStr = char + reversedStr;
   }
   return str === reversedStr;
}

//console.log(isPalindrome('racecar'));

/////////////////////////////////////////////////////

//reverse an integer
//first attempt
// function reverseInt(int) {
//    return parseInt(int.toString().split('').reverse().join(''));
// }

//without .reverse
function reverseInt(int) {
   let reversedNum = '';
   for (let digit of int.toString()) {
      reversedNum = digit + reversedNum;
   }
   return parseInt(reversedNum);
}

//console.log(reverseInt(12345));

//////////////////////////////////////////////////////

//capitalize first letter
//first attempt
function capitalizeLetters(str) {
   let capitalStr = '';
   let words = str.split(' ');
   for (let word of words) {
      let capWord = '';
      for (let i = 0; i < word.length; i++) {
         if (i == 0) {
            capWord = word[0].toUpperCase();
         } else {
            capWord = capWord + word[i];
         }
      }
      capitalStr = capitalStr + ' ' + capWord;
   }
   return capitalStr;
}

//console.log(capitalizeLetters('this is a test'));

////////////////////////////////////////////////////

//get most common character in string
//first attempt
function maxCharacter(str) {
   const map = {};
   let maxChar = '';
   let maxNumber = 0;

   for (let char of str) {
      map[char] ? map[char]++ : (map[char] = 1);
   }
   for (let key in map) {
      if (map[key] > maxNumber) {
         maxNumber = map[key];
         maxChar = key;
      }
   }
   return maxChar;
}

//console.log(maxCharacter('javascript'));

/////////////////////////////////////////////

//fizz buzz
//1 to 100, multiples of 3 are fizz, multiples of 5 are buzz, multiples of 3 and 5 are fizzbuzz
//first attempt
function fizzbuzz() {
   for (let i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
         console.log('fizzbuzz');
      } else if (i % 3 == 0) {
         console.log('fizz');
      } else if (i % 5 == 0) {
         console.log('buzz');
      } else {
         console.log(i);
      }
   }
}
fizzbuzz();
