
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
}

export default Car;