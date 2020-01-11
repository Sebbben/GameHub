const userScore = 0;
const AIScore = 0;
const userScore_span = document.getElementById("user-score");
const AIScore_span = document.getElementById("AI-score");
const scoreboard_ = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getAIChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() = 3);
    return choices[randomNumber];
}
getAIChoice();

function game(userChoice){

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
        })
    paper_div.addEventListener('click', function() {
        game("p");
            })
    scissors_div.addEventListener('click', function() {
        game("s");
                })
}
    