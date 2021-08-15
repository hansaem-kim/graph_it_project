
class Star {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.generateStars();
    }

    generateStars(){
        const img = document.getElementById("star-img")
        // this.ctx.drawImage(img, 90, 90, 20, 20)
        let starPos = [[Math.floor(Math.random()*4), Math.floor(Math.random()*3)], [Math.floor(Math.random()*4)+4, Math.floor(Math.random()*3)+3]];
        const dx = starPos[1][0] - starPos[0][0];
        const dy = starPos[1][1] - starPos[0][1];

        while (starPos.length < 5){
            starPos.push([starPos[starPos.length-1][0] + dx, starPos[starPos.length-1][1] + dy]);
        }

        starPos.forEach(pos => {
            this.ctx.drawImage(img, pos[0]*50 -10, pos[1]*50 -10, 20, 20)
        })

    }
}

export default Star;