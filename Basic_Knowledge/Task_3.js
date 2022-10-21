const digitalRoot = (digit) => {
  const digits = String(digit).split("");

  if (digits.length == 1) {
    return digit
  }

  let sum = 0

  digits.forEach(value => {
    sum += parseInt(value)
  });

  if (sum < 10) {
    return sum
  }

  return digitalRoot(sum)
}


console.log(digitalRoot(9713))