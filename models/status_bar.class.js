class Statusbar extends DrawabelObject {

    x = 20;
    y = 20;
    height = 40;
    width = 90;
    // spacing = 20;

    // Images_Statusbar_coin = [
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
    //     'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',

    // ];

    Images_Statusbar_health = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',

    ];

    // Images_Statusbar_bottle = [
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
    //     'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',

    // ];

    // Images_Statusbar_Endboss = [
    //     'img/7_statusbars/2_statusbar_endboss/health/green0.png',
    //     'img/7_statusbars/2_statusbar_endboss/health/green20.png',
    //     'img/7_statusbars/2_statusbar_endboss/health/green40.png',
    //     'img/7_statusbars/2_statusbar_endboss/health/green60.png',
    //     'img/7_statusbars/2_statusbar_endboss/health/green80.png',
    //     'img/7_statusbars/2_statusbar_endboss/health/green100.png'
    // ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images_Statusbar_health);
        this.x = 10;
        this.y = 0;
        // this.loadImages(this.Images_Statusbar_bottle);
        // this.spacing = 20;
  
        this.height = 40;
        this.width = 200;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.Images_Statusbar_health[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        // console.log('Collision with Caracter', this.character.energy)
        

        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else  {
            return 0;
        }

    }
}