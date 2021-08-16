import Graph from "./scripts/graph.js";
import Star from "./scripts/star.js";
import Car from "./scripts/car.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.getElementById('canvas');
    const graph = new Graph(canvas);
    const star = new Star(canvas);
    const car = new Car(canvas);

    let starSound = new Audio("./src/sounds/coin.wav")
    let x = 0;
    let y = 0;
    let startY = 0;
    let endY = 0;
    
    let equation = document.querySelector("#equation");
    let reset = document.querySelector("#reset-btn");
    let create = document.querySelector("#create-btn");

    //only clear graphs not stars.
    reset.addEventListener("click", ()=>{
        graph.ctx.clearRect(0,0, graph.dimensions.width, graph.dimensions.height);
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";
        star.regenerateStars();
    });

    //drawing line on the graph.
    create.addEventListener("click", ()=>{
        let func = equation.value;
        const node = math.parse(func);
        const code = node.compile();
        startY = code.evaluate({x: -8});
        endY = code.evaluate({x: 8});
        graph.drawLine([-8, startY],[8,endY]);
        x = graph.startPos[0];
        y = graph.startPos[1];
    });

    //move car along the line.
    let carButton = document.querySelector("#car-img");
    carButton.addEventListener("click", ()=>{

        car.startCar();
        moveCar();
    });

    //car move animation.
    function moveCar(){
        if (x<800) requestAnimationFrame(moveCar);

        car.ctx.clearRect(0,0, car.dimensions.width, car.dimensions.height);
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";
        star.regenerateStars();
        graph.drawLine([-8, startY],[8,endY]);

        const carImg = document.getElementById("car-img");
        car.ctx.drawImage(carImg, x, y-30, 60, 60);

        star.starPos.forEach((pos,index)=>{
            if (car.getDistance(x,y,pos[0]*50,pos[1]*50) <= 5.33){
                starSound.play();
                star.starPos.splice(index, 1);
                if (star.starPos.length === 0) {
                    alert("Great! You got all stars!");
                }
            }
        });
        
        let dx = (graph.endPos[0] - graph.startPos[0])/170;
        let dy = (graph.endPos[1] - graph.startPos[1])/170;

        x += dx;
        y += dy;
    };

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

})

