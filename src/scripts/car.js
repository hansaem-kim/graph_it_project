
class Car {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.dimensions = {height: canvas.height, width: canvas.width};
        
    }

    startCar(){
        //make car button invisible
        document.getElementById("car-img").style.visibility = 'hidden';
    }

    getDistance(x1, y1, x2, y2){
        let dx = x2 - x1;
        let dy = y2 - y1;

        return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    }

    getAngle(dx,dy){
        return Math.atan(dy/dx);
    }

}

export default Car;