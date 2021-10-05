# Graph It
### Live Site: [Graph It](https://hansaem-kim.github.io/graph_it_project)
![Screenshot](/graph_it_screenshot.png)

## Background
As a math teacher, I found many students struggling with graphing linear equation. It is very unfortunate, because graphing linear equation is a must-have skill to comprehend not only Algebra 1 but any secondary school math courses. And that is why I decided to make a graphing game!

Graph It is an educational game designed to facilitate learning on graphing equations. It promotes engaging and positive learning experience where students can discover how graph works.

To win the game, a player must catch every star on the graph. A player can type in a linear equation to create lines on the graph. Once ready, press the car! The car will follow the line to catch stars on its way.

## Functionality
* Given a linear equation, it graphs the line on a 2D cartesian coordinate system.
* Player can type in any linear equation in slope-intercept form.
* Reset button resets the equations and lines on the screen.
* Instruction button displays how to play the game.
* Pressing the car image starts the car to follow the line on the screen.
* Time attack mode starts a 1 minute timer. Try to collect as many stars as you can within a minute!
* Leader-board updates everytime a player completes a time attack mode.

## Wireframes
![graph it wireframe](/graph_it_wireframe.png)

## Technologies
*	JavaScript for the game logic.
*	Canvas for graphics and animation.
*	Webpack for module bundler.

## Code Snippets
```javascript
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
```

```javascript
    generateStars(){
        const img = document.getElementById("star-img")
        this.starPos = [[Math.floor(Math.random()*3+1), Math.floor(Math.random()*4)+3], [Math.floor(Math.random()*3)+4, Math.floor(Math.random()*4)+3]];

        //setting dx and dy to place stars in linear position.
        const dx = this.starPos[1][0] - this.starPos[0][0];
        const dy = this.starPos[1][1] - this.starPos[0][1];

        //generate positions of three stars and ensure they are positioned within the graph.
        while (this.starPos.length < 3){
            if (this.starPos[this.starPos.length-1][0] > 15 || 
                this.starPos[this.starPos.length-1][1] < 0 || 
                this.starPos[this.starPos.length-1][1] > 11) {
                    this.starPos.pop();
                    break;
            }
            this.starPos.push([this.starPos[this.starPos.length-1][0] + dx, this.starPos[this.starPos.length-1][1] + dy]);
            
        }

        //draw stars on linear positions.
        this.starPos.forEach(pos => {
            this.ctx.drawImage(img, pos[0]*50 -10, pos[1]*50 -10, 20, 20);
        })
    }
```

## Implementation Timeline
###	Friday 
* Review Canvas. 
* Research and come up with basic outlines to start the project organized.
###	Weekend
* Build logics to take an input from user and render its graphs on the screen.
###	Monday
* Create “instruction”, “create”, and “reset” buttons.
###	Tuesday
* Build logics for car movements and star generation.
###	Wednesday
* Finish styling. Add nav links.

## Bonus Features
*	Implement more types of function such as logarithmic, quadratic, and exponential function.
*	Create level mode.
*	Deduct points for incorrect answer.
*	Create a 'Hint' button that shows how to find the slope and y-intercept in each case.
