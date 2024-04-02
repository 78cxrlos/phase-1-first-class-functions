function receivesAFunction(receive) {
  receive();
}

function returnsANamedFunction() {
  return receivesAFunction;
}

const returnsAnAnonymousFunction = function () {
    return function () {}
}
