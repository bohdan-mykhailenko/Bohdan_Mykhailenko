const rewriteFriendsList = (string) => {
  let arr = string.split(';')

  const newArr = arr.map((element) => {
    let fullNameArr = element.split(':')

    fullNameArr.push('(')
    fullNameArr.push(fullNameArr[1] + ', ')
    fullNameArr.push(fullNameArr[0])
    fullNameArr.push(')')
    fullNameArr.splice(0, 2)

    element = fullNameArr.join('').toUpperCase()

    return element
  });

  return newArr.sort().join(' ')
}


console.log(rewriteFriendsList("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))