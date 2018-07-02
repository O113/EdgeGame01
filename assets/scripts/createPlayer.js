

var createPlayer = function(obj, platforms){
	obj.player = obj.physics.add.sprite(100, 450, 'dude2');
	obj.physics.add.collider(obj.player, platforms);
	obj.player.setCollideWorldBounds(true);
	obj.player.canShoot = true;

	obj.player.direction = 1;

	obj.anims.create ({
		key: 'left',
		frames: obj.anims.generateFrameNumbers('dude2', { start: 0, end: 0}),
		frameRate: 10,
		repeat: -1
	});
	
	obj.anims.create({
		key: 'turn',
		frames: [ {key: 'dude2', frame: 2 } ],
		frameRate:20,
	});

	obj.anims.create({
		key: 'right',
		frames: obj.anims.generateFrameNumbers('dude2', { start: 4, end: 4 } ),
		frameRate:10,
		repeat: -1
	});

	

};