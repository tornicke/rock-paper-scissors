const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) // or you can use 3
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}