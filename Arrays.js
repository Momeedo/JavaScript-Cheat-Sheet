//////////////////////////////////
///////// Static Methods /////////
//////////////////////////////////

// Array.from()
console.log(Array.from("foo"));

// Array.isArray()
console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray("[]")); // false

// Array.of()
console.log(Array.of("foo", 2, "bar", true)); // Expected output: Array ["foo", 2, "bar", true]

//////////////////////////////////
//////// Instance Methods ////////
//////////////////////////////////

let array, array1, array2;
array = ["a", "b", "c", "d", "e"];
array1 = [0, 1, 2, 3, 4];
array2 = [0, 1, 2, 3, 4];

// Array.prototype.at();
console.log(array.at(0)); // 'a'

// Array.prototype.concat();
console.log(array1.concat(array2)); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

// Array.prototype.copyWithin();
console.log(array2.copyWithin(0, 3, 4)); // Copy to index 0 the element at index 3 -> [ 3, 1, 2, 3, 4 ]
console.log(array2.copyWithin(0, 3)); // Copy to index 1 all elements from index 3 to the end -> [ 3, 4, 2, 3, 4 ]

// Array.prototype.entries();
let iterator = array.entries();
console.log(iterator.next().value); // [ 0, 'a' ] ( [key, value])
console.log(iterator.next().value); // [ 1, 'b' ] ( [key, value])

// Array.prototype.every();
const isBelowThreshold = (currentValue) => currentValue < 5;
console.log(array1.every(isBelowThreshold)); // true

// Array.prototype.fill();
console.log(array1.fill(6)); // Fill with 6 -> [6, 6, 6, 6, 6]
console.log(array1.fill(5, 1)); // Fill with 5 from position 1 -> [6, 5, 5, 5, 5]
console.log(array1.fill(0, 2, 4)); // Fill with 0 from position 2 until position 4 -> [6, 5, 0, 0, 5]

// Array.prototype.filter();
const words = [
  "spray",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "elimination",
];
console.log(words.filter((word) => word.length > 6)); // [ 'exuberant', 'destruction', 'present', 'elimination' ]
console.log(words.filter((word) => word.indexOf("tion") > -1)); // [ 'destruction', 'elimination' ]

// Array.prototype.find();
array2 = [0, 1, 2, 3, 4];
console.log(array2.find((element) => element > 2)); // Find first occurenceof an element > 2 => 3

// Array.prototype.findIndex();
const isLargeNumber = (element) => element > 2;
console.log(array2.findIndex(isLargeNumber)); // Get index of first elklement > 2 => 3

// Array.prototype.findLast();
console.log(array2.findLast((element) => element > 2)); // Same as Array.prototype.find() but Last Occurence => 4

// Array.prototype.findLastIndex();
console.log(array2.findLastIndex(isLargeNumber)); // Same as Array.prototype.findIndex() but Last Occurence => 4

// Array.prototype.flat();
let unflattedArray = [0, 1, 2, [3, 4]];
console.log(unflattedArray.flat()); // [0, 1, 2, 3, 4]
unflattedArray = [0, 1, [2, [3, [4, 5]]]];
console.log(unflattedArray.flat()); // [0, 1, 2, Array [3, Array [4, 5]]]
console.log(unflattedArray.flat(2)); // [0, 1, 2,        3, Array [4, 5]]
console.log(unflattedArray.flat(Infinity)); // [0, 1, 2,        3,        4, 5 ]

// Array.prototype.flatMap();
let arr = [1, 2, 1];
console.log(arr.flatMap((num) => (num === 2 ? [2, 2] : 1))); // [1, 2, 2, 1] (Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level)

// Array.prototype.forEach();
array.forEach((element) => console.log(element));

// Array.prototype.includes();
console.log(array.includes("g")); // false

// Array.prototype.indexOf();
console.log(array.indexOf("a")); // 0

// Array.prototype.join();
console.log(array.join("-")); // a-b-c-d-e

// Array.prototype.keys();
for (const key of array.keys()) {
  console.log(key);
} // 0 1 2 3 4 (One per line)

// Array.prototype.lastIndexOf();
console.log(array.lastIndexOf("a")); // 0

// Array.prototype.map();
const beforMap = [1, 5, 10];
console.log(beforMap.map((x) => x * 2)); // [ 2, 10, 20 ]

// Array.prototype.pop();
console.log(array.pop()); // e

// Array.prototype.push();
array.push("e");

// Array.prototype.reduce();
array1 = [0, 1, 2, 3, 4];
const initialValue = 10;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // 10 + 1 + 2 + 3 + 4
console.log(sumWithInitial); // 10

// Array.prototype.reduceRight();
arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result = arr.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(result); // [4, 5, 2, 3, 0, 1]

// Array.prototype.reverse();
console.log(array.reverse()); // [ 'e', 'd', 'c', 'b', 'a' ]

// Array.prototype.shift();
console.log(array.shift()); // e
console.log(array); // [ 'd', 'c', 'b', 'a' ]

// Array.prototype.slice();
let numbers = ["zero", "one", "two", "three", "four-last"];
console.log(numbers.slice(2)); // Slice from index 2 => [ 'two', 'three', 'four-last' ]
console.log(numbers.slice(2, 4)); // Slice from index 2 to 4 => [ 'two', 'three' ]
console.log(numbers.slice(-2)); // Slice from last 2 elements => [ 'three', 'four-last' ]
console.log(numbers.slice(2, -1)); // Slice 2 elements from last index -1 => [ 'two', 'three' ]

// Array.prototype.some();
numbers = [6, 1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(numbers.some(even)); // true

// Array.prototype.sort();
console.log(numbers.sort()); // [ 1, 2, 3, 4, 5, 6 ]

// Array.prototype.splice();
numbers = ["zero", "two", "three", "four"];
numbers.splice(1, 0, "one"); // Inserts at index 1 => [ 'zero', 'one', 'two', 'three', 'four' ]
console.log(numbers.splice(4, 1, "four-last")); // [ 'four' ]
console.log(numbers); // [ 'zero', 'one', 'two', 'three', 'four-last' ]

// Array.prototype[Symbol.iterator]();
array = ["a", "b", "c", "d", "e"];
iterator = array[Symbol.iterator]();
for (const value of iterator) {
  console.log(value);
} // a b c d e (One per line)

// Array.prototype.toLocaleString();
const InitialArray = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
console.log(InitialArray.toLocaleString("en", { timeZone: "America/Toronto" })); // 1,a,12/21/1997, 9:12:00 AM

// Array.prototype.toReversed();
console.log(array.toReversed()); // ["e", "d", "c", "b", "a"]
console.log(array); // Original Array remains unchanged => [ 'a', 'b', 'c', 'd', 'e' ]

// Array.prototype.toSorted();
numbers = [6, 1, 2, 3, 4, 5];
console.log(numbers.toSorted()); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // Original Array remains unchanged => [6, 1, 2, 3, 4, 5]
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers);

// Array.prototype.toSpliced();
numbers.toSpliced(1, 0, "one");

// Array.prototype.toString();
numbers = [6, 1, 2, 3, 4, 5];
console.log(numbers.toString()); // 6,1,2,3,4,5

// Array.prototype.unshift();
console.log(numbers.unshift(-2, -1)); // 8 (Returns new length)
console.log(numbers); // [ -2, -1, 6, 1, 2,  3, 4, 5 ]

// Array.prototype.values();
array = ["a", "b", "c"];
iterator = array.values();
for (const value of iterator) {
  console.log(value);
}

// Array.prototype.with();
arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

//////////////////////////////////
/////// Instance Properties //////
//////////////////////////////////

// Array: length
console.log(array.length);
