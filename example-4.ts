const nums = []
const chars = []

function random(n) {
  return Math.floor(Math.random() * n)
}

function randomChar() {
  return String.fromCharCode(random(26) + 97)
}

for (let i = 0; i < 6; i += 1) {
  nums.push(random(100))
  chars.push(randomChar())
}

console.log(nums)
console.log(chars)

