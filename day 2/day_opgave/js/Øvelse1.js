var Numbers = [1,2,3,4,5,6,7,8,9,10];

function numberloop() {
    for (let number of Numbers) {
        console.log(number);
        const newElement = document.createElement('p');
        newElement.textContent = number;
        document.body.appendChild(newElement);
    }
}

numberloop();