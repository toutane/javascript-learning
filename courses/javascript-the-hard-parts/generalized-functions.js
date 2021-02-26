const myArray = [1, 2, 3];

function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] * 2);
  }
  return output;
}

console.log(copyArrayAndMultiplyBy2(myArray));

function copyArrayAndDiviseBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] / 2);
  }
  return output;
}

console.log(copyArrayAndDiviseBy2(myArray));

function addThree(array) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] + 3);
  }
  return output;
}

console.log(addThree(myArray));

// You can generalize this kind of functions by passing a function as a parameter

function copyArrayAndManipulate(array, operation) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(operation(array[i]));
  }
  return output;
}

console.log(
  copyArrayAndManipulate(myArray, function (num) {
    return num / 8;
  })
);

console.log(
  copyArrayAndManipulate(myArray, function (num) {
    return num * 7;
  })
);

function copyArrayAndManipulateV2(array, manipulation) {
  const output = [];
  array.map((num) => output.push(manipulation(num)));
  return output;
}

console.log(copyArrayAndManipulateV2(myArray, (num) => num + 4));

const copyArrayAndManipulateV3 = (array, instruction) =>
  array.map((x) => instruction(x));

console.log(copyArrayAndManipulateV3(myArray, (x) => x * x));
