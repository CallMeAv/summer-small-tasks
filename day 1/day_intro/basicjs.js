var basicstuff = document.getElementById("basicstuff");

basicstuff.innerHTML = "NotVeryBasicStuff";
basicstuff.style = "color: blue";

function Spellless () {

    const newParagraph = document.createElement('p');
    newParagraph.textContent = "A-10 gunned a iraqy familly";

    document.body.appendChild(newParagraph);
}

Spellless ();

function button () {

    const buttoon = document.createElement("button");
    buttoon.textContent = "bongigus";
    buttoon.id = "specialbutton"
    document.body.appendChild(buttoon);
}

button ();

var specialbutton = document.getElementById("specialbutton");

specialbutton.addEventListener('click', Spellless)