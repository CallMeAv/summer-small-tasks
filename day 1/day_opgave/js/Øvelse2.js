var Divcolor = document.getElementById("background");

function getrandomcolor() {
  const letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++){
  color += letters[Math.floor(Math.random()*16)];
  console.log(color);
}
  return color;
}

Divcolor.addEventListener("click", () => {
  const randomColor = getrandomcolor();
  Divcolor.style.backgroundColor = randomColor;
});
