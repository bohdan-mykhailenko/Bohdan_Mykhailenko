const filterList = (arr) => {
  let filteredArr = []

  arr.forEach(element => {
    if (Number.isInteger(element)) {
      filteredArr.push(element)
    }
  })

  return filteredArr
}

console.log(filterList([12, 'str', 234, true, 11, 'aasdf']))