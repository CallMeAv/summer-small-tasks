var Numbers = [1,2,3,4,5,6,7,8,9,10];

function numberloop() {
    // find the maximum value in the array
    const maxNumber = Math.max(...Numbers);
    // create a new element with the max value as the text
    const newElement = document.createElement('p');
    newElement.textContent = maxNumber;
    // append the new element to the document body
    document.body.appendChild(newElement);
    console.log(maxNumber)
}

numberloop();
