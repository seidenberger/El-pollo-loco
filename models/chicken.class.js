class Chicken extends MovableObject{
    y = 360;

    height = 60;
    width = 50;
    Images_chicken_normal = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];



    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.Images_chicken_normal);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.08 + Math.random() * 1.35;
        this.animate();
        
    }

    animate() {
        {
            setInterval(() => {
                this.moveLeft();

            
            }, 1000 / 60);
        
        setInterval(() =>{
            this.playAnimation(this.Images_chicken_normal)
        }, 250);
    }
    

}
}