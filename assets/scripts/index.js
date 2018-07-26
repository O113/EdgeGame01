
function preload () {

	this.load.image('arrow', 'assets/art/img/arrow.png'); 
	this.load.image('courtyard', 'assets/art/courtyard3.png');
	this.load.image('ground','assets/art/tiles/stone_ground_tile.png');
	this.load.image('platform','assets/art/platform.png');
	this.load.spritesheet('runningDude', 'assets/art/sprites/runningDude2.png', { frameWidth: 67, frameHeight: 44 });

	this.load.image('arc', 'assets/art/img/arc.png');
	this.load.image('particleWhiteCircle', 'assets/art/img/particleWhiteCircle.png'); 	
	
	this.load.spritesheet('manaBottle', 'assets/art/manaBottle.png', {frameWidth: 100, frameHeight: 190 });
	this.load.image('hearts', 'assets/hearts.png');

	this.load.image('uiBackground', 'assets/art/uiBackground.png')
	this.load.image('uiFace', 'assets/art/uiFace.png'); 
	this.load.image('healthBar', 'assets/art/healthBar.png');
	this.load.image('manaBar', 'assets/art/manaBar.png');
	this.load.image('staminaBar', 'assets/art/staminaBar.png');

	this.load.spritesheet('enemySkull', 'assets/art/sprites/enemySkull.png', {frameWidth: 197, frameHeight: 153}); 
}

function create () {
	this.counter = 0;
	this.cursors = this.input.keyboard.createCursorKeys();

	this.add.image(512,384,'courtyard').setScale(1);
	
	var platforms = this.physics.add.staticGroup();

	particles = this.add.particles('particleWhiteCircle');

	createLevel(0, platforms); 

	this.uiBackground = this.add.image(0, 475, 'uiBackground');
	this.uiFace = this.add.image(0, 475, 'uiFace'); 
	this.healthBar = this.add.image(150, 450, 'healthBar'); 
	this.staminaBar = this.add.image(150, 475, 'staminaBar'); 
	this.manaBar = this.add.image(150, 500, 'manaBar'); 

	createPlayer(this, platforms); 

	this.cameras.main.startFollow(this.player);
	this.arrows = [];

	createEnemy(this, platforms); 
}

var arrowCharge = 0;

function update () {	
	this.counter++;

	this.player.currHPScale = this.player.currHP/this.player.maximumHP;
	this.player.currManaScale = this.player.currMana/this.player.maximumMana;
	this.player.currStaminaScale = this.player.currStamina/this.player.maximumStamina; 

	this.uiBackground.setPosition(this.player.x-350,this.player.y-275);
	this.uiFace.setPosition(this.player.x-460,this.player.y-275);
	this.healthBar.setPosition(this.player.x-415 +(this.player.currHPScale * 100),this.player.y-300).setScale(this.player.currHPScale, 1);
	this.staminaBar.setPosition(this.player.x-415+(this.player.currStaminaScale * 100),this.player.y-275).setScale(this.player.currStaminaScale, 1);
	this.manaBar.setPosition(this.player.x-415 +(this.player.currManaScale * 100),this.player.y-250).setScale(this.player.currManaScale, 1);

	if(this.player.currStamina < this.player.maximumStamina)
	{
		this.player.currStamina += 0.3; 
	}

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
		this.player.currStamina -= 10; 

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
	this.enemy.anims.play('enemyLeft', true); 
}