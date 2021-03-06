

var createPlayer = function(obj, platforms){
	obj.player = obj.physics.add.sprite(50, 450, 'runningDude2');
	obj.physics.add.collider(obj.player, platforms);
	obj.player.setCollideWorldBounds(true);
	obj.player.canShoot = true;

	obj.player.currHP = 100; 
	obj.player.maximumHP = 100; 
	obj.player.currHPScale = 1;

	obj.player.currMana = 100; 
	obj.player.maximumMana = 100; 
	obj.player.currManaScale = 1;

	obj.player.currStamina = 100; 
	obj.player.maximumStamina = 100; 
	obj.player.currStaminaScale = 1;

	obj.player.direction = 1;

	obj.anims.create ({
		key: 'left',
		frames: obj.anims.generateFrameNumbers('runningDude', { start: 0, end: 7}),
		frameRate: 10,
		repeat: -1
	});
	
	obj.anims.create({
		key: 'turn',
		frames: [ {key: 'runningDude', frame: 8 } ],
		frameRate:20,
	});

	obj.anims.create({
		key: 'right',
		frames: obj.anims.generateFrameNumbers('runningDude', { start: 9, end: 16 } ),
		frameRate:10,
		repeat: -1
	});

	obj.anims.create({
		key: 'jumpLeft',
		frames: obj.anims.generateFrameNumbers('runningDude', { start: 17, end: 23 } ),
		frameRate:5,
		repeat: 1
	});

	obj.anims.create({
		key: 'jumpRight',
		frames: obj.anims.generateFrameNumbers('runningDude', { start: 24, end: 30 } ),
		frameRate:5,
		repeat: 1
	});

};

var createEnemy = function(obj, platforms){
	obj.enemy = obj.physics.add.sprite(50, 450, 'enemySkull');
	obj.physics.add.collider(obj.enemy, platforms);
	obj.enemy.setCollideWorldBounds(true);
	obj.enemy.canShoot = true;

	obj.enemy.currHP = 100; 
	obj.enemy.maximumHP = 100; 

	obj.enemy.currMana = 100; 
	obj.enemy.maximumMana = 100; 

	obj.enemy.currStamina = 100; 
	obj.enemy.maximumStamina = 100; 

	obj.enemy.direction = 1;

	obj.anims.create ({
		key: 'enemyLeft',
		frames: obj.anims.generateFrameNumbers('enemySkull', { start: 0, end: 1}),
		frameRate: 10,
		repeat: -1
	});

	obj.anims.create({
		key: 'enemyRight',
		frames: obj.anims.generateFrameNumbers('enemySkull', { start: 2, end: 3 } ),
		frameRate:10,
		repeat: -1
	});
	
};