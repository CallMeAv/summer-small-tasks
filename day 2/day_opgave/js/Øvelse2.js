var Numbers = [1,2,3,4,5,6,7,8,9,10];

function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}

function numberloop() {
    let i = 0;
    while (i < Numbers.length) {
        let number = Numbers[i];
        if (isPrime(number)) {
            console.log(number);
            const newElement = document.createElement('p');
            newElement.textContent = number;
            document.body.appendChild(newElement);
        }
        i++;
    }
}

numberloop();
