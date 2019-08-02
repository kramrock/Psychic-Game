let wins = 0;
let losses = 0;
let guessesLeft = 10;
let cpuLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let gameOver = false;
let lettersGuessed = [];


let computerGuess = cpuLetter[Math.floor(Math.random()*cpuLetter.length)];
		

	document.onkeyup = function() {
		let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		function reset() {
		computerGuess=cpuLetter[Math.floor(Math.random() * cpuLetter.length)];
		
        guessesLeft=10;
		gameOver=false;42 
		lettersGuessed=[];
    }

    	if ((userGuess===computerGuess)) {
			gameOver=true;
			wins++;
			alert("You have genius level intellect, it was "+ computerGuess);

}		else {
		guessesLeft--;
		
}
		if (guessesLeft==0) {
			gameOver=true;
			losses++;
		}

		if (gameOver==true) {
				reset();
		}
	
		lettersGuessed.push(userGuess);
		
		let html = "<p>Guess what letter im thinking of</p>" + 
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" + 
		"<p>Letters Guessed: " + lettersGuessed + "</p>";


		document.querySelector('#game').innerHTML = html;
		

	};