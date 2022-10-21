const findCountOfSumPairs = (arr, target) => {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == target)
        count++;
    }
  }

  return count
}


console.log(findCountOfSumPairs([1, 3, 6, 5, 7, 0, 2], 7))