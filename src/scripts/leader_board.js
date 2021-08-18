
class LeaderBoard{
    constructor(){
        this.scores = [];
    }

    updateBoard(score){
        const scoreDiv = document.querySelector(".score-div");

        while (scoreDiv.firstChild){
            scoreDiv.removeChild(scoreDiv.lastChild);
        }

        const name = document.querySelector("#playername").value;

        this.scores.push({name: `${name}`, score: `${score}`});

        function compare(a,b) {return b.score - a.score};
        this.scores.sort(compare);

        this.scores.forEach(ele => {
            let tag = document.createElement("p");
            let text = document.createTextNode(`${ele.name}:  ${ele.score} pts`);
            tag.appendChild(text);
            scoreDiv.appendChild(tag);
        });
    }


}

export default LeaderBoard;