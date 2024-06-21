class Cloud extends MovableObject{
    y = 50;
    height = 180;
    width = 500;


    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = 0 + Math.random() * 500;
        this.speed = 0.05 + Math.random() * 0.35;
        this.animate();

    }
    animate() {
        this.moveLeft();
    }


}






