class Coin extends MovableObject {

    y = 300;
    x = 300;
    
    height = 90;
    width = 90;

    Images_coin = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',        
    ];

    // coinPositions = [
    //     {x: 300, y: 290}
    // ]

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.Images_coin);
        // this.x = 250 + Math.random() *1000;


        this.animate();
        
    }



    animate() {
        setInterval(() => {
            this.playAnimation(this.Images_coin);
        }, 1000);
    }
    
}