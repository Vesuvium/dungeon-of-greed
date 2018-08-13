import Item from '../nightrun/Item.js';


class Monster extends Item {
    constructor(phaser, name, monsterOptions) {
        monsterOptions.physics = true;
        super(phaser, name, monsterOptions);
    }

}

export default Monster;
