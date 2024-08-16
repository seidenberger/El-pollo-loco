// let level1;  
// function initLevel(){



// level1 = new Level(

const level1 = new Level(
    [
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new ChickenSmall(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Endboss()
 
    ],
    [
        new Cloud('img/5_background/layers/4_clouds/1.png', 0, 0),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720, 50),
        new Cloud('img/5_background/layers/4_clouds/1.png',1200, 20),
        new Cloud('img/5_background/layers/4_clouds/2.png',1700, 50),
        new Cloud('img/5_background/layers/4_clouds/1.png',2300, 10),
        new Cloud('img/5_background/layers/4_clouds/2.png',2800, 30),
        new Cloud('img/5_background/layers/4_clouds/1.png',3300, 20),
        new Cloud('img/5_background/layers/4_clouds/2.png',4000, 30),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),

        new BackgroundObject('img/5_background/layers/air.png', 719*4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),

        new BackgroundObject('img/5_background/layers/air.png', 719*5),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5)
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
    [
        new Coin(300, 300),
        new Coin(600, 300),
        new Coin(1300, 300),
        new Coin(1360, 240),
        new Coin(1420, 180),
        new Coin(1480, 240),
        new Coin(1540, 300),
        new Coin(1840, 300),
        new Coin(2040, 300),
        new Coin(2540, 300)

    ],
    [
    //    new StatusbarEndboss(), 
    ]

); 

// }
