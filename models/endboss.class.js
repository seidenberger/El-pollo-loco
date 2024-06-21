class Endboss extends MovableObject{

    y = 190;
    height = 240;
    width = 120;

    Images_endboss_walk =[
        'img/4_enemie_boss_chicken/2_alert/G1.png',
        'img/4_enemie_boss_chicken/2_alert/G2.png',
        'img/4_enemie_boss_chicken/2_alert/G3.png',
        'img/4_enemie_boss_chicken/2_alert/G4.png',
    ];

    Images_endboss_alert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    Images_endboss_attack = [
        'img/4_enemie_boss_chicken/2_alert/G13.png',
        'img/4_enemie_boss_chicken/2_alert/G14.png',
        'img/4_enemie_boss_chicken/2_alert/G15.png',
        'img/4_enemie_boss_chicken/2_alert/G16.png',
        'img/4_enemie_boss_chicken/2_alert/G17.png',
        'img/4_enemie_boss_chicken/2_alert/G18.png',
        'img/4_enemie_boss_chicken/2_alert/G19.png',
        'img/4_enemie_boss_chicken/2_alert/G20.png'
    ];

    Images_endboss_hurt = [
        'img/4_enemie_boss_chicken/2_alert/G21.png',
        'img/4_enemie_boss_chicken/2_alert/G22.png',
        'img/4_enemie_boss_chicken/2_alert/G23.png'
    ];

    Images_endboss_dead = [
        'img/4_enemie_boss_chicken/2_alert/G24.png',
        'img/4_enemie_boss_chicken/2_alert/G25.png',
        'img/4_enemie_boss_chicken/2_alert/G26.png'
    ];


    constructor() {
        super().loadImage(this.Images_endboss_walk[0]);

        this.loadImages(this.Images_endboss_walk);

        this.x = 700;
        this.animate();
        // this.playAnimation(this.Images_endboss_walk);
    }

    animate() {


            this.moveLeft();
            setInterval(() =>{
                this.playAnimation(this.Images_endboss_walk)
            }, 250);
        }
    }
