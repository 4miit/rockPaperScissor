let userScore = 0;
let compScore  = 0;

const choices = document.querySelectorAll(".choice");
let a = document.querySelector("#userscore");
let b = document.querySelector("#computerscore");
let c = document.querySelector("#msg");


const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        a.innerText=++userScore;
        c.innerText="You Win";
    }
    else{
        console.log("you lose");
        b.innerText=++compScore;
        c.innerText="You Lose";
    }
};


const drawGame = ()  => {
    console.log("game was draw");
    c.innerText="Game Draw";
};

const generateCompChoice = () => {
       const options = ["rock","paper","scissor"];
       const randIdx = Math.floor(Math.random()* 3);
       return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("userchoice",userChoice);
    const compChoice = generateCompChoice();
    console.log("computerchoice",compChoice);
    if(userChoice===compChoice){
      drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
        userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin  = compChoice === "scissor" ? false : true;
        }
        else{
            userWin  = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)  => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
           playGame(userChoice);
    });
});