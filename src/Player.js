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
        this.player = this.physics.add.sprite(x, y, 'player');
    }

    moveX(x) {
        this.player.setX(this.player.x + x);

    }

    moveY(y) {
        this.player.setY(this.player.y + y);
    }
}


export default Player;
