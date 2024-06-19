class Character extends MovableObject{
    // x = 50;
    y = 190;

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

    world;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        this.loadImages(this.Images_Walkin_Pepe);

        this.animate();

    }

    animate() {

        setInterval(() => {
            console.log('Aktuelle Position y:', this.y);
            console.log('Aktuelle Position x:', this.x);
            console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);
            if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
                // debugger
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.A  && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x +150;
        }, 100 / 60);
        setInterval(() => {

            if (this.world.keyboard.D || this.world.keyboard.A) {
                this.x += this.speed;

                let i = this.currentImage % this.Images_Walkin_Pepe.length;
                let path = this.Images_Walkin_Pepe[i];
                this.img = this.imageCache[path];
                this.currentImage++;

            }
        }, 60);
            
    }

    jump() {

    }
}


// console.log('Aktuelle Position x:', this.x);
// console.log('Ende des Levels level_end_x:', this.world.level.level_end_x);

// if (this.world.keyboard.D && this.x < this.world.level.level_end_x) {
//     // Bewegungscode hier
// } else {
//     console.log('Bewegung gestoppt. x ist größer oder gleich level_end_x.');
// }