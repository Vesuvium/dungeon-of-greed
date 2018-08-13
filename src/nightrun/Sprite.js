import Item from './Item.js';


class Sprite extends Item {
    constructor(phaser, name, spriteOptions, options) {
        super(phaser, name, options);
        this.spriteOptions = spriteOptions;
    }

    preload() {
        const asset = `assets/${this.name}.png`;
        this.phaser.load.spritesheet(this.name, asset, this.spriteOptions);
    }

    create() {
        const context = this.creationContext();
        const x = this.spawn.x;
        const y = this.spawn.y;
        this.sprite = context.add.sprite(x, y, this.name);
    }
}

export default Sprite;
