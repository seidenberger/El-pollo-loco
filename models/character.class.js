class Character extends MovableObject{
    // x = 50;
    // y = 190;
    y = 130;

    height = 240;
    width = 120;
    speed = 5;

    Images_Walkin_Pepe = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    Images_Jamping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
        
    ];
    

    world;
    walking_sound = new Audio('audio/walking.mp3');

    constructor(){
        super().loadImage(this.Images_Walkin_Pepe[0]);
        this.loadImages(this.Images_Walkin_Pepe);
        this.loadImages(this.Images_Jamping);
        this.applayGravitty();
        this.animate();

    }

    animate() {

        setInterval(() => {
            // console.log('Aktuelle Position y:', this.y);
            // console.log('Aktuelle Position x:', this.x);
            // console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);
            this.walking_sound.pause();
            if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.A  && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();   
                this.otherDirection = true;                
         
            }

            // console.log('this.speedY', this.speedY)

            if(this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
                // this.playAnimation(this.Images_Jamping);
            }
            this.world.camera_x = -this.x +150;
        }, 100 / 60);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.Images_Jamping);
                // debugger
            } else {

                // if (this.world.keyboard.D || this.world.keyboard.A) {
                if (this.world.keyboard.D) {
                    this.playAnimation(this.Images_Walkin_Pepe);

                }
            }
        },60);
            
    }

    jump() {
        this.speedY = 30;
    }
}


// console.log('Aktuelle Position x:', this.x);
// console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);

// if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
//     // Bewegungscode hier
// } else {
//     console.log('Bewegung gestoppt. x ist größer oder gleich level_end_x.');
// }