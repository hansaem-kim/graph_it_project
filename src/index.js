import Graph from "./scripts/graph.js";
import Star from "./scripts/star.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.getElementById('canvas');
    const graph = new Graph(canvas);
    const star = new Star(canvas);
    
    let equation = document.querySelector("#equation");
    let reset = document.querySelector("#reset-btn");

    //only clear graphs not stars.
    reset.addEventListener("click", ()=>{
        graph.ctx.clearRect(0,0, graph.dimensions.width, graph.dimensions.height);
        graph.drawAxis();
        graph.drawGrid();
        equation.value = "";
        star.regenerateStars();
    });

})