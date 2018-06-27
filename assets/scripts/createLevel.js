function createLevel1(){

    platforms.create(350,768, 'ground').setScale(1).refreshBody();
    platforms.create(700,768, 'ground').setScale(1).refreshBody();
    platforms.create(600,400, 'platform');
    platforms.create(50,250, 'platform');
    platforms.create(750,220, 'platform');
}