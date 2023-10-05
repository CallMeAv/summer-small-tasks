var spoiler = document.getElementById('spoiler');
var Button1 = document.getElementById('button1');
var Button2 = document.getElementById('button2');

function button1() {
spoiler.style.display = "block";
 };


 function button2() {
      spoiler.style.display = "none";
    } 

  Button2.addEventListener("click", button2);
  Button1.addEventListener("click", button1);