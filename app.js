const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");

const options = ["paper.png", "scissors.png", "rock.png"]

const playAgain = document.querySelector("#play-again");


const computerChoice = document.querySelector("#computer-choice");
const result = document.querySelector("#result");

paper.addEventListener("click", startGame);
scissors.addEventListener("click", startGame);
rock.addEventListener("click", startGame);

function startGame() {
    const computerChoosed = randomChoice();
    const myChoosed = this.dataset.id;
    let resultGame;
    if (computerChoosed == myChoosed) {
        resultGame = "Tie,You can play again"
    } else if (computerChoosed == 0 && myChoosed == 2) {
        resultGame = "You lost!Try again";

    } else if (computerChoosed == 1 && myChoosed == 0) {
        resultGame = "You lost!Try again"

    } else if (computerChoosed == 2 && myChoosed == 1) {
        resultGame = "You lost!Try again"

    } else {
        resultGame = "You Win,congrate!"

    }


    result.style.color = 'darkred';
    result.textContent = resultGame;
     setTimeout(function(){
         result.textContent = "";
     },1000)

}

function randomChoice() {
    const number = Math.round(Math.random() * 2);
    const computerChoiceImage = document.createElement("img");
    computerChoiceImage.style.width = "200px";
    computerChoiceImage.style.height = "200px";
    computerChoiceImage.style.zIndex = '1';
    computerChoiceImage.src = `./images/${options[number]}`;
    computerChoice.appendChild(computerChoiceImage);

    setTimeout(function () {
        computerChoiceImage.remove();
    }, 1000)
    return number;
}