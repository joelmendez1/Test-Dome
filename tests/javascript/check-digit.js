function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let total = 0;
  [...membershipId].forEach((num) => (total += Number(num)));

  return total > 9 ? createCheckDigit(String(total)) : total;
}

console.log(createCheckDigit("5555"));
