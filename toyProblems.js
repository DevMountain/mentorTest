//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  //uncomment and finish the reverseIt function (seen below). It will take in one parameter which is a String and
  //reverse it
  // NOTE: changed the ordering of the instructions on this function because otherwise, its a bit confusing. This should be done for all of the questions.

  reverseIt: (str) => str.split('').reverse().join(''),

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  removeDups: (arr) => {
    var arr2 = [];
    arr.forEach(item => arr2.indexOf(item) != -1 ? null : arr2.push(item));
    return arr2;
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  titleIt: (str) => str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' '),

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  vowelCounter: (str) => str.match(/[AEIOUaeiou]/g).length,

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  isPrime: (num) => {
    if (isNaN(num * 1) || num < 1) {
      return false;
    }

    let flag = true;

    for (var i = 2; i < num; i++) {
      if (num % i === 0) flag = false;
    }
    return flag;
  },
  
  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined //NOTE: Should be 'Helloundefined'
}
