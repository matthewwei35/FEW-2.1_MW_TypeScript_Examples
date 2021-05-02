function printCopy(str, n) {
  let result = ''
  for (let i = 0; i < n; i += 1) {
    result += str + '\n'
  }
  return result
}

console.log(printCopy('hello', 3))
