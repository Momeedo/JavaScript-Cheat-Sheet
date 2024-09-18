// Get & Set
let map = new Map();
map.set(0, "a");
map.set(1, "b");
map.set(2, "c");
console.log(map.get(1)); // b

// Map.groupBy();
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient
);
console.log(result.get(restock)); // [{ name: "bananas", type: "fruit", quantity: 5 }] (Get elements where quantity < 6)

// Map.prototype.clear()
map.clear();

// Map.prototype.delete()
map.delete(0);

// Map.prototype.entries()
map = new Map();
map.set(0, "a");
map.set(1, "b");
map.set(2, "c");
let iterator = map.entries();
console.log(iterator.next().value); // [ 0, 'a' ] ( [key, value])
console.log(iterator.next().value); // [ 1, 'b' ] ( [key, value])

// Map.prototype.forEach()
map.forEach((value, key) => console.log(`[${key}, ${value}]`));

// Map.prototype.has()
console.log(map.has(0)); // true

// Map.prototype.keys()
console.log(map.keys()); // [Map Iterator] { 0, 1, 2 }
iterator = map.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1

// Map.prototype[Symbol.iterator]()
iterator = map[Symbol.iterator]();
for (const item of iterator) {
  console.log(item);
} // [ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ] (One per line)

// Map.prototype.values()
console.log(map.values()); // [Map Iterator] { 'a', 'b', 'c' }
iterator = map.values();
console.log(iterator.next().value); // a
console.log(iterator.next().value); // b

// Map.prototype.size
console.log(map.size); // 3
