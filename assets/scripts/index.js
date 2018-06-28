var game,
player,
cursors,
arrow,
particle,
counter = 0, 
playerDirection = 1,
canShoot = true,
i = 0;   

function preload () {

	this.load.image('arrow', 'assets/art/img/arrow.png'); 
	this.load.image('sky', 'assets/sky.png');
	this.load.image('ground','assets/art/tiles/stone_ground_tile.png');
	this.load.image('platform','assets/platform.png');
	this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

	this.load.image('arc', 'assets/art/img/arc.png');
	this.load.image('particleWhiteCircle', 'assets/art/img/particleWhiteCircle.png'); 		
}

function create () {		
	cursors = this.input.keyboard.createCursorKeys();

	this.add.image(512,384,'sky').setScale(2);

	platforms = this.physics.add.staticGroup();
	particles = this.add.particles('particleWhiteCircle');
	
	createLevel1(); 

	player = this.physics.add.sprite(100, 450, 'dude');

	createPlayer(this); 
	player.setCollideWorldBounds(true);

	var arrowEmitter = particles.createEmitter({
		speed: 10, 
		scaleX: { start: 1, end: 0 },
		scaleY: { start: 0.1, end: 0 },
		gravity: false
	});

	this.cameras.main.startFollow(player);
};

function update () {		
	counter += 1;    
	if (game.input.activePointer.isDown && canShoot) {
		arrow = this.physics.add.image(player.x, player.y, 'arrow');
		arrow.setCollideWorldBounds(true);
		arrow.body.setAllowGravity(false); 
		arrow.setVelocityX(800 * playerDirection);
		canShoot = false;

		var arrowEmitter = particles.createEmitter({
			speed: 10, 
			scaleX: { start: 1, end: 0 },
			scaleY: { start: 0.1, end: 0 },
			gravity: false
		});

		arrowEmitter.startFollow(arrow);
	}

	if(counter > 100) {
		canShoot = true; 
		counter = 0; 
	}

	if (cursors.left.isDown) {
		player.setVelocityX(-160);
		player.anims.play('left', true);
		playerDirection = -1; 
	} else if (cursors.right.isDown) {
		player.setVelocityX(160);
		player.anims.play('right', true);
		playerDirection = 1; 
	} else {
		player.setVelocityX(0);
		player.anims.play('turn');
	}
	if (cursors.up.isDown && player.body.touching.down) {
		player.setVelocityY(-200);
	}
}