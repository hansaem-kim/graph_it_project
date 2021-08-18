
class LeaderBoard{
    constructor(){

    }

    updateBoard(score){
        const leaderBoardDiv = document.querySelector(".leader-board-div");
        const name = document.querySelector("#playername").value;
        let tag = document.createElement("p");
        let text = document.createTextNode(`${name}:  ${score}`);
        tag.appendChild(text);
        leaderBoardDiv.appendChild(tag);
    }


}

export default LeaderBoard;