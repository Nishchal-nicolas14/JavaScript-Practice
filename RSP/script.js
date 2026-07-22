// Get the button Objects by ID

const rockBtn = document.getElementById("rockButton");
const paperBtn = document.getElementById("paperButton");
const scissorBtn = document.getElementById("scissorButton");
const resetBtn = document.getElementById("resetButton");

const resultArea = document.getElementById("showResult");

// store the result :
let player = {
    win : 0,
    lose : 0,
    tie : 0
};

function computerMove() {
    let val = Math.random();
    // check the condition :
    if(val <= 1/3)
        return "Rock";
    if(val <= 2/3)
        return "Paper";
    return "Scissor";
}

function playGame(playerMove) {
    let result;
    let computer = computerMove();

    if(playerMove === "Rock") {
        if(computer === "Rock")
            result = "Tie";
        else if(computer === "Paper")
            result = "Lose";
        else    
            result = "Win";
    }
    else if(playerMove === "Paper") {
        if(computer === "Rock")
            result = "Win";
        else if(computer === "Paper")
            result = "Tie";
        else    
            result = "Lose";
    }
    else {
        if(computer === "Rock")
            result = "Lose";
        else if(computer === "Paper")
            result = "Win";
        else    
            result = "Tie";
    }

    updateResult(playerMove, computer, result);
}

function resetResult() {
    const win = document.getElementById("winRecord");
    const lose = document.getElementById("loseRecord");
    const tie = document.getElementById("tieRecord");

    win.textContent = "0";
    lose.textContent = "0";
    tie.textContent = "0";

    player.win = 0;
    player.lose = 0;
    player.tie = 0;
}

function updateResult(playerMove, computerMove, result) {
    const win = document.getElementById("winRecord");
    const lose = document.getElementById("loseRecord");
    const tie = document.getElementById("tieRecord");

    let TimeoutIntervalId;
    if(result === "Win") {
        player.win++;
        win.textContent = `${player.win}`;
        resultArea.className = "winResult";
    }
    else if(result === "Lose") {
        player.lose++;
        lose.textContent = `${player.lose}`;
        resultArea.className = "loseResult";
    }
    else {
        player.tie++;
        tie.textContent = `${player.tie}`;
        resultArea.className = "tieResult";
    }

    // Show the Result :
    resultArea.textContent = `You ${result}`;
    resultArea.style.display = "block";
    TimeoutIntervalId = setTimeout(() => {
        resultArea.style.display = "none";
        resultArea.className = "";
    }, 10000);
}

// add eventListeners :
rockBtn.addEventListener("click", () => {
    playGame("Rock");
});
paperBtn.addEventListener("click", () => {
    playGame("Paper");
});
scissorBtn.addEventListener("click", () => {
    playGame("Scissor");
});
resetBtn.addEventListener("click", () => {
    resetResult();
});