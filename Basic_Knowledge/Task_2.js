const firstNonRepeatedCharacter = (str) => {
  const string = str.toLowerCase()

  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return str.charAt(i)
    }
  }

  return null;
}

console.log(firstNonRepeatedCharacter("SbdsffdSa  fdbsssAsfRd"))