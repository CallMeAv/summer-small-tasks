// var button = document.createElement('button');
// // dont put a () in the even listenner after the variable to avoid calling function too early
// button.addEventListener('click', getUserText);
// button.style.color = '#333';
// button.style.background ='#f3f3f3';
// button.style.border = 'none';
// button.textContent = 'create Paragraph';
// button.style.padding = '7px';
// document.body.appendChild(button);

// function createParapgraphWithText(text) {
//   const newParagraph = document.createElement('p')
//   newParagraph.style.color = 'red'
//   newParagraph.style.fontFamily = 'Tahoma'
//   newParagraph.textContent = text
//   document.body.appendChild(newParagraph)
// }

// function getUserText() {
//   const userText = prompt('Enter Text.')
//   createParapgraphWithText(userText)
// }

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n-1);
// };

// const userInput = parseInt(prompt('Indtast et positivt heltal: '));
// const result = factorial(userInput);
// alert('Fakultet af ' + userInput + ' er ' + result);

// function fibonacci(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * fibonacci(n-1) + fibonacci(n -2);
// };

// const userInput = parseInt(prompt('Indtast et positivt heltal: '));
// const result = fibonacci(userInput);
// alert('Fakultet af ' + userInput + ' er ' + result);

function generateFibonacciSequence(n) {
  const sequence = [0, 1]

  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

var numberOfTerms = parseInt(prompt('type the number of terms: '));
var result = generateFibonacciSequence(numberOfTerms);
alert('the first number in the sequence is: ' + result.join(','));
  