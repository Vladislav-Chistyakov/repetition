const numbers = [1, 2, 2, 3, 4, 4, 5];

const newSet = new Set(numbers)

console.log(newSet);

const map = new Map();
map.set(1, 'one');
map.set('1', 'string one');
console.log(map.get(1)); // ???
console.log(map.get('1')); // ???

const set = new Set();
set.add({});
set.add({});
console.log(set);