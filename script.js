let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Won !"
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Loose , Try again !";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "Game was Draw !";
    msg.style.backgroundColor = "gray";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
        return;
    }
    else{
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock , scissor
            userWin = compChoice === "rock" ? true : false;
        }else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
    }
    showWinner(userWin);
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
 });