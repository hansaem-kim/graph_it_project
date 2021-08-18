
class Time{
    constructor(){
        this.timeLeft = 60;
        this.timer;

    }

    gameTimer(){
        let timeCount = document.querySelector("#timer");
        this.timeLeft = -1;
        while (this.timeLeft >= 0) {
            timeCount.innerHTML(this.timeLeft);
        }
    }

    startTimer(){
        timer = setInterval(this.gameTimer, 1000);
        this.gameTimer();
    }


}

export default Time;