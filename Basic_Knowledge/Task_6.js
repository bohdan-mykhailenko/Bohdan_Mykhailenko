const findNextBiggerNumber = (number) => {
  let arr = Array.from(String(number), Number).reverse();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let a = arr[i]
        arr[i] = arr[j]
        arr[j] = a

        return parseInt(arr.reverse().join(''))
      }
    }
  }

  return -1
}

console.log(findNextBiggerNumber(2134))