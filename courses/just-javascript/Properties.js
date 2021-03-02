const Sherlock = { surname: 'Holmes', address: { city: 'London' } };

const John = { surname: 'Watson', address: Sherlock.address };

John.surname = 'Lennon';
John.address.city = 'Malibu';

console.log(Sherlock.surname);
console.log(Sherlock.address.city);
console.log(John.surname);
console.log(John.address.city);

const Agathe = { age: 20, address: undefined };

console.log(Agathe.address);

// The value of the left side of the . is Agathe witch is not undefined -> however the boat property does not exit in Agathe -> return undefined
console.log(Agathe.boat);

// Here the value of Agathe.boat is undefined -> we got an undefined at the left side of the "." -> so it throw an error
// console.log(Agathe.boat.name);

// const president = { name: 'Pooh' };
// president.next = president;

// console.log(president.next);
// console.log(president);

const president = { name: 'Wasingthon', next: null };

console.log(president);
console.log(president.next);

president.next = { name: 'Paddington', next: president };

console.log(president);
console.log(president.next.name);
console.log(president.next.next.name);

const water = { color: 'transparent' };
const glass = water;

console.log(water, glass);

glass.color = 'yellow';
console.log(water, glass);

const batman = { address: { city: 'Gotham' } };
const robin = { address: batman.address };

batman.address = { city: 'Ibiza' };
// batman.address.city = 'Ibiza';

console.log(batman);
console.log(robin);
