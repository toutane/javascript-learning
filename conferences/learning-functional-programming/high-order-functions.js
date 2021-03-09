function adjectiver(adjective) {
  return function (string) {
    return adjective + string;
  };
}

const coolifier = adjectiver('cool');

console.log(coolifier('ier'));
