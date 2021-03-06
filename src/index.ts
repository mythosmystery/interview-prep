import fs from 'fs';
import { MapDS, SetDS, Stack } from './dataStructures';

//reverse a string

//my first attempt with no google
function reverseString(str: string) {
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
function isPalindrome(str: string) {
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
function reverseInt(int: number) {
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
function capitalizeLetters(str: string) {
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
function maxCharacter(str: string) {
   const map: { [key: string]: number } = {};
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

// console.log(maxCharacter('javascript'));

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

function longestWord(sen: string) {
   let maxLength = 0;
   let maxWords: string[] = [];
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
function chunkArray(arr: number[], len: number) {
   let output: number[][] = [];
   let end: number = 0;

   const remainder = arr.length % len;
   for (let i = 0; i < Math.floor(arr.length / len); i++) {
      let chunk: number[] = [];
      let start = len * i;
      end = len * (i + 1);
      for (let j = start; j < end; j++) {
         chunk.push(arr[j]);
      }
      output.push(chunk);
   }
   if (remainder) {
      let remainChunk: number[] = [];
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
function flattenArray(arrays: any[][]) {
   let output: any[] = [];
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
function isAnagram(str1: string, str2: string) {
   let sortedStrings: string[] = [];
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
function letterChanges(str: string) {
   const vowelCodes = [97, 105, 111, 117, 101, 212];
   const charCodes: number[] = [];
   for (let i = 0; i < str.length; i++) {
      str.charCodeAt(i) != 32 ? charCodes.push(str.charCodeAt(i) + 1) : charCodes.push(32);
      for (let vowel of vowelCodes) {
         if (charCodes[i] === vowel) charCodes[i] = charCodes[i] - 32;
      }
   }
   return String.fromCharCode(...charCodes);
}
// console.log(letterChanges('hello there'));

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
function addAll(...args: number[]) {
   return args.reduce((prevNum, num) => prevNum + num);
}
// console.log(addAll(1, 2, 3));

/////////////////////////////////

//helper function
function isPrime(num: number) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return num > 1;
}
//sum all prime numbers up to target number
//sumPrimes(10) == 17
function sumPrimes(target: number) {
   let sum = 0;
   for (let i = 1; i < target; i++) {
      if (isPrime(i)) sum += i;
   }
   return sum;
}
// console.log(sumPrimes(50));

/////////////////////////////////////////

//seek and destroy
//remove whatever is in the following arguments from the array
function seekAndDestroy(...args: any[]) {
   const array: any[] = args[0].filter((item: any) => {
      for (let arg of args) {
         if (item === arg) return false;
      }
      return true;
   });
   return array;
}
// console.log(seekAndDestroy([1, 2, 3, 6, 6, 'hello'], 2, 6));

///////////////////////////////////////////////////////////////

//sort by height
//sort all people without moving trees
//trees are -1
function sortByHeight(a: number[]) {
   const trees: number[] = [];
   const people: number[] = [];
   a.forEach((height, index) => (height === -1 ? trees.push(index) : people.push(height)));
   const sortedPeople = people.sort();
   trees.forEach(i => sortedPeople.splice(i, 0, -1));
   return sortedPeople;
}
// console.log(sortByHeight([-1, 150, 190, -1, -1, 170, 160, -1, 220, 155, -1]));

//////////////////////////////////////////////////////////////////////////////////

//missing letters
//missingLetters('abce') == 'd'
function missingLetters(str: string): string | void {
   const charCodes: number[] = [];
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
// console.log(missingLetters('abce'));

//////////////////////////////////////

//even and odd sums
//evenOddSum([50,60,60,45,71]) == [170,116]
function evenOddSum(arr: number[]) {
   let evenSum = 0;
   let oddSum = 0;
   arr.forEach(num => (num % 2 == 0 ? (evenSum += num) : (oddSum += num)));
   return { evenSum, oddSum };
}

// console.log(evenOddSum([50, 60, 60, 45, 71]));

////////////////////////////////////////////

function coinFlips(A: number[]) {
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

// function diffArray(arr1, arr2) {
//    var newArr = [];
//    arr1.forEach(item => {
//       if (!arr2.includes(item)) {
//          newArr.push(item);
//       }
//    });
//    arr2.forEach(item => {
//       if (!arr1.includes(item)) {
//          newArr.push(item);
//       }
//    });
//    return newArr;
// }
function diffArray(arr1: any[], arr2: any[]) {
   let arr1Items = arr1.filter(elem => !arr2.includes(elem));
   let arr2Items = arr2.filter(elem => !arr1.includes(elem));
   return arr1Items.concat(arr2Items);
   //return arr1.filter(elem => !arr2.includes(elem)).concat(arr2.filter(elem => !arr1.includes(elem)));
}

// console.log(diffArray(['asdf', 'asdfg', 'asdfghhj', 'asd'], ['asdf', 'asdfg', 'qwert']));

///////////////////////////////

function destroy(...args: any[]) {
   const array: any[] = args[0].filter((item: any) => {
      for (let arg of args) {
         if (item === arg) return false;
      }
      return true;
   });
   return array;
}
// console.log(destroy([1, 2, 3, 6, 6], 2, 6));

////////////////////////////////////////

function whatIsInAName(collection: object[], source: object) {
   var arr: object[] = [];
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

// whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], { apple: 1, bat: 2 });

// whatIsInAName(
//    [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//    ],
//    { last: 'Capulet' }
// );

///////////////////////////////////////////////

function spinalCase(str: string) {
   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
   str = str.replace(/\s+|_+/g, '-');
   return str.toLowerCase();
}
// console.log(spinalCase('AllThe-small Things'));

//////////////////////////////////////

function pigLatin(str: string) {
   str = str.replace(/^([aeiou]\w+)/g, '$1way');
   str = str.replace(/^([^aeiou]+)(\w+)/g, '$2$1ay');
   return str;
}
// console.log(pigLatin('rhythm'));

//////////////////////////////////////////////////

function sumAll(arr: number[]): number {
   const [first, last] = arr;
   if (first !== last) {
      return first + sumAll([first + 1, last]);
   } else {
      return first;
   }
}
// console.log(sumAll([1, 4]));

///////////////////////////////////////////////

function bubbleSort(arr: number[]) {
   for (let _ of arr) {
      let wasSwapped = false;
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
            wasSwapped = true;
         }
      }
      if (!wasSwapped) break;
   }
   return arr;
}
// console.log(bubbleSort([1, 2, 55, 23, -24, 26, 25, 100, 7, 4, 0]));

function swap(arr: number[], left: number, right: number) {
   let temp = arr[left];
   arr[left] = arr[right];
   arr[right] = temp;
}

///////////////////////////////////////////////////////////////////////

function quickSort(arr: number[], left = 0, right = arr.length - 1) {
   if (left < right) {
      let pivot = left;
      for (let i = left + 1; i <= right; i++) {
         if (arr[i] < arr[left]) swap(arr, i, ++pivot);
      }
      swap(arr, left, pivot);
      quickSort(arr, left, pivot - 1);
      quickSort(arr, pivot + 1, right);
   }
   return arr;
}
// console.log(quickSort([1, 2, 55, 23, -24, 26, 25, 100, 7, 4, 0]));

///////////////////////////////////////////////

function validParens(str: string) {
   let stack = new Stack<string>();
   for (let char of str) {
      stack.push(char);
   }
}

validParens('({})');

//////////////////////////////////////////////////

function fibonacci(num: number) {
   let a = 1,
      b = 0,
      temp: number;

   while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
   }

   return b;
}
function sumFibs(num: number): number | void {
   let sum = 0;
   for (let i = 0; i < num; i++) {
      let fib = fibonacci(i);
      if (fib <= num) {
         if (fib % 2 != 0) {
            sum += fib;
         }
      } else {
         return sum;
      }
   }
}

// console.log(sumFibs(10));

/////////////////////////////////////

function findAndReplace(str: string, before: string, after: string) {
   return str
      .split(' ')
      .map(word => (word === before ? after : word))
      .join(' ');
}
// console.log(findAndReplace('The quick brown fox jumped over the lazy dog', 'lazy', 'stinky'));

/////////////////////////////////////////

function palindrome(str: string) {
   str = str
      .toLowerCase()
      .trim()
      .replace(/[^A-Z0-9]/gi, '');
   const reversedString = str.split('').reduce((revString, char) => char + revString, '');
   return str === reversedString;
}
// console.log(palindrome('_RaceCar'));

/////////////////////////////////////////////

const romanMatrix: [number, string][] = [
   [1000, 'M'],
   [900, 'CM'],
   [500, 'D'],
   [400, 'CD'],
   [100, 'C'],
   [90, 'XC'],
   [50, 'L'],
   [40, 'XL'],
   [10, 'X'],
   [9, 'IX'],
   [5, 'V'],
   [4, 'IV'],
   [1, 'I']
];

function convertToRoman(num: number): string | void {
   if (num === 0) {
      return '';
   }
   for (let [digit, roman] of romanMatrix) {
      if (num >= digit) {
         return roman + convertToRoman(num - digit);
      }
   }
}

// console.log(convertToRoman(798));

////////////////////////////////////

function rot13(str: string) {
   const charCodes: number[] = [];
   const __split__ = 78;

   for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[^A-Z0-9]/g)) {
         charCodes.push(str.charCodeAt(i));
      } else {
         str.charCodeAt(i) < __split__
            ? charCodes.push(str.charCodeAt(i) + 13)
            : charCodes.push(str.charCodeAt(i) - 13);
      }
   }
   return String.fromCharCode(...charCodes);
}
// console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));

////////////////////////////////////////////

function telephoneCheck(str: string): boolean {
   const bothParens = /(?=[(])(?=.*[)])/g;
   const phoneRegex = /^\s*(?:\+?([1]{1}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})\s*$/g;

   if (!str.match(bothParens) && (str.includes(')') || str.includes('('))) {
      return false;
   }

   return !!str.match(phoneRegex);
}

// console.log(telephoneCheck('1 (555) 555-5555'));

///////////////////////////////////////////////
type CID = [string, number][];

type CashRegister = {
   status: 'CLOSED' | 'OPEN' | 'INSUFFICIENT_FUNDS';
   change: CID;
};

const currencyValues: { [key: string]: number } = {
   PENNY: 0.01,
   NICKEL: 0.05,
   DIME: 0.1,
   QUARTER: 0.25,
   ONE: 1,
   FIVE: 5,
   TEN: 10,
   TWENTY: 20,
   'ONE HUNDRED': 100
};

function roundCash(num: number): number {
   return +num.toFixed(2);
}
function getTotal(cid: CID): number {
   const [, total] = cid.reduce(([, prev], [, curr]) => ['TOTAL', roundCash(prev + curr)]);
   return total;
}

function checkCashRegister(price: number, cash: number, cid: CID): CashRegister {
   const totalInDrawer = getTotal(cid);

   let changeDue = cash - price;
   let changeArray: CID = [];

   if (changeDue > totalInDrawer) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
   }
   if (changeDue === totalInDrawer) {
      return { status: 'CLOSED', change: cid };
   }

   for (let [cashType, amount] of cid.reverse()) {
      const remainder = Math.floor(roundCash(changeDue / currencyValues[cashType]));
      const changeAmount = roundCash(currencyValues[cashType] * remainder);

      if (remainder > 0) {
         if (changeAmount <= amount) {
            changeDue -= changeAmount;
            changeArray.push([cashType, changeAmount]);
         } else {
            if (amount > 0) {
               changeDue -= amount;
               changeArray.push([cashType, amount]);
            }
         }
      }
   }

   if (changeArray.length === 0 || getTotal(changeArray) < changeDue) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
   }

   return { status: 'OPEN', change: changeArray };
}

const testCid: CID = [
   ['PENNY', 1.01],
   ['NICKEL', 2.05],
   ['DIME', 3.1],
   ['QUARTER', 4.25],
   ['ONE', 90],
   ['FIVE', 55],
   ['TEN', 20],
   ['TWENTY', 60],
   ['ONE HUNDRED', 100]
];

const emptyCid: CID = [
   ['PENNY', 0.01],
   ['NICKEL', 0.05],
   ['DIME', 0],
   ['QUARTER', 0],
   ['ONE', 1],
   ['FIVE', 0],
   ['TEN', 0],
   ['TWENTY', 0],
   ['ONE HUNDRED', 0]
];

// console.log(checkCashRegister(19.5, 100, testCid));

//////////////////////////////////////////////////////////

const setTimeoutPromise = (ms: number) => {
   return new Promise<void>(resolve => {
      setTimeout(() => resolve(), ms);
   });
};

const promisify = <T>(func: Function) => {
   return (...args: any[]) => {
      return new Promise<T>((resolve, reject) => {
         func(...args, (err: NodeJS.ErrnoException, data: T) => {
            if (data) {
               resolve(data);
            } else if (err) {
               reject(err);
            }
         });
      });
   };
};

const readFilePromise = promisify<Buffer>(fs.readFile);

/////////////////////////////////////////////////////////////////

function sym(...args: number[][]) {
   return args
      .reduce((prevArray, currArray) => {
         const p = prevArray.filter(elem => !currArray.includes(elem));
         const c = currArray.filter(elem => !prevArray.includes(elem));
         return p.concat(c);
      })
      .sort()
      .filter((value, i, arr) => !i || value != arr[i - 1]);
}

// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));

/////////////////////////////////////////////////////

type InventoryType = [number, string][];

function updateInventory(currentInv: InventoryType, newOrder: InventoryType) {
   // const updatedInv = currentInv.map(([quantity, item]) => {
   //    newOrder.forEach(([newQ, newItem]) => {
   //       if (newItem === item) {
   //          quantity = quantity + newQ;
   //       }
   //    });
   //    return [quantity, item];
   // });
   const currSet = new Set(currentInv);
   const newSet = new Set(newOrder);
   return { currSet, newSet };
}

// Example inventory lists
const curInv: InventoryType = [
   [21, 'Bowling Ball'],
   [2, 'Dirty Sock'],
   [1, 'Hair Pin'],
   [5, 'Microphone']
];

const newInv: InventoryType = [
   [2, 'Hair Pin'],
   [3, 'Half-Eaten Apple'],
   [67, 'Bowling Ball'],
   [7, 'Toothpaste']
];

console.log(updateInventory(curInv, newInv));
