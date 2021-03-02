const pen = { color: 'blue' };
const car = { __proto__: pen, brand: 'tesla' };

console.log(car.color);

// console.log(car.hasOwnProperty('brand'));
console.log(Object.prototype.hasOwnProperty.call(car, 'brand'));

// const obj = {};
// console.log(obj.__proto__);
