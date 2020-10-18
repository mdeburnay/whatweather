function areNumbersConsecutive(number) {
  return number
    .toString()
    .split("")
    .every((digit, i, arr) => {
      return i === arr.length - 1 ? +digit : +digit + 1 === +arr[i + 1];
    });
}

console.log(areNumbersConsecutive(12345));
