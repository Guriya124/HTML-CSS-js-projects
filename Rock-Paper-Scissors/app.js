const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score")

let playeScores = 0;
let computerScores = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log("user Choice!", button.id, "computer choice", computerPlay());
        const result = playRound(button.id, computerPlay());
        console.log(result);

        resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playeScores++;
        playerScoreEl.textContent = playeScores;
        return "You Won! " + playerSelection + " beats " + computerSelection;

    } else {
        computerScores++;
        computerScoreEl.textContent = computerScores;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}