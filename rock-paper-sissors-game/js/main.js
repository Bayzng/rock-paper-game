const choices = document.querySelectorAll('.choices');
const restart = document.getElementById('restart');
const score = document.getElementById('score');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');



const scoreboard = {
    player: 0,
    computer: 0,

}

// PLAY GAME
const play = (e) => {
    const playChoice = e.target.id
    restart.style.display = 'inline-block';
    const computerChoice = getComputerChoice()
    const winner = getWinner(playChoice, computerChoice)
    console.log(playChoice, computerChoice, winner);
    showWinner(winner, computerChoice)
}


const getComputerChoice = () => {
    const rand = Math.random()
    if(rand <= 0.34) {
        return 'rock'
    }else if (rand <= 0.67) {
        return 'paper'
    }else {
        return'scissors'
    }
}


const getWinner = (p, c) => {
    if(p === c) {
        return 'draw'
    }else if (p === 'rock') {
        if (c === 'paper'){
            return 'computer'
        }else {
            return 'player'
        }
    }else if (p === 'paper') {
        if (c === 'rock') {
            return 'compuer'
        }else {
            return 'player'
        }
    }else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer'
        }else {
            return 'player'
        }
    }
}


const showWinner = (winner, computerChoice) => {
    if (winner === 'player') {
        scoreboard.player++
        result.innerHTML = `
        <h1 class = "text-win" >YOU WIN</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `
    }else if (winner === 'computer') {
        scoreboard.computer++
        result.innerHTML = `
        <h1 class = "text-lose" >YOU LOSE</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `;

    }else {
        result.innerHTML = `
        <h1>YOU LOSE</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `;

    }

    score.innerHTML = `
        <p> player: ${scoreboard.player}</p>
        <p> computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';
}


const reset = () => {
    scoreboard.player = 0
    scoreboard.computer = 0
    score.innerHTML = `
        <p> player : 0</p>
        <p> player : 0</p>
    `
}



function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', clearModal)
restart.addEventListener('click', reset);

choices.forEach((choice) => {
    choice.addEventListener('click', play);
});