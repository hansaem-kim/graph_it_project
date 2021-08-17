
class Graph {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.startPos = [];
        this.endPos = [];
        this.posX = 0;
        this.posY = 0;
        this.startY = 0;
        this.endY = 0;
        this.drawAxis();
        this.drawGrid();
    }

    drawAxis(){
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

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
    };

    drawGrid(){
        let horizontalSpacing = this.dimensions.height / 12;
        let verticalSpacing = this.dimensions.width / 16;
        let horizontalMid = this.dimensions.height /2;
        let verticalMid = this.dimensions.width /2;

        this.ctx.strokeStyle = "grey";
        this.ctx.lineWidth = 0.5;

        for (let i = -8; i<= 8; i++){
            //Drawing vertical grids
            this.ctx.beginPath();
            this.ctx.moveTo(verticalSpacing*i + verticalMid, 0);
            this.ctx.lineTo(verticalSpacing*i + verticalMid, this.dimensions.height);
            this.ctx.stroke();

            //Making horizontal labels
            this.ctx.fillText(i.toString(), verticalSpacing*i + verticalMid + 3, horizontalMid + 12);

        };
        
        for (let i = -6; i<=6; i++){
            //Drawing horizontal grids
            this.ctx.beginPath();
            this.ctx.moveTo(0, horizontalSpacing*i + horizontalMid);
            this.ctx.lineTo(this.dimensions.width, horizontalSpacing*i + horizontalMid);
            this.ctx.stroke();

            //Making vertical labels
            if (i!==0) this.ctx.fillText(-1*i.toString(), verticalMid + 5, horizontalSpacing*i + horizontalMid -3);
        };
    };

    //draws line given start and end positions.
    drawLine(start,end){
        this.ctx.strokeStyle = "rgb(128, 206, 214)";
        this.ctx.lineWidth = 5;

        //Converting canvas dimension to coordinate dimension
        this.startPos = [this.dimensions.width /2 + start[0]*50, this.dimensions.height /2 - start[1]*50];
        this.endPos = [this.dimensions.width /2 + end[0]*50, this.dimensions.height /2 - end[1]*50];

        this.ctx.beginPath();
        this.ctx.moveTo(this.startPos[0], this.startPos[1]);
        this.ctx.lineTo(this.endPos[0], this.endPos[1]);
        this.ctx.stroke();
    }

    //evaluate the given equation and draw line.
    evaluateFunction(){
        let equation = document.querySelector("#equation");

        let func = equation.value;
        const node = math.parse(func);
        const code = node.compile();
        this.startY = code.evaluate({x: -8});
        this.endY = code.evaluate({x: 8});
        this.drawLine([-8, this.startY],[8, this.endY]);
        this.posX = this.startPos[0];
        this.posY = this.startPos[1];

    }
}

export default Graph;