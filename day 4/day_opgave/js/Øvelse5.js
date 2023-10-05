var Numbers = [1,2,3,4,5,6,7,8,9,10];

function numberloop() {
    var EvenNumbers = Numbers.filter(function(number) {
        return number % 2 === 0; // check if the number is divisible by 2
    }); // use filter to create a new array of even numbers
    for (let number of EvenNumbers) {
        console.log(number);
        const newElement = document.createElement('p');
        newElement.textContent = number;
        document.body.appendChild(newElement);
        
    }
}

numberloop();
