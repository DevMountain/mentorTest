import test from 'ava';
import obj from './toyProblems'
test('Reversing String', t => {
  t.is(obj.reverseIt('scott'), 'ttocs', 'String needs to be reversed')
  t.is(obj.reverseIt('scott is cool'), 'looc si ttocs', 'String needs to be reversed')
})
test('Removing Duplicates', t => {
  var result = obj.removeDups([1, 2, 2, 3, 2, 4, 5, 3, 4, 5, 4, 3, 1, 2, 6])
  t.is(result.join(''), '123456', 'Needs to remove duplicates')
})
test('Title Sentence', t => {
  var result = obj.titleIt('hello, you are very nice and sweet')
  t.is(result, 'Hello, You Are Very Nice And Sweet', 'Needs to capitalize the first letter')
})
test('Vowel Count', t => {
  var result = obj.vowelCounter('hello, you are very nice and sweet')
  t.is(result, 12, 'Needs to give the total Number of vowels in the string')
})
test('Is Prime', t => {
  var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  var result = obj.isPrime('hello, you are very nice and sweet')
  arr.forEach(v=>{
    t.true(obj.isPrime(v), 'Needs to return true if Prime and false if not')
  })
  t.false(obj.isPrime(4), 'Needs to return true if Prime and false if not')
  t.false(obj.isPrime(-1), 'Needs to return true if Prime and false if not')
})
test('What is foo', t =>{
  t.is(obj.foo, '1020', 'Incorrect')
})
test('What will log', t =>{
  t.is(obj.log1, 'Hello World', 'Incorrect')
  t.is(obj.log2, undefined, 'Incorrect')
})
// test('foo', t => {
// 	t.pass();
// });
//
// test('bar', async t => {
// 	const bar = Promise.resolve('bar');
//
// 	t.is(await bar, 'bar');
// });
