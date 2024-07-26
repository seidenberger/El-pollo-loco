class ChickenSmall extends MovableObject{
    y = 360;

    height = 60;
    width = 50;

    Images_chicken_small = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'        
    ];

    Images_chicken_small_dead = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    offset = {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      }

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.Images_chicken_small);
        this.loadImages(this.Images_chicken_small_dead);
        this.x = 300 + Math.random() * 700;
        // this.x = 100
        this.speed = 0.07 + Math.random() * 0.5;
        this.animate();
        
    }

    animate() {

            setInterval(() => {
                this.moveLeft();   
                   
            }, 1000 / 60);
            // chicken_sound.play();      
        setInterval(() =>{
            this.playAnimation(this.Images_chicken_small)
        }, 250);

        
    }



    chickenSmallDead() {
            
        this.playAnimation(this.Images_chicken_small_dead);

    }
    
    



}