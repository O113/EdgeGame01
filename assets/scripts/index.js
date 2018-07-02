function preload () {

	this.load.image('arrow', 'assets/art/img/arrow.png'); 
	this.load.image('sky', 'assets/sky.png');
	this.load.image('courtyard', 'assets/courtyard3.png');
	this.load.image('ground','assets/art/tiles/stone_ground_tile.png');
	this.load.image('platform','assets/platform.png');
	this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 })
	this.load.spritesheet('dude2', 'assets/dude2.png', { frameWidth: 51.4, frameHeight: 64 })

	this.load.image('arc', 'assets/art/img/arc.png');
	this.load.image('particleWhiteCircle', 'assets/art/img/particleWhiteCircle.png'); 		
}

function create () {
	this.counter = 0;
	this.cursors = this.input.keyboard.createCursorKeys();

	//this.add.image(512,384,'sky').setScale(1); 
	this.add.image(512,384,'courtyard').setScale(1);
	
	var platforms = this.physics.add.staticGroup();
	particles = this.add.particles('particleWhiteCircle');
	
	createLevel(0, platforms); 

	createPlayer(this, platforms); 

	this.cameras.main.startFollow(this.player);
	this.arrows = [];
	console.log(this.cursors)
};

function update () {		
	this.counter++;

	if (this.cursors.space.isDown && this.player.canShoot) {
		var arrow = this.physics.add.image(this.player.x, this.player.y, 'arrow');
		arrow.setCollideWorldBounds(true);
		arrow.onColide = function(){
			console.log("collided");
		}
		arrow.body.setAllowGravity(false); 
		arrow.setVelocityX(800 * this.player.direction);
		this.player.canShoot = false;

		var arrowEmitter = particles.createEmitter({
			speed: 10, 
			scaleX: { start: 1, end: 0 },
			scaleY: { start: 0.1, end: 0 },
			gravity: false
		});

		arrowEmitter.startFollow(arrow);
		this.arrows.push(arrow)
		console.log(this.arrows)
	} else if (this.player.canShoot && this.arrows.length > 0){
		//this.arrows[0].parent.sprite.kill();
	}

	if(this.counter > 50) {
		this.player.canShoot = true; 
		this.counter = 0; 
	}

	checkPlayerMove(this, this.cursors);
}