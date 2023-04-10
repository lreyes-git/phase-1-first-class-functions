function receivesAFunction(cbFunction) {
    cbFunction();
}

function returnsANamedFunction() {
    const namedFunction = () => {};
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => {};
}