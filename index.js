
const buttonColors = ["green", "blue", "yellow", "red"];

let gamePattern = [];

let clickedPattern = [];

let level = 1;

document.addEventListener("keydown", gameStart);

for(var i = 0; i < document.querySelectorAll(".fa-solid").length; i++){
    document.querySelectorAll(".fa-solid")[i].addEventListener("click", function(){
    let chosenColor = this.getAttribute("id");
    buttonSound(chosenColor);
    opacityAnimation(chosenColor);
    clickedPattern.push(chosenColor);
    answerCheck();
    })
}

function answerCheck(){
    let answerArray = clickedPattern.toString();
    let gameArray = gamePattern.toString();
    if(clickedPattern.length === gamePattern.length && answerArray === gameArray){
        level++;
        setTimeout(nextSequence, 700);
        clickedPattern = [];
    }else if(clickedPattern.length === gamePattern.length && answerArray !== gameArray){
        document.querySelector("body").classList.add("wrong-answer");
        setTimeout(function(){document.querySelector("body").classList.remove("wrong-answer")}, 500);
        document.querySelector("h1").innerHTML= "Game Over!";
        setTimeout(function (){document.querySelector("h1").innerHTML= "Press Any Key to Restart";}, 1000);
        const gameOver = new Audio ("sounds/game-over.mp3");
        gameOver.play();
        gamePattern = [];
        clickedPattern = [];
        level = 1;
        document.addEventListener("keydown", gameStart);
    }
}

function gameStart(){
    clickedPattern = [];
    document.querySelector("h1").innerHTML = "Level 1";
    nextSequence();
    document.removeEventListener("keydown", gameStart);

}

function nextSequence(){ 
    document.querySelector("h1").innerHTML = "Level " + level;
    let randomNumber = Math.floor(Math.random()*4);
    let randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    buttonSound(randomColor);
    opacityAnimation(randomColor);
}


function opacityAnimation(color){
 
    let activeButton = document.querySelector("#" + color);
    activeButton.classList.add("opacity");
    setTimeout(function(){activeButton.classList.remove("opacity");}, 200);
}

function buttonSound (color){

    switch (color) {
        case "blue":
            const blueAudio = new Audio ("sounds/blue.mp3");
            blueAudio.play();
            break;
        case"red":
            const redAudio = new Audio ("sounds/red.mp3");
            redAudio.play();
            break;
        case "yellow":
            const yellowAudio = new Audio ("sounds/yellow.mp3");
            yellowAudio.play();
            break;
        case "green":
            const greenAudio = new Audio ("sounds/green.mp3");
            greenAudio.play();
            break;
        default:
            console.log(button);
            break;
    }
}