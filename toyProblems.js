//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  function reverseIt(str){
    return str.split('').reverse().join('');
  }

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  function removeDups(names){
  var uniqueNames = [];

      for(var i in names){
          if(uniqueNames.indexOf(names[i]) === -1){
              uniqueNames.push(names[i]);
          }

      }
       return uniqueNames
  }

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  function titleIt(str) {
    return str.toLowerCase().split(' ').map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
   }

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  function vowelCounter(subject) {
    return subject.match(/[aeiou]/gi).length;
  }

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
        return num !== 1;
  }

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: 1020

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World"
  log2:  Undefined as bar cannot be seen outside the function scope.
}
