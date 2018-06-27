function createLevel1(object){

    object.create(350,768, 'ground').setScale(1).refreshBody();
    object.create(700,768, 'ground').setScale(1).refreshBody();
    object.create(600,400, 'platform');
    object.create(50,250, 'platform');
    object.create(750,220, 'platform');
}