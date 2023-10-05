var CelisusToFahrenheit = []

for (let i = 0; i < 1; i++) {
  let number = parseInt(prompt('Enter number'))
  CelisusToFahrenheit.push(number)
}

function Temp() {
  console.log(CelisusToFahrenheit)
  const Sum = CelisusToFahrenheit * (9/5) + 32 
  console.log(Sum)
  }

Temp()