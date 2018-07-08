

var createPlayer = function(obj, platforms){
	obj.player = obj.physics.add.sprite(100, 450, 'runningDude').setScale(0.1);
	obj.physics.add.collider(obj.player, platforms);
	obj.player.setCollideWorldBounds(true);
	obj.player.canShoot = true;

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
		frames: obj.anims.generateFrameNumbers('runningDude', { start: 9, end: 17 } ),
		frameRate:10,
		repeat: -1
	});

	

};