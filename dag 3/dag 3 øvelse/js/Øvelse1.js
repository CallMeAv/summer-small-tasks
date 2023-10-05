var Numbers = []

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt('Enter number'))
  Numbers.push(number)
}

function Averages() {
  console.log('total numbers: ' + Numbers)
  const Sum = Numbers.reduce((a, b) => a + b)
  console.log(Sum)
  const result = Sum / Numbers.length
  console.log('Average: ' + result)
}

Averages()
