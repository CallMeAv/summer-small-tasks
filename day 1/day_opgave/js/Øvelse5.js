var liElements = document.getElementsByTagName("li");

var fonts = ["Arial", "Verdana", "Times New Roman", "Courrer New", "Georgia"]
var margins = [ "5px", "10px", "15px", "20px", "25px"];

for (var i = 0; i <liElements.length; i++) {

    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var font = fonts[Math.floor(Math.random() * fonts.length)];
    var margin = margins[Math.floor(Math.random() * margins.length)];

    liElements[i].style.color = color;
    liElements[i].style.fontFamily = font;
    liElements[i].style.margin = margin;

}