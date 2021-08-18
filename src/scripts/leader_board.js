
class LeaderBoard{
    constructor(){
        this.scores = [];
    }

    updateBoard(score){
        this.scores.push(score);
        const leaderBoardDiv = document.querySelector(".leader-board-div");
        const name = document.querySelector("#playername").value;
        let tag = document.createElement("p");
        let text = document.createTextNode(`${name}:  ${score} pts`);
        tag.appendChild(text);
        leaderBoardDiv.appendChild(tag);
    }

    sortBoard(){

    }


}

export default LeaderBoard;