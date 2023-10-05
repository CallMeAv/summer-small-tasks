var Fruits = ['apple','potatos','appelsin','jordbær'];

function fruitloop() {
    for (let fruit of Fruits) {
        console.log(fruit);
        const newElement = document.createElement('p');
        newElement.textContent = fruit;
        document.body.appendChild(newElement);
    }
}

fruitloop();
