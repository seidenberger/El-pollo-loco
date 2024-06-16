class Character extends MovableObject{
    x = 50;
    y = 190;

    height = 240;
    width = 120;
    Images_Walkin_Pepe = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    // currentImage = 0;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        this.loadImages(this.Images_Walkin_Pepe);

        this.animate();

    }

    animate() {
        setInterval(() =>{
        let i = this.currentImage % this.Images_Walkin_Pepe.length;
        let path = this.Images_Walkin_Pepe[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 150);
    }

    jump() {

    }
}