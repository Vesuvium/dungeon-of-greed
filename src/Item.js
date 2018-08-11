class Item {
    constructor(game, name) {
        this.physics = game.physics;
        this.load = game.load;
        this.add = game.add;
        this.name = name;
    }

    preload() {
        this.load.image(this.name, `assets/${this.name}.png`);
    }

    create(x, y) {
        this.add.image(x, y, this.name);
    }
}


export default Item;
