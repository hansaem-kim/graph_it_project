
class Time{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.timeLeft = 60;

    }

    gameTimer(){
        let timeCount = document.querySelector("");
        this.timeLeft = -1;
        while (this.timeLeft >= 0) {

        }
    }


}

export default Time;