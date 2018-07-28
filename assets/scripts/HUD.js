function loadHUD(uiBackground, uiFace, healthBar, staminaBar, manaBar) {
    obj.uiBackground = obj.add.image(0, 475, 'uiBackground');
	obj.uiFace = obj.add.image(0, 475, 'uiFace'); 
	obj.healthBar = obj.add.image(150, 450, 'healthBar'); 
	obj.staminaBar = obj.add.image(150, 475, 'staminaBar'); 
	obj.manaBar = obj.add.image(150, 500, 'manaBar'); 
}

function createHUD(uiBackground, uiFace, healthBar, staminaBar, manaBar) {
    obj.player.currHPScale = obj.player.currHP/obj.player.maximumHP;
	obj.player.currManaScale = obj.player.currMana/obj.player.maximumMana;
	obj.player.currStaminaScale = obj.player.currStamina/obj.player.maximumStamina; 

	obj.uiBackground.setPosition(obj.player.x-350,obj.player.y-275);
	obj.uiFace.setPosition(obj.player.x-460,obj.player.y-275);
	obj.healthBar.setPosition(obj.player.x-415 +(obj.player.currHPScale * 100),obj.player.y-300).setScale(obj.player.currHPScale, 1);
	obj.staminaBar.setPosition(obj.player.x-415+(obj.player.currStaminaScale * 100),obj.player.y-275).setScale(obj.player.currStaminaScale, 1);
	obj.manaBar.setPosition(obj.player.x-415 +(obj.player.currManaScale * 100),obj.player.y-250).setScale(obj.player.currManaScale, 1);
}