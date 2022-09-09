function pipeline(...funcs) {
  return (arg) => {
    let total = arg;
    // Your code goes here
    [...funcs].forEach((fn) => {
      total = fn(total);
    });
    return total;
  };
}

let fun = pipeline(
  (x) => x * 3,
  (x) => x + 1,
  (x) => x / 2
);
console.log(fun(3)); // Should print 5
