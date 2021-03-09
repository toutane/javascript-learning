// Not pure function :

const name = "Charles";

function greet() {
  console.log('Hi ! ' + name);
}

greet()

// Pure function :

function pureGeet(nickname) {
  console.log('Hi ! ' + nickname);
}

pureGeet('toutane')