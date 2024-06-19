class Cloud extends MovableObject{
    y = 50;
    height = 180;
    width = 500;


    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = 0 + Math.random() * 500;
        this.speed = 8 + Math.random() * 5;
        this.animate();

    }
    animate() {
        this.moveLeft();
    }


}






