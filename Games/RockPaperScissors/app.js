let userScore = 0;
let AIScore = 0;
const userScore_span = document.getElementById("user-score");
const AIScore_span = document.getElementById("AI-score");
const scoreboard_ = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getAIChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
getAIChoice();

function convertToWord(letter) {
    if (letter === "r") return rock;
    if (letter === "p") return paper;
   else return "scissors";
}

function win(userChoice, AIChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    AIScore_span.innerHTML = AIScore;
    const smalluserWord = "(user)".fontsize(3);
    const smallAIWord = "(AI)".fontsize(3);
    result_p.innerHTML = userChoice + (smalluserWord) + "Beats" + AIScore + (smallAIWord) + ". You win!";
    
}

function lose(userChoice, AIChoice) {
    AIScore++;
    userScore_span.innerHTML = userScore;
    AIScore_span.innerHTML = AIScore;
    const smalluserWord = "(user)".fontsize(3);
    const smallAIWord = "(AI)".fontsize(3);
    result_p.innerHTML =  AIScore + (smallAIWord) + "Beats" + userChoice + (smalluserWord)  + ". You lose!";
    
}

function draw(userChoice, AIChoice) {
    const smalluserWord = "(user)".fontsize(3);
    const smallAIWord = "(AI)".fontsize(3);
    result_p.innerHTML = userChoice + (smalluserWord) + "draws with" + AIScore + (smallAIWord) + ". It's a draw!";
}

function game(userChoice){
    const AIChoice = getAIChoice();
    switch (userChoice + AIChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, AIChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, AIChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, AIChoice);
            break;
            
    }}
    


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
    
main ();