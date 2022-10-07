let botScore = 0
let playerScore = 0
let choice = ['Rock', 'Paper', 'Scissors']
// let botsWeapon = choice[Math.floor(Math.random() * 3) + 1]
let playersWeapon



document.getElementById('rock').addEventListener('click', playerThrowsRock)
document.getElementById('paper').addEventListener('click', playerThrowsPaper)
document.getElementById('scissors').addEventListener('click', playerThrowsScissors)



function playerThrowsRock() {
	botsWeapon = choice[Math.floor(Math.random() * 3) + 1]
	checkWhoWon(botsWeapon, 'Rock')
}
function playerThrowsPaper() {
	botsWeapon = choice[Math.floor(Math.random() * 3) + 1]
	checkWhoWon(botsWeapon, 'Paper')
}
function playerThrowsScissors() {
	botsWeapon = choice[Math.floor(Math.random() * 3) + 1]
	checkWhoWon(botsWeapon, 'Scissors')
}


function getRandomWeapon() {
	// const randomNumber = Math.floor(Math.random() * 3) + 1
	let botsWeapon = 'rock'
	switch (randomNumber) {
		case 1:
			botsWeapon = 'rock'
			break;
		case 2:
			botsWeapon = 'paper'
			break;
		case 3:
			botsWeapon = 'scissors'
			break;
	}
	return botsWeapon
	// let botsWeapon = 'rock'
	// if (randomNumber < .33) {
	// botsWeapon = 'scissors'
	// }
	// else if (randomNumber < .6666) {
	// botsWeapon = 'paper'
	// }
	// return botsWeapon
}
function checkWhoWon(botsWeapon, playersWeapon) {
	if (botsWeapon == playersWeapon) {
		return 'There was tie'
	}
	else if (
		(botsWeapon == 'Scissors' && playersWeapon == 'Paper') ||
		(botsWeapon == 'Paper' && playersWeapon == 'Rock') ||
		(botsWeapon == 'Rock' && playersWeapon == 'Scissors')
	) {
		increaseBotScore()
	}
	else {
		increasePlayerScore()
	}
}
function increaseBotScore() {
	botScore += 1
	document.getElementById('computerScore').innerHTML = botScore
	displayCompleteMessage('Sorry, you got GOT')
}
function increasePlayerScore() {
	playerScore += 1
	document.getElementById('humanScore').innerHTML = playerScore
	displayCompleteMessage('Congrats, you win.....NOTHING *Fanfare*')
}
function displayCompleteMessage(msg) {
	document.getElementById('status').innerHTML = msg
}
//comment