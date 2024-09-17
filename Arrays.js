//////////////////////////////////
///////// Static Methods /////////
//////////////////////////////////

//Array.from()
console.log(Array.from("foo"));

//Array.isArray()
console.log(Array.isArray([1, 3, 5])); // true
console.log(Array.isArray("[]")); // false

//Array.of()
console.log(Array.of("foo", 2, "bar", true)); // Expected output: Array ["foo", 2, "bar", true]

//////////////////////////////////
//////// Instance Methods ////////
//////////////////////////////////

let array, array1, array2;
array = array1 = array2 = [0, 1, 2, 3, 4];

// Array.prototype.at();
console.log(array.at(2)); // 2

// Array.prototype.concat();
console.log(array1.concat(array2)); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

// Array.prototype.copyWithin();
// Array.prototype.entries();
// Array.prototype.every();
// Array.prototype.fill();
// Array.prototype.filter();
// Array.prototype.find();
// Array.prototype.findIndex();
// Array.prototype.findLast();
// Array.prototype.findLastIndex();
// Array.prototype.flat();
// Array.prototype.flatMap();
// Array.prototype.forEach();
// Array.prototype.includes();
// Array.prototype.indexOf();
// Array.prototype.join();
// Array.prototype.keys();
// Array.prototype.lastIndexOf();
// Array.prototype.map();
// Array.prototype.pop();
// Array.prototype.push();
// Array.prototype.reduce();
// Array.prototype.reduceRight();
// Array.prototype.reverse();
// Array.prototype.shift();
// Array.prototype.slice();
// Array.prototype.some();
// Array.prototype.sort();
// Array.prototype.splice();
// Array.prototype[Symbol.iterator]();
// Array.prototype.toLocaleString();
// Array.prototype.toReversed();
// Array.prototype.toSorted();
// Array.prototype.toSpliced();
// Array.prototype.toString();
// Array.prototype.unshift();
// Array.prototype.values();
// Array.prototype.with();

//////////////////////////////////
/////// Instance Properties //////
//////////////////////////////////

//Array: length
console.log(array.length);
