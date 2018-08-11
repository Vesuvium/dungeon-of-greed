class Player {
    constructor(game) {
        this.physics = game.physics;
        this.load = game.load;
    }

    preload(sprite, options) {
        this.sprite = sprite;
        this.load.spritesheet('player', sprite, options);
    }

    create(x, y) {
        this.physics.add.sprite(x, y, 'player');
    }
}


export default Player;
