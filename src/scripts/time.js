
class Time{
    constructor(){
        this.timeLeft = 60;
        this.timer;

    }

    gameOver(){
        clearInterval(this.timer);
        console.log("time-up");
        this.timeLeft = 60;
    }

    startTimer(){
        console.log("hello timer")
        let timeCount = document.querySelector("#timer");
        let that = this;
        this.timer = setInterval(function(){
            that.timeLeft -= 1;
            if (that.timeLeft >=10) {
                timeCount.innerHTML = `00:${that.timeLeft}`;
            } else if (that.timeLeft >= 0){
                timeCount.innerHTML = `00:0${that.timeLeft}`;
            } else {
                that.gameOver();
            }
        }, 100);
    }


}

export default Time;