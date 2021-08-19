
class Time{
    constructor(){
        this.timeLeft = 60;
        this.timer;
        this.timeOver = false;

    }
    resetTimer(){
        let timeCount = document.querySelector("#timer");
        this.timeLeft = 60;
        timeCount.innerHTML = `01:00`;
    }

    gameOver(askName){
        clearInterval(this.timer);
        this.timeLeft = 60;
        this.timeOver = true;
        askName();
    }

    startTimer(askName){
        // this.timerOn = true;
        let timeCount = document.querySelector("#timer");
        let that = this;
        this.timer = setInterval(function(){
            that.timeLeft -= 1;
            if (that.timeLeft >=10) {
                timeCount.innerHTML = `00:${that.timeLeft}`;
            } else if (that.timeLeft >= 0){
                timeCount.innerHTML = `00:0${that.timeLeft}`;
            } else {
                that.gameOver(askName);
            }
        }, 1000);
    }


}

export default Time;