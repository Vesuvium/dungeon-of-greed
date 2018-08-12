class Player {
    constructor(game) {
        this.physics = game.physics;
        this.load = game.load;
        this.boundaryX = game.sys.canvas.width;
        this.boundaryY = game.sys.canvas.height;
    }

    preload(sprite, options) {
        this.sprite = sprite;
        this.load.spritesheet('player', sprite, options);
    }

    create(x, y) {
        this.player = this.physics.add.sprite(x, y, 'player');
    }

    isInCanvas(x, y) {
        if (x < 0) {
            return false;
        }
        if (x > this.boundaryX) {
            return false;
        }
        if (y < 0) {
            return false;
        }
        if (y > this.boundaryY) {
            return false;
        }
        return true;
    }

    moveX(x) {
        const newX = this.player.x + x;
        if (this.isInCanvas(newX, this.player.y)) {
            this.player.setX(newX);
        }
    }

    moveY(y) {
        const newY = this.player.y + y;
        if (this.isInCanvas(this.player.x, newY)) {
            this.player.setY(newY);
        }
    }
}


export default Player;
