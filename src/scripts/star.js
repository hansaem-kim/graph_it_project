import Graph from "./graph.js"

class Star {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.generateStars();
        this.regenerateStars();
    }

    generateStars(){
        const img = document.getElementById("star-img")
        let starPos = [[Math.floor(Math.random()*4), Math.floor(Math.random()*6)+3], [Math.floor(Math.random()*4)+4, Math.floor(Math.random()*6)+3]];

        //setting dx and dy to place stars in linear position.
        const dx = starPos[1][0] - starPos[0][0];
        const dy = starPos[1][1] - starPos[0][1];

        while (starPos.length < 5){
            starPos.push([starPos[starPos.length-1][0] + dx, starPos[starPos.length-1][1] + dy]);
        }

        starPos.forEach(pos => {
            this.ctx.drawImage(img, pos[0]*50 -10, pos[1]*50 -10, 20, 20);
        })
    }

    regenerateStars(){
        let reset = document.querySelector(".regen-star");
        let equation = document.querySelector("#equation");

        reset.addEventListener("click", ()=>{
            this.ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);
            const graph = new Graph(this.canvas);
            graph.drawAxis();
            graph.drawGrid();
            equation.value = "";
            this.generateStars();

        })
    }

}

export default Star;