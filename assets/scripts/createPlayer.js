

var createPlayer = function(obj, platforms){
	obj.player = obj.physics.add.sprite(100, 450, 'dude');
	obj.physics.add.collider(obj.player, platforms);
	obj.player.setCollideWorldBounds(true);
	obj.player.canShoot = true;

	obj.player.direction = 1;


	obj.anims.create ({
		key: 'left',
		frames: obj.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});
	
	obj.anims.create({
		key: 'turn',
		frames: [ {key: 'dude', frame: 4 } ],
		frameRate:20
	});

	obj.anims.create({
		key: 'right',
		frames: obj.anims.generateFrameNumbers('dude', { start: 5, end: 8 } ),
		frameRate:10,
		repeat: -1
	});

};