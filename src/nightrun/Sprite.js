class Sprite {
    constructor(phaser, name, spriteOptions, options) {
        this.phaser = phaser;
        this.name = name;
        this.spriteOptions = spriteOptions;
        this.options = options;
    }

    setSpawn(x, y) {
        /* Sets the spawn point of the sprite */
        this.spawn = {x: x, y: y};
    }

    preload() {
        const asset = `assets/${this.name}.png`;
        this.phaser.load.spritesheet(this.name, asset, this.spriteOptions);
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
        this.sprite = context.add.sprite(x, y, this.name);
    }
}

export default Sprite;
