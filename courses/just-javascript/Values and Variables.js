// Strings are primitives values so they are immutables
let text = 'hello';
text = 'bonjour';
text[0] = 'r';

// Arrays are objects so they are not primitives
const arr = [12, 34, 90];
arr[0] = 2;

console.log(text);
console.log(arr);

const obj = { color: 'blue' };
obj.color = 'red';
// obj.color[0] = 'b'

console.log(obj);

let num = 10;
num = 'ten';
console.log(num);

// null = 'ten'
console.log(null);

function double(x) {
  x *= 2;
}

const money = 10;
double(money);
console.log(money);

// function feed(x) {
//   x = 'Bob'
// }

// let pets = ['Tom', 'Jerry']
// feed(pets)
// console.log(pets[0])
