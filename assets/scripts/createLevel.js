function createLevel(level_nr, platforms){
	var levels = [
		{
			platforms: [
				{
					x: 600,
					y: 400
				},
				{
					x: 50,
					y: 250
				},
				{
					x: 750,
					y: 220
				}

			],
			grounds: [
				{
					x: 350,
					y: 700,
					scale: 1
				},
				{
					x: 700,
					y: 700,
					scale: 1
				}
			]
		}
	]


	if(levels[level_nr] != undefined){
		var level = levels[level_nr];
		for(var i = 0; i < level.grounds.length; i++){
			platforms.create(level.grounds[i].x, level.grounds[i].y, 'ground').setScale(level.grounds[i].scale).refreshBody();
		}

		for(var i = 0; i < level.platforms.length; i++){
			platforms.create(level.platforms[i].x, level.platforms[i].y, 'platform');
		}
	}
}