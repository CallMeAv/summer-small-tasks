var array1 = ['al','beth','tobi','atit']
var array2 = []
var Button1 = document.getElementById('button1');

function convayor (){
for (let i = 0; i < 5; i++) {
var first = array1.shift();
console.log(array1);
console.log(first)
array2.push(first);
console.log(array2);
}


}

Button1.addEventListener("click", convayor);
