import Graph from "./scripts/graph.js";
import Star from "./scripts/star.js";
import Car from "./scripts/car.js";
import Score from "./scripts/score.js";
import Time from "./scripts/time.js";
import TimeAttack from "./scripts/time_attack.js";
import LeaderBoard from "./scripts/leader_board.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.getElementById('canvas');
    const graph = new Graph(canvas);
    const star = new Star(canvas);
    const car = new Car();
    const score = new Score(canvas);
    const time = new Time();
    const timeAttack = new TimeAttack(canvas);
    const leaderBoard = new LeaderBoard();


    let starSound = new Audio("./src/sounds/coin.wav")

    let equation = document.querySelector("#equation");
    let reset = document.querySelector("#reset-btn");
    let create = document.querySelector("#create-btn");
    let regen = document.querySelector(".regen-star");
    let stopwatch = document.querySelector(".stopwatch-div");

    // regenerate stars to play new game.
    function regenerator(graph, score){
        star.resetStars(graph, score);
    }

    regen.onclick = function() {regenerator(graph,score)};


    //reset the graph when reset button is pressed.
    function resetGraph(graph, score){
        star.regenerateStars(graph, score);
    }

    reset.onclick = function() {resetGraph(graph, score)};


    //draw linear equation when create button is pressed.
    function drawGraph(){
        graph.evaluateFunction();
    }

    create.onclick = function() {drawGraph()};

    //star timer when stopwatch is pressed.
    function startTimer(){
        time.startTimer(timeAttack.askName);
    }

    //start timer only when timer is not currently on.
    stopwatch.onclick = function() {
        if (!time.timerOn) startTimer(timeAttack.askName);
    }


    //move car along the line.
    let carButton = document.querySelector("#car-img");
    
    carButton.addEventListener("click", ()=>{
        car.startCar();
        moveCar();
    });


    //car move animation.
    function moveCar(){
        if (graph.posX<800) requestAnimationFrame(moveCar);

        //resetting game board every frame.
        graph.ctx.clearRect(0,0, graph.dimensions.width, graph.dimensions.height);
        score.drawBoard();
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";
        star.regenerateStars(graph, score);
        graph.drawLine([-8, graph.startY],[8, graph.endY]);

        let dx = (graph.endPos[0] - graph.startPos[0]);
        let dy = (graph.endPos[1] - graph.startPos[1]);

        //car rotation logic
        let angle = car.getAngle(dx,dy);

        const carImg = document.getElementById("car-img");        

        graph.ctx.save();
        graph.ctx.translate(graph.posX, graph.posY);
        graph.ctx.rotate(angle);
        graph.ctx.translate(-carImg.width/2, -carImg.height/2);
        graph.ctx.drawImage(carImg, 0, 0, 60, 60);
        graph.ctx.restore();

        //car & star collision logic
        star.starPos.forEach((pos, index)=>{
            if (car.getDistance(graph.posX, graph.posY, pos[0]*50, pos[1]*50) <= 5.33){
                starSound.play();
                score.point += 10
                star.starPos.splice(index, 1);
                if (star.starPos.length === 0) {
                    alert("Great! You got all stars!");
                }
            }
        });
        
        //updating position for animation.
        graph.posX += dx/200;
        graph.posY += dy/200;
    };


    //creating instruction modal box
    const popup = document.querySelector("#popup");
    const instructionButton = document.querySelector(".instruction-btn");
    const closePopup = document.querySelector("#closePopup");
    const background = document.querySelectorAll("body > div:not(#popup)");
    
    instructionButton.onclick = function() {
        popup.classList.remove("invisible");
        popup.classList.add("visible-popup");
        background.forEach (ele=>{
            ele.classList.add("filter");
        });
        
    };

    closePopup.onclick = function() {
        popup.classList.add("invisible");
        popup.classList.remove("visible-popup");
        background.forEach (ele=>{
            ele.classList.remove("filter");
        });
    };

    const enterButton = document.querySelector("#enter-name-btn");

    function displayAskNameModal(){
        timeAttack.closeAskname();
    }

    enterButton.onclick = function() {displayAskNameModal()};

})

