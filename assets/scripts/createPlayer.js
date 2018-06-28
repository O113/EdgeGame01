

function createPlayer(object){
	object.physics.add.collider(player,platforms);

	object.anims.create ({
		key: 'left',
		frames: object.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});
	
	object.anims.create({
		key: 'turn',
		frames: [ {key: 'dude', frame: 4 } ],
		frameRate:20
	});

	object.anims.create({
		key: 'right',
		frames: object.anims.generateFrameNumbers('dude', { start: 5, end: 8 } ),
		frameRate:10,
		repeat: -1
	});

};