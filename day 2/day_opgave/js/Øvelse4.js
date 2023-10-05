let outputDiv = document.getElementById("output");

function print(text) {
    let p = document.createElement("p");
    p.textContent = text;
    outputDiv.appendChild(p);
}

let counter = 0;

while (counter < 5) {
    console.log('Hello, World!');
    counter++;
}

let k = 1;
do {
    console.log('Iteration: ' + k);
    k++;
} while (k < 5);

var person = { name: 'peter', lastname: 'saint' , age: 22, job: 'what do you know?'};
for (let attr in person) {
    console.log(attr + ':' + person[attr]);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var persons = [
    { name: 'peter', lastname: 'saint' , age: 22, job: 'what do you know?'},
    { name: 'boob', lastname: 'saint' , age: 22, job: 'what do you know?'},
    { name: 'roar', lastname: 'saint' , age: 22, job: 'what do you know?'},
    { name: 'nope', lastname: 'saint' , age: 22, job: 'what do you know?'}
];

for (let element of persons) {
    console.log('name: '+ element.name);
    console.log('lastname: '+ element.lastname);
    console.log('Age: '+ element.age);
    console.log('Job: '+ element.job);
    console.log('');
}

for (let element of persons) {
    print('name: '+ element.name);
    print('lastname: '+ element.lastname);
    print('Age: '+ element.age);
    print('Job: '+ element.job);
    print('-----------------------------------');
}