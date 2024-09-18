// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true

// Object.create()
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;
me.printIntroduction(); // "My name is Matthew. Am I human? true"

// Object.defineProperties()
let object = {};
Object.defineProperties(object, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
console.log(object.property1); // 42

// Object.defineProperty()
object = {};
Object.defineProperty(object, "property1", {
  value: 42,
  writable: false,
});
object.property1 = 77; // Throws an error in strict mode
console.log(object.property1); // 42

// Object.entries()
object = {
  a: "This is a String",
  b: 42,
};
for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
} // a: This is a String // b: 42

// Object.freeze()
object = {
  prop: 42,
};
Object.freeze(object); // Freezing an object prevents extensions and makes existing properties non-writable and non-configurable
object.prop = 33; // Throws an error in strict mode
console.log(object.prop); // 42

// Object.fromEntries()
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
console.log(Object.fromEntries(entries)); // { foo: 'bar', baz: 42 }

// Object.getOwnPropertyDescriptor()
object = {
  prop: 42,
};
const descriptor = Object.getOwnPropertyDescriptor(object, "prop");
console.log(descriptor.configurable); // true
console.log(descriptor.value); // 42

// Object.getOwnPropertyDescriptors()
const descriptors = Object.getOwnPropertyDescriptors(object);
console.log(descriptors.prop.writable); // true
console.log(descriptors.prop.value); // 42

// Object.getOwnPropertyNames()
object = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.getOwnPropertyNames(object)); // ["a", "b", "c"]

// Object.getOwnPropertySymbols()
object = {};
const a = Symbol("a");
const b = Symbol.for("b");
object[a] = "localSymbol";
object[b] = "globalSymbol";
const objectSymbols = Object.getOwnPropertySymbols(object);
console.log(objectSymbols.length); // 2

// Object.getPrototypeOf()
const prototype = {};
object = Object.create(prototype);
console.log(Object.getPrototypeOf(object) === prototype); // true

// Object.groupBy()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);

// Object.hasOwn()
object = {
  prop: "exists",
};
console.log(Object.hasOwn(object, "prop")); // true
console.log(Object.hasOwn(object, "type")); // false

// Object.is()
console.log(Object.is("1", 1)); // false
console.log(Object.is(NaN, NaN)); // true
const obj = {};
console.log(Object.is(obj, {})); // false

// Object.isExtensible()
console.log(Object.isExtensible(object)); // true
Object.preventExtensions(object);
console.log(Object.isExtensible(object)); // false

// Object.isFrozen()
console.log(Object.isFrozen(object)); // true or false

// Object.isSealed()
console.log(Object.isSealed(object)); // true or false

// Object.keys()
object = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object)); // ["a", "b", "c"]

// Object.preventExtensions()
Object.preventExtensions(object); // Prevents new properties from ever being added to an object

// Object.seal()
Object.seal(object); // Prevents extensions and makes existing properties non-configurable

// Object.setPrototypeOf()
obj = {};
const parent = { foo: "bar" };
console.log(obj.foo); // undefined
Object.setPrototypeOf(obj, parent);
console.log(obj.foo); // "bar"

// Object.values()
object = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object)); // ["somestring", 42, false]
