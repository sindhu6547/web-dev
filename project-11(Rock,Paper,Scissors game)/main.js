const rockBtn=document.getElementById("rockBtn");
const paperBtn=document.getElementById("paperBtn")
const scissorsBtn=document.getElementById("scissorsBtn");
const userClicked=document.getElementById("userClicked");
const computerClicked=document.getElementById("computerClicked")
const resetBtn = document.getElementById("resetBtn");
const result=document.getElementById("result")
const score = document.getElementById("score");
const arr=["Rock", "Paper", "Scissors"]
let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click",function(){
    const index=Math.floor(Math.random()*3)
    userClicked.textContent="You chose: Rock"
    computerClicked.textContent=`computer chose: ${arr[index]}`

    if(arr[index] === "Rock"){
        result.textContent="Draw"
        result.className = "draw"
    }
    else if(arr[index] === "Paper"){
        result.textContent="You Lose"
        result.className = "lose"
        computerScore++
    }
    else{
        result.textContent="You Win"
        result.className="win"
        userScore++
    }
score.innerHTML = `You: ${userScore} <br> Computer: ${computerScore}`;

})
paperBtn.addEventListener("click",function(){
    const index=Math.floor(Math.random()*3)
    userClicked.textContent="You chose: Paper"
    computerClicked.textContent=`computer chose: ${arr[index]}`

    if(arr[index] === "Paper"){
        result.textContent="Draw"
        result.className = "draw"
    }
    else if(arr[index] === "Scissors"){
        result.textContent="You Lose"
        result.className = "lose"
        computerScore++
    }
    else{
        result.textContent="You Win"
        result.className="win"
        userScore++
    }
score.innerHTML = `You: ${userScore} <br> Computer: ${computerScore}`;

})
scissorsBtn.addEventListener("click",function(){
    const index=Math.floor(Math.random()*3)
    userClicked.textContent="You chose: Scissors"
    computerClicked.textContent=`computer chose: ${arr[index]}`

    if(arr[index] === "Scissors"){
        result.textContent="Draw"
        result.className = "draw"
    }
    else if(arr[index] === "Rock"){
        result.textContent="You Lose"
        result.className = "lose"
        computerScore++
    }
    else{
        result.textContent="You Win"
        result.className="win"
        userScore++
    }
score.innerHTML = `You: ${userScore} <br> Computer: ${computerScore}`;
})
resetBtn.addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;

    userClicked.textContent = "";
    computerClicked.textContent = "";
    result.textContent = "";
    result.className = "";

    score.innerHTML = "You: 0 <br> Computer: 0";
});
