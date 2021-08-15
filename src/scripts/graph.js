
class Graph {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.drawAxis();
        this.drawGrid();
    }

    drawAxis(){
        this.ctx.strokeStyle = "black";

        //Drawing Vertical Axis
        this.ctx.beginPath();
        this.ctx.moveTo(this.dimensions.width/2, 0);
        this.ctx.lineTo(this.dimensions.width/2, this.dimensions.height);
        this.ctx.stroke();

        //Drawing Horizontal Axis
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.dimensions.height/2);
        this.ctx.lineTo(this.dimensions.width, this.dimensions.height/2);
        this.ctx.stroke();
    }

    drawGrid(){
        let horizontalSpacing = this.dimensions.height / 6;
        let verticalSpacing = this.dimensions.width / 8;
        let horizontalMid = this.dimensions.height /2;
        let verticalMid = this.dimensions.width /2;

        this.ctx.strokeStyle = "grey";
        this.ctx.lineWidth = 0.5;

        for (let i = -4; i<= 4; i++){
            //Drawing vertical grids
            this.ctx.beginPath();
            this.ctx.moveTo(verticalSpacing*i + verticalMid, 0);
            this.ctx.lineTo(verticalSpacing*i + verticalMid, this.dimensions.height);
            this.ctx.stroke();

            //Making horizontal labels
            this.ctx.fillText(i.toString(), verticalSpacing*i + verticalMid + 3, horizontalMid + 12);

        }
        
        for (let i = -3; i<=3; i++){
            //Drawing horizontal grids
            this.ctx.beginPath();
            this.ctx.moveTo(0, horizontalSpacing*i + horizontalMid);
            this.ctx.lineTo(this.dimensions.width, horizontalSpacing*i + horizontalMid);
            this.ctx.stroke();

            //Making vertical labels
            if (i!==0) this.ctx.fillText(-1*i.toString(), verticalMid + 5, horizontalSpacing*i + horizontalMid -3);
        }
    }

}



export default Graph;