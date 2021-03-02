let ticket = { id: 0 };
if (ticket === { id: 0 }) {
  console.log('You have the good ticket !');
}

ticket = 'chicken';
if (ticket === 'chicken') {
  console.log('You have the good ticket !');
}

const coffee = function () {
  return 0 / 0;
};

const latte = function () {
  return 0 / 0;
};

const matcha = NaN;
const tea = NaN;
console.log(coffee());

console.log(coffee === latte);
console.log(Object.is(coffee, latte));
console.log(tea === matcha);
console.log(Object.is(tea, matcha));
