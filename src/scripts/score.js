
class Score{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.point = 0;
    }

    drawBoard(){
        this.ctx.save();
        this.ctx.font = "bold 16px Courier New";
        this.ctx.fillStyle = "#014127";
        this.ctx.fillText("Score: " + this.point, 680, 30);
        this.ctx.restore();
    }

}

export default Score;