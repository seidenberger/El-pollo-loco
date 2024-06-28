class Cloud extends MovableObject{
    y = 50;
    height = 180;
    width = 500;


    constructor(imagePath, x){

        super().loadImage(imagePath);

        this.x = 200 + Math.random() * 2500;
        this.speed = 0.15 + Math.random() * 1.35;

        this.animate();

    }
    animate() {


        setInterval(() => {
            // this.moveLeft();
            this.x -= 0.5;
        
        }, 1000 / 60);

        // warum war die funktion so drin und hat nicht mehr funktioniert
        // this.moveLeft();
    }


}






