var Numbers = [1,2,3,4,5,6,7,8,9,10];
let randomNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
let correctResponses = ["Fuckin FINALLY", "i hate you but ur right", "dumb bitch got it right",'whore'];
let incorrectResponses = ["slut", "Dumb Bitch", "fuck you", 'is that as many dicks as you suck?'
]



function checkGuess() {
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    if (parseInt(guess) === randomNumber) {
        result.textContent = correctResponses[Math.floor(Math.random() * correctResponses.length)];
    } else {
        result.textContent = incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)];
    }
}
