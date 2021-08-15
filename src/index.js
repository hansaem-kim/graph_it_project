import Graph from "./scripts/graph.js";
import Star from "./scripts/star.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const canvas = document.getElementById('canvas');
    const graph = new Graph(canvas);
    const star = new Star(canvas);

})