

function checkPlayerMove(obj, cursors){
	if (cursors.left.isDown) {
		obj.player.setVelocityX(-160);
		obj.player.anims.play('left', true);
		obj.player.direction  = -1;
	} else if (cursors.right.isDown) {
		obj.player.setVelocityX(160);
		obj.player.anims.play('right', true);
		obj.player.direction  = 1;
	} else {
		obj.player.setVelocityX(0);
		obj.player.anims.play('turn');
	}

	if (cursors.up.isDown && obj.player.body.touching.down) {
		obj.player.setVelocityY(-200);
	}
};

