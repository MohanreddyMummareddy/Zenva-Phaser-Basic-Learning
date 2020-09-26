// Create a new scene

let gameScene = new Phaser.Scene('Game');

// Load Assets

gameScene.preload = function() {
    //Load Images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
};

//  called once after the preload ends

gameScene.create = function() {
    // Create Bg Sprite
    let bg = this.add.sprite(0, 0, 'background');

    // Change Origin
    // bg.setOrigin(0, 0);

    // Get Width And Height

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    // By Changing Position 
    bg.setPosition(gameW / 2, gameH / 2);

    // Create Bg Sprite
    this.player = this.add.sprite(0, 0, 'player');
    this.player.x = 50;
    this.player.y = 180;

    this.player.setScale(1);

    this.enemy1 = this.add.sprite(0, 0, 'enemy');
    this.enemy1.x = 200;
    this.enemy1.y = 200;

    this.enemy1.setScale(1);

    //rotate enemy1
    // this.enemy1.angle = 45;
    // this.enemy1.setAngle(-45);
    // this.enemy1.rotation = Math.PI / 4;
    this.enemy1.setRotation(-Math.PI / 4);


    let enemy2 = this.add.sprite(0, 0, 'enemy');
    enemy2.x = 400;
    enemy2.y = 200;

    enemy2.setScale(0.5);

    //flip enemy2
    enemy2.flipX = true;
    // enemy2.flipY = true;

};

gameScene.update = function() {
    // this.enemy1.x += 0.1;
    this.enemy1.angle += 1;

    if (this.player.scaleX < 2) {
        this.player.scaleX += 0.01;
        this.player.scaleY += 0.01;
    }
}

// set the configuration of the game

let config = {
    type: Phaser.AUTO, // Webgl if available or it will use Canvas
    width: 640,
    height: 360,
    scene: gameScene
}

// create a new game, pass the configuration

let game = new Phaser.Game(config);