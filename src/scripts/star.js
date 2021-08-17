import Graph from "./graph.js"
import Car from "./graph.js"
import Score from "./score.js";

class Star {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.starPos = [];
        this.generateStars();
    }

    generateStars(){
        const img = document.getElementById("star-img")
        this.starPos = [[Math.floor(Math.random()*3+1), Math.floor(Math.random()*4)+3], [Math.floor(Math.random()*3)+4, Math.floor(Math.random()*4)+3]];

        //setting dx and dy to place stars in linear position.
        const dx = this.starPos[1][0] - this.starPos[0][0];
        const dy = this.starPos[1][1] - this.starPos[0][1];

        while (this.starPos.length < 3){
            if (this.starPos[this.starPos.length-1][0] > 15 || this.starPos[this.starPos.length-1][1] < 0 || this.starPos[this.starPos.length-1][1] > 11) {
                this.starPos.pop();
                break;
            } 
            this.starPos.push([this.starPos[this.starPos.length-1][0] + dx, this.starPos[this.starPos.length-1][1] + dy]);
            
        }

        this.starPos.forEach(pos => {
            this.ctx.drawImage(img, pos[0]*50 -10, pos[1]*50 -10, 20, 20);
        })
    }

    //regenerate stars on same position after clear graph.
    regenerateStars(graph, score){
        const img = document.getElementById("star-img");
        let equation = document.querySelector("#equation");

        graph.ctx.clearRect(0,0, graph.dimensions.width, graph.dimensions.height);
        score.drawBoard();
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";

        this.starPos.forEach(pos => {
            this.ctx.drawImage(img, pos[0]*50 -10, pos[1]*50 -10, 20, 20);
        });
    }

    //resets entire game
    resetStars(graph, score){
        let equation = document.querySelector("#equation");

        this.ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
        score.drawBoard();
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";
        this.generateStars();
        document.getElementById("car-img").style.visibility = 'visible';
    }
}

export default Star;