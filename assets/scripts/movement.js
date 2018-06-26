var cursors;  

function createPlayer(){
cursors = this.input.keyboard.createCursorKeys();

this.anims.create ({
        key: 'left',
        frames: this.anims.generateFrameNumbers('blocksprite', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
        });
    this.anims.create({
        key: 'turn',
        frames: [ {key: 'blocksprite', frame: 4 } ],
        frameRate:20
        });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('blocksprite', { start: 5, end: 8 } ),
        frameRate:10,
        repeat: -1
        });
    };

    this.physics.add.collider(player,platforms);


    function checkPlayerMove(){
if (cursors.left.isDown) {
    player.setVelocityX(-160);

}
else if (cursors.right.isDown) {
    player.setVelocityX(160);

}
else {
    player.setVelocityX(0);

}
if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
}
    };