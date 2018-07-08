function preload () {

	this.load.image('arrow', 'assets/art/img/arrow.png'); 
	this.load.image('courtyard', 'assets/art/courtyard3.png');
	this.load.image('ground','assets/art/tiles/stone_ground_tile.png');
	this.load.image('platform','assets/art/platform.png');
	this.load.spritesheet('runningDude', 'assets/art/sprites/runningDude.png', { frameWidth: 445, frameHeight: 373 });

	this.load.image('arc', 'assets/art/img/arc.png');
	this.load.image('particleWhiteCircle', 'assets/art/img/particleWhiteCircle.png'); 	
	
	this.load.spritesheet('manaBottle', 'assets/art/manaBottle.png', {frameWidth: 100, frameHeight: 190 });
	this.load.image('hearts', 'assets/hearts.png');
}

function create () {
	this.counter = 0;
	this.cursors = this.input.keyboard.createCursorKeys();

	this.add.image(512,384,'courtyard').setScale(1);
	
	var platforms = this.physics.add.staticGroup();
	particles = this.add.particles('particleWhiteCircle');
	
	this.flask = this.physics.add.sprite(100, 450, 'manaBottle');
	this.flask.body.setAllowGravity(false); 

	// lägg till hearts som med flask
	
	createLevel(0, platforms); 

	createPlayer(this, platforms); 

	this.cameras.main.startFollow(this.player);
	this.arrows = [];
	console.log(this.cursors);
}

var arrowCharge = 0;

function update () {	
	this.counter++;
	this.flask = this.physics.add.sprite(this.player.x-400,this.player.y-260, 'manaBottle').setScale(0.4);
	//hearts som med flask
	if(arrowCharge > 10 && !this.cursors.space.isDown){
		var arrow = this.physics.add.image(this.player.x+5, this.player.y-5, 'arrow');
		arrow.setCollideWorldBounds(true);
		arrow.onColide = function(){
			console.log("collided");
		}
		arrow.body.setAllowGravity(false);
		if(arrowCharge > 50){
			arrowCharge = 800;
		} else {
			arrowCharge *= 16;
		}
		arrow.setVelocityX(arrowCharge * this.player.direction);

		arrowCharge = 0;

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

	} else if (this.cursors.space.isDown && this.player.canShoot) {
		arrowCharge++;		
	} else if (this.player.canShoot && this.arrows.length > 0){
		//this.arrows[0].parent.sprite.kill();
	}

	if(this.counter > 50) {
		this.player.canShoot = true;
		this.counter = 0;
	}

	checkPlayerMove(this, this.cursors);
}