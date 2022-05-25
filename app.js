const drawBtn = document.getElementsByClassName("draw-btn");
const highBtn = document.getElementsByClassName("high-btn");
const lowBtn = document.getElementsByClassName("low-btn");
const playAgainBtn = document.getElementsByClassName("play-again-btn");

const cpuCard = document.getElementsByClassName("cpu-card");
const playerCard = document.getElementsByClassName("player-card");

const drawMsg = document.getElementsByClassName("draw-msg");
const endMsg = document.getElementsByClassName("end-message");

let cpuRandomNumber;
let playerRandomNumber;

drawBtn[0].addEventListener("click", () => {
    cpuRandomNumber = Math.floor(Math.random() * 9) + 1;
    cpuCard[0].textContent = cpuRandomNumber;
    cpuCard[0].classList.remove("invisible");

    drawMsg[0].textContent = `I drew a ${cpuRandomNumber}. Do you think the next card will be higher or lower?`;
    drawMsg[0].classList.remove("invisible");

    document.getElementsByClassName("guess-cards")[0].classList.remove("invisible");

    drawBtn[0].disabled = true;
});

highBtn[0].addEventListener("click", () => {
    playerRandomNumber = Math.floor(Math.random() * 9) + 1;
    playerCard[0].textContent = playerRandomNumber;
    playerCard[0].classList.remove("invisible");

    if(playerRandomNumber > cpuRandomNumber) {
        endMsg[0].textContent = `Woohoo! You drew a ${playerRandomNumber}! You win!`;
    } else if (cpuRandomNumber > playerRandomNumber) {
        endMsg[0].textContent = `Oh no! You drew a ${playerRandomNumber}! You lose!`;
    } else if (cpuRandomNumber === playerRandomNumber) {
        endMsg[0].textContent = "Hmm, it's a tie. Let's play again!"
    }

    endMsg[0].classList.remove("invisible");
    playAgainBtn[0].classList.remove("invisible");

    highBtn[0].disabled = true;
    lowBtn[0].disabled = true;
});

lowBtn[0].addEventListener("click", () => {
    playerRandomNumber = Math.floor(Math.random() * 9) + 1;
    playerCard[0].textContent = playerRandomNumber;
    playerCard[0].classList.remove("invisible");

    if(playerRandomNumber < cpuRandomNumber) {
        endMsg[0].textContent = `Woohoo! You drew a ${playerRandomNumber}! You win!`;
    } else if (cpuRandomNumber < playerRandomNumber) {
        endMsg[0].textContent = `Oh no! You drew a ${playerRandomNumber}! You lose!`;
    } else if (cpuRandomNumber === playerRandomNumber) {
        endMsg[0].textContent = "Hmm, it's a tie. Let's play again!"
    }

    endMsg[0].classList.remove("invisible");
    playAgainBtn[0].classList.remove("invisible");
    
    highBtn[0].disabled = true;
    lowBtn[0].disabled = true;
});

playAgainBtn[0].addEventListener("click", () => {
    drawBtn[0].disabled = false;
    highBtn[0].disabled = false;
    lowBtn[0].disabled = false;

    cpuCard[0].classList.add("invisible");
    drawMsg[0].classList.add("invisible");
    document.getElementsByClassName("guess-cards")[0].classList.add("invisible");
    playerCard[0].classList.add("invisible");
    endMsg[0].classList.add("invisible");
    playAgainBtn[0].classList.add("invisible");
});