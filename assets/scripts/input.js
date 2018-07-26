

function checkPlayerMove(obj, cursors){
	if (obj.player.body.touching.down){
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
	}
	if (!obj.player.body.touching.down){
		if (cursors.left.isDown) {
			obj.player.setVelocityX(-160);
			obj.player.anims.play('jumpLeft', true);
			obj.player.direction  = -1;
		} else if (cursors.right.isDown) {
			obj.player.setVelocityX(160);
			obj.player.anims.play('jumpRight', true);
			obj.player.direction  = 1;
		} else {
			obj.player.setVelocityX(0);
			obj.player.anims.play('turn');
		}
	}

	if (cursors.up.isDown && obj.player.body.touching.down) {
		obj.player.setVelocityY(-200);

		if(cursors.right.isDown){
			obj.player.anims.play('jumpRight');
		}

		if(cursors.left.isDown){
			obj.player.anims.play('jumpLeft');
		}
	}
};

