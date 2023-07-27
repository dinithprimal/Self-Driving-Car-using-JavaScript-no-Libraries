class Sensor{
    constructor(car){
        this.car = car;
        this.reyCount = 3;
        this.reyLength = 100;
        this.raySpeed = Math.PI/4;

        this.rays = [];
    }

    update(){
        this.rays = [];
        for(let i=0;i<this.rayCount;i++){
            const rayAngle = lerp()
        }
    }
}