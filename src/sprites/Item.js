class Item {
    /* Represents a generic item */
    constructor(phaser, name, options) {
        this.phaser = phaser;
        this.name = name;
        this.options = options;
    }

    setSpawn(x, y) {
        /* Sets the spawn point of the item */
        this.spawn = {x: x, y: y};
    }

    preload() {
        this.phaser.load.image(this.name, `assets/${this.name}.png`);
    }

    create() {
        let context = this.phaser;
        if (this.options) {
            if (this.options.physics) {
                context = this.phaser.physics;
            }
        }
        const x = this.spawn.x;
        const y = this.spawn.y;
        this.item = context.add.image(x, y, this.name);
    }
}


export default Item;
