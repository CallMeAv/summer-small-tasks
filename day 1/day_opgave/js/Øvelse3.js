var BChange = document.getElementById("change")
var TextToChange = document.getElementById('changetext')
var originalText = TextToChange.innerHTML;

function textchange() {
   TextToChange.innerHTML = 'even better text'
   setTimeout(textchangeback, 2000);
}

function textchangeback() {
   TextToChange.innerHTML = originalText; 
 }

BChange.addEventListener("click", textchange);
