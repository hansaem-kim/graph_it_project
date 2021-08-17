
class Time{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
    }


}

export default Time;