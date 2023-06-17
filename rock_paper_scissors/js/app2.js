let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") { return "Rock"};
    if (letter === "p") { return "Paper"};
    if (letter === "s") { return "Scissors"};
    if (letter === "l") { return "Lizard"};
    if (letter === "k") { return "Spock"};
    
}

var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change', function(){
    if(this.checked) {
        outputtext.innerHTML = "Light";
        document.body.style.backgroundColor = "#a69759";
    } else {
        outputtext.innerHTML = "Dark";
        document.body.style.backgroundColor = "#292C34";
    }
});

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties with ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "rl":
        case "pr":
        case "pk":
        case "sl":
        case "sp":
        case "lp":
        case "lk":
        case "ks":
        case "kr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "lr":
        case "rp":
        case "kp":
        case "ls":
        case "ps":
        case "pl":
        case "kl":
        case "sk":
        case "rk":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice, computerChoice);
            break;
        default:
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

    lizard_div.addEventListener('click', () => game("l"));

    spock_div.addEventListener('click', () => game("k"));
}

main();