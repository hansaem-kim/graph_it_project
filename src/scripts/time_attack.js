
class TimeAttack {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        this.timeAttackMode = false;
    }

    askName(){
        const playerNameDiv = document.querySelector("#playername-div");
        const background = document.querySelectorAll("body > div:not(#playername-div)");
    
        playerNameDiv.classList.remove("invisible");
        playerNameDiv.classList.add("visible-playername-div");
        background.forEach (ele=>{
            ele.classList.add("filter");
        });
    }

    closeAskname() {
        const playerNameDiv = document.querySelector("#playername-div");
        const background = document.querySelectorAll("body > div:not(#playername-div)");

        playerNameDiv.classList.add("invisible");
        playerNameDiv.classList.remove("visible-playername-div");
        background.forEach (ele=>{
            ele.classList.remove("filter");
        });
    }


    

}

export default TimeAttack;