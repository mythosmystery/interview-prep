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
//fizzbuzz();

////////////////////////////////////////

//get the longest word(s) of a sentence
//if just one word return a string if multiple return an array
//first attempt

function longestWord(sen) {
   let maxLength = 0;
   let maxWords = [];
   sen.split(' ').forEach(word => {
      if (word.length > maxLength) {
         maxLength = word.length;
         maxWords[0] = word;
      } else if (word.length == maxLength) {
         maxWords.push(word);
      }
   });
   if (maxWords.length > 1) return maxWords;
   return maxWords[0];
}
//console.log(longestWord('this is a test that'));

///////////////////////////////////////////////////

//split array into chunks
//first attempt
function chunkArray(arr, len) {
   let output = [];
   const remainder = arr.length % len;
   for (let i = 0; i < Math.floor(arr.length / len); i++) {
      let chunk = [];
      let start = len * i;
      var end = len * (i + 1);
      for (let j = start; j < end; j++) {
         chunk.push(arr[j]);
      }
      output.push(chunk);
   }
   if (remainder) {
      let remainChunk = [];
      for (let k = end; k < end + remainder; k++) {
         remainChunk.push(arr[k]);
      }
      output.push(remainChunk);
   }
   return output;
}
//wow this feels like a janky way to do this
// console.log(chunkArray([2, 5, 4, 7, 8, 4, 5, 1], 3));

//////////////////////////////////////////////////////////

//flatten array
//takes an array of arrays and returns one array with all items in it
//first attempt
// function flattenArray(arrays) {
//    let output = [];
//    for (let array of arrays) {
//       for (let item of array) {
//          output.push(item);
//       }
//    }
//    return output;
// }
//second attempt with forEach loops
function flattenArray(arrays) {
   let output = [];
   arrays.forEach(array => array.forEach(item => output.push(item)));
   return output;
}
//i think the for of loops look cleaner and are easier to read but this is nice as it's a oneliner
// console.log(
//    flattenArray([
//       [1, 2],
//       [3, 4],
//       [5, 6, 7],
//       [8, 9, 10, 11],
//    ])
// );

//////////////////////////////////////

//return true if an anagram return false if not
// function isAnagram(str1, str2) {
//    let letters = [[], []];
//    str1 = str1.replace(/\s/g, '');
//    str2 = str2.replace(/\s/g, '');
//    if (str1.length === str2.length) {
//       for (let i = 0; i < str1.length; i++) {
//          letters[0].push(str1[i]);
//          letters[1].push(str2[i]);
//       }
//       letters.forEach(charArr => charArr.sort());
//       return letters[0].join('') === letters[1].join('');
//    } else {
//       return false;
//    }
// }
///second attempt
function isAnagram(str1, str2) {
   let sortedStrings = [];
   let strings = [str1.replace(/\s/g, '').toLowerCase(), str2.replace(/\s/g, '').toLowerCase()];
   for (let string of strings) {
      sortedStrings.push(string.split('').sort().join(''));
   }
   return sortedStrings[0] === sortedStrings[1];
}
// console.log(isAnagram('Slot machines', 'cash lost in em'));

//////////////////////////////////////////////////////////////

//swap letters
//capitalize vowels, replace letters with the next in the alphabet
//first attempt
function letterChanges(str) {
   const vowelCodes = [97, 105, 111, 117, 101, 212];
   const charCodes = [];
   for (let i = 0; i < str.length; i++) {
      str.charCodeAt(i) != 32 ? charCodes.push(str.charCodeAt(i) + 1) : charCodes.push(32);
      for (let vowel of vowelCodes) {
         if (charCodes[i] === vowel) charCodes[i] = charCodes[i] - 32;
      }
   }
   return String.fromCharCode(...charCodes);
}
//console.log(letterChanges('hello there'));

////////////////////////////////////////////////

// add all numbers
//addAll(1,2,3) == 6
//first attempt
// function addAll(...args) {
//    let sum = 0;
//    args.forEach(arg => (sum = sum + arg));
//    return sum;
// }
//second attempt with reduce
function addAll(...args) {
   return args.reduce((prevNum, num) => prevNum + num);
}
//console.log(addAll(1, 2, 3));

/////////////////////////////////

//helper function
function isPrime(num) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return num > 1;
}
//sum all prime numbers up to target number
//sumPrimes(10) == 17
function sumPrimes(target) {
   let sum = 0;
   for (let i = 1; i < target; i++) {
      if (isPrime(i)) sum += i;
   }
   return sum;
}
//console.log(sumPrimes(50));

/////////////////////////////////////////

//seek and destroy
//remove whatever is in the following arguments from the array
function seekAndDestroy(...args) {
   const array = args[0].filter(item => {
      for (let arg of args) {
         if (item === arg) return false;
      }
      return true;
   });
   return array;
}
//console.log(seekAndDestroy([1, 2, 3, 6, 6, 'hello'], 2, 6));

///////////////////////////////////////////////////////////////

//sort by height
//sort all people without moving trees
//trees are -1
function sortByHeight(a) {
   const trees = [];
   const people = [];
   a.forEach((height, index) => (height === -1 ? trees.push(index) : people.push(height)));
   const sortedPeople = people.sort();
   trees.forEach(i => sortedPeople.splice(i, 0, -1));
   return sortedPeople;
}
// console.log(sortByHeight([-1, 150, 190, -1, -1, 170, 160, -1, 220, 155, -1]));

//////////////////////////////////////////////////////////////////////////////////

//missing letters
//missingLetters('abce') == 'd'
function missingLetters(str) {
   const charCodes = [];
   for (let i = 0; i < str.length; i++) {
      charCodes.push(str[i].charCodeAt(0));
      let prevChar = charCodes[i - 1];
      if (prevChar) {
         if (prevChar + 1 != charCodes[i]) {
            return String.fromCharCode(prevChar + 1);
         }
      }
   }
}
//console.log(missingLetters('abce'));

//////////////////////////////////////

//even and odd sums
//evenOddSum([50,60,60,45,71]) == [170,116]
function evenOddSum(arr) {
   let evenSum = 0;
   let oddSum = 0;
   arr.forEach(num => (num % 2 == 0 ? (evenSum += num) : (oddSum += num)));
   return [evenSum, oddSum];
}
//console.log(evenOddSum([50, 60, 60, 45, 71]));

////////////////////////////////////////////////////

//coin flips algorithm
//minimum flips to get to an alternating pattern
function coinFlips(A) {
   let numFlips = 0;
   A.reduce((prev, curr, index) => {
      if ((prev === -1 && curr === A[index + 1] && A.length > 3) || prev === curr) {
         numFlips++;
         curr === 0 ? curr++ : curr--;
      }
      return curr;
   }, -1);
   return numFlips;
}
//console.log(coinFlips([1, 1, 1, 0, 1, 0, 0, 1]));

///////////////////////////////

function coinFlips(A) {
   let minA = 0;
   let minB = 0;
   A.reduce((prev, curr) => {
      if (prev === curr) {
         curr === 0 ? curr++ : curr--;
         minA++;
      }
      return curr;
   });
   A.reduce((prev, curr) => {
      if (prev === curr || prev === -1) {
         curr === 0 ? curr++ : curr--;
         minB++;
      }
      return curr;
   }, -1);
   return minB > minA ? minA : minB;
}
// console.log(coinFlips([1, 1, 1, 0, 1, 0, 0, 1]));

/////////////////////////////////////////////

function diffArray(arr1, arr2) {
   var newArr = [];
   arr1.forEach(item => {
      if (!arr2.includes(item)) {
         newArr.push(item);
      }
   });
   arr2.forEach(item => {
      if (!arr1.includes(item)) {
         newArr.push(item);
      }
   });
   return newArr;
}

// console.log(diffArray(['asdf', 'asdfg', 'asdfghhj', 'asd'], ['asdf', 'asdfg', 'qwert']));

///////////////////////////////

function destroy(...args) {
   const array = args[0].filter(item => {
      for (let arg of args) {
         if (item === arg) return false;
      }
      return true;
   });
   return array;
}
// console.log(destroy([1, 2, 3, 6, 6], 2, 6));

////////////////////////////////////////

function whatIsInAName(collection, source) {
   var arr = [];
   let srcKeys = Object.keys(source);
   let srcVals = Object.values(source);
   for (let obj of collection) {
      let objKeys = Object.keys(obj);
      let objValues = Object.values(obj);
      if (srcVals.every(elem => objValues.includes(elem)) && srcKeys.every(elem => objKeys.includes(elem))) {
         arr.push(obj);
      }
   }
   console.log(arr);
   return arr;
}

//whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], { apple: 1, bat: 2 });

// whatIsInAName(
//    [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//    ],
//    { last: 'Capulet' }
// );

///////////////////////////////////////////////

function spinalCase(str) {
   return str;
}
