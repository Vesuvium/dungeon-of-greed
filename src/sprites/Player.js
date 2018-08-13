import Sprites from './Sprites.js';


class Player extends Sprites {
    constructor(phaser, spriteOptions) {
        super(phaser, 'player', spriteOptions, {physics: true});
        this.boundaryX = this.phaser.sys.canvas.width;
        this.boundaryY = this.phaser.sys.canvas.height;
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
        const newX = this.sprite.x + x;
        if (this.isInCanvas(newX, this.sprite.y)) {
            this.sprite.setX(newX);
        }
    }

    moveY(y) {
        const newY = this.sprite.y + y;
        if (this.isInCanvas(this.sprite.x, newY)) {
            this.sprite.setY(newY);
        }
    }

    update() {
        const keyboard = this.phaser.keyboard;
        if (keyboard.left.isDown) {
            this.moveX(-10);
        }
        else if (keyboard.right.isDown) {
            this.moveX(10);
        }
        else if (keyboard.down.isDown) {
            this.moveY(10);
        }
        else if (keyboard.up.isDown) {
            this.moveY(-10);
        }
    }
}


export default Player;
