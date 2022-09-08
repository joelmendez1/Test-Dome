function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let total = 0;
  [...membershipId].forEach((num) => (total += Number(num)));

  if (total > 9) {
    let argument = String(total);
    return createCheckDigit(argument);
  } else {
    return total;
  }
}

console.log(createCheckDigit("5555"));
